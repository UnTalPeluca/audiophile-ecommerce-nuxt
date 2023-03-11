<template>
  <Container>
    <ButtonGoBack />
    <div class="flex flex-col gap-32">
      <section class="flex flex-col gap-20">
        <CardBuyProduct :product="product" />
        <article class="flex flex-col gap-6">
          <h2 class="text-2xl font-bold uppercase tracking-wide">Features</h2>
          <TextDescription class="text-pure-black/50 ">{{ product.features }}</TextDescription>
        </article>
        <article class="flex flex-col gap-6 md:flex-row md:justify-between">
          <h3 class="text-2xl font-bold uppercase tracking-wide md:w-full">In the box</h3>
          <ul class="md:w-full">
            <li v-for="({ item, quantity }, index) in product.includes" :key="index" class="text-pure-black/50">
              <span class="text-dark-orange font-bold pr-6">{{ quantity }}x</span> {{ item }}
            </li>
          </ul>
        </article>
      </section>
      <ProductGallery :images="product.gallery" />
      <SuggestedProducts v-if="suggestedProducts" :products="suggestedProducts" />
      <CategoryList />
      <CardBio />
    </div>
  </Container>
</template>

<script setup>

const { params } = useRoute()
const { getProductBySlug } = useFirestore()

const suggestedProducts = ref([])
const product = await getProductBySlug(params.slug)

const getSuggestedProducts = async () => {
  const products = []
  const promises = Object.values(product.others).map(async (slug) => {
    const product = await getProductBySlug(slug)
    products.push(product)
  })
  await Promise.all(promises)
  suggestedProducts.value = products
}

getSuggestedProducts()
</script>

