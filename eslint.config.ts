import antfu from '@antfu/eslint-config'

export default antfu({

  vue: true,
  typescript: true,
  unocss: true,

  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },

  ignores: [
    "dist",
    "**/dist/**",
    "node_modules",
    "**/node_modules/**",
    "public",
    "**/public/**",
    "eslint.config.js",
    "**/eslint.config.js/**"
  ],

})
