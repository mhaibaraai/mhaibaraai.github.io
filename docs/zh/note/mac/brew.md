# Homebrew

- [Homebrew ： macOS（或 Linux）缺失的软件包的管理器](https://brew.sh/zh-cn/)

## 安装 {#install}

1. 安装 Homebrew：

   ```sh
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. 添加 Homebrew 到系统路径

   安装完成后，Homebrew 可能不会自动添加到你的系统路径中。根据你的 Mac 使用的是 Intel 处理器还是 Apple Silicon（M1/M2 等），路径有所不同。

   - Intel 处理器：

     ```sh
     echo 'eval "$(/usr/local/bin/brew shellenv)"' >> /Users/$(whoami)/.zprofile
     eval "$(/usr/local/bin/brew shellenv)"
     ```

   - Apple Silicon (M1/M2)：

     ```sh
     echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/$(whoami)/.zprofile
     eval "$(/opt/homebrew/bin/brew shellenv)"
     ```

3. 验证安装：

   ```sh
   brew --version
   ```

   输出：

   ```sh
   Homebrew 4.3.23-56-g9160445
   ```

### 配置文件导出导出 {#export}

1.导出已安装的软件包列表：

在当前目录下导出 Homebrew 的软件包列表和配置文件。

```sh
# 导出已安装的软件包列表
brew list --formula > brew-packages.txt
# 导出已安装的 Cask 软件包列表
brew list --cask > brew-cask-packages.txt
# 导出 Homebrew 的配置
brew config > brew-config.txt
```

将文件保存到指定目录： `/path/to/your/directory/`

```sh
brew list --formula > /path/to/your/directory/brew-packages.txt
```

2.导入软件包和配置：

```sh
# 导入已安装的软件包列表
xargs brew install < brew-packages.txt
# 导入已安装的 Cask 软件包列表
xargs brew install --cask < brew-cask-packages.txt
```

::: tip 提示

一般情况下，Homebrew 的配置不会随着系统的重装等过程丢失，因此不需要专门导入配置

:::
