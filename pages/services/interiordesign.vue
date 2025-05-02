<template>
  <main>
    <p><Breadcrumbs /></p>
    <h1>
      <span v-reveal class="wow reveal-bb reveal-visible"
        >{{ $t("services.interiorDesign.h1") }}<br />
        {{$t("services.interiorDesign.h1p2")}}</span
      >
    </h1>
    <div class="image-wrapper">
      <img src="/images/services/interior-design/main.webp" alt="" />
    </div>
  </main>
  <section class="text">
    <p>{{ $t("services.interiorDesign.text.p1") }}</p>
    <h4>{{ $t("services.interiorDesign.text.h1") }}</h4>
    <p>{{ $t("services.interiorDesign.text.p2") }}</p>
    <h4>{{ $t("services.interiorDesign.text.h2") }}</h4>
    <p>{{ $t("services.interiorDesign.text.p3") }}</p>
    <h4>{{ $t("services.interiorDesign.text.h3") }}</h4>
    <p>{{ $t("services.interiorDesign.text.p4") }}</p>
    <h4>{{ $t("services.interiorDesign.text.h4") }}</h4>
    <p>{{ $t("services.interiorDesign.text.p5") }}</p>
  </section>
  <section class="way">
    <h3>
      <span v-reveal class="wow reveal-bb">
        {{ $t("services.interiorDesign.way.title1") }}
        <br />
        {{ $t("services.interiorDesign.way.title2") }}
      </span>
    </h3>
    <div class="way-grid">
      <div class="way-item">
        <div class="number">
          01 <span><img src="/images/about/arrow.svg" alt="" /></span>
        </div>
        <div class="title">{{ $t("services.interiorDesign.way.step1_title") }}</div>
        <p>{{ $t("services.interiorDesign.way.step1_text") }}</p>
      </div>
      <div class="way-item">
        <div class="number">
          02 <span><img src="/images/about/arrow.svg" alt="" /></span>
        </div>
        <div class="title">{{ $t("services.interiorDesign.way.step2_title") }}</div>
        <p>{{ $t("services.interiorDesign.way.step2_text") }}</p>
      </div>
      <div class="way-item">
        <div class="number">
          03 <span><img src="/images/about/arrow.svg" alt="" /></span>
        </div>
        <div class="title">{{ $t("services.interiorDesign.way.step3_title") }}</div>
        <p>{{ $t("services.interiorDesign.way.step3_text") }}</p>
      </div>
      <div class="way-item">
        <div class="number">
          04 <span><img src="/images/about/arrow.svg" alt="" /></span>
        </div>
        <div class="title">{{ $t("services.interiorDesign.way.step4_title") }}</div>
        <p>{{ $t("services.interiorDesign.way.step4_text") }}</p>
      </div>
      <div class="way-item">
        <div class="number">
          05 <span><img src="/images/about/arrow.svg" alt="" /></span>
        </div>
        <div class="title">{{ $t("services.interiorDesign.way.step5_title") }}</div>
        <p>{{ $t("services.interiorDesign.way.step5_text") }}</p>
      </div>
    </div>
  </section>
  <section class="calculate-form">
    <CostCalculator />
  </section>
  <section class="why">
    <h3>{{ $t("services.interiorDesign.why.h4") }}</h3>
    <ul>
      <li>{{ $t("services.interiorDesign.why.li1") }}</li>
      <li>{{ $t("services.interiorDesign.why.li2") }}</li>
      <li>{{ $t("services.interiorDesign.why.li3") }}</li>
      <li>{{ $t("services.interiorDesign.why.li4") }}</li>
      <li>{{ $t("services.interiorDesign.why.li5") }}</li>
    </ul>
    <div class="images">
      <img src="/images/services/interior-design/1.webp" alt="" />
      <img src="/images/services/interior-design/2.webp" alt="" />
      <img src="/images/services/interior-design/3.webp" alt="" />
    </div>
    <div class="quote">
      <div class="image-wrapper">
        <img src="/images/blog/lights/quote.svg" alt="" />
      </div>
      <h5>
        "{{ $t("services.interiorDesign.why.quote") }}"
      </h5>
    </div>
  </section>
  <ContactShield />
</template>

<script setup>
import ContactShield from "../../components/Blocks/ContactShield.vue";
import CostCalculator from "../../components/Tools/CostCalculator.vue";
import Breadcrumbs from "../components/Tools/Breadcrumbs.vue";

const { t, locale } = useI18n();
const route = useRoute();
const baseURL = "https://razam.fr";

useHead({
  title: () => t("services.interiorDesign.h1"),
  titleTemplate: (chunk) => `${chunk}`,
  meta: [
    {
      name: "description",
      content: () => t(`services.interiorDesign.text.p1`).slice(0, 160),
    },
    { name: "keywords", content: () => t(`meta.common.keywords`) },
    { property: "og:title", content: () => t(`services.interiorDesign.h1`) },
    {
      property: "og:description",
      content: () => t(`services.interiorDesign.text.p1`).slice(0, 160),
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
    { property: "og:image:alt", content: () => t(`services.interiorDesign.h1`) },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: () => t(`services.interiorDesign.h1`) },
    {
      name: "twitter:description",
      content: () => t(`services.interiorDesign.text.p1`).slice(0, 160),
    },
    { name: "twitter:image", content: `${baseURL}/images/logo.webp` },
    { name: "twitter:image:alt", content: () => t(`services.interiorDesign.h1`) },
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

.way
  +regpad
  margin-top: 10rem
  @media (max-width: 576px)
    margin-top: $mob-col-gap
  h3
    color: $font-black
  .way-grid
    display: grid
    grid-template-columns: 3fr 3fr 3fr
    grid-template-rows: 1fr 1fr
    margin-top: 5rem
    gap: 7.5rem 10rem
    @media (max-width: 1400px)
      gap: 3.5rem 4rem
    @media (max-width: 768px)
      grid-template-columns: 3fr 3fr
    @media (max-width: 576px)
      grid-template-columns: 3fr
  .way-item
    .number
      font-size: 4rem
      font-weight: 500
      color: $bgc-second
      display: flex
      align-items: center
      span
        margin-left: 30px
      img
        height: 3rem
    .title
      font-size: 2rem
      font-weight: 600
      color: $font-black
    p
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
  background-image: url('/images/services/interior-design/main.webp')
  background-repeat: no-repeat
  background-position: center
  background-size: cover
  border-radius: 12px
  overflow: hidden

section.why
  padding-top: 9rem
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
