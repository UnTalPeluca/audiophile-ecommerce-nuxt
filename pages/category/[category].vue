<template>
  <div class="flex flex-col gap-14 md:gap-28">
    <div class="bg-pure-black border-t border-white/10">
      <h1 class="text-3xl text-white font-bold uppercase text-center py-8 md:py-24 md:text-[40px]">{{ title }}</h1>
    </div>
    <div class="flex flex-col gap-32">
      <section>
        <Container class="flex flex-col gap-32">
          <CardCategoryProduct v-for="(product, index) in products" :key="product.id" :product="product"
            :class="index % 2 === 0 ? 'lg:flex-row-reverse' : ''" />
        </Container>
      </section>
      <section class="pt-12">
        <Container>
          <CategoryList />
        </Container>
      </section>
      <section>
        <CardBio />
      </section>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const title = route.params.category
const { getProductsByCategory } = useFirestore()
const products = await getProductsByCategory(title)
if (products.length === 0) {
  throw createError({ statusCode: 404, message: 'Category not found' })
}
useHead({
  title: `Audiophile - ${title.toUpperCase()}`
})
</script>