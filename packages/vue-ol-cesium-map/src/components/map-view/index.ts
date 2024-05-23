import type { App } from 'vue'
import VkMapView from './index.vue'

export * as __VkMapView from './type'

VkMapView.install = (app: App): void => {
  app.component('VkMapView', VkMapView)
}
export {
  VkMapView,
}
