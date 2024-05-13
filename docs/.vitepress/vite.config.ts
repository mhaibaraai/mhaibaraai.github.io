import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { VitePluginVitePressAutoNavSidebar } from './plugins/nav-sidebar'

export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    VitePluginVitePressAutoNavSidebar({
      excludeFolders: ['public', 'snippets'],
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      sortMenusBy: 'frontmatterOrder',
      sortMenusOrder: 'asc',
    }),
    UnoCSS(
      fileURLToPath(new URL('./uno.config.ts', import.meta.url)),
    ),
  ],
})
