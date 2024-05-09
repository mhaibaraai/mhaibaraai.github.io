import type { generateSidebar } from 'vitepress-sidebar'
import type { DefaultTheme } from 'vitepress'
import { generateSidebar as _generateSidebar } from 'vitepress-sidebar'

type GenerateSidebarOptions = Parameters<typeof generateSidebar>[0]

const defaultOptions: GenerateSidebarOptions = {
  documentRootPath: '/',
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  sortMenusByFrontmatterOrder: true,
  frontmatterOrderDefaultValue: 9,
}

export function generateSidebarOptions(docModules: DefaultTheme.NavItemWithLink[]): GenerateSidebarOptions {
  return docModules.map((module) => {
    return {
      ...defaultOptions,
      scanStartPath: module.link,
      resolvePath: `/${module.link}/`,
    }
  })
}

export function vitepressGenerateSidebar(docModules: DefaultTheme.NavItemWithLink[]): DefaultTheme.Sidebar {
  return _generateSidebar(generateSidebarOptions(docModules))
}
