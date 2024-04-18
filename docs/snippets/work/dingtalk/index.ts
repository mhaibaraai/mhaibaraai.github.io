// #region consloe-pc
import VConsole from 'vconsole'

let vConsole: any = null

// 当鼠标按下中键时，显示vConsole，结束后销毁
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 123) {
    if (!vConsole) {
      vConsole = new VConsole()
    }else if (vConsole) {
      vConsole.destroy()
    }
  }
})
// #endregion consloe-pc

// #region consloe-mobile
<p @touchstart="handleTouchStart" @touchend="handleTouchEnd">事项列表页</p>

// 监听长按事件，打开consle调试
let vConsole: any = null
let pressTimer: any = null
const handleTouchStart = () => {
  pressTimer = setTimeout(() => {
    if (!vConsole) {
      vConsole = new VConsole()
    } else if (vConsole) {
      vConsole.destroy()
    }
  }, 3000)  // 长按时间阈值
}
const handleTouchEnd = () => {
  clearTimeout(pressTimer)
}
// #endregion consloe-mobile

// #region permission
import aplus_push from '@/utils/gdt_aplus'

router.beforeEach(async (to, from, next) => {
if (token) {

    /**开始埋点 */
    const { meta: { title }, path,	fullPath } = to
    const pageId = (path.replace('/', '') || 'app').toUpperCase()
    const userId = userStore.getUserInfo()?.dingId
    aplus_push(pageId, title as string, fullPath, userId)
    /**结束埋点 */
    
   }
}
// #endregion permission

// #region aplus_push
// 浙政钉应用配置信息
const gdt_config = {
  sapp_id: 'xxx',	//43832
  sapp_name: 'xxx',	//gxq_msgd01
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
export default function aplus_queue_push (
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
// #endregion aplus_push
