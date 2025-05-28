<template>
  <footer class="footer">
    <div class="links">
      <div class="logo">
        <img src="/logo-white.webp" alt="" />
      </div>
      <div class="medias">
        <SocialMedias />
      </div>
      <nav class="nav">
        <ul>
          <li>{{ $t("footer.terms") }}</li>
          <li>
            <NuxtLink :to="localePath('/')" :class="{ active: isActive('/') }">
              {{ $t("menu.home") }}
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              :to="localePath('/about')"
              :class="{ active: isActive('/about') }"
            >
              {{ $t("menu.about") }}
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              :to="localePath('/services')"
              :class="{ active: isActive('/services') }"
            >
              {{ $t("menu.services") }}
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              :to="localePath('/portfolio')"
              :class="{ active: isActive('/portfolio') }"
            >
              {{ $t("menu.portfolio") }}
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              :to="localePath('/news')"
              :class="{ active: isActive('/news') }"
            >
              {{ $t("menu.news") }}
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              :to="localePath('/contact')"
              :class="{ active: isActive('/contact') }"
            >
              {{ $t("menu.contact") }}
            </NuxtLink>
          </li>
        </ul>
        <ul>
          <li>{{ $t("footer.documentsH") }}</li>
          <li>
            <a href="">{{ $t("footer.policy") }}</a>
          </li>
          <li>
            <a href="">{{ $t("footer.terms") }}</a>
          </li>
          <li>
            <a href="/documents/kbis.pdf">K bis</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="filler"></div>
    <div class="info">
      <NuxtLink :to="localePath('/contact')">
        <h2>
          {{ $t("footer.contact") }}&nbsp;<span
            ><svg viewBox="0 0 59 70" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M48.6481 0.0951899L11.5821 6.01396C10.6032 6.18776 9.73171 6.73909 9.15537 7.54919C8.57902 8.35929 8.34392 9.36335 8.50069 10.3451C8.65746 11.3269 9.19356 12.2078 9.99352 12.7981C10.7935 13.3885 11.7933 13.641 12.7776 13.5013L40.8048 9.02586L1.67946 63.0209C1.0894 63.8352 0.846996 64.8505 1.00556 65.8436C1.16413 66.8366 1.71069 67.726 2.52499 68.316C3.3393 68.9061 4.35465 69.1485 5.34768 68.9899C6.34071 68.8313 7.23008 68.2848 7.82014 67.4705L46.9455 13.4755L51.4209 41.5027C51.4917 42.0011 51.661 42.4805 51.919 42.9129C52.177 43.3452 52.5185 43.7219 52.9236 44.0208C53.3287 44.3198 53.7893 44.535 54.2785 44.6541C54.7677 44.7731 55.2757 44.7935 55.7729 44.7142C56.2701 44.6348 56.7465 44.4572 57.1743 44.1917C57.6021 43.9262 57.9727 43.5782 58.2646 43.168C58.5564 42.7577 58.7637 42.2935 58.8742 41.8023C58.9847 41.3111 58.9963 40.8028 58.9083 40.3071L52.9895 3.24106C52.8308 2.24825 52.2843 1.35911 51.4702 0.769174C50.656 0.179236 49.6409 -0.0632003 48.6481 0.0951899Z"
              />
            </svg>
          </span>
        </h2>
      </NuxtLink>
      <div class="field">
        <p>Email</p>
        <h4>info@razam.fr</h4>
      </div>
      <div class="field">
        <p>{{ $t("footer.tel") }}</p>
        <h4>+33 6 64 36 12 20</h4>
      </div>
      <div class="field">
        <p>{{ $t("footer.location") }}</p>
        <h4>
          305 Av. Georges Pompidou, 06220<br />Vallauris,
          {{ $t("footer.france") }}
        </h4>
      </div>
    </div>
  </footer>
  <div class="add">
    © 2025 Razam. Made with ♥<a target="_blank" href="https://novoweb.eu/"
      >NOVOWEB.</a
    >
  </div>
</template>

<script setup>
import SocialMedias from "../Tools/SocialMedias.vue";
import { useRoute } from "vue-router";

const route = useRoute;
const localePath = useLocalePath();
const { locale } = useI18n();

const isActive = (path) => {
  const localizedPath = localePath(path);
  return route.path === localizedPath;
};
</script>

<style lang="sass" scoped>

footer
  +regpad
  display: grid
  grid-template-columns: 2fr 1.5fr 2.5fr
  grid-template-rows: 1fr auto
  grid-column-gap: 0px
  grid-row-gap: 0px
  background-color: $font-black
  padding-top: 14rem
  padding-bottom: 3.5rem
  @media (max-width: 992px)
    grid-template-columns: 1fr
  .links
    .logo
      padding-bottom: 24px
      img
        max-width: 10rem
    nav
      font-size: 1.25rem
      display: flex
      flex-direction: row
      justify-content: space-between
      padding-top: 67px
      @media (max-width: 992px)
        padding-top: 30px
        font-size: 1.5rem
        justify-content: flex-start
        gap: 70px
  ul
    padding-left: 0
    font-weight: 500
    li
      color: $font-grey
      list-style: none
      padding-top: 10px
      &:first-child
        color: $font-white
      a
        color: $font-grey
        text-decoration: none
        &.active
          display: none
        &:hover
          text-decoration: underline
  .info
    a
      text-decoration: none
      transition-duration: 0.1s
      &:hover
        svg
          transition-duration: 0.1s
          transform: translate(3px, -3px)
    h2
      color: $font-grey
      margin-bottom: 44px
      @media (max-width: 992px)
        margin-bottom: 15px
        margin-top: 30px
      svg
        color: $font-grey
        fill: $font-grey
        width: 3.75rem
    .field
      border-bottom: 1px solid $font-grey
      padding-bottom: 19px
      margin-top: 10px
      p
        color: $font-grey
        font-size: 1rem
        margin: 0
      h4
        color: $font-grey !important
        font-size: 2rem
.add
  background-color: $bgc-second
  color: $font-black
  width: 100%
  height: 80px
  display: flex
  align-items: center
  justify-content: center
  a
    color: $font-black
    margin-left: 4px

// ----------------------  links  ----------------------
.fa-youtube
  margin-top: 0.8px

.medias
  display: flex
  flex-direction: row
  gap: 25px
  .social-links
    flex-direction: row
  @media (max-width: 992px)
    gap: 15px

  a
    display: flex
    justify-content: center
    align-items: center
    width: 30px
    height: 30px
    background-color: $font-white
    border: 2px solid $font-white
    border-radius: 50%
    color: transparent
    text-decoration: none
    font-size: 18px
    transition: all 0.3s ease

    i
      color: #93867D
      transition: color 0.3s ease

    &:hover
      background-color: transparent
      border-color: #007bff

      i
        color: #007bff
</style>
