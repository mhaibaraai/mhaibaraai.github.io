---
order: 5
title: 组件预览与展示代码
---

<!-- @include: ../../../packages/demo-preview/README.md -->

## 📝 示例 {#example}

### Vue 组件 {#vue}

```markdown
::: demo 这是一个预览 `Vue` 组件简介的示例

/basic/counter.vue

:::
```

::: demo 这是一个预览 `Vue` 组件简介的示例

/basic/counter.vue

:::

### TypeScript 组件 {#typescript}

```markdown
::: demo 这是一个预览 `TypeScript` 组件的示例

/basic/counter.tsx

:::
```

::: demo 这是一个预览 `TypeScript` 组件的示例

/basic/counter.tsx

:::

### 兼容非 SSR 组件 {#non-ssr}

```markdown
::: demo 这是一个`Teleport` 被元素加 `ElTooltip` 组件内部使用的示例

/basic/non-ssr.vue

:::
```

::: demo 这是一个`Teleport` 被元素加 `ElTooltip` 组件内部使用的示例 {ClientOnly}

/basic/non-ssr.vue

:::

::: tip 提示

当打包不支持 SSR 的组件时，需要在容器中添加 `{ClientOnly}` 选项，确保组件在客户端渲染。

本插件使用官方 `ClientOnly` 组件与 `defineClientComponent` 辅助函数。

详情请查看 [VitePress 官方文档](https://vitepress.dev/zh/guide/ssr-compat#defineclientcomponent)。

:::

### 行高亮 {#line-highlighting}

- 配置语法参考 [VitePress 官方文档：在代码块中实现行高亮](https://vitepress.dev/zh/guide/markdown#line-highlighting-in-code-blocks)

```markdown
::: demo 这是一个行高亮的示例

<!-- 带行高亮 -->

/basic/counter.vue {1,4,10-13}

:::
```

::: demo 这是一个行高亮的示例

/basic/counter.vue {1,4,10-13}

:::

### 行号 {#line-numbers}

- 配置语法参考 [VitePress 官方文档：在代码块中显示行号](https://vitepress.dev/zh/guide/markdown#line-numbers)

```markdown
::: demo 这是一个行号的示例

<!-- 带行高亮与带行号 -->

/basic/counter.vue {1,4,10-13 vue:line-numbers=2 }

:::
```

::: demo 这是一个行号的示例

/basic/counter.vue {1,4,10-13 vue:line-numbers=2 }

:::

::: warning 注意

行号使用时需添加语言，例如 `{vue:line-numbers}`

:::

### 代码组 {#code-group}

- 配置语法参考 [VitePress 官方文档：代码组](https://vitepress.dev/zh/guide/markdown#code-groups)
- `{code-group}` 选项或文件路径数量大于 1 时，渲染代码组

```markdown
::: demo 这是一个代码组的示例,`{code-group}` 非必传 {code-group ClientOnly}

<!-- 行号 ,自定义源语言-->

/basic/non-ssr.vue { vue 1,4}

<!-- 文件名默认用作标题,也可以自定义标题 -->

/basic/counter.vue {1,4,10-13 vue:line-numbers=2 } [counter标题]

<!-- 支持 Twoslash（类型悬停显示） -->

/basic/twoslash.ts { ts:line-numbers twoslash} [twoslash标题]

:::
```

::: demo 这是一个代码组的示例，`{code-group}` 非必传 {code-group ClientOnly}

/basic/non-ssr.vue { vue 1,4}

/basic/counter.vue {1,4,10-13 vue:line-numbers=2 } [counter标题]

/basic/twoslash.ts { ts:line-numbers twoslash} [twoslash标题]

:::

::: warning 注意

仅渲染第一个代码块的组件。

:::

<!-- @include: ../../../packages/demo-preview/CHANGELOG.md -->
