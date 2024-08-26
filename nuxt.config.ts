// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  css: ["@/assets/scss/global.scss", "vue3-carousel/dist/carousel.css"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },

  modules: ['vue3-carousel-nuxt'],
  carousel: {
    prefix: 'carousel',
  }
})