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
  <header class="ltz-header">
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
          <SiteHeaderModeToggle id="toggle-mode-btn" class="header-icon-btn"/>

          <!-- Download button -->
          <DownloadButton class="header-dl-btn">
            Download
          </DownloadButton>
        </nav>
        <!-- ./Menu -->

        <button type="button"
          id="nav-toggle"
          class="header-icon-btn d-md-none"
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

<style lang="scss" scoped>
/* Header ------------------- */
.ltz-header {
  position: relative;

  @include header-color;
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 15px 0;
}
#menu {
  display: flex;
  align-items: center;
  margin: 0 -15px;

  @include header-color;

  @include media-breakpoint-down(md) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    margin: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s linear;

    &.open {
      max-height: calc(100vh - 100%); /* viewport - header height */
    }
  }

  & > * {
    margin: 0 15px;
  }

  ul {
    @include no-bullets;
    display: flex;
    margin-right: 0;

    @include media-breakpoint-down(md) {
      width: 100%;
      flex-direction: column;
      order: 1;
      margin: 0;
      margin-top: 15px;
      flex-grow: 1;
      overflow: auto;
    }

    li {
      padding: 10px 15px;

      @include media-breakpoint-down(md) {
        padding: 15px;
      }

      a {
        display: block;
        font-weight: 100;

        @include media-breakpoint-down(md) {
          padding: 0;
        }

        &:hover {
          color: $primary;
        }
      }
    }
  }
}

.header-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 20px;
  color: #FFF;
  background-color: #FFFFFF26;
  border: none;
}
.header-dl-btn {
  color: initial !important;
}

@include media-breakpoint-down(md) {
  #toggle-mode-btn {
    margin-left: auto;
  }
}
</style>