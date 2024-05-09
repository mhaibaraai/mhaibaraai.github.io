import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import { createApp } from 'vue'

import Home from './pages/home.vue'
import App from './App.vue'

import 'uno.css'

const app = createApp(App)

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    name: 'home',
    alias: '/index',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')
