import { watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'

import './rainbow.css'
import './vars.css'
import './overrides.css'
import 'virtual:uno.css'

import Layout from './components/layout.vue'

let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    app.use(TwoslashFloatingVue)

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
