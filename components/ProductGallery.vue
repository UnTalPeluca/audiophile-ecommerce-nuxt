<template>
  <div class="grid gap-5 md:justify-between product-gallery">
    <ResponsiveImage v-for="(image, index) in images" :key="index" :class="index" :image="image" class="rounded-lg" />
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Object,
    required: true
  }
})
</script>

<style>
.product-gallery img {
  height: 100%;
}

.product-gallery .first {
  order: 0;
}

.product-gallery .second {
  order: 1;
}

.product-gallery .third {
  order: 2;
}

@media screen and (min-width: 768px) {
  .product-gallery {
    grid-template-columns: 40% auto;
    grid-template-areas:
      "first third"
      "second third";
  }

  .product-gallery .first {
    grid-area: first;
  }

  .product-gallery .second {
    grid-area: second;
  }

  .product-gallery .third {
    grid-area: third;
  }
}
</style>