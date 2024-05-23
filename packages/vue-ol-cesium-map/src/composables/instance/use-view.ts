import type { Map } from 'ol'
import { inject } from 'vue'

export function useView() {
  const map = inject<Map>('VkView')
  if (!map)
    throw new Error('No VkView provided')

  return map
}
