<template>
  <BlackOverlay @click.self="handler(false)" />
  <nav class="pb-8 px-6 bg-white rounded-b-lg pt-20 absolute top-full left-2 w-full">
    <CategoryList :categories="categories" />
  </nav>
</template>

<script setup>
import categories from '~~/assets/json/categories.json'
const props = defineProps({
  handler: {
    type: Function,
    required: true
  }
})

</script>