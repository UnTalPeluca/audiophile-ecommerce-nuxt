<template>
  <div>
    <NuxtLayout>
      <NuxtPage class="text-base" />
    </NuxtLayout>
  </div>
</template>

<script setup>
if (process.client) {
  const cart = useCartStore();
  cart.$subscribe((mutations, state) => {
    localStorage.setItem('cart', JSON.stringify(state.products));
  })
  const storageData = localStorage.getItem("cart")
  if (storageData) {
    cart.$patch({
      products: JSON.parse(storageData)
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap');

body {
  overflow-x: hidden;
}
</style>