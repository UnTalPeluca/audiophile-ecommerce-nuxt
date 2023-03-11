<template>
  <article class="flex flex-col gap-6 md:flex-row md:gap-3">
    <ResponsiveImage :image="product.image" class="w-full h-[200px] md:h-[320px]" />
    <div
      class="flex flex-col items-start justify-center gap-8 text-center rounded-lg bg-cream-white px-6 h-[200px] md:h-[320px] md:w-full">
      <h2 class="font-bold text-3xl text-pure-black">{{ product.title }}</h2>
      <NuxtLink :to="product.link">
        <ButtonPrimary class="border border-pure-black text-pure-black hover:bg-pure-black hover:text-white">SEE PRODUCT
        </ButtonPrimary>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
