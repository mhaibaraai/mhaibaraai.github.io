# 快速开始

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

## [VitePress](https://vitepress.dev/zh/guide/getting-started)初始化项目

```sh
pnpm add -D vitepress
pnpm vitepress init
```

::: tip 提示
如果使用Git，应该将 `dist`、`cache`、`node_modules` 等添加到 `.gitignore` 文件中。
:::

## GitHub Pages平台部署

VitePress 链接：<https://vitepress.dev/zh/guide/deploy#github-pages>

::: details GitHub Pages部署失败？

```sh
Error: No pnpm version is specified. Please specify it by one of the following ways: - in the GitHub Action config with the key "version" - in the package.json with the key "packageManager" - in the environment variable "PNPM_VERSION"
```

指定pnpm版本是可选的。如果省略，则安装最新版本。如果您希望与本地开发环境保持一致，请指定与pnpm本地使用的版本相同的版本。

```sh
# package.json
{
  "packageManager": "pnpm@8.15.6",
}
```

:::

## 添加ESLint规则

从ESLint v9.0.0开始，[ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files)平面配置文件格式将成为默认的配置文件格式。

这里推荐Anthony Fu大佬的开源项目ESlint的预设配置 `@antfu/eslint-config`，详细配置请参考[文档](https://github.com/antfu/eslint-config)

1、安装ESLint和`@antfu/eslint-config` 依赖，为了使用外部格式化程序来格式化ESLint尚无法处理的文件（.css、.html等），安装 `eslint-plugin-format` 的依赖,为了支持UnoCSS安装 `@unocss/eslint-plugin`

```sh
pnpm i -D eslint @antfu/eslint-config eslint-plugin-format @unocss/eslint-plugin
```

2、添加 `eslint.config.ts` 文件

```ts twoslash
import antfu from '@antfu/eslint-config'

export default antfu({

  vue: true,
  typescript: true,
  unocss: true,

  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },

  ignores: [
    "dist",
    "**/dist/**",
    "node_modules",
    "**/node_modules/**",
    "public",
    "**/public/**",
    "eslint.config.js",
    "**/eslint.config.js/**"
  ],

})
```

## 添加 `unocss` 预处理器

1、安装 `unocss` 依赖

```sh
pnpm add -D unocss
```

2、新增 `vite.config.ts` 文件

```ts twoslash
import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
import { presetAttributify, presetWind } from 'unocss'

export default defineConfig({
  
  plugins: [
    unocss({
      presets: [
        presetAttributify(),
        presetWind(),
      ],
    }),
  ],

})
```

3、更新vitpress配置文件 `config.mts`

```ts
import viteConfig from './vite.config'

export default {
  vite: viteConfig,
}
```

4、更新theme配置文件 `theme/index.ts`

```ts
import 'virtual:uno.css'
```

## 在中启用 [TypeScript Twoslash](https://shiki-zh-docs.vercel.app/packages/vitepress)（类型悬停显示）

1、安装 `shiki-twoslash` 依赖

```sh
pnpm add -D @shikijs/vitepress-twoslash
```

2、更新 `config.mts` 文件

```ts
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

export default defineConfig({

  markdown: {
    codeTransformers: [
      transformerTwoslash({
        processHoverInfo: info => info.replace(/_unocss_core\./g, ''),
      }),
    ],
  }

})
```

3、更新theme配置文件 `theme/index.ts` ,注册 `shiki-twoslash` 插件，导入css样式

```ts
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'

import '@shikijs/vitepress-twoslash/style.css'

export default {
  enhanceApp({ app }) {
    app.use(TwoslashFloatingVue)
  },
}
```
