# Homebrew

- [Homebrew ： macOS（或 Linux）缺失的软件包的管理器](https://brew.sh/zh-cn/)

## 常用命令 {#commands}

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
