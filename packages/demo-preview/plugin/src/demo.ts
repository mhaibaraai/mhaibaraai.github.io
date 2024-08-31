import { readFileSync } from 'node:fs'
import type MarkdownIt from 'markdown-it'
import { transformScriptSetup } from './transform'
import type { ContainerOptions, ContainerOpts } from '.'

function createDemoContainer(md: MarkdownIt, options: ContainerOptions): ContainerOpts {
  const { RE, root, marker } = options
  return {
    marker,
    validate: (params: string) => {
      return !!params.trim().match(RE)
    },
    render: (tokens, idx, _, env) => {
      const m = tokens[idx].info.trim().match(RE)

      if (tokens[idx].nesting === 1) { // opening tag
        const sourceFileToken = tokens[idx + 2]
        const description = m?.[1] || ''
        const title = description.split(' ')[0]

        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        const { fileExtname, componentName } = parseComponentPath(sourceFile)

        if (sourceFileToken.type === 'inline') {
          source = readFileSync(`${root}/${sourceFile}`, 'utf-8')
        }
        if (!source)
          throw new Error(`Cannot find source file: ${sourceFile}`)

        // transform script setup
        const transformedOption = {
          ...options,
          componentName,
          fileExtname,
          sourceFile,
          useClientOnly: tokens[idx].attrGet('ClientOnly') === '',
        }
        transformScriptSetup(env, transformedOption)

        const sourceCode = transformedOption.useClientOnly
          ? `<ClientOnly>\n<${componentName}/>\n</ClientOnly>`
          : `<${componentName}/>`

        return `<DemoPreview title="${title}" description="${encodeURIComponent(md.render(description))}" source="${encodeURIComponent(
          md.render(`\`\`\` ${fileExtname.slice(1)}\n${source}\`\`\``),
        )}" raw-source="${encodeURIComponent(
          source,
        )}" path="${sourceFile}">
        <template #source>${sourceCode}</template>`
      }
      else {
        return '</DemoPreview>\n'
      }
    },
  }
}

function parseComponentPath(filePath: string) {
  const fileExtname = filePath.match(/\.[^/.]+$/)?.[0] || ''
  const withoutExtension = filePath.replace(fileExtname, '')
  const componentName = `ep${withoutExtension.replace(/\//g, '-')}-${fileExtname.slice(1)}`
  return { componentName, fileExtname }
}

export default createDemoContainer
