<script setup lang="ts">
const isDev = import.meta.env.DEV
</script>

<template>
  <img
    v-if="!isDev" class="nav-bar-title-visitor"
    src="https://visitor-badge.laobi.icu/badge?page_id=mhaibaraai.github.io"
  >
</template>

<style>
.nav-bar-title-visitor {
  margin-left: 8px;
}

@media (min-width: 768px) and (max-width: 920px) {
  .visitor {
    display: none;
  }
}
</style>
