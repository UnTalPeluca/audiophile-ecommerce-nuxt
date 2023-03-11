<template>
  <fieldset class="flex flex-col gap-6">
    <legend class="text-sm font-bold uppercase text-dark-orange pb-4">{{ title }}</legend>
    <slot />
  </fieldset>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>