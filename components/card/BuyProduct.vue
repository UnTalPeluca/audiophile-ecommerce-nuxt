<template>
  <article class="flex flex-col gap-6 md:flex-row md:gap-20 md:items-center">
    <ResponsiveImage :image="product.image" class="image" />
    <div>
      <TextNewProduct class="text-dark-orange pb-4" v-if="product.new" />
      <div class="flex flex-col gap-6">
        <h1 class="text-3xl text-pure-black font-bold uppercase md:pr-32">{{ product.name }}</h1>
        <TextDescription class="text-pure-black/50 md:pr-12">{{ product.description }}</TextDescription>
        <TextPrice>{{ product.price }}</TextPrice>
        <div class="flex gap-4">
          <QuantitySelector v-model="quantity" />
          <ButtonPrimary class="bg-dark-orange text-white hover:bg-light-orange" @click="handleClick">ADD TO CART
          </ButtonPrimary>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import Toastify from 'toastify-js'
const cart = useCartStore()
const props = defineProps({
  product: {
    type: Object,
    required: true,
  }
});
const quantity = ref(1)
const handleClick = () => {
  cart.addToCart(props.product, quantity.value)
  Toastify({
    text: 'Product added to cart!',
    duration: 1500,
    gravity: "bottom",
    position: "fixed",
    stopOnFocus: true,
    className: 'toastify'
  }).showToast()
}
</script>

<style>
.toastify {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 20px;
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #D87D4A;
  animation: slideInUp 0.5s ease-in-out;
}

@keyframes slideInUp {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
}
</style>
