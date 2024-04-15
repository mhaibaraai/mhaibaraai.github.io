import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
// import VueDevtools from 'vite-plugin-vue-devtools'

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
    ],
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: { src: '/logo.svg', width: 24, height: 24 },

    nav: nav(),

    sidebar: [

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mhaibaraai/' },
    ],
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '首页',
      link: '/',
    },
  ]
}
