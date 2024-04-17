# Algolia Search 搜索

VitePress 支持使用 [Algolia DocSearch](https://docsearch.algolia.com/docs/what-is-docsearch/) 搜索文档站点。

## 在 [Algolia DocSearch 官网](https://docsearch.algolia.com/apply) 填写自己的文档网站的地址和邮箱进行申请

![Algolia DocSearch 申请图片](/algolia/apply.png)

## 申请通过后，会收到邮件，邮件中包含了 `API Key` 和 `Index Name`

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

```ts [algolia.ts]
import type { DefaultTheme } from 'vitepress'

export const algoliaSearch: Partial<DefaultTheme.AlgoliaSearchOptions> = {
  placeholder: '搜索文档',
  translations: {
    button: {
      buttonText: '搜索文档',
      buttonAriaLabel: '搜索文档',
    },
    modal: {
      searchBox: {
        resetButtonTitle: '清除查询条件',
        resetButtonAriaLabel: '清除查询条件',
        cancelButtonText: '取消',
        cancelButtonAriaLabel: '取消',
      },
      startScreen: {
        recentSearchesTitle: '搜索历史',
        noRecentSearchesText: '没有搜索历史',
        saveRecentSearchButtonTitle: '保存至搜索历史',
        removeRecentSearchButtonTitle: '从搜索历史中移除',
        favoriteSearchesTitle: '收藏',
        removeFavoriteSearchButtonTitle: '从收藏中移除',
      },
      errorScreen: {
        titleText: '无法获取结果',
        helpText: '你可能需要检查你的网络连接',
      },
      footer: {
        selectText: '选择',
        navigateText: '切换',
        closeText: '关闭',
        searchByText: '搜索提供者',
      },
      noResultsScreen: {
        noResultsText: '无法找到相关结果',
        suggestedQueryText: '你可以尝试查询',
        reportMissingResultsText: '你认为该查询应该有结果？',
        reportMissingResultsLinkText: '点击反馈',
      },
    },
  },
}
```

:::
