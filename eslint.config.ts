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

    ignores: [
      'docs/.vitepress/cache',
    ],
  },
  {
    rules: {
      'style/jsx-child-element-spacing': 'off',
      'ts/no-invalid-void-type': 'off',
      'no-restricted-imports': [
        'error',
        {
          paths: ['unocss'],
        },
      ],
    },
  },
  {
    files: [
      '*.d.ts',
    ],
    rules: {
      'unused-imports/no-unused-vars': 'off',
      'eslint-comments/no-unlimited-disable': 'off',
    },
  },
  {
    files: [
      '**/*.md/*.[jt]s',
      'docs/snippets/**/*.[jt]s',
    ],
    rules: {
      'no-restricted-imports': 'off',
      'no-restricted-syntax': 'off',
      'no-labels': 'off',
      'ts/no-unused-vars': 'off',
      'ts/no-var-requires': 'off',
      'ts/no-this-alias': 'off',
      'no-console': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },

)
