import { defineConfig } from 'vite'
import VitePressPluginAutoNavSidebar from '@movk-repo/vitepress-plugin-auto-nav-sidebar'

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    VitePressPluginAutoNavSidebar({
      documentRootPath: 'zh',
      sortMenusBy: 'frontmatterOrder',
    }),
  ],
}) as any
