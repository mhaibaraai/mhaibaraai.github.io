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
  }
}
