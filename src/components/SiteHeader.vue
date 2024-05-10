<script setup lang="ts">
import DownloadButton from '@/components/DownloadButton.vue';
import { ref } from 'vue';

import { menuNav } from '@/data/Navs';
import SiteHeaderModeToggle from './SiteHeaderModeToggle.vue';
import SiteHeaderLogo from './SiteHeaderLogo.vue';

const isMobileMenuOpen = ref<boolean>(false)

const toggleMenu = (): void => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <!-- Header -->
  <header>
    <div class="container">
      <div class="header-wrapper">
        <SiteHeaderLogo />

        <!-- Menu -->
        <nav id="menu" :class="{ open: isMobileMenuOpen }">
          <!-- Nav -->
          <ul>
            <li v-for="item in menuNav" :key="item.label">
              <a :href="item.url">{{ item.label }}</a>
            </li>
          </ul>

          <!-- Toggle Dark/Light Mode-->
          <SiteHeaderModeToggle />

          <!-- Download button -->
          <DownloadButton>
            Download
          </DownloadButton>
        </nav>
        <!-- ./Menu -->

        <button type="button"
          id="nav-toggle"
          class="menu-icon-btn"
          :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
          aria-controls="menu"
          aria-haspopup="true"
          @click="toggleMenu()"
        >
          <fa-icon :icon="`fa-solid ${isMobileMenuOpen ? 'fa-x' : 'fa-bars'}`" fixed-width />
        </button>
      </div>
    </div>
  </header>
  <!-- ./Header -->
</template>