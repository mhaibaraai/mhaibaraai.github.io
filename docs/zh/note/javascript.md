# JavaScript {#start}

> ES6+ 语法、常见的工具函数、编程模式等

## js 监听网络返回状态码 {#note-1}

### XMLHttpRequest 请求 {#xhr}

<<< @/snippets/javascript/xhr.ts

### Fetch API 请求 {#fetch}

<<< @/snippets/javascript/fetch.ts

## Promise 的 resolve 是不可逆的 {#note-2}

Promise 的 resolve 是不可逆的时，意味着一旦 Promise 被 resolve，就无法再次更改其状态。这是 Promise 设计上的一个关键特性，确保了异步操作的可靠性和一致性。

<<< @/snippets/javascript/promise.ts

## fetch 读取 xml 文件 {#note-3}

```js
async function fetchAndEncodeXML() {
  try {
    // 假设你的 XML 文件位于 public 目录下，路径为 /public/data.xml
    const response = await fetch('/data.xml')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    let xmlContent = await response.text()
    // 去除空格和换行符
    xmlContent = xmlContent.replace(/\s+/g, ' ').trim()
    this.encodedXML = encodeURIComponent(xmlContent)
  }
  catch (error) {
    console.error('Error fetching XML file:', error)
  }
}
```
