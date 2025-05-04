import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    baseURL: "/",
  },
  devtools: false,
  ssr: true,
  css: ["@/assets/styles/global.sass"],
  modules: [
    '@nuxtjs/i18n', 
    '@nuxt/image', 
    'nuxt-lazy-load'
  ],
  plugins: ["~/directives/reveal.js"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use '@/assets/styles/fonts' as *
            @use '@/assets/styles/variables' as *
            @use '@/assets/styles/mixins' as *
          `,
        },
        sass: {
          additionalData: `
            @use '@/assets/styles/fonts' as *
            @use '@/assets/styles/variables' as *
            @use '@/assets/styles/mixins' as *
          `,
        },
      },
    },
  },

  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "En" },
      { code: "fr", iso: "fr-FR", name: "Fr" },
      { code: "ru", iso: "ru-RU", name: "Ru" },
    ],
    defaultLocale: "fr",
    vueI18n: "./locales/i18n.config.js",
    strategy: "prefix_except_default",
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    restructureDir: false
  },
  lazyLoad: {
    images: true,
    defaultImage: '/images/placeholder.gif'
  },
  compatibilityDate: "2025-03-04",
});