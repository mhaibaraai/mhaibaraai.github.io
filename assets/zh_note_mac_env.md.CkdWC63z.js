import{_ as i,c as a,ah as e,o as t}from"./chunks/framework.Zls3YEZT.js";const h="/iterm2/iterm2.png",l="/iterm2/default.png",n="/iterm2/import.png",p="/iterm2/theme.png",k="/iterm2/status.png",r="/iterm2/status-active.png",f=JSON.parse('{"title":"记录一次 Mac 环境配置","description":"","frontmatter":{},"headers":[],"relativePath":"zh/note/mac/env.md","filePath":"zh/note/mac/env.md","lastUpdated":1729672101000}'),d={name:"zh/note/mac/env.md"};function o(g,s,c,y,u,m){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="mac-env" tabindex="-1">记录一次 Mac 环境配置 <a class="header-anchor" href="#mac-env" aria-label="Permalink to &quot;记录一次 Mac 环境配置 {#mac-env}&quot;">​</a></h1><ul><li><a href="https://brew.sh/zh-cn/" target="_blank" rel="noreferrer">Homebrew ： macOS（或 Linux）缺失的软件包的管理器</a></li><li><a href="https://iterm2.com/" target="_blank" rel="noreferrer">iTerm2 - macOS Terminal Replacement</a></li><li><a href="https://ohmyz.sh/" target="_blank" rel="noreferrer">Oh My Zsh - a delightful &amp; open source framework for Zsh</a></li></ul><h2 id="install-homebrew" tabindex="-1">Homebrew <a class="header-anchor" href="#install-homebrew" aria-label="Permalink to &quot;Homebrew {#install-homebrew}&quot;">​</a></h2><p>Homebrew（通常称为 Brew）是 macOS 和 Linux 上的一个流行的包管理器，用于简化软件的安装和管理。</p><h3 id="open-terminal" tabindex="-1">打开终端 <a class="header-anchor" href="#open-terminal" aria-label="Permalink to &quot;打开终端 {#open-terminal}&quot;">​</a></h3><p>在应用程序文件夹中找到终端（Terminal），或使用 Spotlight 搜索“终端”。</p><h3 id="run-install-command" tabindex="-1">运行安装命令 <a class="header-anchor" href="#run-install-command" aria-label="Permalink to &quot;运行安装命令 {#run-install-command}&quot;">​</a></h3><p>在终端中输入以下命令并按回车</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/bin/bash</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -fsSL</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre></div><h3 id="config-env" tabindex="-1">配置环境变量 <a class="header-anchor" href="#config-env" aria-label="Permalink to &quot;配置环境变量 {#config-env}&quot;">​</a></h3><p>安装完成后，可能需要将 Homebrew 添加到你的 PATH 中，按提示操作，例如：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes vitesse-light vitesse-dark has-focused-lines vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span>==&gt; Next steps:</span></span>
<span class="line"><span></span></span>
<span class="line"><span> - Run these two commands in your terminal to add Homebrew to your PATH:</span></span>
<span class="line highlighted has-focus"><span>   (echo; echo &#39;eval &quot;$(/opt/homebrew/bin/brew shellenv)&quot;&#39;) &gt;&gt; /Users/yixuanmiao/.zprofile</span></span>
<span class="line highlighted has-focus"><span>     eval &quot;$(/opt/homebrew/bin/brew shellenv)&quot;</span></span>
<span class="line"><span> - Run brew help to get started</span></span>
<span class="line"><span> - Further documentation:</span></span>
<span class="line"><span>https://docs.brew.sh</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">eval &quot;$(/opt/homebrew/bin/brew shellenv)&quot;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;&gt;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> /Users/yixuanmiao/.zprofile</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">eval</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/opt/homebrew/bin/brew</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> shellenv</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre></div><h3 id="verify-install" tabindex="-1">验证安装 <a class="header-anchor" href="#verify-install" aria-label="Permalink to &quot;验证安装 {#verify-install}&quot;">​</a></h3><p>输入以下命令检查 Homebrew 是否安装成功：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">brew</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span></span></code></pre></div><p>输出:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Homebrew</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 4.3.23-56-g9160445</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>更多参考可以跳到 <a href="./brew">Homebrew 常用命令</a></p></div><h2 id="install-iterm2" tabindex="-1">Iterm2 <a class="header-anchor" href="#install-iterm2" aria-label="Permalink to &quot;Iterm2 {#install-iterm2}&quot;">​</a></h2><p>Iterm2 是 macOS 上一款功能强大的终端仿真器，提供了许多增强的功能和自定义选项。</p><p>最终效果如下：</p><p><img src="`+h+'" alt="iterm2"></p><h3 id="download-iterm2" tabindex="-1">下载 Iterm2 <a class="header-anchor" href="#download-iterm2" aria-label="Permalink to &quot;下载 Iterm2 {#download-iterm2}&quot;">​</a></h3><ul><li><p>访问 <a href="https://iterm2.com/" target="_blank" rel="noreferrer">Iterm2 官网</a> 下载最新版本的 Iterm2</p></li><li><p>或者使用 Homebrew 安装</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">brew</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --cask</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> iterm2</span></span></code></pre></div></li></ul><h3 id="set-default" tabindex="-1">将 iTerm2设置为默认终端 <a class="header-anchor" href="#set-default" aria-label="Permalink to &quot;将 iTerm2设置为默认终端 {#set-default}&quot;">​</a></h3><p>打开 iTerm2，选择菜单栏中的 iTerm2 -&gt; Make iTerm2 Default Term</p><p><img src="'+l+'" alt="默认终端"></p><h3 id="import-config" tabindex="-1">配置迁移(可选) <a class="header-anchor" href="#import-config" aria-label="Permalink to &quot;配置迁移(可选) {#import-config}&quot;">​</a></h3><p>如果你之前使用过终端，可以将配置迁移过来,并将其设置为默认配置。</p><ul><li>iTerm2 -&gt; Setting -&gt; Profiles -&gt; Other Actions</li><li>Save Profile as JSON (保存配置文件)</li><li>Import JSON Profiles (导入配置文件)</li><li>Set as Default (设置为默认配置)</li></ul><p><img src="'+n+'" alt="import"></p><h3 id="theme" tabindex="-1">更改主题 <a class="header-anchor" href="#theme" aria-label="Permalink to &quot;更改主题 {#theme}&quot;">​</a></h3><ul><li>iTerm2 -&gt; Setting -&gt; Profiles -&gt; Colors-&gt; Color Presets</li><li>选择你喜欢的主题 (例如：Solarized)</li></ul><p><img src="'+p+'" alt="theme"></p><h3 id="status-bar" tabindex="-1">调整 Status Bar <a class="header-anchor" href="#status-bar" aria-label="Permalink to &quot;调整 Status Bar {#status-bar}&quot;">​</a></h3><ul><li>iTerm2 -&gt; Setting -&gt; Profiles -&gt; Session -&gt; Status Bar</li><li>勾选 Enable status bar</li><li>配置你需要的信息</li></ul><p><img src="'+k+'" alt="status"></p><p>将上方 Status Bar Component Menu 中的内容拖动到 Active Components 中，即可显示在状态栏中。</p><p><img src="'+r+`" alt="status-active"></p><h2 id="oh-my-zsh" tabindex="-1">Oh My Zsh <a class="header-anchor" href="#oh-my-zsh" aria-label="Permalink to &quot;Oh My Zsh {#oh-my-zsh}&quot;">​</a></h2><p><code>Oh My Zsh</code> 是一个流行的 Zsh 配置管理工具，旨在简化 Zsh 的配置和管理。它提供了许多预配置的插件、主题以及一些便捷的功能，帮助用户提高终端使用效率。</p><h3 id="install-oh-my-zsh" tabindex="-1">安装 Oh My Zsh <a class="header-anchor" href="#install-oh-my-zsh" aria-label="Permalink to &quot;安装 Oh My Zsh {#install-oh-my-zsh}&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -c</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -fsSL</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre></div><p>安装完成后，<code>Oh My Zsh</code> 会自动创建一个配置文件 <code>~/.zshrc</code>。你可以在这个文件中进行自定义：</p><ul><li><p><strong>修改主题</strong>： 找到 <code>ZSH_THEME</code> 这一行，修改为你喜欢的主题（例如 <code>robbyrussell</code>、<code>powerlevel10k/powerlevel10k</code> 等）。</p></li><li><p><strong>启用插件</strong>： 在 <code>plugins=(...)</code> 一行中添加你需要的插件，如 <code>git</code>、<code>zsh-autosuggestions</code>、<code>zsh-syntax-highlighting</code> 等。</p><p>每次修改完 <code>~/.zshrc</code> 后，运行以下命令以应用更改：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.zshrc</span></span></code></pre></div></li></ul><h3 id="change-theme" tabindex="-1">修改主题 Powerlevel10k <a class="header-anchor" href="#change-theme" aria-label="Permalink to &quot;修改主题 Powerlevel10k {#change-theme}&quot;">​</a></h3><p><code>Powerlevel10k</code> 是一个非常流行的 Zsh 主题，它以速度和高度可定制化著称，能够为你的终端提供丰富的信息和美观的外观。</p><ol><li><p>克隆 Powerlevel10k 到 <code>oh-my-zsh</code> 主题目录</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clone</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --depth=1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://github.com/romkatv/powerlevel10k.git</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \${</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ZSH_CUSTOM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">~</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">oh-my-zsh</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">custom</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/themes/powerlevel10k</span></span></code></pre></div></li><li><p>启用 Powerlevel10k 主题</p><ul><li><p>打开 <code>~/.zshrc</code> 文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">code</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.zshrc</span></span></code></pre></div></li><li><p>找到 <code>ZSH_THEME=&quot;...&quot;</code> 这一行，修改为：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ZSH_THEME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">powerlevel10k/powerlevel10k</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre></div></li><li><p>保存并退出编辑器，然后运行以下命令以应用更改：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.zshrc</span></span></code></pre></div></li></ul></li><li><p>配置 Powerlevel10k</p><p>安装完成后，首次启动 Zsh 时会自动启动 Powerlevel10k 配置向导，它会引导你选择主题的外观和信息显示内容。</p><p>如果你想重新配置 Powerlevel10k，可以运行以下命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">p10k</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> configure</span></span></code></pre></div><p>以下是配置向导的示例：</p><ul><li>自动安装所需字体</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> This</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> is</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Powerlevel10k</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> configuration</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> wizard.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> It</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> will</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ask</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> you</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> a</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> few</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> questions</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> and</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">                        configure</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> your</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> prompt.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">                        Install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Meslo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Nerd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Font?</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">y</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  Yes</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> (recommended).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">n</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  No.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Use</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> the</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> current</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> font.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">q</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  Quit</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> and</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> do</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nothing.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Choice</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ynq]: y</span></span></code></pre></div><ul><li><p>手动安装字体 <a href="https://github.com/romkatv/powerlevel10k#manual-font-installation" target="_blank" rel="noreferrer">MesloLGS Nerd Font GitHub</a></p></li><li><p>生成配置文件</p><p>配置完成后，向导会生成一个 <code>~/.p10k.zsh</code> 文件，保存用户的所有设置。</p></li></ul></li></ol><h3 id="plugins" tabindex="-1">安装插件 <a class="header-anchor" href="#plugins" aria-label="Permalink to &quot;安装插件 {#plugins}&quot;">​</a></h3><p>Oh My Zsh 提供了多种实用插件，能够提升你的开发效率。以下是一些常用的插件：</p><ul><li><strong>git</strong>：方便 git 操作，缩短命令长度</li><li><strong>zsh-autosuggestions</strong>：根据历史命令自动补全</li><li><strong>zsh-syntax-highlighting</strong>：根据语法高亮显示命令</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://github.com/zsh-users/zsh-autosuggestions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \${</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ZSH_CUSTOM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">~</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">oh-my-zsh</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">custom</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/plugins/zsh-autosuggestions</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://github.com/zsh-users/zsh-syntax-highlighting.git</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \${</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ZSH_CUSTOM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">~</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">oh-my-zsh</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">custom</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/plugins/zsh-syntax-highlighting</span></span></code></pre></div><p>然后在 <code>~/.zshrc</code> 文件中启用这两个插件：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">plugins</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=(</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> zsh-autosuggestions</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> zsh-syntax-highlighting</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>启用插件后，运行以下命令以应用更改：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.zshrc</span></span></code></pre></div><h2 id="安装-git" tabindex="-1">安装 Git ？ <a class="header-anchor" href="#安装-git" aria-label="Permalink to &quot;安装 Git ？&quot;">​</a></h2><p>跳转到 <a href="./../environment/git">Git 配置</a></p><h2 id="安装-node-js" tabindex="-1">安装 Node.js ？ <a class="header-anchor" href="#安装-node-js" aria-label="Permalink to &quot;安装 Node.js ？&quot;">​</a></h2><p>跳转到 <a href="./../environment/node">Node.js 配置</a></p>`,61)]))}const v=i(d,[["render",o]]);export{f as __pageData,v as default};
