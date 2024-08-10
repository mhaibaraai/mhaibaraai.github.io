import type MarkdownIt from 'markdown-it'
import Renderer from 'markdown-it/lib/renderer.mjs'
import type Token from 'markdown-it/lib/token.mjs'
import { isCheckPreviewCom1, isCheckPreviewCom2 } from './utils'
import { transformPreview } from './componentPreview'
import { containerDirectiveMount, parseContainer, parseContainerTag } from './containerPreview'

export function componentPreview(md: MarkdownIt) {
  const defaultHtmlInlineRender = md.renderer.rules.html_inline!
}

export function containerPreview(md: MarkdownIt) {
  containerDirectiveMount(md)
  parseContainerTag(md)
  parseContainer(md)
}
