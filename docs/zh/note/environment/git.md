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

## 配置 GPG 密钥 {#gpg}

1. 安装 GPG

   ```sh
   brew install gnupg
   ```

2. 生成 GPG 密钥

   ```sh
   gpg --full-generate-key
   ```

   - **选择密钥类型**：默认情况下，现在的 GPG 会选择 `ECC and ECC` 。您可以直接按 `Enter` 选择默认选项，生成 `ECC` 密钥。

     :::warning 注意

     `ECC` 密钥（如 `Ed25519` ）提供了更高的安全性和更小的密钥尺寸。但在某些旧系统或软件中，可能存在兼容性问题。如果需要最大兼容性，可以选择 `RSA and RSA` ，然后将密钥长度设置为 `4096` 位。

     :::

   - **选择曲线类型**： 如果选择了 `ECC`，系统会提示您选择曲线。默认的 `Curve 25519（Ed25519）`是推荐的选项，直接按 `Enter` 即可。
   - **设置密钥的有效期**： 输入 `0` 表示密钥永不过期，或者根据需要设置。
   - **用户信息**： 输入您的姓名、邮箱地址（必须与 GitHub 上的邮箱一致）和可选的注释。
   - **确认信息**： 检查所有信息是否正确，输入 `O` 确认。
   - **设置密码短语**： 为您的密钥设置一个安全的密码短语。

3. 查看 GPG 密钥

   ```sh
   gpg --list-secret-keys --keyid-format LONG
   ```

   会看到类似以下的输出：

   ```sh
   [keyboxd]
   ----------------
   sec   ed25519/密钥ID  日期 [SC]
         密钥指纹
   uid           [ultimate] 姓名 <邮箱>
   ssb   cv25519/子密钥ID  日期 [E]
   ```

   记录下 **ed25519/** 后面的长密钥 ID。例如，`ABCD1234EFGH5678`。

4. 导出并复制公钥

   ```sh
   gpg --armor --export 密钥ID | pbcopy
   ```

   复制的内容类似于：

   ```sh
   -----BEGIN PGP PUBLIC KEY BLOCK-----

   mDMEY...
   ...
   -----END PGP PUBLIC KEY BLOCK-----
   ```

5. 将 GPG 密钥添加到 GitHub
6. 配置 Git 使用 GPG 签名

   - 设置默认签名密钥
   - 启用自动签名提交
   - 指定 GPG 程序的路径
   - 使用默认 `openpgp` 格式

   ```sh
   git config --global user.signingkey 密钥ID
   git config --global commit.gpgsign true
   git config --global gpg.program $(which gpg)
   git config --global --unset gpg.format
   ```

7. 安装 pinentry-mac

   pinentry 程序用于提示您输入 GPG 密钥的密码。

   ```sh
   brew install pinentry-mac
   echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
   killall gpg-agent
   ```

   为避免每次提交都输入密码，可以配置 GPG 缓存密码：

   ```sh
   code ~/.gnupg/gpg-agent.conf
   ```

   添加以下内容，代表把密码缓存 1 小时，最大缓存时间为 2 小时。

   ```sh
   default-cache-ttl 3600
   max-cache-ttl 7200
   ```

   重启代理：

   ```sh
   killall gpg-agent
   ```

8. 在 VSCode 打开 `"git.enableCommitSigning": true,` 选项。

   ![VSCode GPG 设置](/vscode/git-vscode-gpg.png)

9. gpg failed to sign the data fatal: failed to write commit object？

   - 验证 gpg-agent 是否已启动

     ```sh
     pgrep gpg-agent
     ```

     如果命令返回一个或多个进程 ID，表示 gpg-agent 已成功启动。

     如果未运行，尝试重新启动 gpg-agent：

     ```sh
      gpgconf --kill gpg-agent
      gpgconf --launch gpg-agent
     ```

   - 设置环境变量

     在您的 Shell 配置文件（如 `~/.bashrc` 或 `~/.zshrc`）中添加：

     ```sh
     export GPG_TTY=$(tty)
     ```

     然后重新加载配置文件：

     ```sh
     source ~/.zshrc  # 或者 source ~/.bash_profile
     ```

   - 确保 `commit.gpgsign` 设置为 `true` ，且没有冲突的条目

     ```sh
     git config -l | grep gpg
     ```

     如果发现有类似以下输出：

     ```sh
     commit.gpgsign=true
     gpg.program=/opt/homebrew/bin/gpg
     commit.gpgsign=false
     ```

     找出哪个配置文件将 `commit.gpgsign` 设置为 `false`,它可能是在你的仓库中的本地 `.git/config` 文件中设置的：

     ```sh
     git config --show-origin --get-all commit.gpgsign
     ```

     全局启用 GPG 签名，删除冲突的配置：

     ```sh
     git config --global commit.gpgsign true
     git config --unset commit.gpgsign
     ```

     或者，你也可以手动编辑当前仓库的 `.git/config` 文件，删除或注释掉 `commit.gpgsign=false` 这一行。

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
