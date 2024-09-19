<script lang="ts" setup>
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components'
import { use } from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'
import { PropType } from 'vue'
import VChart from 'vue-echarts'
// 系列类型的定义后缀都为 SeriesOption
import type {
  BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
} from 'echarts/charts'
// 组件类型的定义后缀都为 ComponentOption
import type {
  DatasetComponentOption,
  GridComponentOption,
  LegendComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
} from 'echarts/components'
import type {
  ComposeOption,
} from 'echarts/core'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | DatasetComponentOption
  | PieSeriesOption
  | BarSeriesOption
  | LineSeriesOption
  | GridComponentOption
>
defineProps({
  option: {
    type: Object as PropType<ECOption>,
    required: true,
  },
})

use([
  SVGRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  BarChart,
  LineChart,
  DatasetComponent,
  GridComponent,
])
</script>

<template>
  <VChart
    :option="option" :style="{
      height: '22.5rem',
    }"
  />
</template>
