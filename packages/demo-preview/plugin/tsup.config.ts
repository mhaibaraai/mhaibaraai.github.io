import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: ['./src/index.ts'],
  external: [
    'typescript',
    '@types/markdown-it',
    '@types/markdown-it-container',
  ],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  shims: true,
})
