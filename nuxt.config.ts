// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ] as any,
  },

  modules: ['nuxt-lucide-icons', '@nuxtjs/i18n'],

  lucide: {
    namePrefix: 'Icon'
  },

  i18n: {
    defaultLocale: 'fr',
    locales: [
      { code: 'en', name: 'English', language: "en-US", file: 'en.json' },
      { code: 'fr', name: 'Français', language: "fr-FR", file: 'fr.json' }
    ],
  }
})