import { createApp, render } from 'vue'
import { Mutable, isClient, isFunction, isString, isVNode } from '@movk-repo/utils'
import { MessageContext, instances } from './src/instance'
import { MessageFn, MessageHandler, MessageOptions, MessageParams, MessageProps } from './src/message'
import MessageConstructor from './src/message.vue'
import './style/index.scss'

let instanceCount = 1

function normalizeOptions(params?: MessageParams) {
  const options: any = !params || isString(params) || isVNode(params) || isFunction(params)
    ? { message: params }
    : params

  return options
}

function closeMessage(instance: MessageContext) {
  const idx = instances.indexOf(instance)
  if (idx === -1)
    return
  instances.splice(idx, 1)
  const { handler } = instance
  handler.close()
}

// 创建一个message组件
function createMessage({ ...options }: MessageOptions): MessageContext {
  const id = `message_${instanceCount++}`
  const container = document.createElement('div')
  const userOnClose = options.onClose

  const messageApp = createApp(
    MessageConstructor,
    {
      ...options,
      id,
      onClose: () => {
        userOnClose?.()
        closeMessage(instance)
        messageApp.unmount()
      },
      onDestroy: () => {
        render(null, container)
      },
    },
  )

  const vm = messageApp.mount(container)
  document.body.appendChild(container.firstElementChild!)

  const handler: MessageHandler = {
    close: () => {
      vm.$.exposed!.visible.value = false
    },
  }
  const instance: MessageContext = {
    id,
    vnode: vm.$.vnode,
    vm,
    handler,
    props: vm.$.props as Mutable<MessageProps>,
  }
  instances.push(instance)

  return instance
}

const Message: MessageFn = (
  options = {},
) => {
  if (!isClient)
    return { close: () => undefined }

  const instance = createMessage(normalizeOptions(options))

  instances.push(instance)
  return instance.handler
}

export {
  Message,
}
