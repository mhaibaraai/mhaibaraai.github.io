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

```js
import VConsole from 'vconsole'

let vConsole = null

// 当鼠标按下中键时，显示vConsole，结束后销毁
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 123) {
    if (!vConsole)
      vConsole = new VConsole()
    else if (vConsole)
      vConsole.destroy()
  }
})
```

### Ios 与 Android 端

```js
let vConsole = null
let pressTimer = null

function handleTouchStart() {
  pressTimer = setTimeout(() => {
    if (!vConsole)
      vConsole = new VConsole()
    else if (vConsole)
      vConsole.destroy()
  }, 3000) // 长按时间阈值
}

function handleTouchEnd() {
  clearTimeout(pressTimer)
}
```

## 浙政钉应用埋点

埋点需要三个参数

- `sapp_name` ：应用标识
- `bid` ：`sapp_name`\_zzdpro
- `sapp_id` ：应用ID（可以去浙政钉支持群咨询）、[官网查看埋点参数](https://yida-pro.ding.zj.gov.cn/alibaba/web/APP_VTZ4TZZSGZXB37IUIUM6/inst/homepage/#/REPORT-GWLBVYNV25OXGEY68AOOWR7GIXSVZ2B75HH1SLC6)

### 路由配置

::: code-group

```ts [permission.ts]
import aplus_push from '@/utils/gdt_aplus'

router.beforeEach(async (to, from, next) => {
  if (token) {
    /** 开始埋点 */
    const { meta: { title }, path, fullPath } = to
    const pageId = (path.replace('/', '') || 'app').toUpperCase()
    const userId = userStore.getUserInfo()?.dingId
    aplus_push(pageId, title as string, fullPath, userId)
    /** 结束埋点 */
  }
})
```

```ts [gdt_aplus.ts]
// 浙政钉应用配置信息
const gdt_config = {
  sapp_id: 'xxx', // 43832
  sapp_name: 'xxx', // gxq_msgd01
}
/**
 * 浙政钉埋点-流量分析代码（基础埋点、用户信息埋点）
 * @param page_id 页面ID, 保证唯一性
 * @param page_name 页面名称
 * @param page_url 页面 url
 * @param _user_id 用户id
 * 浙政钉-H5&小程序应用采集开发手册文档：
 * https://www.yuque.com/sisialing/bcg47r/ywfbnk?#YmwM5
 */
export default function aplus_queue_push(
  page_id: number | string,
  page_name = 'app',
  page_url: string,
  _user_id: number | string,
) {
  /**
   * 基础埋点
   */
  // 单页应用或“单个页面”需异步补充PV日志参数还需进行如下埋点：
  window.aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['aplus-waiting', 'MAN'],
  })
  // 单页应用路由切换后或在异步获取到pv日志所需的参数后再执行sendPV：
  window.aplus_queue.push({
    action: 'aplus.sendPV',
    arguments: [
      {
        is_auto: false,
      },
      {
        // 当前你的应用信息，此两行按应用实际参数修改，不可自定义。
        sapp_id: gdt_config.sapp_id,
        sapp_name: gdt_config.sapp_name,
        // 自定义PV参数key-value键值对（只能是这种平铺的json，不能做多层嵌套）
        page_id,
        page_name,
        page_url,
      },
    ],
  })
  /**
   * 用户信息埋点
   */
  // 如采集用户信息是异步行为需要先执行这个BLOCK埋点
  window.aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['_hold', 'BLOCK'],
  })
  // 用户ID
  window.aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['_user_id', _user_id],
  })
  // 如采集用户信息是异步行为，需要先设置完用户信息后再执行这个START埋点
  // 此时被block住的日志会携带上用户信息逐条发出
  window.aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['_hold', 'START'],
  })
}
```

:::

### index.html 配置

<<< @/snippets/work/dingtalk/index.html

### 多端应用 index.html 配置

<<< @/snippets/work/dingtalk/index-multi.html

::: tip 参考文档
[浙政钉埋点文档](https://wetx6c6wxe.feishu.cn/wiki/wikcnu9v1TpnP34dShwEyPzNife)
:::
