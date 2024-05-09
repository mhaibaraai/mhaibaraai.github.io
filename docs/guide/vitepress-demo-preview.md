---
order: 5
---

# 添加组件预览与代码示例展示

[vitepress-demo-preview](https://github.com/flingyp/vitepress-demo-preview) 插件可以在 VitePress 项目中添加组件预览与代码示例展示功能。

## 安装依赖

```sh
pnpm add @vitepress-demo-preview/component @vitepress-demo-preview/plugin -D
```

::: tip

- `@vitepress-demo-preview/plugin` : 一个 `markdown-it` 插件，提供 `Component Form` 和 `Container Form` 两种 Component 预览方式。
- `@vitepress-demo-preview/component` :一个代码容器，有 `Element Plus` , `Ant Design Vue` , `Naive UI` 三种 UI 库的组件预览样式。
  :::

## 使用

1、在 `.vitepress/theme/index.ts` 中引入容器

可以根据个人喜好选择 `Element Plus` , `Ant Design Vue` , `Naive UI` 三种 UI 库的组件预览样式。这里以 `Element Plus` 为例。

```ts
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  enhanceApp({ app }) {
    app.component('demo-preview', ElementPlusContainer)
  }
}
```

2、在 `.vitepress/config/index.ts` 中引入插件

```ts
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

export default {
  markdown: {
    config: (md) => {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
}
```

3、在 `.md` 文件中使用

- 使用 `Component Form` 标签

```md
<preview path="../../src/packages/demo/demo.vue" />
```

- 使用 `Container Form` 标签

```md
::: preview demo 组件 || 这是一个简单的描述

demo-preview=../../src/packages/demo/demo.vue

:::
```

预览效果如下：

<preview path="../snippets/demo/component-preview.vue" />
