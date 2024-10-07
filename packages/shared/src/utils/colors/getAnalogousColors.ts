import tinycolor from 'tinycolor2'

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
 * 生成类似色数组。
 *
 * @param {Partial<GetAnalogousColorsOptions>} params - 配置选项。
 * @returns {string[]} 类似色的数组，颜色格式根据选项中的 `format` 决定。
 */
export function getAnalogousColors(params: Partial<GetAnalogousColorsOptions> = {}): string[] {
  const { results, slices, colorSchemes, format } = normalizeParams(params)
  const randomColor = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  const analogousColors = tinycolor(randomColor).analogous(results, slices)
  return analogousColors.map(color => color.setAlpha(Math.random()).toString(format))
}
