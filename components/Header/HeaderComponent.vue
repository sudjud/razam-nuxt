<template>
  <header class="headerxl" :class="{ hidden: isHidden }">
    <div class="container">
      <div class="logo">
        <NuxtLink :to="localePath('/')">
          <img data-not-lazy src="/images/logo.webp" alt="Razam" />
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
          <li class="cost-modal">
            <CostCalcModal
              @close-modal="toggleModal"
              @submit-form="submitModal"
              v-if="modalOpened"
            />
  
            <button
              @click="toggleModal"
              class="go-to-calc_btn"
            >
              {{ $t("calculator.modalButton") }}
            </button>
          </li>
          <li>
            <LangSwitchComponent />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useLocalePath } from "#i18n";
import LangSwitchComponent from "../components/Tools/LangSwitchComponent.vue";
import CostCalcModal from "../Tools/CostCalcModal.vue";

const route = useRoute();
const localePath = useLocalePath();
const { locale } = useI18n();

const isActive = (path) => {
  const localizedPath = localePath(path);
  return route.path === localizedPath;
};

const modalOpened = ref(false);
const lastScrollY = ref(0);
const isHidden = ref(false);
const modalSubmitted = ref(false);

const submitModal = () => {
  modalSubmitted.value = true;
  setTimeout(() => {
    modalSubmitted.value = false;
  }, 3000)
  modalOpened.value = false;
}

const toggleModal = () => {
  modalOpened.value = !modalOpened.value;
}

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
</script>


<style lang="sass" scoped>
.go-to-calc_btn
  font-family: Geometria, sans-serif
  padding: 0.3rem 1rem
  font-weight: 500
  color: $font-grey
  border: 1px solid $font-grey
  font-size: 1.25rem
  border-radius: 12px
  background-color: transparent
  margin-left: 10px
  cursor: pointer
  @media (max-width: 1200px)
    border: 1px solid $font-grey
  @media (max-width: 850px)
    font-size: 1rem
  &:hover
    transform: scale(1.02)
    background-color: $bgc-second
  &:active
    transform: scale(1)
.headerxl
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
      @media (max-width: 1100px)
        height: 70px

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
      .cost-modal
        font-weight: normal
      li
        a
          text-decoration: none
          font-size: 1.25rem
          color: $font-grey
          font-weight: 500
          transition: color 0.3s ease
          @media (max-width: 992px)
            font-size: 1.25rem
          @media (max-width: 850px)
            font-size: 1rem

          &:hover
            color: $font-black

          &.active
            color: $font-black
      .divider
        font-size: 1.5rem
        color: $font-grey
        margin: 0 12px
        @media (max-width: 1400px)
          margin: 0 0px

@media (max-width: 1200px)
  .headerxl
    .container
      padding: 0 70px 0 70px
      .nav-menu ul
        gap: 10px
        .divider
          margin: 0 3px

@media (max-width: 992px)
  .headerxl
    .container
      padding: 0 30px
    .logo
      img
        padding: 10px 0
      .nav-menu ul
        gap: 5px
        .divider
          margin: 0 10px
</style>
