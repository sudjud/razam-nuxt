<template>
  <main class="services-main">
    <div class="photos">
      <img class="first" src="/images/services/1.webp" alt="" />
      <img class="second" src="/images/services/2.webp" alt="" />
    </div>
    <div class="content">
      <div class="content-wrapper">
        <p class="design" v-html="$t('services.main.design')"></p>
        <h1>
          <div class="breadcrumbs-wrapper">
            <Breadcrumbs />
          </div>
          <span v-reveal class="wow reveal-bb reveal-visible" v-html="$t('services.main.title')"></span>
        </h1>
        <p class="desc">{{ $t("services.main.description") }}</p>
        <p class="desc read-more-text" :class="{ open: isOpen }">
          {{ $t("services.main.readMoreText") }}
        </p>
        <p @click="toggleIsOpen" class="read-more">
          {{ isOpen ? $t("common.hide") : $t("common.readMore") }}
        </p>
      </div>
      <div class="razam">
        <img
          class="arrow wow animate__animated animate__fadeInDownBig"
          src="/images/services/arrow-down.svg"
          alt=""
          data-not-lazy
        />
        <img class="logo" src="/images/logo.webp" alt="" />
        <p class="under-logo-p">{{ $t("services.main.razamText") }}</p>
      </div>
    </div>
  </main>

  <section class="services">
    <HomeGallery />
  </section>
  <section class="process">
    <div class="container">
      <h2>
        <span v-reveal class="wow reveal-bb">{{ $t("home.process.h2") }}</span>
      </h2>
      <div class="process-grid">
        <div class="process-item">
          <div class="process-item-count">01</div>
          <div class="process-item-title">{{ $t("home.process.title1") }}</div>
          <p>
            {{ $t("home.process.text1") }}
          </p>
        </div>
        <div class="process-item">
          <div class="process-item-count">02</div>
          <div class="process-item-title">{{ $t("home.process.title2") }}</div>
          <p>
            {{ $t("home.process.text2") }}
          </p>
        </div>
        <div class="process-item">
          <div class="process-item-count">03</div>
          <div class="process-item-title">{{ $t("home.process.title3") }}</div>
          <p>
            {{ $t("home.process.text3") }}
          </p>
        </div>
        <div class="process-item process-item-moved">
          <div class="process-item-count">04</div>
          <div class="process-item-title">{{ $t("home.process.title4") }}</div>
          <p>
            {{ $t("home.process.text4") }}
          </p>
        </div>
        <div class="process-item process-item-moved-mob">
          <div class="process-item-count">05</div>
          <div class="process-item-title">{{ $t("home.process.title5") }}</div>
          <p>
            {{ $t("home.process.text5") }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <OfferComponent />
</template>

<script setup>
import Breadcrumbs from "../components/Tools/Breadcrumbs.vue";
import HomeGallery from "../components/Swipers/HomeGallery.vue";
import OfferComponent from '/components/Blocks/OfferComponent.vue'
import { ref } from "vue";
import { useSeo } from "../../composables/useSeo";

const isOpen = ref(false);

useSeo('services');

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style lang="sass" scoped>
.breadcrumbs-wrapper
  width: fit-content
  text-align: right
  margin-left: auto

.services-main
  +regpad
  padding-top: 10rem
  display: grid
  gap: 1.5rem
  grid-template-columns: 6.5fr 5.5fr
  grid-auto-rows: auto
  @media (max-width: 576px)
    grid-template-columns: 4fr 8fr
  .photos
    display: grid
    grid-template-columns: 4.1fr 2.5fr
    @media (max-width: 576px)
      grid-template-columns: 1fr
    gap: 1.5rem
    img
      width: 100%
    .second
      transform: translateY(550px)
      @media (max-width: 1500px)
        transform: translateY(400px)
      @media (max-width: 1200px)
        transform: translateY(320px)
      @media (max-width: 992px)
        transform: translateY(280px)
      @media (max-width: 768px)
        font-size: 4rem
      @media (max-width: 576px)
        display: none
  .content
    .content-wrapper
      h1
        text-align: right
        @media (max-width: 992px)
          font-size: 7rem
        @media (max-width: 768px)
          font-size: 4rem
        span.slash
          color: $bgc-second
      .desc
        color: $font-grey
      .read-more
        cursor: pointer
        color: $font-black
        margin: 0
        display: inline
      .read-more-text
        max-height: 0
        overflow: hidden
        transition-duration: 0.3s
        &.open
          transition-duration: 0.3s
          max-height: 500px
    .razam
      display: flex
      position: relative
      flex-direction: column
      align-items: flex-end
      .arrow
        width: 3rem
        margin-bottom: 2rem
      .logo
        width: 10rem
      p
        margin: 0

// ------------------ - servives - -------------------

.services
  margin-top: 15rem
  @media (max-width: 576px)
    margin-top: $mob-col-gap

// ----------------- process -------------------------

.process
  .container
    flex-direction: column
    @media (max-width: 992px)
      padding: 0 50px
    @media (max-width: 576px)
      padding: 0 30px

  h2
    color: black
    width: 100%
    margin-bottom: 4.5rem

  .process-grid
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: repeat(2, 1fr)
    align-items: start

  .process-item
    display: flex
    flex-direction: column
    align-items: flex-start
    text-align: left
    &-moved
      grid-column: 2
    &-count
      font-size: 4rem
      color: $bgc-second
      font-weight: 500
      width: 100%
      border: 1px solid $font-grey
      border-bottom: none
      border-right: none
      padding: 1.875rem 0 1rem 3.125rem
    &-title
      font-size: 2rem
      font-weight: 600
      color: $font-black
      padding-left: 3.125rem
      padding-right: 1rem
    p
      color: $font-grey
      padding-left: 3.125rem
      padding-right: 1rem
  @media (max-width: 1500px)
    .process-item
      &-count
        padding: 1rem 0 0.2rem 1.5rem
      &-title
        padding-left: 1.5rem
        padding-right: 0.2rem
      p
        padding-left: 1.5rem
        padding-right: 0.2rem
  @media (max-width: 992px)
    .process-grid
      grid-template-columns: repeat(2, 1fr)
      grid-template-rows: repeat(3, 1fr)
    .process-item-moved-mob
      grid-column: 2
  @media (max-width: 576px)
    .process-grid
      display: flex
      flex-direction: column

// ------------------------------------------------

.offer
  position: relative
  max-width: calc(100% - 200px)
  margin: 0 auto
  background-color: $bgc-second
  padding: 6.75rem 14.9rem 5.1rem 14.9rem
  margin-top: 15rem
  margin-bottom: 15rem
  @media (max-width: 1100px)
    padding: 6.75rem 10rem 5.1rem 10rem
  @media (max-width: 992px)
    max-width: calc(100% - 100px)
    padding: 6.75rem 7rem 5.1rem 7rem
  @media (max-width: 768px)
    max-width: calc(100% - 100px)
  @media (max-width: 576px)
    max-width: calc(100% - 40px)
    padding: 6.75rem 2rem 5.1rem 2rem
    margin-top: $mob-col-gap
    margin-bottom: $mob-col-gap
  h2
    color: $font-black
    line-height: 7.5rem
    @media (max-width: 1640px)
      font-size: 5rem
      line-height: 6rem
    @media (max-width: 660px)
      font-size: 4rem
      line-height: 5rem
    .decor
      margin-left: 12rem
      @media (max-width: 992px)
        margin-left: 5rem
    .arrow
      margin-left: 40px
      margin-top: 20px
      @media (max-width: 660px)
        margin-left: 10px
      img
        width: 4rem
        @media (max-width: 660px)
          width: 3rem
  p
    position: absolute
    bottom: 1rem
    left: 60rem
    text-align: right
    color: $font-grey
    max-width: 17.25rem
    @media (max-width: 992px)
      display: none
</style>
