import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
import { presetAttributify, presetWind } from 'unocss'

export default defineConfig({

  plugins: [
    unocss({
      presets: [
        presetAttributify(),
        presetWind(),
      ],
    }),
  ],
})
