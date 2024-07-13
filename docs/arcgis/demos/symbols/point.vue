<script lang="ts" setup>
import { VaViewUi } from '@vuesri/core'
import { ElForm, ElFormItem, ElInput } from 'element-plus'
import BaseMap from './map.vue'
</script>

<template>
  <BaseMap>
    <VaViewUi position="top-trailing">
      <ElForm>
        <ElFormItem label="符号">
          <ElInput />
        </ElFormItem>
      </ElForm>
    </VaViewUi>
  </BaseMap>
</template>

<style scoped>
</style>
