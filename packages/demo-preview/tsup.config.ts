import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: ['./core/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  shims: true,
})
