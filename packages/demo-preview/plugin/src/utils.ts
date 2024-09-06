/* eslint-disable regexp/no-misleading-capturing-group */
import { readFileSync } from 'node:fs'
import { FilesOptions } from '.'

export const rawPathRegexp
  = /^(.+?(?:(?:\.([a-z0-9]+))?))(?:(#[\w-]+))?(?: ?(?:\{(\d+(?:[,-]\d+)*)? ?(\S+)? ?(\S+)?\}))? ?(?:\[(.+)\])?$/

export function rawPathToToken(rawPath: string, root: string): FilesOptions {
  const [
    filepath = '',
    extension = '',
    region = '',
    lines = '',
    lang = '',
    attrs = '',
    rawTitle = '',
  ] = (rawPathRegexp.exec(rawPath) || []).slice(1)

  const title = rawTitle || filepath.split('/').pop() || ''
  const info = `${lang || extension} ${lines ? `{${lines}}` : ''}${title ? `[${title}]` : ''
  }  ${attrs ?? ''}`

  const rawSource = readFileSync(`${root}${filepath}`, 'utf-8')
  const rawCode = `\`\`\` ${info}\n${rawSource}\`\`\``
  if (!rawSource)
    throw new Error(`File not found: ${filepath}`)

  return { filepath, extension, region, lines, lang, attrs, title, rawSource, rawCode }
}

export function parseComponentPath(path: string) {
  return `ep${path.replace(/\//g, '-').replace(/\./g, '-')}`
}
