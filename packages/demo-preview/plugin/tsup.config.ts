import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: ['./src/index.ts'],
  external: [
    'typescript',
    '@types/markdown-it',
    '@types/markdown-it-container',
  ],
  format: ['esm'],
  clean: true,
  dts: true,
  shims: true,
})
