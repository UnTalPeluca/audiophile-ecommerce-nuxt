<template>
  <header class="w-full h-[89px] flex items-center lg:h-[96px]" :class="headerClasses">
    <Container class="flex justify-between items-center z-10 h-full md:border-b-white/10 md:border-b">
      <button @click="setNavBarOverlay(!showNavBarOverlay)"
        class="flex items-center justify-center cursor-pointer lg:hidden">
        <IconContainer>
          <IconHamburger />
        </IconContainer>
      </button>
      <NuxtLink to="/" @click="setNavBarOverlay(showNavBarOverlay ? false : false)" class="md:mr-auto md:ml-10 lg:mx-0">
        <Logo />
      </NuxtLink>
      <NavLinksList class="hidden lg:block" />
      <button class="relative">
        <div v-if="cart.products.length >= 1"
          class="text-white font-bold absolute -top-2 bg-dark-orange w-5 h-5 rounded-full text-xs -right-4 flex items-center justify-center select-none cursor-default pointer-events-none">
          <p>{{ cart.products.length }}</p>
        </div>
        <IconContainer @click="handleCartClick">
          <IconCart />
        </IconContainer>
      </button>
    </Container>
    <CartOverlay v-if="showCartOverlay" :handler="setCartOverlay" />
    <HeaderNavBar v-if="showNavBarOverlay" :handler="setNavBarOverlay" />
  </header>
</template>

<script setup>
const cart = useCartStore()
const route = useRoute()
const isHomePage = computed(() => route.path === '/')
const headerClasses = computed(() => isHomePage.value ? 'border-b border-white/10 md:border-b-0 bg-transparent absolute top-0' : 'bg-pure-black relative')
const showCartOverlay = ref(false)
const showNavBarOverlay = ref(false)
const setCartOverlay = (value) => {
  showCartOverlay.value = value
}
const setNavBarOverlay = (value) => {
  showNavBarOverlay.value = value
}
const handleCartClick = () => {
  setNavBarOverlay(false)
  setCartOverlay(true)
}
</script>