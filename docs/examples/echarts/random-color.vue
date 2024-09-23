<script lang="ts" setup>
import { getAnalogousColors } from '@movk-repo/shared/utils'
import { source } from './dataset'
import VChart, { type ECOption } from './VChart.vue'

const option = ref({
  color: getAnalogousColors({
    results: 15,
  }),
  legend: {},
  tooltip: {
    trigger: 'axis',
    showContent: false,
  },
  dataset: { source },
  series: [
    {
      type: 'pie',
      radius: ['25%', '35%'],
      center: ['50%', '60%'],
      emphasis: {
        focus: 'self',
      },
      itemStyle: {
        borderRadius: 2,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        formatter: '{b}: {@直接访问} ({d}%)',
      },
      encode: {
        itemName: '搜索引擎',
        value: '直接访问',
        tooltip: '直接访问',
      },
    },
  ],
} as ECOption)
</script>

<template>
  <VChart :option="option" />
</template>
