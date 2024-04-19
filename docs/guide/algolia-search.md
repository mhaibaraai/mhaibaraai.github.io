# Algolia Search 搜索

VitePress 支持使用 [Algolia DocSearch](https://docsearch.algolia.com/docs/what-is-docsearch/) 搜索文档站点。

## 在 [Algolia DocSearch 官网](https://docsearch.algolia.com/apply) 填写自己的文档网站的地址和邮箱进行申请

![Algolia DocSearch 申请图片](/algolia/apply.png)

## 申请通过后，会收到邮件，邮件中包含了 `API Key` 和 `Index Name`

需要回复邮件确认申请通过，点击链接到官网注册账号。

![Algolia DocSearch 申请通过图片](/algolia/apply-reply.png)

在 [Algolia 官网](https://dashboard.algolia.com/) 中可以查看到自己的 `Application ID` 和 `API Key`。

::: warning 注意
`Write API Key` 是私有 `API` 密钥，用于创建，更新和删除您的索引，不要泄露！
:::

![查看 api-key ](/algolia/api-key.png)

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

## 添加实时更新索引

### Github Secrets 中添加私钥

将上述获取的 `ALGOLIA_APP_ID` 和 `ALGOLIA_API_KEY` 添加到 Github 项目的 Secrets 中，在 **CI** 脚本中使用。

* `ALGOLIA_APP_ID`：取 **Algolia** 的 `Application ID`
* `ALGOLIA_API_KEY`：取 **Algolia** 的 `Write API Key`

![github-secret 配置图片](/algolia/github-secret.png)

### 创建 crawlerConfig.json 文件

在项目根目录下新建爬虫 `crawlerConfig.json` 文件，配置需要爬取的页面。

::: tip 提示
可以参考 [vitepress](https://vitepress.dev/zh/reference/default-theme-search#crawler-config) 的配置
:::

### 创建 CI 脚本

在项目根目录 `.github/workflows` 文件夹下创建 `algolia.yml` 文件

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

::: details Node.js x actions are deprecated ？
如果出现 `Node.js x actions are deprecated` 的提示，可以将 `uses: actions/checkout@v4` 的版本号升级一下。
:::
