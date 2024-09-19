import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: ['./index.ts'],
  external: [],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  shims: true,
})
