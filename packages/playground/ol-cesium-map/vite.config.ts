import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    Unocss(
      fileURLToPath(new URL('./uno.config.ts', import.meta.url)),
    ),
  ],
})
