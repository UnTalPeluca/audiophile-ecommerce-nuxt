<template>
  <BlackOverlay @click.self="handler(false)" class="bg-pure-black/40 flex items-center justify-center z-10 ">
    <Container class="absolute h-full md:max-w-3xl flex items-center" @click.self="handler(false)">
      <div class="absolute px-7 py-8 w-full bg-white max-w-xs rounded-lg top-28 md:right-0">
        <div v-if="cart.products.length" class="flex flex-col gap-8">
          <div class="flex justify-between items-center">
            <p class="font-bold text-lg">CART ({{ cart.products.length }})</p>
            <button class="underline text-pure-black/50 hover:text-dark-orange hover:no-underline"
              @click="cart.clearCart">Remove all</button>
          </div>
          <div class="flex flex-col gap-6 ">
            <div v-for="(product, index) in cart.products" :key="product?.slug" class="flex justify-between items-center">
              <CartProduct :product="product" />
              <div class="flex justify-between items-center bg-cream-white">
                <button :class="buttonClasses" @click="decrease(index)">
                  -
                </button>
                <input v-model="product.quantity" class="bg-transparent w-8 text-center font-bold " disabled />
                <button :class="buttonClasses" @click="increase(index)">
                  +
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <div class="flex justify-between items-center">
              <p class="text-pure-black/50">TOTAL</p>
              <p class="font-bold text-lg">{{ formatCurrency(cart.getTotal) }}</p>
            </div>
            <ButtonPrimary class="bg-dark-orange text-white text-sm py-4 hover:bg-light-orange"
              @click="handleClickCheckout">
              CHECKOUT
            </ButtonPrimary>
          </div>
        </div>
        <div v-else class="flex flex-col items-center gap-4 py-6">
          <IconCart />
          <p class="font-bold text-lg text-pure-black">Your cart is empty :(</p>
        </div>
      </div>
    </Container>
  </BlackOverlay>
</template>

<script setup>
const props = defineProps({
  handler: {
    type: Function,
    required: true
  }
})
const router = useRouter()
const cart = useCartStore()
const buttonClasses = 'w-8 h-8 flex items-center justify-center text-pure-black/25 font-bold hover:text-dark-orange';
const decrease = (index) => {
  cart.products[index].quantity--
  const quantity = cart.products[index].quantity
  if (quantity === 0) {
    cart.removeFromCart(index)
  }
}
const increase = (index) => {
  cart.products[index].quantity++
}
const handleClickCheckout = () => {
  props.handler(false)
  router.push('/checkout')
}

</script>