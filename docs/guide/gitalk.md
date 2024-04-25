# 添加 Gitalk 添加评论功能

## 注册 GitHub Application

1、首先，你需要在 `github` 上注册一个 [GitHub Application](https://github.com/settings/applications/new) ，填写参考如下：

::: tip 提示

- `Application name` 填写你的应用名称，例如：`docsify`

- `Homepage URL` 填写你的网站地址，例如：`https://docsify.js.org`

- `Authorization callback URL` 填写你的网站地址，例如：`https://docsify.js.org`
  :::

![ register 注册图](/gitalk/register.png)

2、创建一个 `Client secret` 来验证作为 `API` 的应用程序

::: warning 注意

创建后先复制新创建的 `Client secret`，刷新页面就看不到了

:::

![创建 secret 图片](/gitalk/secret.png)

找到 `Client ID` 和 `Client secret` 保存下来，后面会用到。

## 配置 Gitalk

1、安装 `gitalk` 插件

```sh
pnpm add -D gitalk
```

2、在 `docs/.vitepress/theme` 目录下创建 `index.ts` 文件，替换默认的 `layout` 组件

```ts
import DefaultTheme from 'vitepress/theme'
import Layout from './components/layout.vue'

export default {
  extends: DefaultTheme,
  Layout
}
```

3、在 `docs/.vitepress/theme/components` 目录下创建 `layout.vue` 文件，添加 `gitalk` 评论组件

```vue
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

import GitalkVue from './gitalk.vue'
</script>

<template>
  <!-- eslint-disable-next-line vue/component-name-in-template-casing -->
  <DefaultTheme.Layout>
    <template #doc-after>
      <GitalkVue />
    </template>
  </DefaultTheme.Layout>
</template>
```

4、在 `docs/.vitepress/theme/components` 目录下创建 `gitalk.vue` 文件，添加 `gitalk` 评论组件

<<< @/.vitepress/theme/components/gitalk.vue

::: tip 提示

本地调试时，可以先把 `Authorization callback URL` 改为本地调试地址，例如: `http://localhost:3000`

:::

::: details 错误：未找到相关的 Issues 进行评论？

先登录 `GitHub`，然后在 `GitHub` 仓库的 `Issues` 里面创建一个新的 `Issue`，然后刷新页面就可以看到评论了。

:::

::: details 发现评论重复？

尝试在 `Gitalk` 组件上添加 `:key="Date.now()"` 属性，强制刷新组件。

```vue
<GitalkVue :key="Date.now()" />
```

:::
