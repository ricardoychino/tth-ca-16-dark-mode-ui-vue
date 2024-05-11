<script setup lang="ts">
import moon from '@/components/icons/moon.vue';
import sun from '@/components/icons/sun.vue';

import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleDark } = useDarkMode()
</script>

<template>
  <a href="javascript:void(0)"
    :data-mode="isDark ? 'dark': 'light'"
    @click="toggleDark()"
  >
    <component :is="isDark ? sun : moon" fixed-width />
  </a>
</template>

<style lang="scss" scoped>
a:hover {
  color: $primary;
}
</style>