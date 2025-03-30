// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  devtools: { enabled: true },
  compatibilityDate: "2024-07-22",
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})