<script setup lang="ts"></script>

<template>
  <div class="feature-item col-10 col-lg-5">
    <span class="icon-wrapper">
      <slot name="icon" />
    </span>
    <div class="feature-content">
      <h3><slot name="title" /></h3>
      <slot />
    </div>
  </div>
</template>