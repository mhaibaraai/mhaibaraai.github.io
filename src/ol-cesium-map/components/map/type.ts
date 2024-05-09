import type { ReturnVoid } from '@vunk/core'
import type { Map } from 'ol'

export interface LoadEvent {
  map: Map
}
export type OnLoad = (e: LoadEvent) => ReturnVoid
