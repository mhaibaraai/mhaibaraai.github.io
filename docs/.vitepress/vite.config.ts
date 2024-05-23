import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import VitePressPluginAutoNavSidebar from 'vitepress-plugin-auto-nav-sidebar'

export default defineConfig({
  resolve: {
    alias: {
      '~/': fileURLToPath(new URL('../../packages/vue-ol-cesium-map/src/', import.meta.url)),
    },
  },
  plugins: [
    VitePressPluginAutoNavSidebar({
      ignoreIndexItems: true,
      excludeFolders: ['public', 'snippets', 'components', 'demos'],
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      sortMenusBy: 'frontmatterOrder',
      sortMenusOrder: 'asc',
      collapsed: true,
      debugLog: false,
    }),
    UnoCSS(
      fileURLToPath(new URL('./uno.config.ts', import.meta.url)),
    ),
  ],
})
