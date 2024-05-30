import antfu from '@antfu/eslint-config'

export default function combine(...configs) {
  return antfu({

    formatters: true,
    vue: true,
    typescript: true,

  }, ...configs, {
    rules: {
      'no-console': 'off',
      'node/prefer-global/process': 'off',
      'ts/no-this-alias': 'off',
      'ts/consistent-type-imports': 'off',
    },
  })
}
