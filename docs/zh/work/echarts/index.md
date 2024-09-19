---
title: ECharts
order: 2
---

# ECharts

- 使用 [`echarts`](https://echarts.apache.org/zh/index.html) 与 [`vue-echarts`](https://github.com/ecomfe/vue-echarts)

## 通用组件与数据

这是以下示例需要的通用父组件与数据

::: details 点击查看 `VChart.vue` 通用组件

<<< @/examples/echarts/VChart.vue

:::

::: details 点击查看 `dataset` 数据

<<< @/examples/echarts/dataset.ts

:::

## 最简单的数据集

::: demo

/echarts/simple.vue

/echarts/VChart.vue {vue twoslash}

:::

## 设置随机颜色

使用 [`TinyColor`](https://bgrins.github.io/TinyColor/) 库生成随机颜色

::: demo

/echarts/random-color.vue

:::
