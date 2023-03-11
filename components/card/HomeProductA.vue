<template>
  <article class="bg-dark-orange rounded-lg bg-circles overflow-hidden h-[600px] pt-12 pb-14 flex flex-col justify-between
          md:h-[720px] md:pt-16 lg:flex-row lg:h-[560px] lg:items-center">
    <ResponsiveImage :image="product.image" class="w-[172px] mx-auto md:w-[197px] lg:w-[400px] lg:pt-12" />
    <div class="flex flex-col items-center gap-6 text-center mx-auto md:gap-8 md:w-[400px] lg:items-start lg:text-start">
      <h2 class="text-white font-bold text-4xl w-8/12 md:text-5xl">{{ product.title }}</h2>
      <TextDescription class="text-white text-opacity-75 w-10/12">
        {{ product.description }}
      </TextDescription>
      <NuxtLink :to="product.link">
        <ButtonPrimary class="bg-pure-black text-white hover:bg-dark-gray">SEE PRODUCT</ButtonPrimary>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.bg-circles {
  background-image: url(@/assets/images/pattern-circles.svg);
  background-repeat: no-repeat;
  background-size: 550px;
  background-position: center -120px;
}

@media screen and (min-width: 768px) {
  .bg-circles {
    background-position: center -330px;
    background-size: 1000px
  }
}

@media screen and (min-width: 1024px) {
  .bg-circles {
    background-position: -190px -50px;
    background-size: 975px
  }
}
</style>