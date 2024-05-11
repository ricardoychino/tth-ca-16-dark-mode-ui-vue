<script setup lang="ts">
import SiteSection from '@/components/SiteSection.vue'
import FeatureItem from '@/components/FeatureItem.vue';
import FeatureItemIcon from '@/components/FeatureItemIcon.vue';

import features from '@/data/Features'
</script>

<template>
  <SiteSection id="features" class="section-secondary">
    <template #title>Features That Shine Bright:</template>

    <div class="features-list row">
      <!-- Item -->
      <FeatureItem v-for="feature in features" :key="feature.title" class="feature-item col-10 col-lg-5">
        <template #icon>
          <!-- <IconBolt /> -->
          <FeatureItemIcon :type="feature.icon" />
        </template>
        <template #title>{{ feature.title }}</template>
        <p>{{ feature.description }}</p>
      </FeatureItem>
    </div>
  </SiteSection>
</template>

<style scoped>
#features {
  background-color: var(--features-background-color);
}
</style>