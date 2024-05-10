<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

interface IconComponentProps {
  type: string
}

const props = defineProps<IconComponentProps>()

const IconComponent = defineAsyncComponent(() => import(`@/components/icons/${props.type.toLowerCase()}.vue`))
</script>

<template>
  <component :is="IconComponent" />
</template>