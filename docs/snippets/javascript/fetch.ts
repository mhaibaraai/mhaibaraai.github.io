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
