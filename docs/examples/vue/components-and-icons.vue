<script lang="ts" setup>
const value = ref(3.5)
</script>

<template>
  <div flex="~ gap-2 items-center">
    <!-- <ElRate v-model="value" /> -->
    <ARate v-model:value="value" allow-half />
    <icon-ep-star />
    <icon-ep-UserFilled />
    <span color="red">
      <icon-esri-Accessibility />
    </span>
  </div>
</template>
