import antfu from '@antfu/eslint-config'

export default function combine(...configs) {
  return antfu({
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
    ignores: [
      'docs/snippets',
    ],
    rules: {
      'no-console': 'off',
      'node/prefer-global/process': 'off',
      'regexp/no-super-linear-backtracking': 'off',
      'regexp/no-useless-non-capturing-group': 'off',
      'regexp/no-misleading-capturing-group': 'off',
      'ts/no-use-before-define': 'off',
    },
  }, ...configs)
}
