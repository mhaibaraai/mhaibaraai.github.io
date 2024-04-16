import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import viteConfig from './vite.config'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  lang: 'zh-Hans',
  title: 'Movk',
  description: '一个基于VitePress构建的个人网站，专注于分享编程经验、解决问题和展示有趣的技术示例。',

  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,

  markdown: {
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        },
      },
      transformerTwoslash({
        processHoverInfo: info => info.replace(/_unocss_core\./g, ''),
      }),
    ],
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: { src: '/logo.svg', width: 24, height: 24 },

    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
    },

    //社交帐户链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mhaibaraai/' },
    ],

    editLink: {
      pattern: 'https://github.com/mhaibaraai/mhaibaraai.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2023-${new Date().getFullYear()} yixuan`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'

  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  vite: viteConfig

})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指南',
      link: '/guide/getting-started',
      activeMatch: '/guide/'
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '快速开始',
      link: 'getting-started',
    },
  ]
}
