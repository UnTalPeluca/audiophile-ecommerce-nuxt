<template>
  <div class="flex flex-col justify-between gap-32 bg-grayish-white items-center min-h-screen">
    <div>
      <Header class="z-10" />
      <main class="w-screen">
        <slot></slot>
      </main>
    </div>
    <Footer />
  </div>
</template>