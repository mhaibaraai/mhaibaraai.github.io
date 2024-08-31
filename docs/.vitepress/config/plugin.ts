import type MarkdownIt from 'markdown-it'
import { demoPreviewPlugin } from '@movk-repo/demo-preview-plugin'

export function mdPlugin(md: MarkdownIt) {
  md.use(demoPreviewPlugin)
}
