<script setup lang="ts">
import { useCopyCode } from '@movk-repo/shared/hooks'
import { ref } from 'vue'
import CollapseTransition from './CollapseTransition.vue'
import CaretTop from './icons/CaretTop.vue'
import Code from './icons/Code.vue'
import Copy from './icons/Copy.vue'
import { Message } from './message'

const props = defineProps<{
  rawSource: string
}>()

const sourceVisible = ref(false)

const sourceCodeRef = ref<HTMLButtonElement>()

function onSourceVisibleKeydown(e: KeyboardEvent) {
  if (['Enter', 'Space'].includes(e.code)) {
    e.preventDefault()
    sourceVisible.value = false
    sourceCodeRef.value?.focus()
  }
}

async function copyCode() {
  try {
    await useCopyCode(decodeURIComponent(props.rawSource))
    Message({
      type: 'success',
      message: '代码已复制到剪贴板',
    })
  }
  catch (e) {
    Message({
      type: 'error',
      message: '复制失败',
    })
  }
}
</script>

<template>
  <!-- <ClientOnly></ClientOnly> -->

  <div class="movk-example">
    <div class="movk-example__showcase">
      <slot name="source" />
    </div>
    <div class="movk-example__divider" />

    <div class="movk-example__op-btns">
      <Copy @click="copyCode" @keydown.prevent.enter="copyCode" @keydown.prevent.space="copyCode" />
      <Code @click="sourceVisible = !sourceVisible" />
    </div>
    <CollapseTransition>
      <div v-show="sourceVisible" class="movk-example__source-wrapper">
        <slot name="code" />
      </div>
    </CollapseTransition>

    <Transition name="movk-fade-in-linear">
      <div
        v-show="sourceVisible" class="movk-example__float-control" tabindex="0" role="button"
        @click="sourceVisible = false" @keydown="onSourceVisibleKeydown"
      >
        <CaretTop />
        <span>隐藏源代码</span>
      </div>
    </Transition>
  </div>
</template>

<style></style>
