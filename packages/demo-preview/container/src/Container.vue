<script setup lang="ts">
import { useCopyCode, useNamespace } from '@movk-repo/shared'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import CaretTop from './icons/CaretTop.vue'
import Code from './icons/Code.vue'
import Copy from './icons/Copy.vue'

const props = defineProps<{
  rawSource: string
}>()

const ns = useNamespace('example')

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
    ElMessage({
      type: 'success',
      message: '代码已复制到剪贴板',
    })
  }
  catch (e) {
    ElMessage({
      type: 'error',
      message: '复制失败',
    })
  }
}
</script>

<template>
  <!-- <ClientOnly></ClientOnly> -->

  <div :class="ns.b()">
    <div :class="ns.e('showcase')">
      <slot name="source" />
    </div>
    <div :class="ns.e('divider')" />

    <div :class="ns.e('op-btns')">
      <Copy @click="copyCode" @keydown.prevent.enter="copyCode" @keydown.prevent.space="copyCode" />
      <Code @click="sourceVisible = !sourceVisible" />
    </div>
    <ElCollapseTransition>
      <div v-show="sourceVisible" :class="ns.e('source-wrapper')">
        <slot name="code" />
      </div>
    </ElCollapseTransition>

    <Transition name="movk-fade-in-linear">
      <div
        v-show="sourceVisible" :class="ns.e('float-control')" tabindex="0" role="button"
        @click="sourceVisible = false" @keydown="onSourceVisibleKeydown"
      >
        <CaretTop />
        <span>隐藏源代码</span>
      </div>
    </Transition>
  </div>
</template>

<style></style>
