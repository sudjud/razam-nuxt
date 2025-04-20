import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'favicon', href: '/public/favicons/favicon.ico' },
      { name: 'apple-touch-icon', href: '/public/favicons/apple-touch-icon.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/public/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/public/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/public/favicons/site.webmanifest' }
    ]
  },
  devtools: false,
  ssr: true,
  css: ["@/assets/styles/global.sass"],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/image',
    'nuxt-schema-org'
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
    vueI18n: "./locales/index.js",
    strategy: "prefix_except_default",
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
  },
  compatibilityDate: "2025-03-04",
});