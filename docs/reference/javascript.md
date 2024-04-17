# JavasSript

## js 监听网络返回状态码

1、XMLHttpRequest 请求，并在返回状态码为401时进行逻辑处理的示例代码：

```ts
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
```

2、Fetch API 请求，并在返回状态码为401时进行逻辑处理的示例代码：

```ts
// 定义 Fetch 监听器类型
type FetchListener = (input: RequestInfo, init?: RequestInit, response?: Response) => Promise<Response>

// 保存原始的 fetch 函数
const originalFetch: FetchListener = window.fetch.bind(window)

// 重写 fetch 方法
window.fetch = async function (input: RequestInfo, init?: RequestInit): Promise<Response> {
  console.log('发起了 Fetch 请求:', input)

  try {
    // 调用原始的 fetch 方法
    const response = await originalFetch(input, init)

    console.log('Fetch 请求完成:', input)

    // 这里可以根据需要处理请求完成后的逻辑
    if (response.status === 401)
      console.log('返回状态码为401，进行逻辑处理')
    // 进行逻辑处理，例如跳转到登录页面

    return response
  }
  catch (error) {
    console.error('Fetch 请求出错:', input, error)
    throw error
  }
}

// 示例：发起一个 Fetch 请求
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log('Fetch 请求结果:', data)
  })
  .catch((error) => {
    console.error('Fetch 请求出错:', error)
  })
```

## Promise 的 resolve 是不可逆的

Promise 的 resolve 是不可逆的时，意味着一旦 Promise 被 resolve，就无法再次更改其状态。这是 Promise 设计上的一个关键特性，确保了异步操作的可靠性和一致性。

```ts
// 创建一个 Promise，模拟异步操作
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success')
  }, 1000)
})

// 第一个 then 处理 resolve 的结果
promise.then((result) => {
  console.log('第一个 then:', result) // 输出：Success

  // 尝试再次 resolve 这个 Promise
  promise.then((innerResult) => {
    console.log('尝试再次 resolve:', innerResult) // 不会执行这里的代码
  })

  // 尝试在第一个 then 中 reject 这个 Promise
  // 这也不会改变 Promise 的状态
  reject('Error') // 不会执行这里的代码
}).catch((error) => {
  console.log('Catch 处理错误:', error) // 不会执行这里的代码
})
```
