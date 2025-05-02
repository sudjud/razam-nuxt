<template>
  <header class="header" :class="{ hidden: isHidden }">
    <div class="container">
      <div class="logo">
        <NuxtLink :to="localePath('/')">
          <img src="/images/logo.webp" alt="Razam" />
        </NuxtLink>
      </div>

      <nav class="nav-menu">
        <ul>
          <li>
            <NuxtLink :to="localePath('/')" :class="{ active: isActive('/') }">
              {{ $t("menu.home") }}
            </NuxtLink>
          </li>
          <span class="divider">/</span>
          <li>
            <NuxtLink
              :to="localePath('/about')"
              :class="{ active: isActive('/about') }"
            >
              {{ $t("menu.about") }}
            </NuxtLink>
          </li>
          <span class="divider">/</span>
          <li>
            <NuxtLink
              :to="localePath('/services')"
              :class="{ active: isActive('/services') }"
            >
              {{ $t("menu.services") }}
            </NuxtLink>
          </li>
          <span class="divider">/</span>
          <li>
            <NuxtLink
              :to="localePath('/portfolio')"
              :class="{ active: isActive('/portfolio') }"
            >
              {{ $t("menu.portfolio") }}
            </NuxtLink>
          </li>
          <span class="divider">/</span>
          <li>
            <NuxtLink
              :to="localePath('/news')"
              :class="{ active: isActive('/news') }"
            >
              {{ $t("menu.news") }}
            </NuxtLink>
          </li>
          <span class="divider">/</span>
          <li>
            <NuxtLink
              :to="localePath('/contact')"
              :class="{ active: isActive('/contact') }"
            >
              {{ $t("menu.contact") }}
            </NuxtLink>
          </li>
          <li>
            <LangSwitchComponent />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import LangSwitchComponent from "../components/Tools/LangSwitchComponent.vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    LangSwitchComponent,
  },
  setup() {
    const route = useRoute();
    const localePath = useLocalePath();
    const { locale } = useI18n();

    const isActive = (path) => {
      const localizedPath = localePath(path);
      return route.path === localizedPath;
    };

    const lastScrollY = ref(0);
    const isHidden = ref(false);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        isHidden.value = false;
      } else {
        isHidden.value = true;
      }

      lastScrollY.value = currentScrollY;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { isActive, isHidden, localePath, locale };
  },
});
</script>

<style lang="sass" scoped>
.header
  position: fixed
  top: 0
  left: 0
  width: 100%
  display: flex
  align-items: center
  background-color: transparent
  z-index: 100
  transition: 0.2s ease-in-out
  &.hidden
    transition: 0.2s ease-in-out
    background-color: rgba(white, 1)

  .container
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    padding: 0 100px
    box-sizing: border-box

  .logo
    img
      height: 90px
      padding: 10px 0
      display: block

  .nav-menu
    ul
      display: flex
      font-family: $font-header
      align-items: center
      font-weight: 600
      gap: 20px
      list-style: none
      margin: 0
      padding: 0

      li
        a
          text-decoration: none
          font-size: 1.25rem
          color: $font-grey
          font-weight: 500
          transition: color 0.3s ease
          @media (max-width: 992px)
            font-size: 1.25rem !important
          @media (max-width: 850px)
            font-size: 1rem !important

          &:hover
            color: $font-black

          &.active
            color: $font-black
      .divider
        font-size: 1.5rem
        color: $font-grey
        margin: 0 12px

@media (max-width: 1200px)
  .header
    .container
      padding: 0 70px 0 70px
      .nav-menu ul
        gap: 10px
        .divider
          margin: 0 10px
        li
          a
            font-size: 16px

@media (max-width: 992px)
  .header
    .container
      padding: 0 30px
    .logo
      img
        height: 80px
        padding: 10px 0
      .nav-menu ul
        gap: 5px
        .divider
          margin: 0 10px
        li
          a
            font-size: 14px
</style>
