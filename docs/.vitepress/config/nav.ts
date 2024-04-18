import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/getting-started', activeMatch: '/guide/' },
  { text: '参考', link: '/reference/javascript', activeMatch: '/reference/' },
  {
    text: '工作', activeMatch: '/work/', items: [
      { text: '浙政钉', link: '/work/dingtalk' },
    ]
  },
]
