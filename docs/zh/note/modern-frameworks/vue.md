# Vue {#Vue}

> 开发技巧、常用组件与插件的总结与实践

## 按需自动导入组件与图标 {#note-1}

> [自动导入 Element Plus 组件和图标](https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)

1、安装插件

安装 `unplugin-vue-components` 和 `unplugin-auto-import` 这两款插件

```sh

pnpm add -D unplugin-vue-components unplugin-auto-import unplugin-icons

```

2、在 `vite.config.ts` 中配置插件

```ts twoslash
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', '@vueuse/core'],
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ],
      include: [/\.vue($|\?)/, /\.md($|\?)/],
      extensions: ['vue', 'md', 'svg'],
    }),
    Icons({
      autoInstall: true,
    })
  ],
})
```
