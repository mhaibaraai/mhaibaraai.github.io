# fnm {#fnm}

> [Fast Node Manager (fnm)](https://github.com/Schniz/fnm) 是一个快速的 Node.js 版本管理器，它可以帮助你在不同项目中切换 Node.js 版本。

## 使用 fnm 安装 Node {#install-fnm}

1. 安装 `fnm`：

   - 使用脚本安装：

   ```sh
   curl -fsSL https://fnm.vercel.app/install | bash
   ```

   - 使用 Homebrew 安装（适用于 macOS 和 Linux）：

   ```sh
   brew install fnm
   ```

   ::: tip 什么是 Homebrew？如何安装？
   跳转到 [Homebrew](../mac/brew)
   :::

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

## 功能参数 {#fnm-features}

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

## 常用命令 {#fnm-commands}

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
