# Vue

## vite + vue3 项目打包失败

Missing "./preload-helper" export in "vite" package

::: tip 解决方法
搜索 `vite/preload-helper` 替换为 `\0vite/preload-helper`
:::

## 在 npm 包或 UMD 库中扩展全局变量

> 详细文档 [TypeScript](https://ts.xcatliu.com/basics/declaration-files.html#%E5%9C%A8-npm-%E5%8C%85%E6%88%96-umd-%E5%BA%93%E4%B8%AD%E6%89%A9%E5%B1%95%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F)

使用 `declare global` 可以在 `npm` 包或者 `UMD` 库的声明文件中扩展全局变量的类型

::: code-group

```ts [global.d.ts]
declare global {
  interface JSEncrypt {
    setPublicKey(publicKey: string): void;
    setPrivateKey(privateKey: string): void;
    encrypt(value: string): string;
    decrypt(value: string): string;
    getPublicKey(): string;
    getPrivateKey(): string;
  }

  interface JSEncryptConstructor {vue
    new(): JSEncrypt;
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

## vue-element-admin 安装第三包（npm install）时报错

ls-remote -h -t git://github.com/adobe-webplatform/eve.git

::: tip 解决方法

* 修改Git的协议（ssh 替换为 https）

``` sh
git config --global url."https://github.com/".insteadOf "ssh://git@github.com/"
```

* 切换镜像网站

``` sh
git config --global url."https://hub.fastgit.xyz/".insteadOf "ssh://git@github.com/"
```
