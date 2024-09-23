import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: [
    'src/index.ts',
    'src/utils/index.ts',
    'src/hooks/index.ts',
    'src/constants/index.ts',
    'src/types/index.ts',
  ],
  external: [
    'vue',
  ],
  format: ['esm'],
  clean: true,
  dts: true,
  shims: true,
})
