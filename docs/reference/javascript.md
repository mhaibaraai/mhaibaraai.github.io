# JavaScript

## js 监听网络返回状态码

### XMLHttpRequest 请求

<<< @/snippets/javascript/xhr.ts

### Fetch API 请求

<<< @/snippets/javascript/fetch.ts

## Promise 的 resolve 是不可逆的

Promise 的 resolve 是不可逆的时，意味着一旦 Promise 被 resolve，就无法再次更改其状态。这是 Promise 设计上的一个关键特性，确保了异步操作的可靠性和一致性。

<<< @/snippets/javascript/promise.ts
