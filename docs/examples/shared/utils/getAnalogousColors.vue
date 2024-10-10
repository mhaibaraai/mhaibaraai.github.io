<script lang="ts" setup>
import { getAnalogousColors } from '@movk-repo/shared/utils'

const colors = getAnalogousColors({
  results: 5,
  slices: 8,
  colorSchemes: ['#67C23A', '#E6A23C', '#409EFF', '#F56C6C', '#909399'],
  format: 'hex6',
})
</script>

<template>
  <ul>
    <li v-for="color in colors" :key="color" :style="{ backgroundColor: color }">
      <code>{{ color }}</code>
    </li>
  </ul>
</template>
