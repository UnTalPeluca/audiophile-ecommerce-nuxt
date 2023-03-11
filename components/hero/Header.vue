<template>
  <div class="h-full pt-[89px] md:pb-20 md:pt-28" :style="bgImg">
    <div class="flex flex-col items-center gap-6 text-white text-center py-28 max-w-xs mx-auto 
        md:max-w-md md:gap-8 lg:max-w-6xl lg:items-start lg:text-start lg:w-11/12">
      <TextNewProduct class="text-white/50 " />
      <h1 class="text-4xl font-bold uppercase tracking-wider md:text-5xl lg:w-[475px]">{{ title }}</h1>
      <TextDescription class="text-white text-opacity-75 lg:w-[350px]">{{ description }}</TextDescription>
      <NuxtLink :to="link">
        <ButtonPrimary class="bg-dark-orange hover:bg-light-orange">See Product</ButtonPrimary>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: Object,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

const bgImg = useDynamicBgImg(props.image)
</script>