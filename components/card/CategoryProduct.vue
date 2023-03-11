<template>
  <article class="text-center flex flex-col gap-8 items-center md:gap-12 lg:flex-row lg:text-start">
    <ResponsiveImage :image="product.categoryImage" class="w-[540px]" />
    <div class="flex flex-col items-center gap-6 md:w-[575px] md:gap-4 lg:items-start">
      <TextNewProduct class="text-dark-orange" v-if="product.new" />
      <h2 class="text-3xl font-bold uppercase  md:text-[40px] md:w-[300px] md:leading-[44px] md:tracking-wide">{{
        product.name }}</h2>
      <TextDescription class="text-pure-black text-opacity-50">{{ product.description }}</TextDescription>
      <NuxtLink :to="`/product/${product.slug}`">
        <ButtonPrimary class="bg-dark-orange text-white hover:bg-light-orange">see product</ButtonPrimary>
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