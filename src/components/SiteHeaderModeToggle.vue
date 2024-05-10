<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import moon from '@/components/icons/moon.vue';
import sun from '@/components/icons/sun.vue';

const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light'
})

const toggleDark = useToggle(isDark)

</script>

<template>
  <a href="javascript:void(0)"
    :data-mode="isDark ? 'dark': 'light'"
    @click="toggleDark()"
  >
    <component :is="isDark ? sun : moon" fixed-width />
  </a>
</template>