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
  <footer class="ltz-footer">
    <div class="container">
      <nav class="footer-nav row">
        <ul v-for="(column, i) in navColumns" :key="`column-${i}`" class="col-12 col-md-4 nav-list">
          <li v-for="(navItem, j) in column" :key="`nav-item-${i}-${j}`">
            <a :href="navItem.url">{{ navItem.label }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
  <!-- ./Footer -->
</template>

<style lang="scss" scoped>
.ltz-footer {
  @include base-padding;

  font-weight: 200;
  color: $nav-color;
  background-color: $footer-bg;
}
.nav-list {
  @include no-bullets;

  text-align: center;

  li {
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
}
</style>