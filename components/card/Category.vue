<template>
  <article
    class="bg-cream-white h-40 p-5 max-w-xs w-full relative rounded-lg flex flex-col justify-end md:max-w-[223px] lg:max-w-[350px]">
    <div class="w-32 left-0 right-0 mx-auto absolute h-0 -top-10">
      <img :src="image" alt="" />
    </div>
    <div class="test flex flex-col gap-4 items-center">
      <b class="uppercase lg:text-lg">{{ name }}</b>
      <NuxtLink class="text-pure-black text-sm text-opacity-50 font-bold flex items-center gap-2 hover:text-dark-orange"
        :to="to" @click="$emit('onClickLink')">
        SHOP <IconContainer>
          <IconArrowRight />
        </IconContainer>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
})


</script>