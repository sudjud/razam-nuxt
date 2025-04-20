<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <component :is="currentHeaderComponent" />

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
import { onMounted, onUnmounted, shallowRef } from "vue";
import { useHead } from "nuxt/app";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { useRequestURL } from "nuxt/app";
import LoaderComponent from "../components/Loader/LoaderComponent.vue";

const loader = ref(true);

setTimeout(() => {
  loader.value = false;
}, 2310);

const url = useRequestURL();
const baseURL = `${url.protocol}//${url.host}`;

const { t, locale } = useI18n();
const route = useRoute();

useHead({
  title: () => t("meta.title"),
  htmlAttrs: {
    lang: () => locale.value || 'fr'
  },
  meta: [
    { name: "description", content: () => t("meta.description").slice(0, 160) },
    { name: "keywords", content: () => t("meta.keywords") },

    // Open Graph
    { property: "og:title", content: () => t("meta.title") },
    { property: "og:description", content: () => t("meta.description").slice(0, 160) },
    { property: "og:url", content: () => `${baseURL}${route.path}` },
    { property: "og:locale", content: () => {
      switch (locale.value) {
        case 'en': return 'en_US';
        case 'ru': return 'ru_RU';
        default: return 'fr_FR';
      }
    }},
    { property: "og:image", content: `${baseURL}/images/logo.webp` },
    { property: "og:image:alt", content: () => t("meta.title") },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: () => t("meta.title") },
    { name: "twitter:description", content: () => t("meta.description").slice(0, 160) },
    { name: "twitter:image", content: `${baseURL}/images/logo.webp` },
    { name: "twitter:image:alt", content: () => t("meta.title") },
  ],
  link: [
    { rel: "canonical", href: `${baseURL}${route.path}` },
    { rel: "alternate", hreflang: "en", href: `${baseURL}/en/` },
    { rel: "alternate", hreflang: "fr", href: `${baseURL}/` },
    { rel: "alternate", hreflang: "ru", href: `${baseURL}/ru/` },
    { rel: "alternate", hreflang: "x-default", href: `${baseURL}/` }
  ]
})


const getInitialHeaderComponent = () => {
  if (typeof window === "undefined") return HeaderComponent;
  return window.innerWidth <= 768 ? HeaderSmComponent : HeaderComponent;
};

const currentHeaderComponent = shallowRef(getInitialHeaderComponent());

if (process.client) {
  // Функция выбора хедера по ширине экрана
  const updateHeaderComponent = () => {
    currentHeaderComponent.value =
      window.innerWidth <= 768 ? HeaderSmComponent : HeaderComponent;
  };

  // Устанавливаем хедер при загрузке
  onMounted(() => {
    updateHeaderComponent();
    window.addEventListener("resize", updateHeaderComponent);
  });

  // Убираем слушатель событий при удалении компонента
  onUnmounted(() => {
    window.removeEventListener("resize", updateHeaderComponent);
  });
}
</script>

<style lang="sass">
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
