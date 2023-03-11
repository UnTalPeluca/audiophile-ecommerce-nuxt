<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-6">
      <div v-for="(product, key) in cart.products" :key="key" class="flex justify-between">
        <CartProduct :product="product" />
        <p class="pt-1 font-bold text-pure-black/50">x{{ product.quantity }}</p>
      </div>
    </div>
    <div class="flex flex-col gap-2 font-medium">
      <div class="flex justify-between">
        <p class="text-pure-black/50">TOTAL</p>
        <p class="font-bold text-pure-black text-lg">{{ formatCurrency(cart.getTotal) }}</p>
      </div>
      <div class="flex justify-between">
        <p class="text-pure-black/50">SHIPPING</p>
        <p class="font-bold text-pure-black text-lg">{{ formatCurrency(cart.shippingCost) }}</p>
      </div>
      <div class="flex justify-between">
        <p class="text-pure-black/50">VAT (INCLUDED)</p>
        <p class="font-bold text-pure-black text-lg">{{ formatCurrency(cart.getVat) }}</p>
      </div>
      <div class="flex justify-between pt-4">
        <p class="text-pure-black/50">GRAND TOTAL</p>
        <p class="font-bold text-dark-orange text-lg">{{ formatCurrency(cart.getGrandTotal) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const cart = useCartStore()
</script>