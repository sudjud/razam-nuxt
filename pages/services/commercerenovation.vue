<template>
  <main>
    <p><Breadcrumbs /></p>
    <h1>
      <span v-reveal class="wow reveal-bb reveal-visible"
        >{{ $t("services.commerceRenovation.h1") }}<br />
        {{ $t("services.commerceRenovation.h1p2") }}</span
      >
    </h1>
    <div class="image-wrapper">
      <img src="/images/services/commerce-renovation/main.webp" alt="" />
    </div>
  </main>
  <section class="text">
    <p>{{ $t("services.commerceRenovation.text.p1") }}</p>
    <h4>{{ $t("services.commerceRenovation.text.h1") }}</h4>
    <p>{{ $t("services.commerceRenovation.text.p2") }}</p>
    <h4>{{ $t("services.commerceRenovation.text.h2") }}</h4>
    <p>{{ $t("services.commerceRenovation.text.p3") }}</p>
    <h4>{{ $t("services.commerceRenovation.text.h3") }}</h4>
    <p>{{ $t("services.commerceRenovation.text.p4") }}</p>
    <h4>{{ $t("services.commerceRenovation.text.h4") }}</h4>
    <ul>
      <li>{{ $t("services.commerceRenovation.text.ul1.li1") }}</li>
      <li>{{ $t("services.commerceRenovation.text.ul1.li2") }}</li>
      <li>{{ $t("services.commerceRenovation.text.ul1.li3") }}</li>
      <li>{{ $t("services.commerceRenovation.text.ul1.li4") }}</li>
    </ul>
    <h4>{{ $t("services.commerceRenovation.text.h5") }}</h4>
    <ul>
      <li>{{ $t("services.commerceRenovation.text.ul2.li1") }}</li>
      <li>{{ $t("services.commerceRenovation.text.ul2.li2") }}</li>
      <li>{{ $t("services.commerceRenovation.text.ul2.li3") }}</li>
      <li>{{ $t("services.commerceRenovation.text.ul2.li4") }}</li>
    </ul>
  </section>
  <section class="calculate-form">
    <CostCalculator />
  </section>
  <section class="why">
    <div class="images">
      <img src="/images/services/commerce-renovation/1.webp" alt="" />
      <img src="/images/services/commerce-renovation/2.webp" alt="" />
      <img src="/images/services/commerce-renovation/3.webp" alt="" />
    </div>
    <div class="quote">
      <div class="image-wrapper">
        <img src="/images/blog/lights/quote.svg" alt="" />
      </div>
      <h5>"{{ $t("services.commerceRenovation.text.quote") }}"</h5>
    </div>
  </section>
  <ContactShield3 />
</template>

<script setup>
import ContactShield3 from "../../components/Blocks/ContactShield3.vue";
import Breadcrumbs from "../components/Tools/Breadcrumbs.vue";
import CostCalculator from "../../components/Tools/CostCalculator.vue";

const { t, locale } = useI18n();
const route = useRoute();
const baseURL = "https://razam.fr";

useHead({
  title: () => t("services.commerceRenovation.h1"),
  titleTemplate: (chunk) => `${chunk}`,
  meta: [
    {
      name: "description",
      content: () => t(`services.commerceRenovation.text.p1`).slice(0, 160),
    },
    { name: "keywords", content: () => t(`meta.common.keywords`) },
    { property: "og:title", content: () => t(`services.commerceRenovation.h1`) },
    {
      property: "og:description",
      content: () => t(`services.commerceRenovation.text.p1`).slice(0, 160),
    },
    { property: "og:url", content: () => `${baseURL}${route.path}` },
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
    { property: "og:image:alt", content: () => t(`services.commerceRenovation.h1`) },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: () => t(`services.commerceRenovation.h1`) },
    {
      name: "twitter:description",
      content: () => t(`services.commerceRenovation.text.p1`).slice(0, 160),
    },
    { name: "twitter:image", content: `${baseURL}/images/logo.webp` },
    { name: "twitter:image:alt", content: () => t(`services.commerceRenovation.h1`) },
  ],
  link: [
    { rel: "canonical", href: `${baseURL}${route.path}` },
    { rel: "alternate", hreflang: "en", href: `${baseURL}/en${route.path}` },
    { rel: "alternate", hreflang: "fr", href: `${baseURL}${route.path}` },
    { rel: "alternate", hreflang: "ru", href: `${baseURL}/ru${route.path}` },
    {
      rel: "alternate",
      hreflang: "x-default",
      href: `${baseURL}${route.path}`,
    },
  ],
});
</script>

<style lang="sass" scoped>
main
  +regpad
  padding-top: 10rem
  p
    margin-bottom: 1rem
  h1
    margin-bottom: 4rem
    @media (max-width: 992px)
      font-size: 6rem
    @media (max-width: 576px)
      font-size: 4rem
  div img
    max-width: 100%

section.text
  padding-top: 6rem
  max-width: 1110px
  margin: 0 auto
  padding-left: clamp(1rem, 5vw, 3rem)
  padding-right: clamp(1rem, 5vw, 3rem)
  h4
    margin-top: 3rem
  ul
    list-style: disc
    li
      font-size: 1.5rem
      color: $font-grey

section.calculate-form
  margin-right: 100px
  margin-left: 100px

  @media (max-width: 1200px)
    margin-right: 70px
    margin-left: 70px

  @media (max-width: 992px)
    margin-right: 30px
    margin-left: 30px

  @media (max-width: 768px)
    margin-right: 20px
    margin-left: 20px
  margin-top: 7rem
  background-image: url('/images/services/commerce-renovation/main.webp')
  background-repeat: no-repeat
  background-position: center
  background-size: cover
  border-radius: 12px
  overflow: hidden

section.why
  max-width: 1110px
  margin: 0 auto
  padding-left: clamp(1rem, 5vw, 3rem)
  padding-right: clamp(1rem, 5vw, 3rem)
  ul
    margin-top: 2.5rem
    list-style: disc
    li
      font-size: 1.5rem
      color: $font-grey
  .images
    margin-top: 10rem
    display: flex
    flex-direction: row
    gap: 1rem
    img
      width: calc(33.33% - 0.5rem)
  .quote
    margin-top: 8rem
    padding: 3rem 0 0 3rem
    position: relative
    h5
      font-size: 2.5rem
      font-weight: 500
    .image-wrapper
      position: absolute
      top: 0
      left: 0
      z-index: -1
</style>
