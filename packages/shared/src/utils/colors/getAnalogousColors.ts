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
 * @param params.results 生成的类似色数量 默认 6
 * @param params.slices 色轮切片数 默认 30
 * @param params.colorSchemes 颜色方案 默认提供几组颜色
 * @param params.format 输出格式 'rgb' | 'prgb' | 'hex6' | 'hex3' | 'hex8' | 'name' | 'hsl' | 'hsv' 默认 'hex8'
 * @returns 类似色数组
 */
export function getAnalogousColors(params: GetAnalogousColorsParams = {}): string[] {
  const {
    results = 6, // 生成的类似色数量
    slices = 30, // 色轮被切成多少片
    colorSchemes = defaultColorSchemes, // 可选的颜色方案
    format = 'hex8', // 输出的颜色格式
  } = params

  // 随机从颜色方案中选取一个基准颜色
  const randomColor = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]

  // 生成类似色
  const analogousColors = tinycolor(randomColor).analogous(results, slices)

  // 设置随机透明度并输出所需格式
  return analogousColors.map(color => color.setAlpha(Math.random()).toString(format))
}
