# 浙政钉

## H5 应用 Console 调试功能

> 浙政钉 `H5` 应用开发中，为了方便调试，可以在页面中加入 `VConsole` 调试工具，方便查看日志、调试代码。

:::tip 一个轻量、可拓展、针对手机网页的前端开发者调试面板
[vConsole](https://github.com/Tencent/vConsole/tree/master)
:::

使用 NPM 安装（推荐）

```sh
npm install vconsole
```

### Pc 端

<<< @/snippets/work/dingtalk/index.ts#consloe-pc

### Ios 与 Android 端

<<< @/snippets/work/dingtalk/index.ts#consloe-mobile

## 浙政钉应用埋点

埋点需要三个参数

* `sapp_name` ：应用标识
* `bid` ：`sapp_name`_zzdpro
* `sapp_id` ：应用ID（可以去浙政钉支持群咨询）、[官网查看埋点参数](https://yida-pro.ding.zj.gov.cn/alibaba/web/APP_VTZ4TZZSGZXB37IUIUM6/inst/homepage/#/REPORT-GWLBVYNV25OXGEY68AOOWR7GIXSVZ2B75HH1SLC6)

### 路由配置

::: code-group

<<< @/snippets/work/dingtalk/index.ts#permission[permission.ts]

<<< @/snippets/work/dingtalk/index.ts#aplus_push[aplus_push.ts]

:::

### index.html 配置

<<< @/snippets/work/dingtalk/index.html

### 多端应用 index.html 配置

<<< @/snippets/work/dingtalk/index-multi.html

::: tip 参考文档
[浙政钉埋点文档](https://wetx6c6wxe.feishu.cn/wiki/wikcnu9v1TpnP34dShwEyPzNife)
:::
