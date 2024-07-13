<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from './three.module.js'
import { Fire } from './Fire.js'

const containerRef = ref()

// color1：内焰颜色
// color2：外焰颜色
// color3：烟雾颜色
// colorBias：颜色偏差
// burnRate：燃烧率
// diffuse：扩散
// viscosity：粘度
// expansion：膨胀
// swirl：旋转
// drag：拖拽
// airSpeed：空气速度
// windX：X 轴风向
// windY：Y 轴风向
// speed：火焰速度
// massConservation：质量守恒

let camera, scene, renderer
let fire

function init(container) {
  const width = container.clientWidth
  const height = container.clientHeight

  camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000)
  camera.position.z = 25

  scene = new THREE.Scene()

  const ambientLight = new THREE.AmbientLight(0xCCCCCC, 0.4)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0xFFFFFF, 0.8)
  camera.add(pointLight)
  scene.add(camera)

  const plane = new THREE.PlaneBufferGeometry(20, 20)

  fire = new Fire(plane, {
    textureWidth: 512,
    textureHeight: 512,
    debug: false,

    windX: 0,
    windY: 0.75,
    colorBias: 0.9,
    burnRate: 0.33,
    diffuse: 1.33,
    viscosity: 0.25,
    expansion: -0.25,
    swirl: 50,
    drag: 0.35,
    airSpeed: 12.0,
    speed: 500.0,
    massConservation: false,

  })
  fire.color1.set('rgba(255, 255, 255, 1)')
  fire.color2.set('rgba(188, 252, 246, 1)')
  fire.color3.set('rgba(119, 196, 145, 1)')

  fire.position.z = -2
  fire.clearSources()
  fire.addSource(0.5, 0.1, 0.1, 1.0, 0.0, 1.0)

  scene.add(fire)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.autoClear = true

  containerRef.value.appendChild(renderer.domElement)
}

// 添加事件监听器
function onWindowResize(container) {
  camera.aspect = container.clientWidth / container.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(container.clientWidth, container.clientHeight)
}

function onUnload(container) {
  if (renderer) {
    renderer.dispose()
  }

  if (scene) {
    scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.geometry.dispose()
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose())
        }
        else if (object.material) {
          object.material.dispose()
        }
        // 如果有纹理，需要销毁纹理
        if (object.material && object.material.map) {
          object.material.map.dispose()
        }
      }
    })
  }
  // 移除事件监听器
  window.removeEventListener('resize', () => onWindowResize(container), false)
}

function animate() {
  requestAnimationFrame(animate)
  renderer.clear()
  renderer.render(scene, camera)
}

onMounted(() => {
  init(containerRef.value)
  animate()
  window.addEventListener('resize', () => onWindowResize(vertebralRef.value), false)
})

onUnmounted(() => {
  onUnload(containerRef.value)
})
</script>

<template>
  <div ref="containerRef" class="brain-item-torus absolute" />
</template>

<style lang="scss" scoped>
.brain-item-torus {
  width: 8rem;
  height: 10rem;
}
</style>
