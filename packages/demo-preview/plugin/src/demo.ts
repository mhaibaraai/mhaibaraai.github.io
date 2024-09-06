import type MarkdownIt from 'markdown-it'
import { transformScriptSetup } from './transform'
import { parseComponentPath, rawPathToToken } from './utils'
import type { ContainerOptions, ContainerOpts, FilesOptions } from '.'

function createDemoContainer(md: MarkdownIt, options: ContainerOptions): ContainerOpts {
  const { RE, root, marker, name } = options
  return {
    marker,
    validate: (params: string) => {
      return !!params.trim().match(RE)
    },
    render: (tokens, idx, _, env) => {
      const m = tokens[idx].info.trim().match(RE)

      if (tokens[idx].nesting === 1) { // opening tag
        const description = m?.[1] || ''
        const files: FilesOptions[] = []

        for (
          let i = idx + 1;
          !(
            tokens[i].nesting === -1
            && tokens[i].type === `container_${name}_close`
          );
          ++i
        ) {
          if (tokens[i].type === 'inline') {
            const rawPath = tokens[i].content.trim()
            files.push(rawPathToToken(rawPath, root))
          }
        }
        if (files.length === 0)
          throw new Error('No source file specified')

        const { filepath, rawSource, rawCode } = files[0]

        let code = rawCode

        // code-group
        if (tokens[idx].attrGet('code-group') === '') {
          const groupCode = files.map(file => file.rawCode).join('\n')
          code = `::: code-group\n${groupCode}\n:::`
        }

        // transform script setup
        const transformedOption = {
          ...options,
          componentName: parseComponentPath(filepath),
          filepath,
          useClientOnly: tokens[idx].attrGet('ClientOnly') === '',
        } as ContainerOptions

        // inject transformedOption to env
        transformScriptSetup(env, transformedOption)

        const source = transformedOption.useClientOnly
          ? `<ClientOnly>\n<${transformedOption.componentName}/>\n</ClientOnly>`
          : `<${transformedOption.componentName}/>`

        return `<div>${md.render(description)}</div>\n<DemoPreview raw-source="${encodeURIComponent(rawSource)}">
        <template #source>${source}</template>
        <template #code>${md.render(code)}</template>`
      }
      else {
        return '</DemoPreview>\n'
      }
    },
  }
}

export default createDemoContainer
