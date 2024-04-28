---
order: 4
---

# 自动生成侧边栏

[vitepress-sidebar](https://vitepress-sidebar.jooy2.com/) 插件可以自动生成 VitePress 项目的侧边栏，无需手动配置。

> [官网文档](https://vitepress-sidebar.jooy2.com/)

## 安装依赖

```sh
pnpm add vitepress-sidebar -D
```

## 使用

大概思路是定义文档模块，重写配置方法，生成导航栏和侧边栏。

### 定义文档模块

```ts
const docModules: DefaultTheme.NavItemWithLink[] = [
  { text: '指南', link: 'guide' },
  { text: '参考', link: 'reference' },
  { text: '工作', link: 'work' },
  { text: '示例', link: 'playground' },
]
```

### 重写侧边栏和导航方法

在 `.vitepress/config/sidebar.ts` 和 `.vitepress/config/nav.ts` 中重写配置方法。

::: code-group

<<< @/.vitepress/config/sidebar.ts

<<< @/.vitepress/config/nav.ts

:::

### 引入插件并配置

```ts
import { defineConfig } from 'vitepress'
import { vitepressGenerateSidebar } from './sidebar'
import { generateNav } from './nav'

export default defineConfig({
  themeConfig: {
    nav: generateNav(docModules, vitepressGenerateSidebar(docModules)),
    sidebar: vitepressGenerateSidebar(docModules),
  },
})
```
