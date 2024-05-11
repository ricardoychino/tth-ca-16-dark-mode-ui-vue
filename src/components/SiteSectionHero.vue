<script setup lang="ts">
import SiteSection from '@/components/SiteSection.vue'
import DownloadButton from '@/components/DownloadButton.vue';
import { useDarkMode } from '@/composables/useDarkMode'

import { computed } from 'vue';

const { isDark } = useDarkMode()
const currentMode = computed(() => (isDark.value ? 'dark': 'light'))
</script>

<template>
  <SiteSection id="hero">
    <div class="hero-wrapper row">
      <div class="hero-info col-12 col-lg-6">
        <h1>
          Welcome to <strong>Lightz.js</strong><br>
          Illuminating Your Web Development!
        </h1>

        <p>Are you tired of the same old, cumbersome JavaScript libraries that weigh down your web development projects? Look no further! Lightz.js is here to transform your coding experience and brighten your path to web development success.</p>

        <DownloadButton class="btn-lg">
          Download lightz.js
        </DownloadButton>
      </div>

      <div class="hero-image  col-12 col-lg-6">
        <img :src="`/hero-${currentMode}-mode.png`" :data-mode="currentMode" :alt="`${currentMode} mode image`" />
      </div>
    </div>
  </SiteSection>
</template>

<style lang="scss" scoped>

/* Hero Section ------------- */

/* Hero Section */
#hero {
  background-color: var(--background-color);
}
.hero-wrapper {
  display: flex;
  padding: 40px 0;

  @include media-breakpoint-down(md) {
    flex-direction: column-reverse;
    padding: 0;
  }

  .hero-info {
    flex-basis: 50%;
    font-size: 1.25em;
    line-height: 1.2;

    @include media-breakpoint-down(md) {
      font-size: 1rem;
      text-align: center;
    }

    & > *:not(:last-child) {
      margin-bottom: 1.875rem;
    }


    h1 {
      font-size: 1.875rem;

      strong {
        color: var(--primary-color);

        /* Fallback as mentioned here: https://bootcamp.uxdesign.cc/gradient-text-in-css-609068d3f953 */
        @supports (background-clip: text) {
          background-image: linear-gradient(60deg, var(--hero-highligh-start), var(--hero-highligh-end));
          background-clip: text;
          color: transparent;
        }
      }
    }
    .btn {
      font-size: 0.875rem;
    }
  }

  .hero-image {
    flex-basis: 50%;
    flex-shrink: 0;
    display: flex;

    img {
      width: 500px;
      max-width: 100%;
      margin: auto;
      margin-right: 0;

      @include media-breakpoint-down(md) {
        width: 70vw;
        margin: auto;
        margin-bottom: 40px;
      }
    }
  }
}
</style>