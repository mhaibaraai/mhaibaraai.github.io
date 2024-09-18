<script lang="ts" setup>
import { PieChart } from 'echarts/charts'
import {
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components'
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
// import * as echarts from 'echarts/core'
import { use } from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'
import { PropType } from 'vue'
import VChart from 'vue-echarts'
// 系列类型的定义后缀都为 SeriesOption
import type {
  PieSeriesOption,
} from 'echarts/charts'
// 组件类型的定义后缀都为 ComponentOption
import type {
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
  | PieSeriesOption
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
])
</script>

<template>
  <VChart
    :option="option" :style="{
      height: '25rem',
    }"
  />
</template>
