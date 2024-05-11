<script setup lang="ts"></script>

<template>
  <div class="feature-item col-11 col-lg-5">
    <span class="icon-wrapper">
      <slot name="icon" />
    </span>
    <div class="feature-content">
      <h3><slot name="title" /></h3>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.feature-item {
  display: flex;
  margin: 30px 0;

  &:nth-child(4n + 3) {
    margin-left: auto;
  }
  @include media-breakpoint-down(lg) {
    &:nth-child(2n) {
      margin-left: auto;
    }
    &:nth-child(2n + 1) {
      margin-left: 0;
    }
  }

  .icon-wrapper {
    display: flex;
    width: 70px;
    height: 70px;
    border: 1px solid;
    border-radius: 100px;
    padding: 20px;
    margin-right: 20px;
    flex-shrink: 0;
    border-color: var(--feature-item-color);


    :deep(svg) {
      margin: auto;
      max-width: 100%;
      max-height: 100%;
      font-size: 24px;
      color: var(--feature-item-color);
    }
  }
}
.feature-content {
  & > * {
    margin: 0;
  }

  h3 {
    font-size: 1.17rem;
    margin-bottom: 10px;
    font-weight: 700;
  }

  :deep(p) {
    font-size: 0.875em;
    font-weight: 300;
    letter-spacing: 0.1px;
  }
}
</style>