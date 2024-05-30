import eslintConfig from '@movk-repo/eslint-config'

export default eslintConfig(
  {
    rules: {
      'ts/method-signature-style': 'off',
      'unused-imports/no-unused-vars': 'off',
      'regexp/no-super-linear-backtracking': 'off',
    },
  },
)
