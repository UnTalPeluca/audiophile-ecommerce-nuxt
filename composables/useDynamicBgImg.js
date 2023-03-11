export const useDynamicBgImg = (image) => {
  const bgImg = ref(null);
  const handleResize = () => {
    const imgUrl = () => {
      switch (true) {
        case window.innerWidth >= 1024:
          return image.desktop;
        case window.innerWidth >= 480:
          return image.tablet;
        default:
          return image.mobile;
      }
    };
    bgImg.value = [
      `backgroundImage: url('${imgUrl()}')`,
      "backgroundPosition: center",
      "backgroundSize: cover",
      "backgroundRepeat: no-repeat",
    ];
  };

  onMounted(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return bgImg;
};
