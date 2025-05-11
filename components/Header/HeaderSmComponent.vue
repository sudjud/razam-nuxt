<template>
  <header class="header" :class="{ open: isOpen, hidden: isHidden && !isOpen }">
    <div class="container">
      <!-- Логотип -->
      <div class="logo" :class="{ open: isOpen }">
        <NuxtLink :to="localePath('/')">
          <img data-not-lazy src="/logo.webp" alt="Razam" />
        </NuxtLink>
      </div>
      <div class="logo logo-white" :class="{ open: isOpen }">
        <NuxtLink :to="localePath('/')">
          <img data-not-lazy src="/logo-white.webp" alt="Razam" />
        </NuxtLink>
      </div>

      <!-- Кнопка гамбургера -->
      <button
        @click="toggleMenu"
        :class="{ open: isOpen }"
        class="hamburger"
        :aria-expanded="isOpen"
      >
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </button>

      <!-- Навигационное меню -->
      <nav @click="closeMenu" class="nav-menu" :class="{ open: isOpen }">
        <ul>
          <li>
            <NuxtLink
              :to="localePath('/')"
              :class="{ active: isActive('/') }"
              @click="closeMenu"
              >{{ $t("menu.home") }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="localePath('/about')"
              :class="{ active: isActive('/about') }"
              @click="closeMenu"
              >{{ $t("menu.about") }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="localePath('/services')"
              :class="{ active: isActive('/services') }"
              @click="closeMenu"
              >{{ $t("menu.services") }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="localePath('/portfolio')"
              :class="{ active: isActive('/portfolio') }"
              @click="closeMenu"
              >{{ $t("menu.portfolio") }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="localePath('/news')"
              :class="{ active: isActive('/news') }"
              @click="closeMenu"
              >{{ $t("menu.news") }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="localePath('/contact')"
              :class="{ active: isActive('/contact') }"
              @click="closeMenu"
              >{{ $t("menu.contact") }}</NuxtLink
            >
          </li>
          <li class="cost-modal">
            <CostCalcModal
              @close-modal="toggleModal"
              @submit-form="submitModal"
              @click.stop
              v-if="modalOpened"
            />
            
            <p v-if="modalSubmitted" :class="{ submit: modalSubmitted }" class="success-message">
              {{ $t("calculator.success") }}
            </p>
            <button
              @click.stop="toggleModal"
              class="go-to-calc_btn"
            >
              {{ $t("calculator.modalButton") }}
            </button>
          </li>
          <li @click.stop class="lang-switch">
            <LangSwitchComponent />
          </li>
          <li>
            <div class="social-links">
              <SocialMedias />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import LangSwitchComponent from "../components/Tools/LangSwitchComponent.vue";
import SocialMedias from "../components/Tools/SocialMedias.vue";
import CostCalcModal from "../Tools/CostCalcModal.vue";

const route = useRoute();
const localePath = useLocalePath();
const { locale } = useI18n();


const modalOpened = ref(false);
const modalSubmitted = ref(false);

const submitModal = () => {
  modalSubmitted.value = true;
  setTimeout(() => {
    modalSubmitted.value = false;
    closeMenu();
  }, 3000);
  modalOpened.value = false;
}

const toggleModal = () => {
  modalOpened.value = !modalOpened.value;
}

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

const isActive = (path) => {
  const localizedPath = localePath(path);
  return route.path === localizedPath;
};

// Состояние меню
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const closeMenu = () => {
  isOpen.value = false;
};
</script>

<style scoped lang="sass">
.go-to-calc_btn
  font-family: Geometria, sans-serif
  padding: 1rem 2rem
  font-weight: 500
  color: $bgc-main
  border: 2px solid $bgc-main
  font-size: 18px
  border-radius: 12px
  background-color: transparent
  margin-left: 10px
  @media (max-width: 1200px)
    border: 1px solid $bgc-main
  @media (max-width: 850px)
    font-size: 18px
  &:hover
    transform: scale(1.02)
  &:active
    transform: scale(1)
.header
  position: fixed
  width: 100%
  display: flex
  height: 70px
  justify-content: space-between
  align-items: center
  padding: 5px 20px
  z-index: 100
  .cost-modal
    font-weight: normal
    .success-message
      opacity: 0
      position: fixed
      z-index: 10000000
      top: 10%
      left: 50%
      transform: translateX(-50%)
      font-size: 1.5rem
      font-weight: 600
      padding: 2rem
      background-color: $bgc-second
      color: green
      border-radius: 30px
      transition-duration: 0.6s
      &.submit
        transition-duration: 0.6s
        opacity: 1
  .container
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    padding: 0
  &.open
    background-color: rgba(black, 0.7)
  &.hidden
    transition: 0.2s ease-in-out
    background-color: rgba(white, 1)

/* Логотип */
.logo img
  height: 50px
  a
    height: 0

.logo-white img
  height: 50px
  a
    height: 0

.logo
  &.open
    display: none

.logo-white
  display: none
  &.open
    display: block


/* Кнопка гамбургера */
.hamburger
  display: flex
  flex-direction: column
  gap: 5px
  cursor: pointer
  border: none
  background: none

  span
    width: 25px
    height: 3px
    background-color: $font-black
    transition: transform 0.3s ease
    &.open
      background-color: $bgc-main

  &.open span:nth-child(1)
    transform: rotate(45deg) translate(5.65px, 5.65px)

  &.open span:nth-child(2)
    opacity: 0

  &.open span:nth-child(3)
    transform: rotate(-45deg) translate(5.65px, -5.65px)

/* Навигационное меню */
.nav-menu
  position: absolute
  right: 0
  top: 70px
  background-color: rgba(0, 0, 0, 0.7)
  width: 100%
  height: calc(100vh - 70px)
  display: none
  flex-direction: column
  align-items: center
  justify-content: center
  gap: 20px
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)

  &.open
    display: flex
  ul
    list-style: none
    padding: 0
    margin: 0
    margin-bottom: 120px
    text-align: center
    .cost-modal
      text-align: left
    li
      margin: 10px 0
      font-size: 18px
      a
        text-decoration: none
        color: $bgc-main
        font-weight: 500
        transition: color 0.3s ease
        &.active
          color: rgba($font-white, 0.6)
    .lang-switch
      margin-top: 40px

.social-links
  position: absolute
  right: 5%
  bottom: 55%
</style>
