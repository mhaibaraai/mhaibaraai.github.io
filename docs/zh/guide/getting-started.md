---
order: 1
---

# 快速开始

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

## VitePress 初始化项目

```sh
pnpm add -D vitepress
pnpm vitepress init
```

::: tip 提示
如果使用 Git，应该将 `dist`、`cache`、`node_modules` 等添加到 `.gitignore` 文件中。
:::

## GitHub Pages 平台部署

VitePress 链接：<https://vitepress.dev/zh/guide/deploy#github-pages>

::: details GitHub Pages 部署失败？

```sh
Error: No pnpm version is specified. Please specify it by one of the following ways: - in the GitHub Action config with the key "version" - in the package.json with the key "packageManager" - in the environment variable "PNPM_VERSION"
```

指定 pnpm 版本是可选的。如果省略，则安装最新版本。如果您希望与本地开发环境保持一致，请指定与 pnpm 本地使用的版本相同的版本。

```sh
# package.json
{
  "packageManager": "pnpm@8.15.6",
}
```

:::

## 添加 ESLint 规则

从 ESLint v9.0.0 开始，[ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files) 平面配置文件格式将成为默认的配置文件格式。

这里推荐 Anthony Fu 大佬的开源项目 ESlint 的预设配置 `@antfu/eslint-config`，详细配置请参考 [文档](https://github.com/antfu/eslint-config)

1. 安装 ESLint 和 `@antfu/eslint-config` 依赖，为了使用外部格式化程序来格式化ESLint尚无法处理的文件（.css、.html等），安装 `eslint-plugin-format` 的依赖,为了支持 UnoCSS 安装 `@unocss/eslint-plugin`

   ```sh
   pnpm add -D eslint @antfu/eslint-config eslint-plugin-format @unocss/eslint-plugin
   ```

2. 添加 `eslint.config.js` 文件

```js twoslash
import antfu from '@antfu/eslint-config'

export default antfu({

  formatters: true,
  vue: true,
  typescript: true,

}, {
  rules: {
    'no-console': 'off',
    'node/prefer-global/process': 'off',
    'ts/no-this-alias': 'off',
    'ts/consistent-type-imports': 'off',
  },
},)
```

## 添加 `unocss` 预处理器

1. 安装 `unocss` 依赖

   ```sh
   pnpm add -D unocss
   ```

2. 添加 `vite.config.ts` 文件

   ```ts
   import { createUnocssPlugin } from 'unocss/vite'
   import { defineConfig } from 'vite'

   export default defineConfig({
     plugins: [
       createUnocssPlugin(),
     ],
   })
   ```

3. 更新 theme 配置文件 `theme/index.ts`

   ```ts
   import 'virtual:uno.css'
   ```

## 在中启用 TypeScript Twoslash（类型悬停显示）

> 详细配置请参考 [shiki-twoslash](https://shiki-zh-docs.vercel.app/packages/vitepress)

1. 安装 `shiki-twoslash` 依赖

   ```sh
   pnpm add -D @shikijs/vitepress-twoslash
   ```

2. 更新 `config.ts` 文件

   ```ts
   import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

   export default defineConfig({

     markdown: {
       codeTransformers: [
         transformerTwoslash(),
       ],
     }

   })
   ```

3. 更新 theme 配置文件 `theme/index.ts` ,注册 `shiki-twoslash` 插件，导入 css 样式

   ```ts twoslash
   import type { EnhanceAppContext } from 'vitepress'
   import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
   import '@shikijs/vitepress-twoslash/style.css'

   export default {
     enhanceApp({ app }: EnhanceAppContext) {
       app.use(TwoslashFloatingVue)
     },
   }
   ```
