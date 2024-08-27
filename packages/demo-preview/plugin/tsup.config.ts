import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: ['./core/index.ts'],
  external: [
    'typescript',
  ],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  shims: true,
})
