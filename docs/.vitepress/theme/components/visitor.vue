<script setup lang="ts">
const isDev = import.meta.env.DEV
</script>

<template>
  <img
    v-if="!isDev"
    class="visitor"
    src="https://visitor-badge.laobi.icu/badge?page_id=mhaibaraai.github.io"
  >
</template>

<style scoped>
.visitor {
  margin-left: 8px;
}
@media (min-width: 768px) and (max-width: 920px) {
  .visitor {
    display: none;
  }
}
</style>
