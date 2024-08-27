import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import type { Alias } from 'vite'

const alias: Alias[] = [
  {
    find: '~/',
    replacement: `${resolve(__dirname, './src')}/`,
  },
]

export default defineConfig({
  resolve: {
    alias,
  },
  build: {
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'DemoPreviewContainer',
      fileName: 'demo-preview-container',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue(), dts({
    insertTypesEntry: true,
  })],
})
