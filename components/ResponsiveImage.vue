<template>
  <picture>
    <source :srcset="image?.desktop" media="(min-width: 1024px)">
    <source :srcset="image?.tablet" media="(min-width: 768px)">
    <img :src="image?.mobile" :alt="image?.name || ''" v-bind="$attrs" class="rounded-lg mx-0">
  </picture>
</template>

<script setup>
defineProps({
  image: {
    type: Object
  }
})
</script>
