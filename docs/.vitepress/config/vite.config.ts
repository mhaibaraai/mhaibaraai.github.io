import { defineConfig } from 'vite'
import VitePressPluginAutoNavSidebar from '@movk-repo/vitepress-plugin-auto-nav-sidebar'
import VueJsx from '@vitejs/plugin-vue-jsx'
// import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    VueJsx(),
    // UnoCSS(),
    VitePressPluginAutoNavSidebar({
      documentRootPath: 'zh',
      sortMenusBy: 'frontmatterOrder',
    }),
  ],
})
