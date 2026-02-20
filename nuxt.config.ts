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

  modules: ['nuxt-lucide-icons', '@nuxt/eslint'],
  lucide: {
    namePrefix: 'Icon'
  }
})