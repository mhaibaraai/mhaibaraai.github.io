import tinycolor from 'tinycolor2'

export interface GetAnalogousColorsOptions {
  /**
   * 生成类似色的数量。默认值为 6。
   */
  results: number
  /**
   * 切片的数量，用于确定颜色分布。
   */
  slices: number
  /**
   * 一组可供选择的颜色方案。
   */
  colorSchemes: string[]
  /**
   * 返回的颜色格式，支持多种格式，默认值为 'hex6'。
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
 */
export function getAnalogousColors(params: Partial<GetAnalogousColorsOptions> = {}): string[] {
  const { results, slices, colorSchemes, format } = normalizeParams(params)
  const randomColor = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  const analogousColors = tinycolor(randomColor).analogous(results, slices)
  return analogousColors.map(color => color.setAlpha(Math.random()).toString(format))
}
