import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: [
    './src/index.ts',
    './src/utils/index.ts',
    './src/composables/index.ts',
  ],
  external: [
    'vue',
    '@types/tinycolor2',
  ],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  shims: true,
})
