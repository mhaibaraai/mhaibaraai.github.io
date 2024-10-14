import { resolve } from 'node:path'
import { docRoot, iconsRoot } from '@movk-repo/build-utils'
import VitePressPluginAutoNavSidebar from '@movk-repo/vitepress-plugin-auto-nav-sidebar'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
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
  resolve: {
    alias: {
      '~/': resolve(docRoot, './'),
      '~components': resolve(docRoot, './components'),
      '~examples': resolve(docRoot, './examples'),
    },
  },
  plugins: [
    VueJsx(),
    UnoCSS({
      configFile: resolve(docRoot, './uno.config.ts'),
    }),
    VitePressPluginAutoNavSidebar({
      documentRootPath: 'zh',
      sortMenusBy: 'frontmatterOrder',
      collapsed: true,
      excludeFolders: ['threejs'],
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      resolvers: [
        antDesignVueResolver,
        iconsResolverAutoImport,
      ],
    }),
    Components({
      dirs: [
        resolve(docRoot, './components'),
      ],
      resolvers: [
        antDesignVueResolver,
        iconsResolverComponents,
      ],
      include: [/\.vue($|\?)/, /\.md($|\?)/],
      extensions: ['vue', 'md', 'svg'],
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3',
      customCollections: {
        esri: FileSystemIconLoader(resolve(iconsRoot, './esri_symbol_3d'), svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')),
      },
    }),
  ],
})
