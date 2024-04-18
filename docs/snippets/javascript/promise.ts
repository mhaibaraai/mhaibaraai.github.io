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
