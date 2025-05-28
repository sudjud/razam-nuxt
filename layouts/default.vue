<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <div class="headersm__wrapper">
      <HeaderSmComponent />
    </div>
    <div class="headerxl__wrapper">
      <HeaderComponent />
    </div>

    <!-- Прелоадер -->
    <LoaderComponent />

    <!-- Контент страницы (скрываем при загрузке) -->
    <!-- <div v-if="!isLoading && showPage"> -->
    <div>
      <slot />
    </div>

    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from "../components/Header/HeaderComponent.vue";
import HeaderSmComponent from "../components/Header/HeaderSmComponent.vue";
import FooterComponent from "../components/Footer/FooterComponent.vue";
import { useHead } from "nuxt/app";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import LoaderComponent from "../components/Loader/LoaderComponent.vue";

const loader = ref(true);

setTimeout(() => {
  loader.value = false;
}, 2310);

const { t, locale } = useI18n();
const route = useRoute();
const localePath = useLocalePath();
const config = useRuntimeConfig();

const baseURL = config.public.siteUrl || "https://razam.fr";

useHead({
  script: [
    {
      type: "application/ld+json",
      children: () =>
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Razam",
          url: baseURL,
          logo: `${baseURL}/images/logo.webp`,
          description: t("meta.common.description"),
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "305 Av. Georges Pompidou",
            "addressLocality": "Vallauris",
            "postalCode": "06220",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 43.57321603486977,
            "longitude": 7.080337514280342
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33-6-64-36-12-20",
            "contactType": "customer support",
            "availableLanguage": ["French", "Russian", "English"]
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "09:00",
            "closes": "19:00"
          },
          sameAs: [
            "https://www.instagram.com/razam.design/",
            "https://www.threads.com/@razam.design/",
            "https://www.houzz.ru/pro/webuser-913531865"
          ],
        }),
    },
    {
      type: "application/ld+json",
      children: () =>
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: baseURL,
          name: "Razam",
          inLanguage: locale.value || "fr",
          potentialAction: {
            "@type": "SearchAction",
            target: `${baseURL}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }),
    },
  ],
  title: () => t("meta.common.title"),
  htmlAttrs: {
    lang: () => locale.value || "fr",
  },
  meta: [
    {
      name: "description",
      content: () => t("meta.common.description").slice(0, 160),
    },
    { name: "keywords", content: () => t("meta.common.keywords") },

    // Open Graph
    { property: "og:title", content: () => t("meta.common.title") },
    {
      property: "og:description",
      content: () => t("meta.common.description").slice(0, 160),
    },
    { property: "og:url", content: () => `${baseURL}${route.fullPath}` },
    {
      property: "og:locale",
      content: () => {
        switch (locale.value) {
          case "en":
            return "en_US";
          case "ru":
            return "ru_RU";
          default:
            return "fr_FR";
        }
      },
    },
    { property: "og:image", content: `${baseURL}/images/logo.webp` },
    { property: "og:image:alt", content: () => t("meta.common.title") },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: () => t("meta.common.title") },
    {
      name: "twitter:description",
      content: () => t("meta.common.description").slice(0, 160),
    },
    { name: "twitter:image", content: `${baseURL}/images/logo.webp` },
    { name: "twitter:image:alt", content: () => t("meta.common.title") },
  ],
  link: [
    { rel: "canonical", href: `${baseURL}${route.fullPath}` },
    {
      rel: "alternate",
      hreflang: "fr",
      href: `${baseURL}${localePath("index", "fr")}`,
    },
    {
      rel: "alternate",
      hreflang: "en",
      href: `${baseURL}${localePath("index", "en")}`,
    },
    {
      rel: "alternate",
      hreflang: "ru",
      href: `${baseURL}${localePath("index", "ru")}`,
    },
    {
      rel: "alternate",
      hreflang: "x-default",
      href: `${baseURL}${localePath("index", "fr")}`,
    },
  ],
});
</script>

<style lang="sass">
.headersm__wrapper
  display: none
  @media (max-width: 768px)
    display: block
.headerxl__wrapper
  display: block
  @media (max-width: 768px)
    display: none

/* Прелоадер */
.preloader
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: rgba(255, 255, 255, 0.9)
  display: flex
  align-items: center
  justify-content: center
  z-index: 9999
  transition: opacity 0.5s ease-in-out

/* Спиннер */
.spinner
  width: 50px
  height: 50px
  border: 5px solid #ccc
  border-top-color: #333
  border-radius: 50%
  animation: spin 0.8s linear infinite

@keyframes spin
  from
    transform: rotate(0deg)
  to
    transform: rotate(360deg)
</style>
