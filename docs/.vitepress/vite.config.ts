import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import VitePluginVitePressAutoNavSidebar from 'vite-plugin-vitepress-auto-nav-sidebar'

export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    VitePluginVitePressAutoNavSidebar({
      ignoreIndexItems: true,
      excludeFolders: ['public', 'snippets'],
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      sortMenusBy: 'frontmatterOrder',
      sortMenusOrder: 'asc',
      collapsed: true,
    }),
    UnoCSS(
      fileURLToPath(new URL('./uno.config.ts', import.meta.url)),
    ),
  ],
})
