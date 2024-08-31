import { join } from 'node:path'
import { MarkdownEnv } from 'vitepress'
import { camelize, capitalize } from '@movk-repo/utils'
import { ContainerOptions } from '.'

const scriptLangTsRE = /<\s*script[^>]+\blang=['"]ts['"][^>]*/
const scriptSetupRE = /<\s*script[^>]+\bsetup\b[^>]*/
const scriptSetupCommonRE = /<\s*script\s+(setup|lang='ts'|lang="ts")?\s*(setup|lang='ts'|lang="ts")?\s*>/

export function transformScriptSetup(env: MarkdownEnv, options: ContainerOptions) {
  const { root, useClientOnly, componentName, sourceFile } = options
  const componentPath = join(root, sourceFile)
  const _componentName = capitalize(camelize(componentName))

  const scriptsCode = env.sfcBlocks!.scripts

  const scriptsSetupIndex = scriptsCode.findIndex((script: any) => {
    if (scriptSetupRE.test(script.tagOpen) || scriptLangTsRE.test(script.tagOpen))
      return true
    return false
  })

  const importStatement = useClientOnly
    ? `import { defineClientComponent } from 'vitepress'\nconst ${_componentName} = defineClientComponent(() => import('${componentPath}'))`
    : `import ${_componentName} from '${componentPath}'`

  if (scriptsSetupIndex === -1) {
    const scriptBlock = {
      type: 'script',
      tagOpen: `<script setup lang='ts'>`,
      tagClose: '</script>',
      content: `<script setup lang='ts'>\n${importStatement}\n</script>`,
      contentStripped: importStatement,
    }
    scriptsCode.push(scriptBlock)
  }
  else {
    const oldScriptsSetup = scriptsCode[0]
    if (oldScriptsSetup.content.includes(componentPath) && oldScriptsSetup.content.includes(_componentName)) {
      scriptsCode[0].content = oldScriptsSetup.content
    }
    else {
      const scriptCodeBlock = '<script lang="ts" setup>\n'
      scriptsCode[0].content = scriptsCode[0].content.replace(scriptSetupCommonRE, scriptCodeBlock)
      scriptsCode[0].content = scriptsCode[0].content.replace(
        scriptCodeBlock,
        `<script setup>\n
        ${importStatement}\n`,
      )
    }
  }
}
