<script setup lang="ts">
import { useNamespace } from '@movk-repo/shared'
import { computed } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
})

const ns = useNamespace('example')

const decoded = computed(() => {
  return decodeURIComponent(props.source)
})
</script>

<template>
  <div v-show="visible" :class="ns.b('source-wrapper')">
    <div :class="ns.b('source')" v-html="decoded" />
  </div>
</template>

<style scoped lang="scss">
::v-deep([class*='language-']) {
  margin: 0 !important;
  border-radius: 0 !important;
}
</style>
