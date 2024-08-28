<script lang="ts" setup>
import { VaSceneView, VaTdtBasemap } from '@vuesri/core'

const defaultOptions: __esri.SceneViewProperties = {
  center: [121.7, 29.9],
  zoom: 9,
}
</script>

<template>
  <VaSceneView :style="{ height: '50vh' }" :default-options="defaultOptions">
    <VaTdtBasemap type="vec_w" :spatial-reference="{ wkid: 3857 }" />
    <slot />
  </VaSceneView>
</template>

<style></style>
