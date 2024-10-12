<script lang="ts" setup>
const value1 = ref(true)
</script>

<template>
  <div flex="~ gap-2 items-center">
    <ElSwitch v-model="value1" />
    <icon-ep-star />
    <icon-ep-UserFilled />
  </div>
</template>
