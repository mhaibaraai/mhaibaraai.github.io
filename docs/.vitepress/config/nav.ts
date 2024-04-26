import type { DefaultTheme } from 'vitepress'
import { sidebarItemToNavItemWithLink } from '../utils'
import { sidebarGuide } from './guide'
import { sidebarReference } from './reference'
import { sidebarWork } from './work'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '指南',
    activeMatch: '/guide/',
    items: sidebarItemToNavItemWithLink(sidebarGuide, '/guide'),
  },
  {
    text: '参考',
    activeMatch: '/reference/',
    items: sidebarItemToNavItemWithLink(sidebarReference, '/reference'),
  },
  {
    text: '工作',
    activeMatch: '/work/',
    items: sidebarItemToNavItemWithLink(sidebarWork, '/work'),
  },
]
