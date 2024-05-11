<script setup lang="ts">
import { SiteData } from '@/data/Main';
</script>

<template>
  <a href="#" class="logo">
    <img :src="SiteData.logo" alt="Logo icon" />
    <span>{{ SiteData.name }}</span>
  </a>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;;
  font-size: 20px;
  font-weight: 500;
  margin-right: auto;

  img {
    width: 16px;
    margin-right: 10px;
  }

  span {
    color: $primary;

    /* Fallback as mentioned here: https://bootcamp.uxdesign.cc/gradient-text-in-css-609068d3f953 */
    @supports (background-clip: text) {
      background-image: linear-gradient(60deg, var(--primary-color), #FFFFFF);
      background-clip: text;
      color: transparent;
    }
  }
}
</style>