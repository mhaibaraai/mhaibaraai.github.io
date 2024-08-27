<script setup lang="ts">
import { ClientOnly, Message } from '@movk-repo/components'
import { useNamespace } from '@movk-repo/shared'
import { computed, ref } from 'vue'
import SourceCode from '~/components/SourceCode.vue'
import CaretTop from '~/icons/CaretTop.vue'
import Code from '~/icons/Code.vue'
import Copy from '~/icons/Copy.vue'
import CollapseTransition from '~/components/CollapseTransition.vue'

const props = defineProps<{
  title: string
  source: string
  highlightSource: string
  sourcePath: string
  description?: string
}>()

const ns = useNamespace('example')

const decodedDescription = computed(() =>
  decodeURIComponent(props.description!),
)

const sourceVisible = ref(false)

const sourceCodeRef = ref<HTMLButtonElement>()
// const formatPathDemos = computed(() => {
//   const demos = {}

//   Object.keys(props.demos).forEach((key) => {
//     demos[key.replace('../../examples/', '').replace('.vue', '')]
//       = props.demos[key].default
//   })

//   return demos
// })

function onSourceVisibleKeydown(e: KeyboardEvent) {
  if (['Enter', 'Space'].includes(e.code)) {
    e.preventDefault()
    sourceVisible.value = false
    sourceCodeRef.value?.focus()
  }
}

async function copyCode() {
  try {
    await navigator.clipboard.writeText(decodeURIComponent(props.source))
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
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p text="sm" v-html="decodedDescription" />

    <div :class="ns.b()">
      <div>
        3243
      </div>
      <!-- <Example :file="path" :demo="formatPathDemos[path]" /> -->

      <div :class="ns.e('divider')" />

      <div :class="ns.e('op-btns')">
        <Copy @click="copyCode" @keydown.prevent.enter="copyCode" @keydown.prevent.space="copyCode" />
        <Code @click="sourceVisible = !sourceVisible" />
      </div>
      <CollapseTransition>
        <SourceCode v-show="sourceVisible" :highlight-source="highlightSource" />
      </CollapseTransition>

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
  </ClientOnly>
</template>

<style scoped lang="scss"></style>
