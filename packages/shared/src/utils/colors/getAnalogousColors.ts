import tinycolor from 'tinycolor2'

/**
 * `GetAnalogousColorsOptions` 定义了生成类似色时可用的选项。
 *
 * @property {number} [results] - 要生成的颜色数量。
 * @property {number} [slices] - 色轮的切片数量，用于确定类似色的角度。
 * @property {string[]} colorSchemes - 可选的颜色数组，函数会从中随机选择一个作为生成基准。
 * @property {'rgb' | 'prgb' | 'hex6' | 'hex3' | 'hex8' | 'name' | 'hsl' | 'hsv'} [format] - 输出颜色的格式。
 */
export interface GetAnalogousColorsOptions {
  results?: number
  slices?: number
  colorSchemes: string[]
  format?: 'rgb' | 'prgb' | 'hex6' | 'hex3' | 'hex8' | 'name' | 'hsl' | 'hsv'
}

const defaultGetAnalogousColorsOptions: GetAnalogousColorsOptions = {
  results: 6,
  slices: 30,
  colorSchemes: ['#8E44AD', '#F39C12', '#28B463', '#1F77B4', '#FF6F61'],
  format: 'hex8',
}

function normalizeParams(params: Partial<GetAnalogousColorsOptions>): GetAnalogousColorsOptions {
  const options = { ...defaultGetAnalogousColorsOptions, ...params }
  return options
}

/**
 * 生成类似色的选项
 *
 * 该函数生成一组类似色，使用 `tinycolor` 库来计算并随机调整颜色的透明度。
 *
 * @param {Partial<GetAnalogousColorsOptions>} [params] - 包含生成选项的参数对象。详见 {@link GetAnalogousColorsOptions}。
 * @returns {string[]} 返回生成的颜色数组，每个颜色使用指定的格式。
 */
export function getAnalogousColors(params: Partial<GetAnalogousColorsOptions> = {}): string[] {
  const { results, slices, colorSchemes, format } = normalizeParams(params)
  const randomColor = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  const analogousColors = tinycolor(randomColor).analogous(results, slices)
  return analogousColors.map(color => color.setAlpha(Math.random()).toString(format))
}
