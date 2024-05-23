import type { ReturnVoid } from '@vunk/core'
import type { Map, View } from 'ol'

export interface LoadEvent {
  map: Map
  view: View
}
export type OnLoad = (e: LoadEvent) => ReturnVoid
