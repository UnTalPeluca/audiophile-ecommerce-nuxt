<template>
  <Container>
    <CheckoutSuccessOverlay v-if="showSuccessOverlay" :handler="setShowSuccessOverlay" :successData="successData" />
    <ButtonGoBack />
    <div v-if="showSuccessOverlay" class="h-96" />
    <div v-else-if="cart.products.length >= 1" class="flex flex-col gap-8 lg:flex-row lg:justify-between">
      <div class="bg-white rounded-lg p-6 flex flex-col gap-8 lg:w-full">
        <h1 class="font-bold text-3xl">CHECKOUT</h1>
        <CheckoutForm ref="checkoutForm" :onSuccess="onSuccessSubmit" />
      </div>
      <section class="lg:max-w-[350px] lg:w-full">
        <div class="bg-white rounded-lg p-6 flex flex-col gap-8">
          <h2 class="font-bold text-lg tracking-wider">SUMMARY</h2>
          <CheckoutSummary />
          <ButtonPrimary @click="checkoutForm?.submit" class="bg-dark-orange text-white tracking-wider">
            CONTINUE & PAY
          </ButtonPrimary>
        </div>
      </section>
    </div>
    <div v-else class="flex flex-col gap-12">
      <div class="flex flex-col gap-4">
        <IconCart />
        <h1 class="font-bold text-3xl">You cart is empty</h1>
        <p class="text-pure-black/50">Please add some products to your cart</p>
      </div>
      <NuxtLink to="/">
        <ButtonPrimary class="bg-dark-orange hover:bg-light-orange text-white">
          Go Homepage
        </ButtonPrimary>
      </NuxtLink>
    </div>
  </Container>
</template>

<script setup>

useHead({
  title: "Audiophile - Checkout"
})
const showSuccessOverlay = ref(false)
const checkoutForm = ref(null)
const successData = ref(null)
const cart = useCartStore();
const setShowSuccessOverlay = (value) => {
  showSuccessOverlay.value = value
}
const onSuccessSubmit = async (formValue) => {
  const response = await useFetch(
    '/api/checkout',
    {
      method: 'POST',
      body: formValue
    }
  )
  if (response.data.value.status === 200) {
    successData.value = { ...cart }
    setShowSuccessOverlay(true)
    cart.clearCart()
  }
}

</script>