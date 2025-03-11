<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <component :is="currentHeaderComponent" />

    <!-- Прелоадер -->
    <!-- <div v-if="isLoading" class="preloader">
      <div class="spinner"></div>
    </div> -->

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
// import WOW from "wow.js"; watch, nextTick, ref
import { useHead } from "nuxt/app";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { useRequestURL } from "nuxt/app";
import Breadcrumbs from "../components/Tools/Breadcrumbs.vue";

const url = useRequestURL();
const baseURL = `${url.protocol}//${url.host}`;

const { t, locale } = useI18n();
const route = useRoute();

useHead({
  title: () => t("meta.title"),
  meta: [
    { name: "description", content: () => t("meta.description").slice(0, 160) },
    { property: "og:title", content: () => t("meta.title") },
    { property: "og:description", content: () => t("meta.description").slice(0, 160) },
    { property: "og:url", content: () => `${baseURL}${route.path}` },
    { property: "og:locale", content: () => locale.value },
    { property: "og:image", content: `${baseURL}/images/logo.png` },
    { property: "og:image:alt", content: t("meta.title") },
  ],
  link: [
    { rel: "canonical", href: `${baseURL}${route.path}` },
    { rel: "alternate", hreflang: "en", href: `${baseURL}/en/` },
    { rel: "alternate", hreflang: "fr", href: `${baseURL}/fr/` },
    { rel: "alternate", hreflang: "ru", href: `${baseURL}/ru/` },
    { rel: "alternate", hreflang: "x-default", href: `${baseURL}/` },
  ],
});


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

// const route = useRoute();
// const isLoading = ref(true);
// const showPage = ref(false);
// let wowInstance = null;

// let scrollY = 0;
// let speed = 0;
// let isScrolling = false;

// const easeScroll = () => {
//   if (Math.abs(speed) <= 0.15) {
//     isScrolling = false;
//     return;
//   }

//   speed *= 0.85;
//   scrollY += speed;

//   scrollY = Math.max(
//     0,
//     Math.min(
//       scrollY,
//       document.documentElement.scrollHeight - window.innerHeight
//     )
//   );

//   window.scrollTo(0, scrollY);
//   requestAnimationFrame(easeScroll);
// };

// const handleWheel = (event) => {
//   event.preventDefault();
//   speed += event.deltaY * 0.1;

//   if (!isScrolling) {
//     isScrolling = true;
//     easeScroll();
//   }
// };

// onMounted(async () => {
//   document.addEventListener("wheel", handleWheel, { passive: false });
//   window.addEventListener("resize", updateHeaderComponent);

//   await nextTick();

//   requestAnimationFrame(() => {
//     isLoading.value = false;
//     showPage.value = true;
//   });

//   setTimeout(() => {
//     wowInstance = new WOW({ live: false });
//     wowInstance.init();
//   }, 700);
// });

// onUnmounted(() => {
//   document.removeEventListener("wheel", handleWheel);
//   window.removeEventListener("resize", updateHeaderComponent);
// });

// watch(route, async () => {
//   isLoading.value = true;
//   showPage.value = false;

//   speed = 0;
//   scrollY = 0;

//   await nextTick();

//   requestAnimationFrame(() => {
//     isLoading.value = false;
//     showPage.value = true;
//   });

//   if (wowInstance) {
//     setTimeout(() => {
//       wowInstance.init();
//       window.scrollTo({ top: 1, behavior: "instant" });
//       setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 50);
//     }, 100);
//   }
// });
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
