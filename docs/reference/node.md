# Node

## Pnpm 安装包

- 生产环境

```sh
pnpm i [xxx] -S -w
```

- 开发环境

```sh
pnpm i [xxx] -D -w
```

## Brew 安装 Node 教程及多版本切换

1. 查看当前电脑是否安装 `node`

   ```sh
   node -v
   ```

2. 查看当前电脑通过 `brew` 安装的 `node` 路径

   ```sh
   ls /usr/local/Cellar/node*
   ```

3. 查看可安装的 `node`

   ```sh
   brew search node
   ```

4. 安装其他版本 `node`

   ```sh
   brew install node@14
   ```

5. `brew` 切换 `node` 版本

   ```sh
   brew unlink node@18
   brew link --overwrite --force node@14
   ```

6. 查看 `node` 版本

   ```sh
   node -v
   ```

## 如何在 Mac 电脑上完全卸载 Node

- `brew` 的安装方式

```sh
brew unistall nodejs
```

- 官网下载 `pkg` 安装包的

```sh
sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}
```

## Mac (M1/M2) 使用 Nvm 安装低于 Node16 版本出现长日志和安装缓慢的现象

m1/m2 安装 `node16` 之前的版本时，需要使用 [rosetta](https://so.csdn.net/so/search?q=rosetta&spm=1001.2101.3001.7020) 终端

> **解决方案**

![node-rosetta图片](/reference/node-rosetta.png)

## Mac 上 Nvm 切换 Node 版本无效

使用 `nvm use version` 切换 `node` 版本后,再次新开终端,依旧是旧的 `node` 版本

::: tip 解决方案

```sh
nvm use 16.20.2
nvm alias default 16.20.2
```

:::

## Mac 上安装 Fnm（Node 包管理工具）

> 详情见 [fnm](https://github.com/Schniz/fnm) 官网地址

1. 安装

   ```sh
   brew install fnm
   ```

   ```sh
   curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir "./.fnm" --skip-sh
   ```

2. 配置环境 (.zshrc)

   ```zsh
   eval "$(fnm env --use-on-cd)"
   ```

3. 下载 `node`

   ```sh
   fnm install 18
   ```

4. 切换版本

   ```sh
   fnm use 18
   fnm default 18
   ```

## 删除所有 node_modules

```sh
find . -name 'node_modules' -type d -prune -execdir rm -rf '{}' +
```

::: info 提示

- `find` : 使用 `find` 命令从当前目录（.）开始搜索文件和文件夹。
- `-name 'node_modules'` : `-name` 选项用于指定要匹配的文件或文件夹名。这里我们指定匹配名为 `node_modules` 的文件夹。
- `-type d` : `-type` 选项用于指定要匹配的类型。`d` 表示只匹配文件夹（目录）。
- `-prune` : `-prune` 选项用于排除匹配到的目录，防止 `find` 命令继续向下搜索这些目录的子目录。因为我们只关心 `node_modules` 目录本身，不需要搜索它的子目录，所以使用 `-prune` 来排除这些子目录。
- `-execdir rm -rf '{}' +` : `-execdir` 选项表示在找到的每个匹配项上执行一个命令，`rm -rf '{}' +` 是要执行的命令。`rm -rf` 是一个常用的命令，用于递归地删除目录及其内容。`'{}'` 表示 `find` 命令匹配到的文件或文件夹名字，在这里就是 `node_modules` 目录。
- `+` : `+` 表示 `find` 命令将匹配到的文件或文件夹名传递给 `-execdir` 选项指定的命令。`+` 会将多个匹配到的文件或文件夹名传递给命令，而不是每次只传递一个。这样可以提高效率。

:::
