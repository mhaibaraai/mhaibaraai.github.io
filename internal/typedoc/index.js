import { resolve } from 'node:path'
import { docMdRoot } from '@movk-repo/build-utils'

/**
 * @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions}
 */
const options = {
  out: resolve(docMdRoot, './api'),
  plugin: ['typedoc-plugin-markdown', './custom-plugin.mjs'],
  exclude: ['**/index.ts'],
  theme: 'custom-markdown-theme',

  lang: 'zh',
  alwaysCreateEntryPointModule: true,
  excludeNotDocumented: true,
  disableSources: true,
  githubPages: false,
  readme: 'none',

  entryFileName: 'index',
  expandObjects: true,
  expandParameters: true,
  hideBreadcrumbs: true,
  hideGroupHeadings: true,
  hidePageHeader: true,
  interfacePropertiesFormat: 'table',
  parametersFormat: 'table',
  propertiesFormat: 'table',
  modulesFileName: 'index',
  outputFileStrategy: 'modules',
}

export default options
