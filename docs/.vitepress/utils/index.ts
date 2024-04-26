import type { DefaultTheme } from 'vitepress'
import { map } from 'lodash-es'

/**
 * DefaultTheme.SidebarItem ->NavItemWithLink
 */
export function sidebarItemToNavItemWithLink(sidebarItems: DefaultTheme.SidebarItem[], reference = ''): DefaultTheme.NavItemWithLink[] {
  return map(sidebarItems, (item) => {
    if ('children' in item && Array.isArray(item.children)) {
      return {
        ...item,
        children: sidebarItemToNavItemWithLink(item.children, `${reference}${item.link}/`),
      }
    }
    if (typeof item.link === 'string') {
      return {
        ...item,
        link: `${reference}/${item.link}`,
      }
    }
    throw new Error('Invalid item link')
  })
}
