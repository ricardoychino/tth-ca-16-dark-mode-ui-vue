<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteSection from '@/components/SiteSection.vue'
import FeatureItem from '@/components/FeatureItem.vue';
import DownloadButton from '@/components/DownloadButton.vue';
// import IconWand from './components/icons/IconWand.vue';
// import IconMobileScreen from './components/icons/iconMobileScreen.vue';
// import IconCode from './components/icons/IconCode.vue';
// import IconBolt from './components/icons/IconBolt.vue';

import features from '@/data/Features'
import FeatureItemIcon from './components/FeatureItemIcon.vue';
</script>

<template>
  <SiteHeader />

  <!-- Content -->
  <main>
    <!-- Hero section -->
    <SiteSection id="hero">
      <div class="hero-wrapper row">
        <div class="hero-info col-12 col-lg-6">
          <h1>
            Welcome to <strong>Lightz.js</strong><br>
            Illuminating Your Web Development!
          </h1>

          <p>Are you tired of the same old, cumbersome JavaScript libraries that weigh down your web development projects? Look no further! Lightz.js is here to transform your coding experience and brighten your path to web development success.</p>

          <DownloadButton>
            Download lightz.js
          </DownloadButton>
        </div>

        <div class="hero-image  col-12 col-lg-6">
          <img src="/hero-light-mode.png" data-mode="light" alt="Light mode image" />
          <img src="/hero-dark-mode.png" data-mode="dark" alt="Dark mode image" />
        </div>
      </div>
    </SiteSection>

    <!-- Features section -->
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
  </main>
  <!-- ./Content -->

  <SiteFooter />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
