import antfu from '@antfu/eslint-config'

export default antfu(
  {

    vue: true,
    typescript: true,

    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
  },
  {
    rules: {
      'no-console': 'off',
      'node/prefer-global/process': 'off',
      'ts/no-this-alias': 'off',
      'ts/consistent-type-imports': 'off',
    },
  },
  {
    files: [
      '**/*.[jt]s',
    ],
    rules: {
      'ts/no-this-alias': 'off',
      'unused-imports/no-unused-vars': 'off',
      'ts/method-signature-style': 'off',
    },
  },

)
