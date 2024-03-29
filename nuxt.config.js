// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  imports: {
    dirs: ["stores"],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            "dark-orange": "#D87D4A",
            black: "#101010",
            "cream-white": "#F1F1F1",
            "grayish-white": "#FAFAFA",
            "light-orange": "#FBAF85",
            white: "#FFFFFF",
            "pure-black": "#000000",
            "dark-gray": "#4C4C4C",
          },
          fontSize: {
            sm: "0.813rem",
            base: "0.938rem",
            "3xl": "1.75rem",
            "5xl": [
              "3.5rem",
              {
                lineHeight: "3.625rem",
              },
            ],
          },
          letterSpacing: {
            wide: "0.05em",
            wider: "0.075em",
            widest: "0.1em",
            "extra-wide": "0.125em",
          },
          maxWidth: {
            xs: "327px",
            sm: "375px",
            "6xl": "1110px"
          },
          width: {
            32: "7.5rem",
          },
          fontFamily: {
            sans: ['Manrope'],
          }
        },
      },
    },
  },
});
