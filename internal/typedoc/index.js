import { resolve } from 'node:path'
import { docMdRoot } from '@movk-repo/build-utils'

/**
 * @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions}
 */
const options = {
  out: resolve(docMdRoot, './api'),
  plugin: ['typedoc-plugin-markdown', './custom.mjs'],
  exclude: ['**/index.ts'],
  theme: 'custom-markdown-theme',
  readme: 'none',
  disableSources: true,
  propertiesFormat: 'table',
  entryFileName: 'overview',
  excludeExternals: true, // 排除外部模块
  excludePrivate: true, // 排除私有成员
  excludeProtected: true, // 排除受保护的成员
  excludeNotDocumented: true, // 排除没有文档注释的成员
  enumMembersFormat: 'table', // 枚举成员格式
  parametersFormat: 'table', // 参数格式
  typeDeclarationFormat: 'table', // 类型声明格式
  hideBreadcrumbs: true, // 隐藏面包屑
  hidePageHeader: true, // 隐藏页眉
  hideGroupHeadings: true, // 排除按种类分组
  useCodeBlocks: true, // 使用代码块
  expandObjects: true, // 展开对象
  outputFileStrategy: 'modules', // 输出文件策略
}

export default options
