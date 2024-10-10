# getAnalogousColors

该函数生成一组类似色，使用 [`tinycolor`](https://github.com/bgrins/TinyColor) 库来计算并随机调整颜色的透明度。

> **getAnalogousColors**(`params`: `Partial`\<`GetAnalogousColorsOptions`\>): `string`[]

## 参数 {#parameters}

| 参数名         | 类型                                                                        | 描述                   | 默认值                                                    |
| -------------- | --------------------------------------------------------------------------- | ---------------------- | --------------------------------------------------------- |
| `results`      | `number`                                                                    | 返回的类似色数量       | `6`                                                       |
| `slices`       | `number`                                                                    | 用于划分颜色轮的分片数 | `30`                                                      |
| `colorSchemes` | `string[]`                                                                  | 颜色方案数组           | `['#8E44AD', '#F39C12', '#28B463', '#1F77B4', '#FF6F61']` |
| `format`       | `'rgb' \| 'prgb' \| 'hex6' \| 'hex3' \| 'hex8' \| 'name' \| 'hsl' \| 'hsv'` | 输出格式               | `'hex8'`                                                  |

## 示例 {#examples}

::: demo

/shared/utils/getAnalogousColors.vue

:::
