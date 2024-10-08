---
order: 2
---

# Algolia Search 搜索 {#start}

VitePress 支持使用 [Algolia DocSearch](https://docsearch.algolia.com/docs/what-is-docsearch/) 搜索文档站点。

## 在 Algolia DocSearch 官网填写自己的文档网站的地址和邮箱进行申请 {#apply}

![Algolia DocSearch 申请图片](/algolia/apply.png)

## 申请通过后，会收到邮件，邮件中包含了 `API Key` 和 `Index Name` {#apply-reply}

需要回复邮件确认申请通过，点击链接到官网注册账号。

![Algolia DocSearch 申请通过图片](/algolia/apply-reply.png)

在 [Algolia 官网](https://dashboard.algolia.com/) 中可以查看到自己的 `Application ID` 和 `API Key`。

::: warning 注意
`Write API Key` 是私有 `API` 密钥，用于创建，更新和删除您的索引，不要泄露！
:::

![查看 api-key ](/algolia/api-key.png)

## 在 VitePress 项目中配置 Algolia DocSearch {#config}

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
        appId: 'xxx',
        apiKey: 'xxx',
        indexName: 'xxx',

        // 中文转换
        ...algoliaSearch,
      }
    }
  }
})
```

<<< @/.vitepress/config/algolia.ts

:::

## 添加实时更新索引 {#real-time-update}

### Github Secrets 中添加私钥 {#github-secrets}

打开 `Algolia Crawlers` 官网， `ALGOLIA_APP_ID` 和 `Algolia API Key` 添加到 Github 项目的 Secrets 中，在 **CI** 脚本中使用。

- `ALGOLIA_APP_ID`：取 **Algolia** 的 `Algolia App ID`
- `ALGOLIA_API_KEY`：取 **Algolia** 的 `Algolia API Key`

![crawler key图片](/algolia/crawler.png)

![github-secret 配置图片](/algolia/github-secret.png)

### 创建 crawlerConfig.json 文件 {#crawler-config}

在项目根目录下新建爬虫 `crawlerConfig.json` 文件，配置需要爬取的页面。

> 参考 [vitepress](https://vitepress.dev/zh/reference/default-theme-search#crawler-config) 的配置

```json
{
  "index_name": "xxx",
  "start_urls": ["xxx"],
  "rateLimit": 8,
  "maxDepth": 10,
  "selectors": {
    "lvl0": {
      "selector": "",
      "defaultValue": "Documentation"
    },
    "lvl1": ".content h1",
    "lvl2": ".content h2",
    "lvl3": ".content h3",
    "lvl4": ".content h4",
    "lvl5": ".content h5",
    "content": ".content p, .content li",
    "lang": {
      "selector": "/html/@lang",
      "type": "xpath",
      "global": true
    }
  },
  "selectors_exclude": [
    "aside",
    ".page-footer",
    ".next-and-prev-link",
    ".table-of-contents"
  ],
  "custom_settings": {
    "attributesForFaceting": ["lang", "tags"]
  },
  "js_render": true
}
```

### 创建 CI 脚本 {#ci-script}

在项目根目录 `.github/workflows` 文件夹下创建 `algolia.yml` 文件

::: tip 提示
可以添加时间延迟，避免文档更新不及时

```yml
- name: Delay before pushing indices to Algolia
  run: sleep 60 && echo "Delay complete, pushing indices now."
```

:::

```yml
name: algolia
on:
  push:
    branches:
      - main
jobs:
  algolia:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Get the content of algolia.json as config
        id: algolia_config
        run: echo "config=$(cat crawlerConfig.json | jq -r tostring)" >> $GITHUB_OUTPUT
      - name: Push indices to Algolia
        uses: signcl/docsearch-scraper-action@master
        env:
          APPLICATION_ID: ${{ secrets.ALGOLIA_APP_ID }}
          API_KEY: ${{ secrets.ALGOLIA_API_KEY }}
          CONFIG: ${{ steps.algolia_config.outputs.config }}
```

::: details 出现 Node.js x actions are deprecated 报错？
如果出现 `Node.js x actions are deprecated` 的提示，可以将 `uses: actions/checkout@v4` 的版本号升级一下。
:::

::: details 出现 Not enough rights to update an object 报错?
错误信息中显示 `Not enough rights to update an object` ，意味着你使用的 `API Key` 没有足够的权限来更新 `Algolia` 的索引对象。
:::
