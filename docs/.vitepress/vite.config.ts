import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import VitePressPluginAutoNavSidebar from 'vitepress-plugin-auto-nav-sidebar'

export default defineConfig({
  plugins: [
    VitePressPluginAutoNavSidebar({
      ignoreIndexItems: true,
      excludeFiles: [/.*demo.*/],
      excludeFolders: [/.*demo.*/, 'public', 'snippets', '.turbo'],
      removeTitlePrefix: /^\d+-/,
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useSortFromTitle: true,
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
