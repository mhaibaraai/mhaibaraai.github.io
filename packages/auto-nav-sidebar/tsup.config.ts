import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: [
    'src/index.ts',
  ],
  external: [
    'typescript',
    '@types/fs-extra',
    '@types/node',
  ],
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
  shims: true,
})
