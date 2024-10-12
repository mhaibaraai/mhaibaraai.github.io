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
   * @defaultValue ['#67C23A', '#E6A23C', '#409EFF', '#F56C6C', '#909399']
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
  colorSchemes: ['#67C23A', '#E6A23C', '#409EFF', '#F56C6C', '#909399'],
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

  const allAnalogousColors = colorSchemes.flatMap((colorScheme) => {
    return tinycolor(colorScheme).analogous(results, slices)
  })

  const usedColors = new Set<string>()
  const uniqueColors: string[] = []

  while (uniqueColors.length < results && allAnalogousColors.length > 0) {
    const randomIndex = Math.floor(Math.random() * allAnalogousColors.length)
    const color = allAnalogousColors.splice(randomIndex, 1)[0]
    const colorStr = color.setAlpha(Math.random()).toString(format)

    if (!usedColors.has(colorStr)) {
      usedColors.add(colorStr)
      uniqueColors.push(colorStr)
    }
  }

  return uniqueColors
}
