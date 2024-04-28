import type { DefaultTheme } from 'vitepress'

export function generateNav(docModules: DefaultTheme.NavItemWithLink[], sidebarItems: DefaultTheme.Sidebar): DefaultTheme.NavItem[] {
  return docModules.map((doc) => {
    const key = `/${doc.link}/`
    const items = sidebarItems[key]?.items || []
    return {
      text: doc.text,
      activeMatch: key,
      items: items.map(item => ({
        ...item,
        link: `${key}${item.link}`,
      })),
    }
  })
}
