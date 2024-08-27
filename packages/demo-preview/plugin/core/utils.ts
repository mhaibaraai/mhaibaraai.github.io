import { basename, dirname, join } from 'node:path'
import { existsSync } from 'node:fs'

// 定义接口来描述方法参数的类型
interface FindFileOptions {
  rootDir: string
  filePath: string
  extensions?: string[] // 可选参数，默认值将会赋予
}

// 定义接口来描述方法的返回类型
interface FileDetails {
  fullPath: string
  fileExtname: string
}

/**
 * 查找指定目录下的文件，自动匹配可能的扩展名
 * @param {FindFileOptions} options - 查找文件的选项
 * @returns {Promise<FileDetails | null>} - 找到的文件的绝对路径和扩展名，或 null 如果没有找到
 */
export function findFileWithPossibleExtensions({ rootDir, filePath, extensions = ['.vue', '.tsx'] }: FindFileOptions): FileDetails | null {
  const directory = join(rootDir, dirname(filePath))
  const fileName = basename(filePath)

  try {
    for (const ext of extensions) {
      const fullPath = join(directory, `${fileName}${ext}`)
      if (existsSync(fullPath)) {
        return { fullPath, fileExtname: ext.slice(1) }
      }
    }
  }
  catch (error: any) {
    console.error(`An error occurred while trying to find the file: ${error.message}`)
  }

  return null
}
