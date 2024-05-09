<script setup lang="ts">
</script>

<template>
  <!-- Header -->
  <header>
    <div class="container">
      <div class="header-wrapper">
        <a href="#" class="logo">
          <img src="/icon-logo-orange.png" alt="Logo icon" />
          <span>lightz.js</span>
        </a>
        <!-- Menu -->
        <nav id="menu">
          <ul>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          <a href="javascript:void(0)" class="toggle-mode menu-icon-btn" data-mode="dark">
            <i class="fa-solid fa-moon"></i>
          </a>
          <a href="javascript:void(0)" class="toggle-mode menu-icon-btn" data-mode="light">
            <i class="fa-solid fa-sun"></i>
          </a>
          <button type="button" class="btn btn-primary">
            Download
          </button>
        </nav>
        <!-- ./Menu -->
        <button type="button"
          id="nav-toggle"
          class="menu-icon-btn"
          aria-expanded="false"
          aria-controls="menu"
          aria-haspopup="true">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>
  <!-- ./Header -->
</template>