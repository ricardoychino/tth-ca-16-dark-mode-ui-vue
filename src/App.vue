<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />

  <!-- Content -->
  <main>
    <!-- Hero section -->
    <section id="hero">
      <div class="container">
        <div class="hero-wrapper row">
          <div class="hero-info col">
            <h1>
              Welcome to <strong>Lightz.js</strong><br>
              Illuminating Your Web Development!
            </h1>

            <p>Are you tired of the same old, cumbersome JavaScript libraries that weigh down your web development projects? Look no further! Lightz.js is here to transform your coding experience and brighten your path to web development success.</p>

            <button type="button" class="btn btn-primary">
              Download lightz.js
            </button>
          </div>

          <div class="hero-image col">
            <img src="/hero-light-mode.png" data-mode="light" alt="Light mode image" />
            <img src="/hero-dark-mode.png" data-mode="dark" alt="Dark mode image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features section -->
    <section id="features" class="section-secondary">
      <div class="container">
        <h2 class="section-heading">Features That Shine Bright:</h2>

        <div class="features-list row">
          <!-- Item -->
          <div class="feature-item col">
            <span class="icon-wrapper">
              <i class="fa-solid fa-bolt"></i>
            </span>
            <div class="feature-content">
              <h3>Lightning Fast</h3>
              <p>Say goodbye to bloated libraries that slow down your websites. Lightz.js is feather-light and blazingly fast. With a minuscule footprint ...</p>
            </div>
          </div>
          <!-- Item -->
          <div class="feature-item col">
            <span class="icon-wrapper">
              <i class="fa-solid fa-code"></i>
            </span>
            <div class="feature-content">
              <h3>Intuitive Syntax</h3>
              <p>Coding should be fun, not a headache! Lightz.js offers an intuitive and elegant syntax that simplifies your development process. Our ...</p>
            </div>
          </div>
          <!-- Item -->
          <div class="feature-item col">
            <span class="icon-wrapper">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
            </span>
            <div class="feature-content">
              <h3>Animation Toolkit</h3>
              <p>Elevate your web design with Lightz.js's versatile animation toolkit. Create eye-catching animations effortlessly, from smooth ...</p>
            </div>
          </div>
          <!-- Item -->
          <div class="feature-item col">
            <span class="icon-wrapper">
              <i class="fa-solid fa-mobile-screen"></i>
            </span>
            <div class="feature-content">
              <h3>Responsive Design</h3>
              <p>Crafting responsive web designs has never been easier. Lightz.js includes a powerful set of tools to ensure your websites adapt seamlessly ...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- ./Content -->

  <SiteFooter />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
