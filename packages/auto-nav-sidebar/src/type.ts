import type { DefaultTheme, SiteConfig } from 'vitepress'

export interface UserConfig {
  vitepress: SiteConfig<DefaultTheme.Config>
}

export interface ExtendedSidebarItem extends DefaultTheme.SidebarItem {
  order?: number
  date?: string
}

export interface ExtendedSidebarMulti {
  [path: string]: ExtendedSidebarItem[] | { items: ExtendedSidebarItem[], base: string, text?: string, order?: number, date?: string }
}

export interface Options {
  documentRootPath: string
  ignoreIndexItems: boolean
  // 排除的文件
  excludeFiles: (string | RegExp)[]
  // 排除的文件夹
  excludeFolders: (string | RegExp)[]
  // 是否折叠
  collapsed: boolean
  // 使用文件标题
  useTitleFromFileHeading: boolean
  // 使用前置标题
  useTitleFromFrontmatter: boolean
  // 使用文件标题排序
  useSortFromTitle: boolean
  // 删除标题中的前缀
  removeTitlePrefix: string | RegExp
  // 排序方式：order字段、创建时间、文件名
  sortMenusBy: 'fileName' | 'frontmatterOrder' | 'frontmatterDate'
  // 排序顺序
  sortMenusOrder: 'asc' | 'desc'
  // 是否打印日志
  debugLog: boolean
}
