<script lang="ts" setup>
import { onMounted, provide, ref, watch } from 'vue'
import Map, { type MapOptions } from 'ol/Map'
import type { LoadEvent } from './type'

const props = defineProps<{
  defaultOptions: MapOptions
}>()

const emit = defineEmits<{
  load: [LoadEvent]
}>()

const mapRef = ref<HTMLDivElement>()

const map: Map | undefined = new Map(props.defaultOptions)

watch(() => props.defaultOptions, (options) => {
  map.setProperties(options)
})

provide('useOlMap', map)

onMounted(() => {
  map.setTarget(mapRef.value)
  emit('load', { map })
})
</script>

<template>
  <div ref="mapRef" class="ol-cesium-map-box" />
</template>

<style scoped>
.ol-cesium-map-box {
  height: 100%;
  width: 100%;
}
</style>
