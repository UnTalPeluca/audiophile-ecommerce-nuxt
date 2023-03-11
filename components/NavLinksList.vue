<template>
  <nav class="flex flex-col items-center">
    <ul class="flex flex-col gap-4 items-center text-sm md:flex-row md:gap-8">
      <li v-for="({ name, link }, index) in links" :key="index">
        <NuxtLink class="text-white font-bold uppercase tracking-extra-wide hover:text-dark-orange" :to="link">{{ name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const links = [
  { name: 'Home', link: '/' },
  { name: 'Headphones', link: '/category/headphones' },
  { name: 'Speakers', link: '/category/speakers' },
  { name: 'Earphones', link: '/category/earphones' }
]
</script>

<style scoped></style>