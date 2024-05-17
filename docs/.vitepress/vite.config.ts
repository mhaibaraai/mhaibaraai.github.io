import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import VitePressPluginAutoNavSidebar from 'vitepress-plugin-auto-nav-sidebar'

export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    VitePressPluginAutoNavSidebar({
      ignoreIndexItems: true,
      excludeFolders: ['public', 'snippets'],
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
