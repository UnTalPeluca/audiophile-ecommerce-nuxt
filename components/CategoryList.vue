<template>
  <ul class="flex flex-col gap-16 md:flex-row md:justify-between md:gap-0 w-full lg:gap-2">
    <li v-for="(category, index) in categories" :key="index" class="w-full flex justify-center">
      <CardCategory :to="category.link" :name="category.name" :image="category.image" />
    </li>
  </ul>
</template>

<script setup>
import defaultCategories from '~~/assets/json/categories.json'
const props = defineProps({
  categories: {
    type: [Object, Array],
    default: defaultCategories
  },
})
</script>