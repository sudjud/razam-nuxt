<template>
  <main>
    <p><Breadcrumbs /></p>
    <h1>
      <span v-reveal class="wow reveal-bb reveal-visible"
        >{{ $t("services.houseRenovation.h1") }}<br />
        {{ $t("services.houseRenovation.h1p2") }}</span
      >
    </h1>
    <div class="image-wrapper">
      <img src="/images/services/house-renovation/main.webp" alt="" />
    </div>
  </main>
  <section class="text">
    <p>{{ $t("services.houseRenovation.text.p1") }}</p>
    <h4>{{ $t("services.houseRenovation.text.h1") }}</h4>
    <p>{{ $t("services.houseRenovation.text.p2") }}</p>
    <h4>{{ $t("services.houseRenovation.text.h2") }}</h4>
    <p>{{ $t("services.houseRenovation.text.p3") }}</p>
    <h4>{{ $t("services.houseRenovation.text.h3") }}</h4>
    <ul>
      <li>{{ $t("services.houseRenovation.text.ul1.li1") }}</li>
      <li>{{ $t("services.houseRenovation.text.ul1.li2") }}</li>
      <li>{{ $t("services.houseRenovation.text.ul1.li3") }}</li>
      <li>{{ $t("services.houseRenovation.text.ul1.li4") }}</li>
      <li>{{ $t("services.houseRenovation.text.ul1.li5") }}</li>
      <li>{{ $t("services.houseRenovation.text.ul1.li6") }}</li>
      <li>{{ $t("services.houseRenovation.text.ul1.li7") }}</li>
    </ul>
    <h4>{{ $t("services.houseRenovation.text.h4") }}</h4>
    <p>{{ $t("services.houseRenovation.text.p4") }}</p>
    <h4>{{ $t("services.houseRenovation.text.h5") }}</h4>
    <ul>
      <li>{{ $t("services.houseRenovation.text.ul2.li1") }}</li>
      <li>{{ $t("services.houseRenovation.text.ul2.li2") }}</li>
      <li>{{ $t("services.houseRenovation.text.ul2.li3") }}</li>
      <li>{{ $t("services.houseRenovation.text.ul2.li4") }}</li>
      <li>{{ $t("services.houseRenovation.text.ul2.li5") }}</li>
    </ul>
  </section>
  <section class="calculate-form">
    <CostCalculator />
  </section>
  <section class="why">
    <div class="images">
      <img src="/images/services/house-renovation/1.webp" alt="" />
      <img src="/images/services/house-renovation/2.webp" alt="" />
      <img src="/images/services/house-renovation/3.webp" alt="" />
    </div>
    <div class="quote">
      <div class="image-wrapper">
        <img src="/images/blog/lights/quote.svg" alt="" />
      </div>
      <h5>"{{ $t("services.houseRenovation.text.quote") }}"</h5>
    </div>
  </section>
  <ContactShield2 />
</template>

<script setup>
import ContactShield2 from "../../components/Blocks/ContactShield2.vue";
import Breadcrumbs from "../components/Tools/Breadcrumbs.vue";
import CostCalculator from "../../components/Tools/CostCalculator.vue";
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
  background-image: url('/images/services/house-renovation/main.webp')
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
