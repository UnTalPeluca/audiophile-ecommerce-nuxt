<template>
  <article class="flex items-center gap-4">
    <img :src="product?.image.mobile" class="w-16 h-16 rounded-lg" />
    <div class="flex flex-col gap-2">
      <p class="font-bold text-pure-black uppercase">{{ product?.nameCart }}</p>
      <p class="font-bold text-[14px] text-pure-black/50">{{ formatCurrency(product?.price) }}</p>
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