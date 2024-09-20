import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token.mjs'
import type { MarkdownEnv } from 'vitepress'
import { join } from 'node:path'
import Renderer from 'markdown-it/lib/renderer.mjs'
import mdContainer from 'markdown-it-container'
import createDemoContainer from './demo'

export interface ContainerParams {
  /**
   * @description: 容器Marker
   * @default: ':'
   */
  marker: string | undefined

  /**
   * @description: 根目录
   * @default: '/examples'
   */
  root: string

  /**
   * @description: 自定义容器名称
   * @default: 'demo'
   * @example: '::: demo title
   */
  name: string
}

export interface ContainerOptions extends ContainerParams {
  RE: RegExp
  filepath: string
  componentName: string
  useCodeGroup: boolean
  useClientOnly: boolean
}

export interface ContainerOpts {
  marker: string | undefined
  validate(params: string): boolean
  render(
    tokens: Token[],
    index: number,
    options: ContainerParams,
    env: MarkdownEnv,
    self: Renderer
  ): string
}

export interface FilesOptions {
  filepath: string
  extension: string
  region: string
  lines: string
  lang: string
  attrs: string
  title: string
  rawSource: string
  rawCode: string
}

const defaultContainerParams: ContainerOptions = {
  marker: ':',
  root: join(process.cwd(), 'examples'),
  name: 'demo',
  RE: /./,
  filepath: '',
  componentName: '',
  useCodeGroup: false,
  useClientOnly: false,
}

function normalizeParams(params: Partial<ContainerParams>): ContainerOptions {
  const options = {
    ...defaultContainerParams,
    ...params,
  } as ContainerOptions
  options.RE = new RegExp(`^${options.name}\\s*(.*)$`)
  return options
}

export function demoPreviewPlugin(md: MarkdownIt, params: Partial<ContainerParams> = {}) {
  const options = normalizeParams(params)
  const { name } = options
  md.use(mdContainer, name, createDemoContainer(md, options))
}
