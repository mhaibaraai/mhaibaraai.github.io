# TypeScript {#TypeScript}

> TypeScript 的类型系统、接口、泛型等内容

## 在 npm 包或 UMD 库中扩展全局变量 {#note-1}

> 详细文档 [TypeScript](https://ts.xcatliu.com/basics/declaration-files.html#%E5%9C%A8-npm-%E5%8C%85%E6%88%96-umd-%E5%BA%93%E4%B8%AD%E6%89%A9%E5%B1%95%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F)

使用 `declare global` 可以在 `npm` 包或者 `UMD` 库的声明文件中扩展全局变量的类型

::: code-group

```ts [global.d.ts]
declare global {
  interface JSEncrypt {
    setPublicKey(publicKey: string): void
    setPrivateKey(privateKey: string): void
    encrypt(value: string): string
    decrypt(value: string): string
    getPublicKey(): string
    getPrivateKey(): string
  }

  interface JSEncryptConstructor {
    new(): JSEncrypt
  }

  const JSEncrypt: JSEncryptConstructor

}

export {}
```

```ts [index.ts]
const jsencrypt = new JSEncrypt()
jsencrypt.setPublicKey(key)
return jsencrypt.encrypt(msg)
```

:::
