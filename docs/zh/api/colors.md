# colors

## GetAnalogousColorsOptions

`GetAnalogousColorsOptions` 定义了生成类似色时可用的选项。

***

## getAnalogousColors()

> **getAnalogousColors**(`params`?: `Partial`\<[`GetAnalogousColorsOptions`](colors.md#getanalogouscolorsoptions)\>): `string`[]

生成类似色的选项

该函数生成一组类似色，使用 `tinycolor` 库来计算并随机调整颜色的透明度。

### 参数

| 属性名 | 类型 | 描述 | 默认值 |
| ------ | ---- | ---- | ------ |
| 无参数 | 无 | 无 | 无 |

### 返回

`string`[]

返回生成的颜色数组，每个颜色使用指定的格式。
