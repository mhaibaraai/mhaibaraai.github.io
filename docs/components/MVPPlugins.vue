<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter: fm } = useData()
</script>

<template>
  <template v-for="feature in fm.features" :key="feature">
    <h2 :id="feature.title" tabindex="-1">
      {{ feature.title }}
      <a class="header-anchor" :href="`#${feature.title}`" :aria-label="`Permalink to &quot;${feature.title}&quot;`" />
    </h2>
    <MVPFeatures v-if="feature.items" :features="feature.items" />
  </template>
</template>
