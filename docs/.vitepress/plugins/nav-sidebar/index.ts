import { DefaultTheme, type Plugin } from 'vitepress'
import { debounce } from 'lodash-es'
import { join } from 'node:path'
import fse from 'fs-extra'
import { extractDateFromFrontmatter, extractOrderFromFrontmatter, extractTitleFromFileHeading, extractTitleFromFrontmatter, isIgnore, readFile, sortMenusByDate, sortMenusByKey } from './utils'
import { Options, ExtendedSidebarItem, UserConfig, ExtendedSidebarMulti } from './type'

let options: Partial<Options> = {}

const defaultExcludeFiles = ['README.md', '.DS_Store', 'package.json']

// 默认排除的文件夹
const defaultExcludeFolders = ['.vitepress', 'node_modules', 'dist', 'components']

// 处理排序
const sortMenus = (menus: ExtendedSidebarItem[]) => {
  const { sortMenusBy, sortMenusOrder = 'desc' } = options

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

function handleFrontmatter(fileContent: string): {
  order: number
  date: string
  text: string
} {
  const { useTitleFromFileHeading, useTitleFromFrontmatter, removeTitlePrefix } = options

  let text = ''
  if (useTitleFromFileHeading) {
    text = extractTitleFromFileHeading(fileContent)
  }
  if (useTitleFromFrontmatter) {
    const frontmatterTitle = extractTitleFromFrontmatter(fileContent)
    if (frontmatterTitle) text = extractTitleFromFrontmatter(fileContent)
  }
  if (removeTitlePrefix) {
    text = text.replace(new RegExp(`^${removeTitlePrefix}`), '')
  }

  return {
    order: extractOrderFromFrontmatter(fileContent, 999),
    date: extractDateFromFrontmatter(fileContent),
    text
  }

}

async function createSidebarItems(pPath: string, ...cFolder: string[]) {

  const { ignoreIndexItems = true, excludeFolders = [], collapsed } = options

  // 读取文件夹
  const rawNode = fse.readdirSync(join(pPath, ...cFolder))

  // 如果ignoreIndexItems且只有一个文件并且该文件为index.md，则返回空数组
  if (ignoreIndexItems && rawNode.length === 1 && rawNode[0] === 'index.md') {
    return []
  }

  const sidebarItems: ExtendedSidebarItem[] = []

  // 遍历文件，判断是否为文件夹 or 文件，如果是文件夹则递归 createSidebarItems
  for (const node of rawNode) {
    const nodePath = join(pPath, ...cFolder, node)
    const isDir = fse.statSync(nodePath).isDirectory()
    const isFile = fse.statSync(nodePath).isFile()

    if (isDir) {
      // 如果被排除则跳过
      if (isIgnore(node, excludeFolders)) {
        continue
      }
      const children = await createSidebarItems(pPath, ...cFolder, node)

      // 拿到文件夹下的index.md或node.md文件
      const indexFilePath = join(nodePath, 'index.md')

      const fileContent = readFile(indexFilePath)

      const { order, date, text: _text } = handleFrontmatter(fileContent)

      sidebarItems.push({
        text: _text || node,
        order,
        date,
        collapsed,
        link: children?.length ? children[0].link : `/${[...cFolder, node].join('/')}/`,
        items: children
      })

    } else if (isFile) {
      const ext = node.split('.').pop()
      const fileName = node.replace(/\.md$/, '')
      if (ext !== 'md') {
        continue
      }
      // 如果被排除则跳过
      if (isIgnore(node, defaultExcludeFiles) || (ignoreIndexItems && fileName === 'index')) {
        continue
      }
      const fileContent = readFile(nodePath)
      const { order, date, text: _text } = handleFrontmatter(fileContent)

      sidebarItems.push({
        text: _text || fileName,
        order,
        date,
        link: `/${[...cFolder, fileName].join('/')}`
      })
    }
  }
  return sidebarItems
}

// 创建sidebar
async function createSidebarNav(scanStartPath: string) {

  const { excludeFolders = [], debug, sortMenusBy } = options

  const sidebar: ExtendedSidebarMulti = {}
  const navs: DefaultTheme.NavItem[] = []

  const _excludeFolders = [...defaultExcludeFolders, ...excludeFolders]

  const nodes = fse.readdirSync(scanStartPath).filter((node) => {
    // 如果是文件夹并且不在排除文件夹中
    const isDir = fse.statSync(join(scanStartPath, node)).isDirectory()
    const isExclude = isIgnore(node, _excludeFolders)
    return isDir && !isExclude
  })

  for (const n of nodes) {

    const items = await createSidebarItems(scanStartPath, n)
    const indexFilePath = join(scanStartPath, n, 'index.md')
    const fileContent = readFile(indexFilePath)

    const _sortMenus = sortMenus(items)
    const { text, order, date } = handleFrontmatter(fileContent)

    sidebar[`/${n}/`] = {
      base: '',
      text: text || n,
      order,
      date,
      items: _sortMenus
    }

    if (items.length > 0) {
      navs.push({
        activeMatch: `/${n}/`,
        text: text || n,
        order,
        items: _sortMenus.map((item) => {
          return {
            text: item.text,
            link: item.link
          }
        })
      } as DefaultTheme.NavItem)
    } else {
      navs.push({
        text: text || n,
        order,
        link: `/${n}/`
      } as DefaultTheme.NavItem)
    }
  }

  if (debug) {
    console.log('sidebar', JSON.stringify(sidebar, null, 2))
    console.log('navs', JSON.stringify(navs, null, 2))
  }

  return { sidebar, navs: sortMenus(navs) as DefaultTheme.NavItem[] }
}

export function VitePluginVitePressAutoNavSidebar(
  opt: Partial<Options> = {}
): Plugin {
  return {
    name: 'vite-plugin-vitepress-auto-nav-sidebar',
    configureServer({ watcher, restart }) {
      watcher.on('all', debounce(async (event, path) => {
        if (!path.endsWith('.md')) return
        if (event !== 'change') {
          try {
            await restart();
          } catch {
            console.error('Failed to restart server')
          }
        }
      }, 1000))
    },
    async config(config) {
      options = opt
      const { documentRootPath = '/' } = opt
      const scanStartPath = join(process.cwd(), documentRootPath)

      const { sidebar, navs } = await createSidebarNav(scanStartPath)

      ; (config as UserConfig).vitepress.site.themeConfig.sidebar = sidebar
      ; (config as UserConfig).vitepress.site.themeConfig.nav = navs

      // 打印插件生成sidebar和nav成功
      console.log('sidebar and nav generated successfully！')

      return config
    },
  }
}

