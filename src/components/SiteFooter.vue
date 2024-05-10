<script setup lang="ts">
import { computed } from 'vue';
import { footerNav } from '@/data/Navs';

import type { Nav, Link } from '@/types/Site';

const navColumns = computed(() => {
  const itemsPerColumn = footerNav.length / 3

  return footerNav.reduce((result: Nav[], item: Link, i: number) => {
    const column = Math.floor(i / itemsPerColumn)
    if (typeof result[column] === 'undefined') result[column] = []
    result[column].push(item)

    return result
  }, [])
})
</script>

<template>
  <!-- Footer -->
  <footer>
    <div class="container">
      <nav class="footer-nav row">
        <ul v-for="(column, i) in navColumns" :key="`column-${i}`" class="col col-md-4">
          <li v-for="(navItem, j) in column" :key="`nav-item-${i}-${j}`">
            <a :href="navItem.url">{{ navItem.label }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
  <!-- ./Footer -->
</template>