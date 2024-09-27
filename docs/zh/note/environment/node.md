# Node {#Node}

> 依赖管理和使用经验

## Node 的版本选择 {#node-versions}

- **LTS 版本**（长期支持版本）：稳定版本，通常用于生产环境。
  - Node.js 18.20.4 (Hydrogen)
  - Node.js 20.17.0 (Iron)
- **Current 版本**（当前版本）：最新的主要版本，加入最新特性和改进，通常用于开发和测试。
  - Node.js 22.9.0（2024-09-17）

## 安装配置 {#install-node}

### 直接下载安装 {#install-download}

1. macOS:

   - 从 [Node.js 官网](https://nodejs.org/) 下载 macOS 安装包（`.pkg` 文件）
   - 使用 Homebrew 安装

   ```sh
   brew install node
   ```

   ::: tip 什么是 Homebrew？如何安装？
   跳转到 [Homebrew](../mac/brew)
   :::

2. Windows:

   - 从 [Node.js 官网](https://nodejs.org/) 下载 Windows 安装包（`.msi` 文件）
   - 如果已安装 Windows 10 或更新版本，可以使用 winget：

   ```sh
   winget install --id=OpenJS.Nodejs
   ```

### 使用包管理器安装（推荐） {#install-package-manager}

> - 包版本管理工具的主要好处在于帮助开发者更方便地管理多个版本的 Node.js 和 npm。
> - 在开发中，不同的项目可能需要依赖不同的 Node.js 版本，使用这些工具可以轻松切换不同的环境，并确保项目在合适的版本上运行。

- [nvm](https://github.com/nvm-sh/nvm) 最受欢迎的 Node.js 版本管理工具，适用于 macOS 和 Linux。
- [nvm-windows](https://github.com/coreybutler/nvm-windows) `nvm` 的 Windows 版本，专为 Windows 开发者设计。
- [fnm](https://github.com/Schniz/fnm) 也是 macOS 的优秀选择，具备轻量和高效的特点，适合那些不想耗费系统资源的开发者。

::: tip

本文档以 `fnm` 为例，介绍如何在 macOS 上安装和使用 `fnm`。

跳转到 [fnm](./fnm) 了解更多。

:::

## pnpm {#pnpm}

### 安装 {#pnpm-install}

- 使用 npm 安装 pnpm：

```sh
npm install -g pnpm
```

- 使用 Homebrew 安装 pnpm：

```sh
brew install pnpm
```

### 工作空间 {#pnpm-workspace}

`pnpm-workspace.yaml` 定义了工作空间的根目录，并能够使您从工作空间中包含 `/` 排除目录。默认情况下，包含所有子目录。

```yaml
packages:
  - packages/*
  - docs
  - packages/playground/**
```

## 实用命令 {#node-commands}

- 删除所有 `node_modules` 文件夹

```sh
find . -name 'node_modules' -type d -prune -execdir rm -rf '{}' +
```

- 递归删除 `packages` 和 `internal` 目录下的 `dist` 文件夹，同时忽略 `node_modules` 目录

```sh
find packages internal -path '*/node_modules/*' -prune -o -name 'dist' -type d -exec rm -rf {} + || true
```

- `postinstall` 钩子在安装依赖后执行，可以用来执行一些构建操作，比如构建、设置环境或修复依赖关系。

```json
{
  "scripts": {
    "postinstall": "pnpm build",
    "build": "pnpm clean && pnpm -r -F='./packages/**' -F='./internal/**' run build",
    "clean": "find packages internal -path '*/node_modules/*' -prune -o -name 'dist' -type d -exec rm -rf {} + || true"
  }
}
```

## 📝 笔记 {#node-note}

### 参数传递 {#npm-args}

- 当你使用 `npm run` 命令时，如果你想要传递参数给你的脚本，你需要在参数前加上 `--` , 例如：

```sh
npm run gen:cc -- --path ol-cesium-map --name demo
```

这样，`--path ol-cesium-map --name demo` 就会被传递给你的脚本，而不是 `npm run` 命令。

- 使用 `mri` 来解析这些参数：

```ts
const argv = process.argv.slice(2)
const mriData = mri<MriData>(argv)

// mriData : { _: [], path: 'ol-cesium-map', name: 'demo' }
```

### 增加 node 内存限制 {#node-memory-limit}

通过 `--max_old_space_size` 选项，你可以指定更大的内存使用限制，构建大项目时能有效避免内存不足导致的 `JavaScript heap out of memory` 错误

```sh
export NODE_OPTIONS=--max_old_space_size=10240
```

或者在 `package.json` 中的 `scripts` 中指定：

```json
{
  "scripts": {
    "build": "NODE_OPTIONS=--max_old_space_size=10240 react-scripts build"
  }
}
```
