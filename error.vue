<template>
  <Header />
  <div class="max-w-sm mx-auto text-center my-32">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <div class="flex flex-col gap-8 items-center mt-8">
      <p class="text-3xl">{{ error.message }}</p>
      <NuxtLink to="/">
        <ButtonPrimary class="bg-dark-orange hover:bg-light-orange text-white">Go to Homepage</ButtonPrimary>
      </NuxtLink>
    </div>
  </div>
  <Footer />
</template>

<script setup>
defineProps(['error'])
</script>