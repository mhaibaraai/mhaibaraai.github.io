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

## Pnpm 工作空间

`pnpm-workspace.yaml` 定义了工作空间的根目录，并能够使您从工作空间中包含 `/` 排除目录。默认情况下，包含所有子目录。

```yaml
packages:
  - packages/*
  - docs
  - packages/playground/**
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

## Npm 传递参数

当你使用 `npm run` 命令时，如果你想要传递参数给你的脚本，你需要在参数前加上 `--` , 例如：

```sh
npm run gen:cc -- --path ol-cesium-map --name demo
```

这样，`--path ol-cesium-map --name demo` 就会被传递给你的脚本，而不是 `npm run` 命令。

使用 `mri` 来解析这些参数：

```ts
const argv = process.argv.slice(2)
const mriData = mri<MriData>(argv)

// mriData : { _: [], path: 'ol-cesium-map', name: 'demo' }
```
