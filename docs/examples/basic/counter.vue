<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => count.value++
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button :class="$style.modalButton" @click="increment">
      Increment
    </button>
  </div>
</template>

<style module>
.modalButton {
  padding: 4px 8px;
  border-radius: 4px;
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
}
</style>
