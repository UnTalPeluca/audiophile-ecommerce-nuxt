<template>
  <div class="text-center">
    <h4 class="uppercase font-bold md:text-[32px] md:pb-12">You may also like</h4>
    <div class="flex flex-col gap-14 md:flex-row md:gap-0 md:justify-between lg:gap-2">
      <article v-for="(product, index) in products" :key="index" class="flex flex-col items-center gap-8">
        <ResponsiveImage :image="product.imageAlsoLike" class="w-[223px] lg:w-[350px]"/>
        <h5 class="uppercase font-bold md:text-2xl">{{ product.nameShort }}</h5>
        <NuxtLink :to="product.slug">
          <ButtonPrimary class="bg-dark-orange text-white hover:bg-light-orange">see product</ButtonPrimary>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>