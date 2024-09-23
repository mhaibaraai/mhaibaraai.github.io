# Git {#start}

## Git: RPC failed; HTTP 500 curl 22 The requested URL returned error: 500 {#error-1}

```sh
git config --global http.postBuffer 524288000
```

- 原因：使用 http 协议进行传输的缓存区太小
  > 将缓存区提高到500MB或者更高，看自己的项目需要。
