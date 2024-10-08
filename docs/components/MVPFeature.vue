<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'

defineProps<{
  icon?: DefaultTheme.FeatureIcon
  title?: string
  details?: string
  link?: string
  linkText?: string
  rel?: string
  target?: string
}>()
</script>

<template>
  <VPLink class="MovkFeature" :href="link" :rel="rel" :target="target" :no-icon="true" :tag="link ? 'a' : 'div'">
    <article class="box">
      <div v-if="typeof icon === 'object' && icon.wrap" class="icon">
        <VPImage :image="icon" :alt="icon.alt" :height="icon.height || 32" :width="icon.width || 32" />
      </div>
      <VPImage
        v-else-if="typeof icon === 'object'" :image="icon" :alt="icon.alt" :height="icon.height || 32"
        :width="icon.width || 32"
      />
      <div v-else-if="icon" class="icon" v-html="icon" />
      <h5 class="title truncate" v-html="title" />

      <p v-if="details" class="details" v-html="details" />

      <div v-if="linkText" class="link-text">
        <p class="link-text-value">
          {{ linkText }} <span class="vpi-arrow-right link-text-icon" />
        </p>
      </div>
    </article>
  </VPLink>
</template>

<style scoped>
.MovkFeature {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition:
    border-color 0.25s,
    background-color 0.25s;
}

.MovkFeature.link {
  text-decoration: none;
}

.MovkFeature.link .link-text-value {
  margin: initial;
}

.MovkFeature.link:hover {
  border-color: var(--vp-c-brand-1);
}

.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.box > :deep(.VPImage) {
  margin-bottom: 8px;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 6px;
  background-color: var(--vp-c-default-soft);
  width: 2rem;
  height: 2rem;
  font-size: 24px;
  transition: background-color 0.25s;
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.details {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin: initial;
}

.link-text {
  padding-top: 8px;
}

.link-text-value {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.link-text-icon {
  margin-left: 6px;
}
</style>
