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

本文档以 `fnm` 为例，介绍如何在 macOS 上安装和使用 `fnm`。

### 使用 fnm 安装 Node {#install-fnm}

1. 安装 `fnm`：

   - 使用脚本安装：

   ```sh
   curl -fsSL https://fnm.vercel.app/install | bash
   ```

   - 使用 Homebrew 安装（适用于 macOS 和 Linux）：

   ```sh
   brew install fnm
   ```

2. 配置环境：

   需要将 fnm 集成到你的 Shell（如 bash、zsh）。可以参考输出的安装脚本，或手动添加以下命令到你的 `.zshrc` 或 `.bashrc` 文件中：

   ```sh
   eval "$(fnm env)"
   source ~/.zshrc
   ```

   ::: details 这是一个使用安装脚本的输出示例：

   brew 在安装 fnm 后给出了环境配置的提示，并自动将 fnm 的路径和相关配置追加到 `~/.zshrc` 文件中

   ```sh
   ==> Running `brew cleanup fnm`...
   Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
   Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
   Installing for Zsh. Appending the following to /Users/yixuanmiao/.zshrc:

   # fnm

   FNM_PATH="/Users/yixuanmiao/Library/Application Support/fnm"
   if [ -d "$FNM_PATH" ]; then
   export PATH="/Users/yixuanmiao/Library/Application Support/fnm:$PATH"
   eval "`fnm env`"
   fi

   In order to apply the changes, open a new terminal or run the following command:

   source /Users/yixuanmiao/.zshrc

   ```

   :::

3. 安装 Node.js：

   ```sh
   fnm install <version>
   fnm use <version>
   ```

## fnm {#fnm}

### 功能参数 {#fnm-features}

- `--use-on-cd`：在每次进入目录时自动切换 Node.js 版本 （✅ 推荐）

  避免每次切换目录后手动运行 `fnm use` ，它会根据 `.node-version`、`.nvmrc` 或 `package.json` 中的 `engines.node` （如果启用了 `--resolve-engines`） 来确定需要的版本。

  ```sh
  eval "$(fnm env --use-on-cd)"
  ```

- `--version-file-strategy=recursive`：递归查找 `.node-version` 或 `.nvmrc` 文件 （✅ 推荐）

  如果项目结构较为复杂，版本文件可能位于父级目录，此选项可以确保版本切换的准确性。

  ```sh
  eval "$(fnm env --version-file-strategy=recursive)"
  ```

- `--resolve-engines`：解析 `package.json` 中的 `engines.node` 字段 （🧪 实验）

  如果项目中有 `package.json` 文件，可以通过此选项解析 `engines.node` 字段，自动切换到指定版本。

  ```sh
  eval "$(fnm env --resolve-engines)"
  ```

  `package.json` 文件示例：

  ```json
  {
    "engines": {
      "node": ">=14.0.0"
    }
  }
  ```

- `--corepack-enabled`： 使用 Corepack 作为包管理器 （🧪 实验）

  启用这个功能会让 fnm 自动处理包管理工具的版本，但由于 Corepack 仍然是实验性的，建议在试验环境下使用。

  ```sh
  eval "$(fnm env --corepack-enabled)"
  ```

### 常用命令 {#fnm-commands}

- 查询所有 Node.js 版本

```sh
fnm ls-remote
```

- 安装特定版本的 Node.js

```sh
fnm install <version>
```

- 安装最新的 LTS 版本

```sh
fnm install --lts
```

- 切换 Node.js 版本

```sh
fnm use <version>
```

- 查看当前使用的 Node.js 版本

```sh
fnm current
```

- 设置默认版本

```sh
fnm default <version>
```

- 查看所有已安装的 Node.js 版本

```sh
fnm ls
```

- 卸载 Node.js

```sh
fnm uninstall <version>
```

## npm {#npm}

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

### 删除所有 node_modules 文件夹 {#npm-rm-node-modules}

```sh
find . -name 'node_modules' -type d -prune -execdir rm -rf '{}' +
```

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
