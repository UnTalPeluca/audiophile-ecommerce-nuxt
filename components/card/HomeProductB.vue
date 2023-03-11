<template>
  <article class="rounded-lg h-[320px]" :style="bgImg">
    <div class="flex flex-col items-start justify-center gap-8 text-center mx-auto px-6 h-full md:px-20">
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
const bgImg = useDynamicBgImg(props.product.image)
</script>
