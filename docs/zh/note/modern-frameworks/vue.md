# Vue {#Vue}

> 开发技巧、常用组件与插件的总结与实践

## 按需自动导入组件与图标 {#import-components-and-icons}

> [Element Plus 自动按需导入](https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)

1. 安装插件

   安装 `unplugin-vue-components` 和 `unplugin-auto-import` 这两款插件

   ```sh
   pnpm add -D unplugin-vue-components unplugin-auto-import unplugin-icons
   ```

2. 在 `vite.config.ts` 中添加以下配置

   ```ts twoslash
   import { resolve } from 'node:path'
   import AutoImport from 'unplugin-auto-import/vite'
   import { FileSystemIconLoader } from 'unplugin-icons/loaders'
   import IconsResolver from 'unplugin-icons/resolver'
   import Icons from 'unplugin-icons/vite'
   import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
   import Components from 'unplugin-vue-components/vite'
   import { defineConfig } from 'vite'

   export default defineConfig({
     ssr: {
       noExternal: ['element-plus', /^element-plus\/.*/],
     },
     plugins: [
       AutoImport({
         imports: ['vue', 'vue-router', '@vueuse/core'],
         resolvers: [
           ElementPlusResolver(),
         ],
       }),
       Components({
         resolvers: [
           ElementPlusResolver(),
           IconsResolver({
             prefix: 'icon',
             enabledCollections: ['ep'],
             customCollections: ['esri'],
           }),
         ],
         include: [/\.vue($|\?)/, /\.md($|\?)/],
         extensions: ['vue', 'md'],
       }),
       Icons({
         customCollections: {
           esri: FileSystemIconLoader(resolve('./esri_symbol_3d'), svg =>
             svg.replace(/^<svg /, '<svg fill="currentColor" ')),
         },
       }),
     ],
   })
   ```

3. 使用


:::demo

/vue/components-and-icons.vue

:::
