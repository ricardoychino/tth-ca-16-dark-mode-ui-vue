<script setup lang="ts">
const doDownload = () => {}
</script>

<template>
  <button type="button" class="btn btn-primary" @click="doDownload()">
    <slot />
  </button>
</template>

