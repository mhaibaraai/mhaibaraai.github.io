# Algolia Search 搜索

VitePress 支持使用 [Algolia DocSearch](https://docsearch.algolia.com/docs/what-is-docsearch/) 搜索文档站点。

## 在 [Algolia DocSearch 官网](https://docsearch.algolia.com/apply) 填写自己的文档网站的地址和邮箱进行申请

![Algolia DocSearch 申请图片](/algolia/apply.png)

## 申请通过后，会收到邮件，邮件中包含了 `API Key` 和 `Index Name`

在 [Algolia 官网](https://dashboard.algolia.com/) 中可以查看到自己的 `Application ID` 和 `API Key`。

![Algolia DocSearch 申请通过图片](/algolia/apply-reply.png)

## 在 VitePress 项目中配置 Algolia DocSearch

在 `.vitepress/config.ts` 中添加 `search` 配置项：

::: code-group

```ts [config.ts]
import { defineConfig } from 'vitepress'
import { algoliaSearch } from './algolia'

export default defineConfig({
  themeConfig: {
    search: {
      provider: 'algolia',
      options: {
        appId: '7RNWHZWFWD',
        apiKey: 'fa32f02af36769520ea9d4b684de2e87',
        indexName: 'mhaibaraaiio',

        // 中文转换
        ...algoliaSearch,
      }
    }
  }
})
```

<<< @/.vitepress/config/algolia.ts

:::
