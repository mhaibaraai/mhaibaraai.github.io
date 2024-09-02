import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import './main'

import type { EnhanceAppContext } from 'vitepress'
import { DemoPreviewContainer } from '@movk-repo/demo-preview-container'
import Layout from '../components/Layout.vue'

let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp({ app, router }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue)
    app.component('DemoPreview', DemoPreviewContainer)

    if (typeof window === 'undefined')
      return

    // 监听路由变化，根据当前页面是否为首页来调整样式
    watch(
      () => router.route.data.relativePath,
      () => {
        updateHomePageStyle(location.pathname === '/')
      },
      { immediate: true },
    )
  },
}

if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome'))
    document.documentElement.classList.add('browser-chrome')
  else if (browser.includes('firefox'))
    document.documentElement.classList.add('browser-firefox')
  else if (browser.includes('safari'))
    document.documentElement.classList.add('browser-safari')
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle)
      return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  }
  else {
    if (!homePageStyle)
      return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}
