import{_ as s,c as e,ah as a,o as l}from"./chunks/framework.Zls3YEZT.js";const o="/vscode/quick-operating.png",t="/vscode/service-config.png",d="/vscode/add-vscode-action.png",n="/vscode/use-service.png",v=JSON.parse('{"title":"VSCode","description":"","frontmatter":{},"headers":[],"relativePath":"zh/note/mac/vscode.md","filePath":"zh/note/mac/vscode.md","lastUpdated":1727514127000}'),c={name:"zh/note/mac/vscode.md"};function p(h,i,r,k,u,g){return l(),e("div",null,i[0]||(i[0]=[a('<h1 id="vscode" tabindex="-1">VSCode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;VSCode {#vscode}&quot;">​</a></h1><h2 id="install" tabindex="-1">安装 <a class="header-anchor" href="#install" aria-label="Permalink to &quot;安装 {#install}&quot;">​</a></h2><ul><li>打开浏览器，访问 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode 官方下载页面</a></li><li>点击页面中的 &quot;Download for macOS&quot; 按钮。</li><li>下载完成后，你将获得一个 <code>.zip</code> 文件。</li><li>双击 <code>.zip</code> 文件进行解压，你会得到一个 <code>Visual Studio Code.app</code> 应用程序。</li><li>将 <code>Visual Studio Code.app</code> 拖动到 <strong>Applications</strong> 文件夹中，这样你就可以从应用程序目录运行它。</li></ul><h2 id="install-code" tabindex="-1">安装 <code>code</code> 命令行工具（可选） <a class="header-anchor" href="#install-code" aria-label="Permalink to &quot;安装 `code` 命令行工具（可选） {#install-code}&quot;">​</a></h2><p>为了能够在终端中使用 <code>code</code> 命令来快速打开文件和文件夹，你可以安装 <code>code</code> 命令行工具：</p><p>打开 VSCode，按 <code>Cmd + Shift + P</code>，然后输入 <code>Shell Command: Install &#39;code&#39; command in PATH</code>,选择该选项并执行。 安装完成后，你可以在终端中运行 code 命令。例如：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 打开当前目录</span></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">code</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .</span></span></code></pre></div><h2 id="add-right-click-menu" tabindex="-1">添加 &quot;使用 VSCode 打开&quot; 的右键菜单选项 <a class="header-anchor" href="#add-right-click-menu" aria-label="Permalink to &quot;添加 &quot;使用 VSCode 打开&quot; 的右键菜单选项 {#add-right-click-menu}&quot;">​</a></h2><ol><li><p>打开 Automator 应用程序</p><ul><li>你可以通过 Spotlight 搜索 <code>Automator</code> 打开它</li></ul></li><li><p>选择 &quot;快速操作&quot; 类型</p><p><img src="'+o+'" alt="quick-operating"></p></li><li><p>配置服务</p><ul><li>在窗口顶部，将 “工作流程收到当前” 更改为 “文件或文件夹”</li><li>将 “位于” 设置为 “访达.app”</li></ul><p><img src="'+t+`" alt="service-config"></p></li><li><p>添加 VSCode 动作：</p><ul><li><p>在左侧搜索框中输入 <code>运行 Shell 脚本</code>，将其拖动到右侧的工作区</p></li><li><p>在 <code>Shell</code> 下拉菜单中选择 <code>/bin/zsh</code></p></li><li><p>在 <code>传递输入</code> 下拉菜单中选择 <code>作为自变量</code></p></li><li><p>在脚本框中输入以下内容：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">for</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> f</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> in</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$@</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">do</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    open</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -a</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Visual Studio Code</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$f</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">done</span></span></code></pre></div></li></ul><p><img src="`+d+'" alt="add-vscode-action"></p></li><li><p>保存服务</p><ul><li>点击左上角的保存按钮，输入服务名称，例如 <code>使用 VSCode 打开</code></li></ul></li><li><p>使用服务</p><ul><li>在 Finder 中，右键单击文件或文件夹，选择 <code>服务</code> -&gt; <code>使用 VSCode 打开</code></li></ul><p><img src="'+n+'" alt="use-service"></p></li></ol>',9)]))}const f=s(c,[["render",p]]);export{v as __pageData,f as default};
