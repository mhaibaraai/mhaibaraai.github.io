# Node {#Node}

> 依赖管理和使用经验

## Node 的版本选择 {#node-versions}

- **LTS 版本**（长期支持版本）：稳定性高，适合生产环境。
- **Current 版本**（当前版本）：包含最新特性，但可能不够稳定，适合尝鲜和测试。
- **EOL 版本**（终止支持版本）：不再接收更新，不推荐使用。

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

## fnm 常用命令 {#fnm-commands}

### 查询所有 Node.js 版本 {#fnm-list}

```sh
fnm ls-remote
```
