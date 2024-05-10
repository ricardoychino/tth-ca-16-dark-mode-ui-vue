<script setup lang="ts">
import { SiteData } from '@/data/Main';
</script>

<template>
  <a href="#" class="logo">
    <img :src="SiteData.logo" alt="Logo icon" />
    <span>{{ SiteData.name }}</span>
  </a>
</template>