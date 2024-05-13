<script lang="ts" setup>
import { VKMap } from '@movk/ol-cesium-map'
import { type MapOptions } from 'ol/Map'
import { Tile as TileLayer } from 'ol/layer'
import { OSM } from 'ol/source'
import View from 'ol/View'

const defaultOptions: MapOptions = {
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
}

</script>

<template>
  <VKMap :default-options="defaultOptions" style="height: 500px;"></VKMap>
</template>

<style></style>
