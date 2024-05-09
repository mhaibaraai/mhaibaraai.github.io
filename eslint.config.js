import antfu from '@antfu/eslint-config'

export default antfu(
  {

    vue: true,
    typescript: true,
    unocss: true,

    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
  },
  {
    rules: {
      'no-console': 'off',
    },
  },
  {
    ignores: [
      'docs/.vitepress/cache',
    ],
  },
  {
    files: [
      'docs/snippets/**/*.[jt]s',
    ],
    rules: {
      'no-console': 'off',
      'ts/no-this-alias': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
  {
    files: [
      '**/*.md/*.[jt]s',
    ],
    rules: {
      'ts/method-signature-style': 'off',
    },
  },

)
