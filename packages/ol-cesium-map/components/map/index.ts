import { type App } from 'vue'
import VKMap from './index.vue'

VKMap.install = (app: App): void => {
  app.component('VKMap', VKMap)
}
export {
  VKMap,
}
