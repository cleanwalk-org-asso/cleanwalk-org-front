// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [
      // eslint-disable-next-line
      tailwindcss() as any,
    ],
  },

  modules: [
    'nuxt-lucide-icons',
    '@nuxt/eslint',
    '@nuxtjs/leaflet',
    '@nuxt/fonts'
  ],
  lucide: {
    namePrefix: 'Icon'
  },
  fonts: {
  families: [
    {
      name: 'Catamaran',
      provider: 'google',
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    }
  ]
}
})