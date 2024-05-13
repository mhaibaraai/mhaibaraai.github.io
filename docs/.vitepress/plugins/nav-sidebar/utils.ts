import fse from 'fs-extra'
import { ExtendedSidebarItem } from './type'

/**
 * 判断文件是否需要忽略。
 * 
 * @param filename - 文件名。
 * @param ignoreFiles - 忽略文件数组，可能包含正则表达式。
 * @returns 是否需要忽略该文件。
 */
export function isIgnore(filename: string, ignoreFiles: (string | RegExp)[]): boolean {
  return ignoreFiles.some(ignore => (ignore instanceof RegExp) ? ignore.test(filename) : ignore === filename);
}

// 从文件内容中提取frontmatter中的字段
export function extractFrontmatterField(content: string, field: string): string {
  const match = content.match(/^---\s*\n([\s\S]+?)\n---/)
  if (!match) {
    return ''
  }
  const frontmatter = match[1]
  const fieldMatch = frontmatter.match(new RegExp(`^${field}:\s*(.+)$`, 'm'))
  return fieldMatch ? fieldMatch[1].trim() : ''
}

// 从文件内容中提取frontmatter中的order字段。
export function extractOrderFromFrontmatter(content: string, defaultValue: number): number {
  const order = extractFrontmatterField(content, 'order')
  return order ? parseInt(order) : defaultValue
}

// 从文件内容中提取frontmatter中的date字段。
export function extractDateFromFrontmatter(content: string): string {
  return extractFrontmatterField(content, 'date') || new Date().toISOString()
}

// 从forntmatter中提取标题。
export function extractTitleFromFrontmatter(content: string): string {
  return extractFrontmatterField(content, 'title')
}

// 读取文件内容
export function readFile(filePath: string): string {
  // 如果文件不存在或者文件不是md文件，则返回空字符串
  if (!fse.existsSync(filePath) || !filePath.endsWith('.md')) {
    return ''
  }
  try {
    return fse.readFileSync(filePath, 'utf-8')
  } catch (e) {
    console.error(e)
    return ''
  }
}

// 从文件内容标题中提取标题，标题格式为 `# 标题`或者 `# 标题 {#id}`。
export function extractTitleFromFileHeading(content: string): string {
  const match = content.match(/^#\s+(.+?)(?:\s+\{#.+?\})?$/m)
  return match ? match[1] : ''
}

export function sortMenusByKey(menus: ExtendedSidebarItem[], key: string, sortMenusOrder: 'asc' | 'desc'): ExtendedSidebarItem[] {
  for (const menu of menus) {
    if (menu.items) {
      menu.items = sortMenusByKey(menu.items, key, sortMenusOrder)
    }
  }
  return menus.sort((a, b) => {
    if (sortMenusOrder === 'asc') {
      if (a[key] < b[key]) return -1
      if (a[key] > b[key]) return 1
      return 0
    }
    if (a[key] > b[key]) return -1
    if (a[key] < b[key]) return 1
    return 0
  })
}

export function sortMenusByDate(menus: ExtendedSidebarItem[], key: string, sortMenusOrder: 'asc' | 'desc'): ExtendedSidebarItem[] {
  for (const menu of menus) {
    if (menu.items) {
      menu.items = sortMenusByDate(menu.items, key, sortMenusOrder)
    }
  }
  return sortMenusOrder === 'asc' ? menus.sort((a, b) => new Date(a[key]).getTime() - new Date(b[key]).getTime()) : menus.sort((a, b) => new Date(b[key]).getTime() - new Date(a[key]).getTime())
}
