<script setup lang="ts">
import { ClientOnly } from '@movk-repo/components'

import { useNamespace } from '@movk-repo/shared'

defineProps({
  file: {
    type: String,
    required: true,
  },
  demo: {
    type: Object,
    required: true,
  },
})

const ns = useNamespace('example')
</script>

<template>
  <div :class="ns.b('showcase')">
    <ClientOnly>
      <component :is="demo" v-if="demo" v-bind="$attrs" />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
</style>
