import { URL, fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Dts from 'vite-plugin-dts'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname)}/`,
    },
  },
  plugins: [
    vue(),
    Unocss(
      fileURLToPath(new URL('./uno.config.ts', import.meta.url)),
    ),
    Dts()
  ],
})
