# 自动生成侧边栏和导航栏

[@movk-repo/vitepress-plugin-auto-nav-sidebar](https://www.npmjs.com/package/@movk-repo/vitepress-plugin-auto-nav-sidebar) 通过扫描文件目录，自动生成侧边栏和导航栏。

![component version](https://badgen.net/npm/v/@movk-repo/vitepress-plugin-auto-nav-sidebar)

## ✨ 特点

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
pnpm add @movk-repo/vitepress-plugin-auto-nav-sidebar
```

### 添加插件

在 `.vitepress/config.ts` 中添加插件

```ts twoslash
import { defineConfig } from 'vite'
import VitePressPluginAutoNavSidebar from '@movk-repo/vitepress-plugin-auto-nav-sidebar'

export default defineConfig({
  plugins: [
    VitePressPluginAutoNavSidebar(),
  ],
})
```

## 🛠️ 配置

### documentRootPath

- 类型: `string`
- 默认值: `/`

文档文件所在的根路径，默认值为 `/`。

这是目录所在的路径 `.vitepress`，如果项目根目录下文档所在的文件夹是 `/docs` ，那么该选项的值应该设置为 `docs` 或 `/docs`

```text
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
- 默认值: `true`

是否忽略首页的文件，如果设置为 `true`，则首页的 `index.md` 文件不会被添加到侧边栏和导航栏中。

### excludeFiles

- 类型: `(string | RegExp)[]`
- 默认值: `['README.md', '.DS_Store', 'package.json']`

忽略的文件列表，支持正则匹配。

### excludeFolders

- 类型: `(string | RegExp)[]`
- 默认值: `['.vitepress', 'node_modules', 'dist','public','.turbo']`

忽略的文件夹列表，支持正则匹配。

### collapsed

- 类型: `boolean`
- 默认值: `true`

是否折叠侧边栏。

### useTitleFromFileHeading

- 类型: `boolean`
- 默认值: `true`

如果设置为 `true`，则使用 `.md` 内容中的 `h1` 作为侧边栏和导航栏的标题。如果 `h1` 不存在，则使用文件名。

### useTitleFromFrontmatter

- 类型: `boolean`
- 默认值: `true`

如果设置为 `true`，则使用 `.md` 文件的 `frontmatter` 中的 `title` 字段作为侧边栏和导航栏的标题。如果不存在或者无法解析，则使用文件名。

`frontmatter` 位于文档的顶部，并且格式如下：

> 关于 `frontmatter` 的详细用法，可以参考 [VitePress 文档](https://vitepress.dev/zh/reference/frontmatter-config)。

```markdown
---
title: 文档标题
---
```

> [!tip]提示
> `frontmatter` 与 `h1` 如果同时存在，则优先使用 `frontmatter`。

### useSortFromTitle

- 类型: `boolean`
- 默认值: `true`

如果设置为 `true`，当菜单标题为数字开头时，按照数字排序。例如，如果文件为 [`1-a.md` , `10-a.md` ,`2-a.md`]，最终会按照 [ `1-a.md` , `2-a.md` ,`10-a.md`] 排序。

> [!tip]提示
> `frontmatter` 与 `标题数字` 如果同时存在，则优先使用 `frontmatter`。

### removeTitlePrefix

- 类型: `string` | `RegExp`
- 默认值: `空`

删除标题中的前缀，如果标题中包含该前缀，则删除。

> [!tip]提示
> 如果配置了 `useSortFromTitle` 为 `true` , 并且想删除菜单标题的数字前缀，可以设置 `removeTitlePrefix: /^\d+-/,`。

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

```markdown
---
order: 1
---
```

3、`frontmatterDate` : 对于每个文件夹，按照 `frontmatter` 中的 `date` 字段升序或降序排序，如果 `date` 字段不存在或为非日期格式，则 `date` 为默认值当前日期。

```markdown
---
date: 2021-09-01
---
```

### debugLog

- 类型: `boolean`
- 默认值: `false`

是否打印日志。如果设置为 `true`，则会在控制台打印生成的 `sidebar` 和 `nav`。

## 📝 示例

目录结构：

```text
docs
└── one
    ├── children
    │   ├── _demo-2.md
    │   ├── demo.md
    │   └── first.md
    ├── children-two
    │   ├── 10-second.md
    │   └── 2-first.md
    ├── demo
    │   └── index.vue
    ├── first.md
    └── index.md
```

下面是一个配置示例：

```ts twoslash
import { defineConfig } from 'vite'
import VitePressPluginAutoNavSidebar from '@movk-repo/vitepress-plugin-auto-nav-sidebar'

export default defineConfig({
  plugins: [
    VitePressPluginAutoNavSidebar({
      documentRootPath: '/',
      ignoreIndexItems: true,
      excludeFiles: [/.*demo.*/],
      excludeFolders: ['demo'],
      removeTitlePrefix: /^\d+-/,
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useSortFromTitle: true,
      sortMenusBy: 'frontmatterOrder',
      sortMenusOrder: 'asc',
      collapsed: true,
      debugLog: true,
    }),
  ],
})
```

输出结果：

::: details 点击查看 sidebar 和 nav 结果

::: code-group

```text [sidebar]
 {
  "/one/": {
    "base": "",
    "text": "这是个示例",
    "order": 2,
    "date": "2024-05-29T08:28:07.963Z",
    "items": [
      {
        "text": "children",
        "order": 0,
        "date": "2024-05-29T08:28:07.963Z",
        "collapsed": true,
        "link": "/one/children/first",
        "items": [
          {
            "text": "first",
            "order": 0,
            "date": "2024-05-29T08:28:07.962Z",
            "link": "/one/children/first"
          }
        ]
      },
      {
        "text": "children-two",
        "order": 0,
        "date": "2024-05-29T08:28:07.963Z",
        "collapsed": true,
        "link": "/one/children-two/10-second",
        "items": [
          {
            "text": "first",
            "order": 2,
            "date": "2024-05-29T08:28:07.963Z",
            "link": "/one/children-two/2-first"
          },
          {
            "text": "second",
            "order": 10,
            "date": "2024-05-29T08:28:07.963Z",
            "link": "/one/children-two/10-second"
          }
        ]
      },
      {
        "text": "first",
        "order": 0,
        "date": "2024-05-29T08:28:07.963Z",
        "link": "/one/first"
      }
    ]
  }
}
```

```text [navs]
[
   {
    "activeMatch": "/one/",
    "text": "这是个示例",
    "order": 2,
    "items": [
      {
        "text": "children",
        "link": "/one/children/first"
      },
      {
        "text": "children-two",
        "link": "/one/children-two/10-second"
      },
      {
        "text": "first",
        "link": "/one/first"
      }
    ]
  }
]
```

:::
