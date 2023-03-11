<template>
  <BlackOverlay class="bg-pure-black/40 flex items-center justify-center z-10">
    <div class="px-7 py-8 w-full bg-white max-w-xs rounded-lg flex flex-col gap-8 md:max-w-xl md:px-12 md:py-10">
      <div class="flex flex-col gap-7">
        <IconCheckmark />
        <p class="font-bold text-pure-black text-2xl tracking-wide md:text-[32px]">
          THANK YOU
          <br>
          FOR YOUR ORDER
        </p>
        <p class="text-pure-black/50">You will receive an email confirmation shortly.</p>
      </div>
      <div class="md:flex">
        <div class="bg-cream-white rounded-t-lg px-6 py-4 w-full md:rounded-t-none md:rounded-l-lg flex flex-col justify-center">
          <div class="flex justify-between pb-2">
            <CartProduct :product="successData?.products[0]" />
            <p class="text-pure-black/50 font-bold pt-1.5">x{{ successData?.products[0].quantity }}</p>
          </div>
          <div v-if="showAllProducts" class="flex flex-col gap-2">
            <div v-for="product in successData?.products.slice(1)" :key="product.id">
              <div class="flex justify-between pb-2 border-pure-black/10">
                <CartProduct :product="product" />
                <p class="text-pure-black/50 font-bold pt-1.5">x{{ product.quantity }}</p>
              </div>
            </div>
          </div>
          <button v-if="successData?.products?.length > 1"
            class="text-center w-full pt-4 pb-2.5 text-pure-black/50 text-xs font-bold hover:text-dark-orange 'border-pure-black/10 border-t"
            @click="showAllProducts = !showAllProducts">
            and {{ successData?.products?.length }} other item(s)
          </button>
        </div>
        <div
          class="flex flex-col gap-6 w-full bg-pure-black rounded-b-lg md:rounded-b-none md:rounded-r-lg md:justify-center">
          <div class="flex flex-col justify-between items-start gap-4 px-6 py-4 md:mt-auto md:py-6">
            <p class="text-white/50">GRAND TOTAL</p>
            <p class="font-bold text-lg text-white">{{ formatCurrency(successData?.getGrandTotal) }}</p>
          </div>
        </div>
      </div>
      <ButtonPrimary class="bg-dark-orange text-white text-sm py-4 md:mt-4" @click="handleClick">
        BACK TO HOME
      </ButtonPrimary>
    </div>
  </BlackOverlay>
</template>

<script setup>
const props = defineProps({
  handler: {
    type: Function,
    required: true
  },
  successData: {
    type: Object,
    required: true
  }
})
const showAllProducts = ref(false)
const router = useRouter()
const handleClick = () => {
  props.handler(false)
  router.push('/')
}
</script>