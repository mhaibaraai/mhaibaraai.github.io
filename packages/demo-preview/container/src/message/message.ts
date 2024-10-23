import type { ExtractPropTypes, PropType } from 'vue'

export const messageTypes = ['success', 'info', 'warning', 'error'] as const

export type messageType = typeof messageTypes[number]

export const messageProps = {
  type: {
    type: String as PropType<messageType>,
    default: 'info',
  },
  duration: {
    type: Number,
    default: 3000,
  },
  offset: {
    type: Number,
    default: 16,
  },
  message: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  customClass: {
    type: String,
    default: '',
  },
  onClose: {
    type: Function as PropType<() => void>,
    default: undefined,
  },
}

export type MessageProps = ExtractPropTypes<typeof messageProps>

export const messageEmits = {
  destroy: () => true,
}

export type MessageEmits = typeof messageEmits

export interface MessageHandler {
  close: () => void
}

export type MessageOptions = Partial<Omit<MessageProps, 'id'>>

export type MessageParams = MessageOptions | MessageOptions['message']

export interface MessageFn {
  (options?: MessageParams): MessageHandler
}
