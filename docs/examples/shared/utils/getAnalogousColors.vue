<script lang="ts" setup>
import { getAnalogousColors, type GetAnalogousColorsOptions } from '@movk-repo/shared/utils'

const colors = ref<string[]>([])
const options = {
  results: 12,
  format: 'hex6',
} as GetAnalogousColorsOptions

// 刷新
function refresh() {
  colors.value = getAnalogousColors(options)
}

onMounted(() => {
  refresh()
})
</script>

<template>
  <ElButton type="primary" @click="refresh()">
    点击刷新
  </ElButton>
  <div flex="~ wrap" mt-1rem>
    <div
      v-for="color in colors" :key="color" :style="{
        width: '16.6667%',
        backgroundColor: color,
      }"
    >
      <code>{{ color }}</code>
    </div>
  </div>
</template>
