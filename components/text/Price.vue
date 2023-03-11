<template>
  <b class="text-lg tracking-wider">{{ formatCurrency(price) }}</b>
</template>

<script setup>
const slot = useSlots()
const price = computed(() => slot.default()[0].children)
</script>