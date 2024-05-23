---
order: 4
---

# 自动生成侧边栏和导航栏

通过扫描文件目录，自动生成侧边栏和导航栏。

## ✨  特点

- 支持自定义根路径
- 支持自定义忽略列表，排除文件和文件夹，可正则匹配
- 支持自定义排序，按文件名或者文件夹名排序、`frontmatter` 中的 `order` 与 `date` 字段排序
- 支持自定义标题，文件名或者文件夹名、自动读取 `frontmatter` 中的 `title` 字段或者 `h1` 标签
- 支持删除自定义标签前缀
- 全局监听 `.md` 文件变化，自动刷新侧边栏和导航栏

## ⚡️ 使用

### 安装插件

推荐使用 `pnpm` 包管理器

```bash
pnpm add vitepress-plugin-auto-nav-sidebar
```

### 添加插件

在 `.vitepress/config.ts` 中添加插件

```ts twoslash
import { defineConfig } from 'vite'
import VitePressPluginAutoNavSidebar from 'vitepress-plugin-auto-nav-sidebar'

export default defineConfig({
  plugins: [
    VitePressPluginAutoNavSidebar(),
  ],
})
```

> [!tip]提示
>插件配置成功的话，会在控制台输出 `sidebar and nav generated successfully！`。

## 🛠️ 配置

### documentRootPath

- 类型: `string`
- 默认值: `/`

文档文件所在的根路径，默认值为 `/`。

这是目录所在的路径 `.vitepress`，如果项目根目录下文档所在的文件夹是 `/docs` ，那么该选项的值应该设置为 `docs` 或 `/docs`

``` text
.
├── src/
├── README.md
├── docs
│   ├── .vitepress/
│   ├── index.md
│   ├── hello.md
├── package.json
```

### ignoreIndexItems

- 类型: `boolean`
- 默认值: `false`

是否忽略首页的文件，如果设置为 `true`，则首页的 `index.md` 文件不会被添加到侧边栏和导航栏中。

### excludeFiles

- 类型: `string[]`
- 默认值: `['README.md', '.DS_Store', 'package.json']`

忽略的文件列表，支持正则匹配。

### excludeFolders

- 类型: `string[]`
- 默认值: `['.vitepress', 'node_modules', 'dist', 'components']`

忽略的文件夹列表，支持正则匹配。

### collapsed

- 类型: `boolean`
- 默认值: `false`

是否折叠侧边栏。

### useTitleFromFileHeading

- 类型: `boolean`
- 默认值: `false`

如果设置为 `true`，则使用 `.md` 内容中的 `h1` 作为侧边栏和导航栏的标题。如果 `h1` 不存在，则使用文件名。

### useTitleFromFrontmatter

- 类型: `boolean`
- 默认值: `false`

如果设置为 `true`，则使用 `.md` 文件的 `frontmatter` 中的 `title` 字段作为侧边栏和导航栏的标题。如果不存在或者无法解析，则使用文件名。

`frontmatter` 位于文档的顶部，并且格式如下：

> 关于 `frontmatter` 的详细用法，可以参考 [VitePress 文档](https://vitepress.dev/zh/reference/frontmatter-config)。

``` markdown
---
title: 文档标题
---
```

> [!tip]提示
> `frontmatter` 与 `h1` 如果同时存在，则优先使用 `frontmatter`。

### removeTitlePrefix

- 类型: `string`
- 默认值: `空`

删除标题中的前缀，如果标题中包含该前缀，则删除。

### sortMenusOrder

- 类型: `'asc' | 'desc'`
- 默认值: `asc`

排序顺序，支持升序和降序。

### sortMenusBy

- 类型: `'fileName' | 'frontmatterOrder' | 'frontmatterDate'`
- 默认值: `空`

排序方式，支持按文件名、`frontmatter` 中的 `order` 字段、`frontmatter` 中的 `date` 字段排序。

1、`fileName` : 通常文件夹扫描的顺序是按照名称升序排列的，所以默认情况下是按照文件名排序的，但如果设置了自定义标题 `useTitleFromFileHeading` 或者 `useTitleFromFrontmatter`，则需要手动设置此排序方式。

2、`frontmatterOrder` : 对于每个文件夹，按照 `frontmatter` 中的 `order` 字段升序或降序排序，如果 `order` 字段不存在或为非数字，则 `order` 为默认值 `0`。

``` markdown
---
order: 1
---
```

3、`frontmatterDate` : 对于每个文件夹，按照 `frontmatter` 中的 `date` 字段升序或降序排序，如果 `date` 字段不存在或为非日期格式，则 `date` 为默认值当前日期。

``` markdown
---
date: 2021-09-01
---
```

### debugLog

- 类型: `boolean`
- 默认值: `false`

是否打印日志。如果设置为 `true`，则会在控制台打印生成的 `sidebar` 和 `nav`。

## 📝 示例

下面是一个配置示例：

```ts twoslash
import { defineConfig } from 'vite'
import VitePressPluginAutoNavSidebar from 'vitepress-plugin-auto-nav-sidebar'

export default defineConfig({
  plugins: [
    VitePressPluginAutoNavSidebar({
      documentRootPath:'/',
      ignoreIndexItems: true,
      excludeFiles: ['demo.md'],
      excludeFolders: ['public', 'snippets'],
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      sortMenusBy: 'frontmatterOrder',
      sortMenusOrder: 'asc',
      collapsed: true,
      debugLog: true,
    }),
  ],
})
```

输出结果：

``` text
sidebar {
  "/guide/": {
    "base": "",
    "text": "指南",
    "order": 0,
    "date": "2024-05-16T09:51:32.647Z",
    "items": [
      {
        "text": "快速开始",
        "order": 1,
        "date": "2024-05-16T09:51:32.646Z",
        "link": "/guide/getting-started"
      },
      {
        "text": "自动生成侧边栏和导航栏",
        "order": 2,
        "date": "2024-05-16T09:51:32.646Z",
        "link": "/guide/auto-sidebar-nav"
      },
    ]
  },
  "/reference/": {
    "base": "",
    "text": "参考",
    "order": 1,
    "date": "2024-05-16T09:51:32.649Z",
    "items": [
      {
        "text": "Vue",
        "order": 0,
        "date": "2024-05-16T09:51:32.649Z",
        "link": "/reference/vue"
      }
    ]
  },
}
navs [
  {
    "activeMatch": "/guide/",
    "text": "指南",
    "order": 0,
    "items": [
      {
        "text": "快速开始",
        "link": "/guide/getting-started"
      },
      {
        "text": "自动生成侧边栏和导航栏",
        "link": "/guide/auto-sidebar-nav"
      },
    ]
  },
  {
    "activeMatch": "/reference/",
    "text": "参考",
    "order": 1,
    "items": [
      {
        "text": "Vue",
        "link": "/reference/vue"
      }
    ]
  },
]
```
