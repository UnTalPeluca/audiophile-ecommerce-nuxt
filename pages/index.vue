<template>
  <div class="flex flex-col gap-32">
    <section>
      <HeroHeader :title="hero.title" :description="hero.description" :image="hero.image" :link="hero.link"
       />
    </section>
    <section>
      <Container>
        <CategoryList />
      </Container>
    </section>
    <section>
      <Container class="flex flex-col gap-6">
        <CardHomeProductA :product="product1" />
        <CardHomeProductB :product="product2" />
        <CardHomeProductC :product="product3" />
      </Container>
    </section>
    <section>
      <CardBio />
    </section>
  </div>
</template>

<script setup>

const hero = {
  title: 'XX99 Mark II Headphones',
  description: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
  link: '/product/xx99-mark-two-headphones',
  image: {
    mobile: '/home/mobile/image-header-hero.jpg',
    tablet: '/home/tablet/image-header-hero.jpg',
    desktop: '/home/desktop/image-header-hero.jpg'
  }
}
const product1 = {
  title: 'ZX9 SPEAKER',
  description: 'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
  link: '/product/zx9-speaker',
  image: {
    mobile: '/home/mobile/image-speaker-zx9.png',
    tablet: '/home/tablet/image-speaker-zx9.png',
    desktop: '/home/desktop/image-speaker-zx9.png'
  }
}
const product2 = {
  title: 'ZX7 SPEAKER',
  description: 'Stream high quality sound wirelessly with Bluetooth and enjoy a powerfully balanced bass response.',
  link: '/product/zx7-speaker',
  image: {
    mobile: '/home/mobile/image-speaker-zx7.jpg',
    tablet: '/home/tablet/image-speaker-zx7.jpg',
    desktop: '/home/desktop/image-speaker-zx7.jpg'
  }
}
const product3 = {
  title: 'YX1 EARPHONES',
  description: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
  link: '/product/yx1-earphones',
  image: {
    mobile: '/home/mobile/image-earphones-yx1.jpg',
    tablet: '/home/tablet/image-earphones-yx1.jpg',
    desktop: '/home/desktop/image-earphones-yx1.jpg'
  }
}
</script>