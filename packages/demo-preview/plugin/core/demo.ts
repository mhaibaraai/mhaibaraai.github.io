import { join } from 'node:path'
import type MarkdownIt from 'markdown-it'
import markdownItContainer from 'markdown-it-container'
import type { MarkdownEnv } from 'vitepress'
import { readFileSync } from 'fs-extra'
import Renderer from 'markdown-it/lib/renderer.mjs'
import type Token from 'markdown-it/lib/token.mjs'
import { findFileWithPossibleExtensions } from './utils'

export interface ContainerOpt {
  /**
   * @description: 根目录
   * @default: './examples'
   */
  root?: string
  /**
   * @description: 自定义容器名称
   * @default: 'preview'
   * @example: '::: preview title'
   */
  name?: string
}

export interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(
    tokens: Token[],
    index: number,
    options: ContainerOpt,
    env: MarkdownEnv,
    self: Renderer
  ): string
}

function createDemoContainer(md: MarkdownIt, { root, name = 'preview' }: ContainerOpt) {
  const RE = new RegExp(`^${name}\\s*(.*)$`)
  md.use(markdownItContainer, name, {
    marker: ':',
    validate: (params: string) => {
      return !!params.trim().match(RE)
    },
    render: (tokens, idx) => {
      const m = tokens[idx].info.trim().match(RE)

      if (tokens[idx].nesting === 1) { // opening tag
        const _root = root || join(process.cwd(), 'examples')

        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        const description = m && m.length > 1 ? m[1] : ''
        const title = description.split(' ')[0]

        if (sourceFileToken.type !== 'inline')
          return

        const result = findFileWithPossibleExtensions({
          rootDir: _root,
          filePath: sourceFile,
        })

        if (!result)
          throw new Error(`Incorrect source file: ${sourceFile}`)

        const fullPath = result.fullPath
        const suffixName = result.fileExtname

        source = readFileSync(fullPath, 'utf-8')

        return `<DemoPreview title="${title}" description="${encodeURIComponent(md.render(description))}" source="${encodeURI(source)}" highlight-source=${encodeURIComponent(
          md.render(`\`\`\` ${suffixName}\n${source}\`\`\``),
        )} source-path="${sourceFile}">
        <template #source><ep-${sourceFile.replaceAll('/', '-')}/></template>`
      }
      else {
        return '</DemoPreview>\n'
      }
    },
  } as ContainerOpts)
}

export default createDemoContainer
