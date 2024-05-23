import type { Map } from 'ol'
import { inject } from 'vue'

export function useMapView() {
  const map = inject<Map>('VkMapView')
  if (!map)
    throw new Error('No MapView provided')

  return map
}
