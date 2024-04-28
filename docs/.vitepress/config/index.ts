import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { algoliaSearch } from './algolia'
import { vitepressGenerateSidebar } from './sidebar'
import { generateNav } from './nav'

const docModules: DefaultTheme.NavItemWithLink[] = [
  { text: '指南', link: 'guide' },
  { text: '参考', link: 'reference' },
  { text: '工作', link: 'work' },
  { text: '示例', link: 'playground' },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({

  lang: 'zh-Hans',
  title: 'Movk',
  description: '一个基于VitePress构建的个人网站，专注于分享编程经验、解决问题和展示有趣的技术示例。',

  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        },
      },
      transformerTwoslash(),
    ],
    config: (md) => {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: { src: '/logo.png', width: 24, height: 24 },

    nav: generateNav(docModules, vitepressGenerateSidebar(docModules)),

    sidebar: vitepressGenerateSidebar(docModules),

    // 社交帐户链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mhaibaraai/' },
    ],

    editLink: {
      pattern: 'https://github.com/mhaibaraai/mhaibaraai.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2023-${new Date().getFullYear()} yixuan`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    search: {
      provider: 'algolia',
      options: {
        appId: '7RNWHZWFWD',
        apiKey: 'f36cf64a8411a3cce4a9098eaa862ead',
        indexName: 'mhaibaraaiio',
        ...algoliaSearch,
      },
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
  ],

  sitemap: {
    hostname: 'https://mhaibaraai.github.io',
  },

})
