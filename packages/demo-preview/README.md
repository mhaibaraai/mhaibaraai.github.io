# 组件预览与展示代码

专为增强 `Markdown` 文档而设计，特别适用于展示 `Vue` 和 `TypeScript` 组件的实时预览。

## ✨ 特点

- **自定义容器**：支持自定义容器符号和容器名称，灵活适应不同的文档需求。
- **组件支持**：兼容 `.vue` 和 `.tsx` 组件。
- **可修改根目录**：支持自定义根目录（默认 `/examples`），轻松组织项目示例文件。
- **简化路径管理**：直接使用相对路径 `/demo/test.tsx` 即可引入示例文件。
- **`ClientOnly` 控制**：在 `Markdown` 中轻松使用 `{ClientOnly}` 选项，控制组件加载方式，确保 SSR 兼容性。
- **VitePress 默认渲染**：支持使用 `VitePress` 的默认渲染机制，在服务端渲染示例演示，实现高效、快速的页面加载。
- **兼容暗黑模式**：支持暗黑模式，提供更好的阅读体验。

::: warning 注意

当打包不支持 SSR 的组件时，需要在容器中添加 `{ClientOnly}` 选项，确保组件在客户端渲染。

:::

## 📦 安装

| 包名                                                                                                 | 版本                                                                             |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [@movk-repo/demo-preview-plugin](https://www.npmjs.com/package/@movk-repo/demo-preview-plugin)       | ![component version](https://badgen.net/npm/v/@movk-repo/demo-preview-plugin)    |
| [@movk-repo/demo-preview-container](https://www.npmjs.com/package/@movk-repo/demo-preview-container) | ![component version](https://badgen.net/npm/v/@movk-repo/demo-preview-container) |

推荐使用 `pnpm` 安装，以获得更快的安装速度。

```bash
pnpm add @movk-repo/demo-preview-plugin @movk-repo/demo-preview-container
```

## 🚀 使用

### 添加插件

在 `.vitepress/config.ts` 中添加插件

```ts twoslash
import { defineConfig } from 'vitepress'
import { demoPreviewPlugin } from '@movk-repo/demo-preview-plugin'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(demoPreviewPlugin)
    },
  },
})
```

### 添加容器组件

在 `.vitepress/theme/index.ts` 中添加容器组件

```ts twoslash
import { DemoPreviewContainer } from '@movk-repo/demo-preview-container'
import '@movk-repo/demo-preview-container/dist/style.css'
```

## 🛠️ 配置

### marker

- 类型: `string`
- 默认值: `':'`

容器标记符号，用于标识容器的开始和结束。

### root

- 类型: `string`
- 默认值: `/examples`

示例文件所在的根目录，默认值为 `/examples`。

### name

- 类型: `string`
- 默认值: `demo`

自定义容器名称，用于标识容器的类型。
