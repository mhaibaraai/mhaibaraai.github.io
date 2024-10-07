// @ts-check

import { MarkdownTheme, MarkdownThemeContext } from 'typedoc-plugin-markdown'

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.defineTheme('custom-markdown-theme', MyMarkdownTheme)
}

class MyMarkdownTheme extends MarkdownTheme {
  /**
   * @param {import('typedoc-plugin-markdown').MarkdownPageEvent} page
   */
  getRenderContext(page) {
    return new MyMarkdownThemeContext(this, page, this.application.options)
  }
}

class MyMarkdownThemeContext extends MarkdownThemeContext {
  partials = {
    ...this.partials,
    // parametersTable: this.customParametersTable(this.partials),
  }

  helpers = {
    ...this.helpers,
  }

  /**
   * @param {import('typedoc').ParameterReflection[]} model
   */
  customParametersTable(model) {
    // let md = '| 属性名 | 类型 | 描述 | 默认值 |\n'
    // md += '| ------ | ---- | ---- | ------ |\n'

    // if (model.signatures && model.signatures.length > 0) {
    //   model.signatures.forEach((signature) => {
    //     signature.parameters.forEach((param) => {
    //       const name = param.name || '-'
    //       const type = param.type?.toString() || '-'
    //       const description = param.comment?.shortText || '-'
    //       const defaultValue = param.defaultValue || '-'

    //       md += `| ${name} | ${type} | ${description} | ${defaultValue} |\n`
    //     })
    //   })
    // }
    // else {
    //   md += '| 无参数 | 无 | 无 | 无 |\n'
    // }

    // return md
  }
}
