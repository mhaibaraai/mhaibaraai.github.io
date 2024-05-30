---
order: 6
---

# 构建一个 Turborepo 项目

使用 `Pnpm` 构建一个 `Turborepo` 项目，需求如下：

- `Vite` + `Vue3` + `TypeScript` 构建前端项目
- `VitePress` 构建文档项目
- 支持 `ESLint`
- 使用 `Npm` 发布包

::: tip

如果是新的项目，建议使用 `Turborepo` 官方提供的初始化工具，

```sh
npx create-turbo@latest -e with-vite
```

更多内容参考 [turborepo官网](https://turbo.build/repo/docs/handbook)
:::

以下是基于原有项目的改造，添加 `Turborepo` 的支持。

## 安装 turbo

```sh
pnpm add turbo
```

## 添加 `turbo.json` 配置文件

```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "lint": {},
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

## 添加 `.gitignore` 文件

```text
.turbo // [!code ++]
```

## 配置工作区

添加 `pnpm-workspace.yaml` 文件

```yaml
packages:
  - apps/*
  - docs
  - packages/*
```

```text
├─ docs
│  └─ guide
├─ apps
│  └─ web
├─ packages
│  ├─ config-typescript
│  └─ eslint-config
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## 添加 TypeScript 配置

1、添加 `packages/config-typescript` 文件夹，添加 `base.json` 、 `vite.json` 和 `package.json`

参考 [monorepo 中的 TypeScript](https://turbo.build/repo/docs/handbook/linting/typescript)

2、添加 `tsconfig.json` 文件

```json
{
  "extends": "@movk-repo/typescript-config/base.json",
  "include": ["packages/**/*", "apps/**/*", "docs/**/*"]
}
```

## 添加 ESLint 配置

1、添加 `packages/eslint-config` 文件夹，添加 `package.json`

```json
{
  "name": "@movk-repo/eslint-config",
  "version": "0.0.0",
  "license": "MIT",
  "main": "index.js",
  "dependencies": {},
  "publishConfig": {
    "access": "public"
  },
  "devDependencies": {
    "@antfu/eslint-config": "^2.19.0",
    "eslint": "npm:eslint-ts-patch@8.57.0-0",
    "eslint-plugin-format": "^0.1.1"
  }
}
```

2、添加 `packages/index.js` 配置文件

```js
import antfu from '@antfu/eslint-config'

export default function combine(...configs) {
  return antfu({

    formatters: true,
    vue: true,
    typescript: true,

  }, ...configs, {
    rules: {
      'no-console': 'off',
    },
  },)
}
```

3、在其他工作区中使用 `eslint.config.js`

```js
import eslintConfig from '@movk-repo/eslint-config'

export default eslintConfig(
  {
    rules: {
      'node/prefer-global/process': 'off',
    },
  },
)
```
