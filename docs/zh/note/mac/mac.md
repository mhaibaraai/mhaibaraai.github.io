# 记录一次 Mac 环境配置

- [Homebrew ： macOS（或 Linux）缺失的软件包的管理器](https://brew.sh/zh-cn/)

## 安装 Homebrew {#install-homebrew}

1. 打开终端

   在应用程序文件夹中找到终端（Terminal），或使用 Spotlight 搜索“终端”

2. 运行安装命令

   在终端中输入以下命令并按回车

   ```sh

   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

   ```

3. 配置环境变量

   安装完成后，可能需要将 Homebrew 添加到你的 PATH 中，按提示操作, 例如：

   ```text {4-5}
   ==> Next steps:

    - Run these two commands in your terminal to add Homebrew to your PATH:
      (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/yixuanmiao/.zprofile // [!code focus]
        eval "$(/opt/homebrew/bin/brew shellenv)" // [!code focus]
    - Run brew help to get started
    - Further documentation:
   https://docs.brew.sh
   ```

   ```sh
   (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/yixuanmiao/.zprofile
   eval "$(/opt/homebrew/bin/brew shellenv)"
   ```

4. 验证安装

   输入以下命令检查 Homebrew 是否安装成功：

   ```sh
   brew --version
   ```

   输出:

   ```sh
   Homebrew 4.3.23-56-g9160445
   ```

   <div class="tip custom-block" style="padding-top: 8px">

   更多参考可以跳到 [开发工具和环境 Homebrew](../environment/brew)

   </div>
