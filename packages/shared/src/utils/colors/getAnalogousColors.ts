import tinycolor from 'tinycolor2'

export interface GetAnalogousColorsOptions {
  /**
   * 生成的类似色数量
   * @defaultValue 6
   */
  results: number
  /**
   * 用于划分颜色轮的分片数
   * @defaultValue 30
   */
  slices: number
  /**
   * 颜色方案数组
   * @defaultValue ['#8E44AD', '#F39C12', '#28B463', '#1F77B4', '#FF6F61']
   */
  colorSchemes: string[]
  /**
   * 颜色格式
   * @defaultValue 'hex8'
   */
  format: 'rgb' | 'prgb' | 'hex6' | 'hex3' | 'hex8' | 'name' | 'hsl' | 'hsv'
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
 * 该函数生成一组类似色，使用 `tinycolor` 库来计算并随机调整颜色的透明度。
 *
 * @see https://github.com/bgrins/TinyColor
 * @param {Partial<GetAnalogousColorsOptions>} params - 生成类似色的参数。
 * @returns {string[]} - 返回类似色的字符串数组。
 */
export function getAnalogousColors(params: Partial<GetAnalogousColorsOptions> = {}): string[] {
  const { results, slices, colorSchemes, format } = normalizeParams(params)
  const randomColor = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  const analogousColors = tinycolor(randomColor).analogous(results, slices)
  return analogousColors.map(color => color.setAlpha(Math.random()).toString(format))
}
