<template>
  <Container class="flex flex-col gap-10 text-center md:items-center lg:flex-row-reverse lg:gap-0">
    <ResponsiveImage :image="image" class="lg:w-full" />
    <div class="flex flex-col gap-10 md:w-[575px] lg:w-full lg:text-start">
      <h2 class="text-3xl font-bold md:text-[40px] lg:leading-10 lg:pr-24">
        BRINGING YOU THE <strong class="text-dark-orange font-bold">BEST</strong> AUDIO GEAR
      </h2>
      <TextDescription class="text-pure-black lg:pr-20">Located at the heart of New York City, Audiophile is the premier
        store for
        high
        end headphones,
        earphones,
        speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to
        browse
        and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make
        Audiophile the best place to buy your portable audio equipment.</TextDescription>
    </div>
  </Container>
</template>

<script setup>
const image = {
  mobile: '/shared/mobile/image-best-gear.webp',
  tablet: '/shared/tablet/image-best-gear.webp',
  desktop: '/shared/desktop/image-best-gear.webp'
}
</script>