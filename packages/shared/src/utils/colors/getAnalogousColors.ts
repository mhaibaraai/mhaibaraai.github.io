import tinycolor from 'tinycolor2'

const defaultColorSchemes: string[] = ['#8E44AD', '#F39C12', '#28B463', '#1F77B4', '#FF6F61']

interface GetAnalogousColorsParams {
  results?: number
  slices?: number
  colorSchemes?: string[]
  format?: 'rgb' | 'prgb' | 'hex6' | 'hex3' | 'hex8' | 'name' | 'hsl' | 'hsv'
}

/**
 * getAnalogousColors
 * 生成随机的类似色
 * @param params 参数对象
 * @param params.results 生成的数量 默认 6
 * @param params.slices 生成的数量 默认 30
 * @param params.colorSchemes 颜色方案
 * @param params.format 输出格式 'rgb' | 'prgb' | 'hex6' | 'hex3' | 'hex8' | 'name' | 'hsl' | 'hsv'
 */

export function getAnalogousColors(params?: GetAnalogousColorsParams): string[] {
  const {
    results = 6,
    slices = 30,
    colorSchemes = defaultColorSchemes,
    format = 'hex8',
  } = params || {}

  const randomColor = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]

  const analogousColors = tinycolor(randomColor).analogous(results, slices)

  return analogousColors.map(color => color.setAlpha(Math.random()).toString(format))
}
