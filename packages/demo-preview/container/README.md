# 组件预览与展示代码

专为增强 `Markdown` 文档设计，特别适用于 `Vue` 和 `TSX` 组件的实时预览与代码展示，支持自定义容器及 SSR 兼容。

## ✨ 特点

- **自定义容器**：支持灵活配置容器符号和名称，满足不同文档结构的需求。
- **组件支持**：兼容 `.vue` 和 `.tsx` 组件，轻松引入多种前端框架示例。
- **可修改根目录**：支持自定义根目录（默认 `/examples`），便于项目示例文件的组织和管理。
- **简化路径管理**：通过相对路径直接引入示例文件，如 `/demo/test.tsx`，简化路径配置。
- **SSR 兼容性**：轻松使用 `{ClientOnly}` 选项，灵活控制组件加载方式，增强服务端渲染兼容性。
- **VitePress 扩展支持**：完美支持 VitePress 的 `行内语法高亮` 、`代码行号` 及 `代码组` 功能，提升文档的可读性和交互性。
- **高效渲染**：基于 VitePress 默认的服务端渲染机制，确保示例演示内容快速加载，提升用户体验和搜索引擎优化（SEO）。
- **暗黑模式兼容**：原生支持暗黑模式，为用户提供更好的视觉体验。

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
import { demoPreviewPlugin } from '@movk-repo/demo-preview-plugin'
import { defineConfig } from 'vitepress'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(demoPreviewPlugin)
    },
  },
})
```

### 注册容器组件

在 `.vitepress/theme/index.ts` 中注册容器组件

- [如何在 VitePress 中注册组件](https://vitepress.dev/zh/guide/extending-default-theme#registering-global-components)

```ts twoslash
import { DemoPreviewContainer } from '@movk-repo/demo-preview-container'
import { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import '@movk-repo/demo-preview-container/dist/style.css'

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }: EnhanceAppContext) {
    app.component('DemoPreview', DemoPreviewContainer)
  },
}
```

## 🛠️ 配置

### marker

- 类型: `string`
- 默认值: `':'`

容器标记符号，用于标识容器的开始和结束。

### root

- 类型: `string`
- 默认值: `/examples`

示例文件所在的根目录，默认值为 `/examples`，文件目录结构如下：

```text
.
├─ docs
│  ├─ .vitepress
│  │  ├─ theme
│  │  │  └─ index.ts
│  │  └─ config.ts
│  └─ index.md
├─ examples
└─ package.json
```

### name

- 类型: `string`
- 默认值: `demo`

自定义容器名称，用于标识容器的类型。

## 📝 示例

[查看示例](https://mhaibaraai.github.io/zh/guide/vitepress-demo-preview#%F0%9F%93%9D-%E7%A4%BA%E4%BE%8B)

## 🗓️ 更新日志

[点击查看更新日志](https://mhaibaraai.github.io/zh/guide/vitepress-demo-preview#%F0%9F%97%93%EF%B8%8F-%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97)
