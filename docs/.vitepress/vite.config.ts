import path from 'node:path'
import { fileURLToPath } from 'node:url'
import VitePressPluginAutoNavSidebar from '@movk-repo/vitepress-plugin-auto-nav-sidebar'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '/~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    VueJsx(),
    UnoCSS(fileURLToPath(new URL('./uno.config.ts', import.meta.url))),
    VitePressPluginAutoNavSidebar({
      documentRootPath: 'zh',
      sortMenusBy: 'frontmatterOrder',
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: [fileURLToPath(new URL('./components', import.meta.url))],
      resolvers: [ElementPlusResolver()],
      include: [/\.vue($|\?)/, /\.md($|\?)/],
      extensions: ['vue', 'md', 'svg'],
    }),
  ],
})
