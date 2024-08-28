import { join } from 'node:path'
import type { Plugin } from 'vite'
import fse from 'fs-extra'
import type { DefaultTheme } from 'vitepress'
import { debounce } from './debounce'
import type { ExtendedSidebarItem, ExtendedSidebarMulti, Options, UserConfig } from './type'
import { extractDateFromFrontmatter, extractOrderFromFileName, extractOrderFromFrontmatter, extractTitleFromFileHeading, extractTitleFromFrontmatter, isIgnore, readFile, sortMenusByDate, sortMenusByKey } from './utils'

let options: Partial<Options> = {}

const defaultExcludeFiles = ['README.md', '.DS_Store', 'package.json']

// 默认排除的文件夹
const defaultExcludeFolders = ['.vitepress', 'node_modules', 'dist', 'public', '.turbo']

let _excludeFiles = [] as (string | RegExp)[]
let _excludeFolders = [] as (string | RegExp)[]

// 处理排序
function sortMenus(menus: ExtendedSidebarItem[]) {
  const { sortMenusBy, sortMenusOrder = 'asc' } = options

  switch (sortMenusBy) {
    case 'fileName':
      return sortMenusByKey(menus, 'text', sortMenusOrder)
    case 'frontmatterOrder':
      return sortMenusByKey(menus, 'order', sortMenusOrder)
    case 'frontmatterDate':
      return sortMenusByDate(menus, 'date', sortMenusOrder)
    default:
      return menus
  }
}

function handleFrontmatter(fileContent: string, fileName = ''): {
  order: number
  date: string
  text: string
} {
  const { useTitleFromFileHeading = true, useTitleFromFrontmatter = true, removeTitlePrefix, useSortFromTitle = true } = options

  let text = fileName
  if (useTitleFromFileHeading)
    text = extractTitleFromFileHeading(fileContent, text)
  if (useTitleFromFrontmatter)
    text = extractTitleFromFrontmatter(fileContent, text)
  if (removeTitlePrefix)
    text = text.replace(removeTitlePrefix, '')

  let order = 0
  if (useSortFromTitle)
    order = extractOrderFromFileName(fileName, order)

  return {
    order: extractOrderFromFrontmatter(fileContent, order),
    date: extractDateFromFrontmatter(fileContent),
    text,
  }
}

async function createSidebarItems(basePath: string, pPath: string, ...cFolder: string[]) {
  const { ignoreIndexItems = true, collapsed } = options

  // 读取文件夹
  const rawNode = fse.readdirSync(join(pPath, ...cFolder))

  // 如果ignoreIndexItems且只有一个文件并且该文件为index.md，则返回空数组
  if (ignoreIndexItems && rawNode.length === 1 && rawNode[0] === 'index.md')
    return []

  const sidebarItems: ExtendedSidebarItem[] = []

  // 遍历文件，判断是否为文件夹 or 文件，如果是文件夹则递归 createSidebarItems
  for (const node of rawNode) {
    const nodePath = join(pPath, ...cFolder, node)
    const isDir = fse.statSync(nodePath).isDirectory()
    const isFile = fse.statSync(nodePath).isFile()

    if (isDir) {
      // 如果被排除则跳过
      if (isIgnore(node, _excludeFolders))
        continue

      const children = await createSidebarItems(basePath, pPath, ...cFolder, node)

      // 拿到文件夹下的index.md或node.md文件
      const indexFilePath = join(nodePath, 'index.md')

      const fileContent = readFile(indexFilePath)

      const { order, date, text: _text } = handleFrontmatter(fileContent)

      sidebarItems.push({
        text: _text || node,
        order,
        date,
        collapsed,
        link: children?.length ? children[0].link : `/${basePath}/${[...cFolder, node].join('/')}/`,
        items: children,
      })
    }
    else if (isFile) {
      const ext = node.split('.').pop()
      const fileName = node.replace(/\.md$/, '')
      if (ext !== 'md')
        continue

      // 如果被排除则跳过
      if (isIgnore(node, _excludeFiles) || (ignoreIndexItems && fileName === 'index'))
        continue

      const fileContent = readFile(nodePath)
      const { order, date, text } = handleFrontmatter(fileContent, fileName)

      sidebarItems.push({
        text,
        order,
        date,
        link: `/${basePath}/${[...cFolder, fileName].join('/')}`,
      })
    }
  }
  return sidebarItems
}

// 创建sidebar
async function createSidebarNav(scanStartPath: string, basePath: string) {
  const { excludeFolders = [], excludeFiles = [], debugLog = false } = options

  const sidebar: ExtendedSidebarMulti = {}
  const navs: DefaultTheme.NavItem[] = []

  _excludeFolders = [...defaultExcludeFolders, ...excludeFolders]
  _excludeFiles = [...defaultExcludeFiles, ...excludeFiles]

  const nodes = fse.readdirSync(scanStartPath).filter((node) => {
    // 如果是文件夹并且不在排除文件夹中
    const isDir = fse.statSync(join(scanStartPath, node)).isDirectory()
    const isExclude = isIgnore(node, _excludeFolders)
    return isDir && !isExclude
  })

  for (const n of nodes) {
    const items = await createSidebarItems(basePath, scanStartPath, n)
    const indexFilePath = join(scanStartPath, n, 'index.md')
    const fileContent = readFile(indexFilePath)

    const _sortMenus = sortMenus(items)
    const { text, order, date } = handleFrontmatter(fileContent)

    sidebar[`/${basePath}/${n}/`] = {
      base: '',
      text: text || n,
      order,
      date,
      items: _sortMenus,
    }

    if (items.length > 0) {
      navs.push({
        activeMatch: `/${basePath}/${n}/`,
        text: text || n,
        order,
        items: _sortMenus.map((item) => {
          return {
            text: item.text,
            link: item.link,
          }
        }),
      } as DefaultTheme.NavItem)
    }
    else {
      navs.push({
        text: text || n,
        order,
        link: `/${basePath}/${n}/`,
      } as DefaultTheme.NavItem)
    }
  }

  if (debugLog) {
    console.log('sidebar', JSON.stringify(sidebar, null, 2))
    console.log('navs', JSON.stringify(navs, null, 2))
  }

  return { sidebar, navs: sortMenus(navs) as DefaultTheme.NavItem[] }
}

export default function VitePressPluginAutoNavSidebar(
  opt: Partial<Options> = {},
): Plugin {
  return {
    name: 'vitepress-plugin-auto-nav-sidebar',
    configureServer({ watcher, restart }) {
      watcher.on('all', debounce(async (event, path) => {
        if (!path.endsWith('.md'))
          return
        if (event !== 'change') {
          try {
            await restart()
          }
          catch {
            console.error('Failed to restart server')
          }
        }
      }, 1500))
    },
    async config(config) {
      options = opt

      const { documentRootPath = '/' } = opt
      const scanStartPath = join(process.cwd(), documentRootPath)

      const basePath = documentRootPath.startsWith('/') ? documentRootPath.slice(1) : documentRootPath

      const { sidebar, navs } = await createSidebarNav(scanStartPath, basePath)

        ; (config as UserConfig).vitepress.site.themeConfig.sidebar = sidebar
      ; (config as UserConfig).vitepress.site.themeConfig.nav = navs

      return config
    },
  }
}
