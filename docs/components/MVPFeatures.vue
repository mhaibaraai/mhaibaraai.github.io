<script lang="ts" setup>
import type { DefaultTheme } from 'vitepress/theme'

export interface Feature {
  icon?: DefaultTheme.FeatureIcon
  title: string
  details: string
  link?: string
  linkText?: string
  rel?: string
  target?: string
}

const props = defineProps<{
  features: Feature[]
}>()

const grid = computed(() => {
  const length = props.features.length

  switch (true) {
    case length === 0:
      return ''
    case length === 2:
      return 'grid-2'
    case length === 3:
      return 'grid-3'
    case length % 3 === 0:
      return 'grid-6'
    case length > 3:
      return 'grid-3'
    default:
      return ''
  }
})
</script>

<template>
  <div v-if="features" class="MovkFeatures">
    <div class="container">
      <div class="items">
        <div v-for="feature in features" :key="feature.title" class="item" :class="[grid]">
          <MVPFeature
            :icon="feature.icon" :title="feature.title" :details="feature.details" :link="feature.link"
            :link-text="feature.linkText" :rel="feature.rel" :target="feature.target"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.MovkFeatures {
  position: relative;
  padding: 0 0;
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .item.grid-2,
  .item.grid-4 {
    width: calc(100% / 2);
  }
}

@media (min-width: 768px) {
  .item.grid-2 {
    width: calc(100% / 2);
  }

  .item.grid-3,
  .item.grid-6 {
    width: calc(100% / 3);
  }
}
</style>
