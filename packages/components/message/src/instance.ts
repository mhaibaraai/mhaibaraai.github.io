import type { ComponentPublicInstance, VNode } from 'vue'
import type { MessageHandler, MessageProps } from './message'
import { Mutable } from 'element-plus/es/utils'
import { shallowReactive } from 'vue'

export interface MessageContext {
  id: string
  vnode: VNode
  handler: MessageHandler
  vm: ComponentPublicInstance
  props: Mutable<MessageProps>
}

export const instances: MessageContext[] = shallowReactive([])

export function getInstance(id: string) {
  const idx = instances.findIndex(instance => instance.id === id)
  const current = instances[idx]
  let prev: MessageContext | undefined
  if (idx > 0) {
    prev = instances[idx - 1]
  }
  return { current, prev }
}

export function getLastOffset(id: string): number {
  const { prev } = getInstance(id)
  if (!prev)
    return 0
  return prev.vm.$.exposed!.bottom.value
}

export function getOffsetOrSpace(id: string, offset: number) {
  const idx = instances.findIndex(instance => instance.id === id)
  return idx > 0 ? 16 : offset
}
