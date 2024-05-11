<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteSectionHero from '@/components/SiteSectionHero.vue';
import SiteSectionFeatures from '@/components/SiteSectionFeatures.vue';
</script>

<template>
  <SiteHeader />

  <!-- Content -->
  <main>
    <!-- Hero section -->
    <SiteSectionHero />

    <!-- Features section -->
    <SiteSectionFeatures />
  </main>
  <!-- ./Content -->

  <SiteFooter />
</template>
