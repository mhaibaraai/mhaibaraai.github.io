# Git {#Git}

> 版本控制策略、常用命令和技巧

## 安装配置 {#install}

- Mac 通常自带 Git，但如果没有安装，或者你想更新到最新版本，可以通过以下几种方式安装：

  - 通过 Homebrew 安装

  ```sh
  brew install git
  ```

  - 通过 Xcode 安装

  ```sh
  xcode-select --install
  ```

- Windows

  - 通过 Git 官网下载安装包：[https://git-scm.com/download/win](https://git-scm.com/download/win)

  验证是否安装成功：

  ```sh
  git --version
  ```

## 配置 Git 用户信息 {#config}

次提交时，Git 需要知道提交者的身份信息。通过以下命令设置全局用户信息：

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

   系统会提示你设置一个密码短语（passphrase）来保护私钥：

   ```sh
   Enter passphrase (empty for no passphrase):
   ```

   你可以输入一个密码短语，或者直接按 Enter 跳过（不推荐）。如果设置了密码短语，每次使用私钥时都需要输入。

3. 添加 SSH 密钥到 SSH 代理

   ```sh
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_rsa
   ```

   注意：`~/.ssh/id_rsa` 是你生成的 SSH 密钥的路径。

4. 将公钥添加到 Git 远程仓库

   - 复制 SSH 密钥到剪贴板

     ```sh
     pbcopy < ~/.ssh/id_rsa.pub
     ```

   - 登录 Git 远程仓库，打开设置页面，添加 SSH 密钥
   - 在用户设置中找到 `SSH` 和 `GPG` 密钥，选择 `New SSH Key`。
   - 粘贴你的公钥，并保存。

5. 测试 SSH 连接，以 GitHub 为例

   ```sh
   ssh -T git@github.com
   ```

   如果成功，你会看到类似如下的消息：

   ```sh
   Hi username! You've successfully authenticated, but GitHub does not provide shell access.
   ```

## 配置 GPG 签名 {#gpg}

名的提交 通过 GPG (GNU Privacy Guard) 或者 S/MIME 来验证提交者的身份，确保代码的来源是可信的，并防止提交内容被篡改。

1. 安装 GPG

   - macOS

   ```sh
   brew install gpg
   ```

   - Windows：下载并安装 [GPG for Windows](https://gpg4win.org/)

2. 生成 GPG 密钥

   运行以下命令来生成 GPG 密钥：

   ```sh
   gpg --full-generate-key
   ```

   生成密钥过程：

   1. 选择加密算法：选择 `RSA and RSA`，按下回车。
   2. 密钥大小：设置密钥大小为 `4096`，然后回车。
   3. 密钥有效期：选择 `0`（表示永不过期），然后回车。
   4. 确认：选择 `y` 以确认选择。
   5. 填写个人信息：
      - 输入你的 姓名，与 GitHub 上的用户名一致。
      - 输入你的 邮箱，与 GitHub 账户的邮箱一致。
      - 可选项：输入一个备注（例如 “`GitHub key`”），然后确认。
   6. 设置密码：为你的密钥设置一个强密码，这个密码用于保护你的私钥。

   生成完成后，GPG 会显示一个唯一的密钥 ID（一个16位的字符串）。

3. 列出并查找 GPG 密钥 ID

   ```sh
   gpg --list-secret-keys --keyid-format LONG
   ```

   输出示例：

   - `rsa4096/XXXXXXXXXXXXXX` : `密钥类型/密钥ID`
   - `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` : `密钥指纹`

   ```sh
   sec   rsa4096/XXXXXXXXXXXXXX 2024-09-01 [SCEA]
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   uid           [ultimate] Your Name <your.email@example.com>
   ```

4. 添加 GPG 密钥到 Git

   - `your-key-id`： GPG 密钥 ID

   ```sh
   gpg --armor --export your-key-id
   ```

   复制输出的 GPG 密钥，然后添加到 Git 远程仓库。

5. 配置 Git 使用 GPG 签名

   ```sh
   git config --global user.signingkey your-key-id
   git config --global commit.gpgsign true
   ```

   ::: tip 配置 VSCode 以自动签署提交 ?
   跳转到 [VSCode 配置 GPG 签名](../mac/vscode#gpg) 了解更多。
   :::

## 常用命令 {#command}

- 取消变基操作

```sh
git rebase --abort
```

- 删除所有本地分支

```sh
git branch | grep -v "master" | xargs git branch -D
```

- 删除除当前分支外的所有分支

```sh
git branch | grep -v "^\*" | xargs git branch -D
```

- 删除所有本地分支，包括当前分支

```sh
git branch | xargs git branch -D
```

- 将远程仓库的 master 分支的代码合并到你的本地分支

```sh
git merge new_remote/master --allow-unrelated-histories
```

- 强制推送本地分支到远程仓库

```sh
git push new_remote your_branch -f
```

- 从远程仓库获取最新的代码，并删除在远程仓库中已经被删除的分支

```sh
git fetch --prune
```

## 遇到的问题 {#question}

### Connection closed by 198.18.1.24 port 22 {#question-1}

- 确保你已经正确配置 SSH 密钥，并将公钥添加到 GitHub。

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

- 这是因为你第一次连接 GitHub，SSH 不认识 GitHub 的主机密钥。输入 `yes` 继续连接。

```sh
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
```

- 将主机密钥添加到 `known_hosts`

在你输入 `yes` 后，GitHub 的主机密钥会被添加到 `~/.ssh/known_hosts` 文件中。如果你想手动添加，可以执行以下命令：

```sh
ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
```
