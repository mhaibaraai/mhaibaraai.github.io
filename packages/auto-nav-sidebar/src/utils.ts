import type { ExtendedSidebarItem } from './type'
import fse from 'fs-extra'
import matter from 'gray-matter'

export function isIgnore(filename: string, ignoreFiles: (string | RegExp)[]): boolean {
  return ignoreFiles.some(ignore => (ignore instanceof RegExp) ? ignore.test(filename) : ignore === filename)
}

// 读取文件内容
export function readFile(filePath: string): string {
  // 如果文件不存在或者文件不是md文件，则返回空字符串
  if (!fse.existsSync(filePath) || !filePath.endsWith('.md'))
    return ''

  try {
    return fse.readFileSync(filePath, 'utf-8')
  }
  catch (e) {
    console.error(e)
    return ''
  }
}

// 从文件内容中提取frontmatter中的字段
export function extractFrontmatterField<T>(content: string, field: string, defaultValue: T): T {
  try {
    const { data } = matter(content)
    if (data?.[field])
      return data[field]

    const match = content.match(/^---\s*\n([\s\S]+?)\n---/)
    if (match) {
      const frontmatter = match[1]
      const fieldMatch = frontmatter.match(new RegExp(`^${field}:\s*(.+)$`, 'm'))
      if (fieldMatch)
        return fieldMatch[1].trim() as T
    }
  }
  catch (e) {
    return defaultValue
  }
  return defaultValue
}

// 从文件名中提取order字段。类似 ['1-a', '10-a', '2-a']
export function extractOrderFromFileName(fileName: string, defaultValue: number): number {
  const match = fileName.match(/^(\d+)-/)
  return match ? Number.parseInt(match[1], 10) : defaultValue
}

// 从文件内容中提取frontmatter中的order字段。
export function extractOrderFromFrontmatter(content: string, defaultValue: number): number {
  const order = extractFrontmatterField<string>(content, 'order', defaultValue.toString())
  return Number.parseInt(order, 10)
}

// 从文件内容中提取frontmatter中的date字段。
export function extractDateFromFrontmatter(content: string): string {
  return extractFrontmatterField<string>(content, 'date', new Date().toISOString())
}

// 从forntmatter中提取标题。
export function extractTitleFromFrontmatter(content: string, defaultTitle: string): string {
  return extractFrontmatterField<string>(content, 'title', defaultTitle)
}

// 从文件内容标题中提取标题，标题格式为 `# 标题`或者 `# 标题 {#id}`。
export function extractTitleFromFileHeading(content: string, defaultTitle: string): string {
  const match = content.match(/^#\s+(.+?)(?:\s+\{#.+?\})?$/m)
  return match ? match[1] : defaultTitle
}

export function sortMenusByKey(menus: any[], key: string, sortMenusOrder: 'asc' | 'desc'): ExtendedSidebarItem[] {
  for (const menu of menus) {
    if (menu.items)
      menu.items = sortMenusByKey(menu.items, key, sortMenusOrder)
  }
  return menus.sort((a, b) => {
    if (sortMenusOrder === 'asc') {
      if (a[key] < b[key])
        return -1
      if (a[key] > b[key])
        return 1
      return 0
    }
    if (a[key] > b[key])
      return -1
    if (a[key] < b[key])
      return 1
    return 0
  })
}

export function sortMenusByDate(menus: any[], key: string, sortMenusOrder: 'asc' | 'desc'): ExtendedSidebarItem[] {
  for (const menu of menus) {
    if (menu.items)
      menu.items = sortMenusByDate(menu.items, key, sortMenusOrder)
  }
  return sortMenusOrder === 'asc' ? menus.sort((a, b) => new Date(a[key]).getTime() - new Date(b[key]).getTime()) : menus.sort((a, b) => new Date(b[key]).getTime() - new Date(a[key]).getTime())
}
