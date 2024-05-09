import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@movk/ol-cesium-map': fileURLToPath(new URL('', import.meta.url)),
    },
    dedupe: ['vue'],
  },
  optimizeDeps: {
    exclude: [
      'vitepress',
    ],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
})
