import eslintConfig from '@movk-repo/eslint-config'

export default eslintConfig(
  {
    rules: {
      'regexp/no-super-linear-backtracking': 'off',
    },
  },
)
