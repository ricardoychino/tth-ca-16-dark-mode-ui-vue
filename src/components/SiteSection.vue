<script setup lang="ts">
</script>

<template>
  <section class="ltz-section">
    <div class="container">
      <h2 class="section-heading">
        <slot name="title" />
      </h2>
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ltz-section {
  @include base-padding;
}
.section-heading {
  font-weight: 700;
  text-align: center;
  font-size: 36px;
  margin: 0;
  margin-bottom: 30px;
  color: var(--section-title-start);

  /* Fallback as mentioned here: https://bootcamp.uxdesign.cc/gradient-text-in-css-609068d3f953 */
  @supports (background-clip: text) {
    background-image: linear-gradient(60deg, var(--section-title-start), var(--section-title-end));
    background-clip: text;
    color: transparent;
  }
}
</style>