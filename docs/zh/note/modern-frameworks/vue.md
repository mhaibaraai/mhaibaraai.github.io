# Vue {#Vue}

> 开发技巧、常用组件与插件的总结与实践

## 按需自动导入组件与图标 {#import-components-and-icons}

> [自动导入 Ant Design 组件和图标](https://www.antdv.com/docs/vue/introduce-cn#%E8%87%AA%E5%8A%A8%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5%E7%BB%84%E4%BB%B6)

1. 安装插件

   安装 `unplugin-vue-components` 和 `unplugin-auto-import` 这两款插件

   ```sh
   pnpm add -D unplugin-vue-components unplugin-auto-import unplugin-icons
   ```

2. 在 `vite.config.ts` 中配置插件

   ```ts twoslash
   import AutoImport from 'unplugin-auto-import/vite'
   import { FileSystemIconLoader } from 'unplugin-icons/loaders'
   import IconsResolver from 'unplugin-icons/resolver'
   import Icons from 'unplugin-icons/vite'
   import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
   import Components from 'unplugin-vue-components/vite'
   import { defineConfig } from 'vite'

   const antDesignVueResolver = AntDesignVueResolver({
     importStyle: false,
   })

   const iconsResolverAutoImport = IconsResolver({
     prefix: 'icon',
   })

   const iconsResolverComponents = IconsResolver({
     prefix: 'icon',
     enabledCollections: ['ep'],
     customCollections: ['esri'],
   })

   export default defineConfig({
     plugins: [
       AutoImport({
         imports: ['vue', '@vueuse/core'],
         resolvers: [
           antDesignVueResolver,
           iconsResolverAutoImport,
         ],
       }),
       Components({
         resolvers: [
           iconsResolverComponents,
           antDesignVueResolver,
         ],
         include: [/\.vue($|\?)/, /\.md($|\?)/],
         extensions: ['vue', 'md', 'svg'],
       }),
       Icons({
         autoInstall: true,
         customCollections: {
           esri: FileSystemIconLoader('./esri', svg =>
             svg.replace(/^<svg /, '<svg fill="currentColor" ')),
         },
       })
     ],
   })
   ```

3. 使用

:::demo

/vue/components-and-icons.vue

:::
