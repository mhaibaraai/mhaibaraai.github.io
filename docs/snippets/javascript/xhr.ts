// 定义 XMLHttpRequest 监听器类型
type XHRListener = (method: string, url: string, status: number) => void

// 保存原始的 XMLHttpRequest 对象
const originalXhrOpen: typeof XMLHttpRequest.prototype.open = XMLHttpRequest.prototype.open
const originalXhrSend: typeof XMLHttpRequest.prototype.send = XMLHttpRequest.prototype.send

// 重写 open 方法
XMLHttpRequest.prototype.open = function (method: string, url: string) {
  console.log('发起了 XMLHttpRequest 请求:', method, url)

  // 调用原始的 open 方法
  originalXhrOpen.call(this, method, url)
}

// 重写 send 方法
XMLHttpRequest.prototype.send = function (body?: Document | BodyInit | null) {
  // 保存当前 XMLHttpRequest 实例
  const xhr = this

  // 拦截请求发送前的操作
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log('XMLHttpRequest 请求完成:', xhr.status)

      // 这里可以根据需要处理请求完成后的逻辑
      if (xhr.status === 401)
        console.log('返回状态码为401，进行逻辑处理')
      // 进行逻辑处理，例如跳转到登录页面
    }
  }

  // 调用原始的 send 方法
  originalXhrSend.call(this, body)
}

// 示例：发起一个 XMLHttpRequest 请求
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true)
xhr.send()
