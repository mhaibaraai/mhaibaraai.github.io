import { defineConfig } from 'vite'
import VitePressPluginAutoNavSidebar from '@movk-repo/vitepress-plugin-auto-nav-sidebar'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  ssr: {
    // noExternal: ['element-plus'],
  },
  plugins: [
    VueJsx(),
    UnoCSS(),
    VitePressPluginAutoNavSidebar({
      documentRootPath: 'zh',
      sortMenusBy: 'frontmatterOrder',
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
