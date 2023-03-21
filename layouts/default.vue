<template>
  <div class="flex flex-col justify-between gap-32 bg-grayish-white items-center min-h-screen lg:gap-44">
    <NuxtLoadingIndicator color="#D87D4A"/>
    <div>
      <Header class="z-10" />
      <main class="w-screen">
        <slot></slot>
      </main>
    </div>
    <Footer />
  </div>
</template>