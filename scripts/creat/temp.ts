
const LIB_PRE = 'VK'

export const createIndexStr = (capName: string) => {

  const libName = `${LIB_PRE}${capName}`

  return `import { type App } from 'vue'
import ${libName} from './index.vue'
  
${libName}.install = (app: App): void => {
  app.component('${libName}', ${libName})
}
export {
  ${libName},
}
`
}

export const createVueStr = (kebabName: string) => `<script lang="ts" setup>
</script>

<template>
  <div>
    ${kebabName}
  </div>
</template>

<style></style>
`
