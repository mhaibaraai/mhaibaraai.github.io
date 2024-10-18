# Git {#Git}

> 版本控制策略、常用命令和技巧

## 安装配置 {#install}

### Mac

通常自带 Git，但如果没有安装，或者你想更新到最新版本，可以通过以下几种方式安装：

- 通过 Homebrew 安装

  ```sh
  brew install git
  ```

- 通过 Xcode 安装

  ```sh
  xcode-select --install
  ```

### Windows

通过 Git 官网下载安装包：[https://git-scm.com/download/win](https://git-scm.com/download/win)

验证是否安装成功：

```sh
git --version
```

## 配置 Git 用户信息 {#config}

Git 需要知道提交者的身份信息。通过以下命令设置全局用户信息：

```sh
# 设置用户名
git config --global user.name "Your Name"
# 设置邮箱
git config --global user.email "Your Email"
```

## 设置默认编辑器（可选） {#config-editor}

- 设置默认编辑器为 Vim

  ```sh
  git config --global core.editor vim
  ```

- 设置默认编辑器为 VSCode

  ```sh
  git config --global core.editor "code --wait"
  ```

## 配置 SSH 密钥（用于 GitHub、GitLab 等远程仓库）{#ssh}

1. 生成 SSH 密钥

   ```sh
   ssh-keygen -t rsa -b 4096 -C "你的邮箱地址"
   ```

   解释：

   - `-t rsa`：指定密钥类型为 RSA
   - `-b 4096`：指定密钥长度为 4096 位
   - `-C "你的邮箱地址"`：指定注释信息为你的邮箱地址

   执行命令后，会提示你输入保存密钥的文件路径，按回车键默认保存在 `~/.ssh/id_rsa`。

2. 设置密码（可选）

   系统会提示你设置一个密码，这个密码用来加密你的私钥文件。如果你不想设置密码，直接按回车键即可。

3. 添加 SSH 密钥到 ssh-agent

   ```sh
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_rsa
   ```

   注意：`~/.ssh/id_rsa` 是你生成的 SSH 密钥的路径。

4. 复制 SSH 公钥到剪贴板

   ```sh
   pbcopy < ~/.ssh/id_rsa.pub
   ```

   或者对于 Linux 系统：

   ```sh
   cat ~/.ssh/id_rsa.pub | xclip -selection clipboard
   ```

5. 在 GitHub、GitLab 等远程仓库添加 SSH 公钥。

6. 测试 SSH 连接

   ```sh
   ssh -T git@github.com
   ```

## 常用 Git 命令 {#commands}

| 命令                                                 | 功能说明                                         |
| ---------------------------------------------------- | ------------------------------------------------ |
| `git rebase --abort`                                 | 取消变基操作                                     |
| `git branch \| grep -v "^\*" \| xargs git branch -D` | 删除除当前分支外的所有分支                       |
| `git branch \| xargs git branch -D`                  | 删除所有本地分支，包括当前分支                   |
| `git fetch --prune`                                  | 从远程仓库获取最新的代码，并删除已经被删除的分支 |

## 遇到的问题 {#question}

### Connection closed by 198.18.1.24 port 22 {#question-1}

确保你已经正确配置 SSH 密钥，并将公钥添加到 GitHub。

- 检查是否有 SSH 密钥：

  ```sh
  ls -al ~/.ssh
  ```

  如果你看不到 `id_rsa` 和 `id_rsa.pub`，参考 [上文的步骤](#ssh) 生成 SSH 密钥。

- 使用 GitHub 的备用端口 443 ：

  ```sh
  code ~/.ssh/config
  ```

  ::: details 遇到了 zsh: command not found: code 错误？

  使用 `vim` 或其他编辑器打开 `~/.ssh/config` 文件：

  ```sh
  vim ~/.ssh/config
  ```

  或者参考 [安装 code 命令行工具](../mac/vscode#install-code)。
  :::

  在文件中添加以下内容：

  ```sh
  Host github.com
  Hostname ssh.github.com
  User git
  Port 443
  IdentityFile ~/.ssh/id_rsa
  ```

  这个示例配置会让 SSH 在连接到 GitHub 时使用端口 `443`，并且指定使用你的 `~/.ssh/id_rsa` 私钥文件。

### The authenticity of host '[ssh.github.com]:443 ([198.18.4.3]:443)' can't be established {#question-2}

1. 这是因为你第一次连接 GitHub，SSH 不认识 GitHub 的主机密钥。输入 `yes` 继续连接。

   ```sh
   Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
   ```

2. 将主机密钥添加到 `known_hosts`

   在你输入 `yes` 后，GitHub 的主机密钥会被添加到 `~/.ssh/known_hosts` 文件中。如果你想手动添加，可以执行以下命令：

   ```sh
   ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
   ```
