import { demoPreviewPlugin } from '@movk-repo/demo-preview-plugin'
import type MarkdownIt from 'markdown-it'

export function mdPlugin(md: MarkdownIt) {
  md.use(demoPreviewPlugin)
}
