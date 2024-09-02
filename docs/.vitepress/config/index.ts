import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import vite from '../vite.config'
import { mdPlugin } from './plugin'
import { algoliaSearch } from './algolia'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  lang: 'zh-Hans',
  title: 'Movk',
  description: '一个基于VitePress构建的个人网站，专注于分享编程经验、解决问题和展示有趣的技术示例。',

  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,

  vite,

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[!!code/g, '[!code')
        },
      },
      transformerTwoslash(),
    ],

    config: md => mdPlugin(md),
  },

  themeConfig: {

    logo: { src: '/logo.png', width: 24, height: 24 },

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
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-0Q89WLMD81' },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0Q89WLMD81');`,
    ],
  ],

  sitemap: {
    hostname: 'https://mhaibaraai.github.io',
  },

})
