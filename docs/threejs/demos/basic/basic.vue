<script lang="ts" setup>
import { AxesHelper, BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { onMounted, ref } from 'vue'

const threeRef = ref<HTMLElement | null>(null)

const scene = new Scene()
const geometry = new BoxGeometry(1, 1, 1)

const material = new MeshBasicMaterial({ color: 0x00FF00 })
const cube = new Mesh(geometry, material)

// AxesHelper：辅助观察的坐标系
const axesHelper = new AxesHelper(150)
scene.add(axesHelper)
scene.add(cube)

onMounted(() => {
  if (!threeRef.value)
    return

  const camera = new PerspectiveCamera(45, threeRef.value?.clientWidth / threeRef.value?.clientHeight, 0.1, 1000)
  camera.position.set(0, 0, 5)
  const renderer = new WebGLRenderer()
  renderer.setSize(threeRef.value?.clientWidth, threeRef.value?.clientHeight)
  renderer.render(scene, camera)

  threeRef.value.appendChild(renderer.domElement)
})
</script>

<template>
  <div ref="threeRef" style="height: 400px;" />
</template>

<style></style>
