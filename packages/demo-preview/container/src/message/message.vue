<script lang="ts" setup>
import type { CSSProperties } from 'vue'
import { EVENT_CODE } from '@movk-repo/shared/constants'
import { useEventListener, useResizeObserver, useTimeoutFn } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'
import CircleCloseFilled from '../icons/CircleCloseFilled.vue'
import InfoFilled from '../icons/InfoFilled.vue'
import SuccessFilled from '../icons/SuccessFilled.vue'
import WarningFilled from '../icons/WarningFilled.vue'
import { getLastOffset, getOffsetOrSpace } from './instance'
import { messageEmits, messageProps } from './message'

const props = defineProps(messageProps)

defineEmits(messageEmits)

const TypeComponentsMap = {
  success: SuccessFilled,
  warning: WarningFilled,
  error: CircleCloseFilled,
  info: InfoFilled,
}

const messageRef = ref<HTMLDivElement>()
const visible = ref(false)
const height = ref(0)

let stopTimer: (() => void) | undefined

const iconComponent = computed(() => TypeComponentsMap[props.type] || '')

const lastOffset = computed(() => getLastOffset(props.id))
const offset = computed(
  () => getOffsetOrSpace(props.id, props.offset) + lastOffset.value,
)
const bottom = computed((): number => height.value + offset.value)
const customStyle = computed<CSSProperties>(() => ({
  top: `${offset.value}px`,
  zIndex: 2001,
}))

function startTimer() {
  if (props.duration === 0) {
    return
  }
  ({ stop: stopTimer } = useTimeoutFn(() => {
    close()
  }, props.duration))
}

function clearTimer() {
  stopTimer?.()
}

function close() {
  visible.value = false
}

function keydown({ code }: KeyboardEvent) {
  if (code === EVENT_CODE.esc) {
    close()
  }
}

onMounted(() => {
  startTimer()
  visible.value = true
})

useEventListener(document, 'keydown', keydown)

useResizeObserver(messageRef, () => {
  height.value = messageRef.value!.getBoundingClientRect().height
})

defineExpose({
  visible,
  bottom,
  close,
})
</script>

<template>
  <Transition name="movk-message-fade" @before-leave="onClose" @after-leave="$emit('destroy')">
    <div
      v-show="visible" :id="id" ref="messageRef" class="movk-message" :class="[
        `movk-message--${type}`,
        customClass,
      ]" :style="customStyle" role="alert" @mouseenter="clearTimer" @mouseleave="startTimer"
    >
      <component
        :is="iconComponent" class="movk-message-icon" :class="[
          `movk-message--${type}`,
          `movk-message-icon--${type}`,
        ]"
      />
      <p class="movk-message__content">
        {{ message }}
      </p>
    </div>
  </Transition>
</template>
