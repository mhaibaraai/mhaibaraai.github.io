<script lang="ts" setup>
import { type PropType, onMounted, provide, ref, watch } from 'vue'
import Map, { type MapOptions } from 'ol/Map'
import type { ViewOptions } from 'ol/View'
import View from 'ol/View'
import mitt from 'mitt'
import type { LoadEvent } from './type'
import { sMitter } from '~/shared/symbol'
import ViewEvents from '~/components/view/events/index.vue'

const props = defineProps({
  mapOptions: {
    type: Object as PropType<MapOptions>,
    default: () => ({}),
  },
  viewOptions: {
    type: Object as PropType<ViewOptions>,
    default: () => ({}),
  },
})

const emit = defineEmits<{
  load: [LoadEvent]
}>()

const mapRef = ref<HTMLDivElement>()

const view = new View(props.viewOptions)

const map: __ol.Map = new Map({
  view,
  ...props.mapOptions,
})

map[sMitter] = mitt()

watch(() => props.mapOptions, (options) => {
  map.setProperties(options)
})

watch(() => props.viewOptions, (options) => {
  map.getView().setProperties(options)
})

provide('VkView', map)
provide('VkMapView', map)

onMounted(() => {
  map.setTarget(mapRef.value)
  emit('load', { map, view })
})
</script>

<template>
  <div ref="mapRef" class="vk-map-view vk-map-x">
    <ViewEvents />
    <slot />
  </div>
</template>

<style scoped>
.vk-map-view {
  height: 100%;
  width: 100%;
}
</style>
