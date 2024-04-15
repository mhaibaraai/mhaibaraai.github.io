import antfu from '@antfu/eslint-config'

export default antfu({

  vue: true,
  typescript: true,
  unocss: true,

  formatters: {
    css: true,
    html: true,
    markdown: true,
  },

  ignores: [
    "dist",
    "**/dist/**",
    "node_modules",
    "**/node_modules/**",
    "**.svg",
    "**/**.svg/**",
    "eslint.config.js",
    "**/eslint.config.js/**"
  ],

})
