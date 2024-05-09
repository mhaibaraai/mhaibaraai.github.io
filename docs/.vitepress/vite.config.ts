import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    UnoCSS(
      fileURLToPath(new URL('./uno.config.ts', import.meta.url)),
    ),
  ],
})
