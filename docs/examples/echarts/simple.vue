<script lang="ts" setup>
import { source } from './dataset'
import VChart, { type ECOption } from './VChart.vue'

const option = ref({
  legend: {},
  tooltip: {
    trigger: 'axis',
    showContent: false,
  },
  dataset: { source },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [
    {
      type: 'bar',
      emphasis: { focus: 'series' },
    },
    {
      type: 'bar',
      emphasis: { focus: 'series' },
    },
    {
      type: 'bar',
      emphasis: { focus: 'series' },
    },
    {
      type: 'bar',
      emphasis: { focus: 'series' },
    },
    {
      type: 'bar',
      emphasis: { focus: 'series' },
    },
  ],
} as ECOption)
</script>

<template>
  <VChart :option="option" />
</template>
