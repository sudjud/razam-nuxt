<template>
  <div class="gallery">
    <div class="top">
      <span>
        <span class="top-first">{{ padNumber(currentIndex + 1) }}</span>
        <span
          class="top-first-minus"
          v-for="i of currentIndex + 1"
          :key="'first-' + i"
          >—</span
        >
        <span
          class="top-last-minus"
          v-for="i of items.length - currentIndex - 1"
          :key="'last-' + i"
          >—</span
        >
        <span class="top-last">{{ padNumber(items.length) }}</span>
      </span>
      <h2>
        <span v-reveal class="wow reveal-bb">{{ $t("home.servicesH2") }}</span>
      </h2>
    </div>
    <div class="display">
      <div class="buttons">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="button"
          :class="{ active: index === currentIndex }"
          @mouseover="changeImage(index)"
          @click="moveToServices(item.slug)"
        >
          <div class="button-wrapper">
            <div>{{ $t(item.service) }}</div>
            <div class="buttons-idx">{{ padNumber(index + 1) }}</div>
            <div v-if="index === currentIndex" class="arrow-wrapper">
              <div class="arrow">
                <img data-not-lazy src="/public/images/home/diag-arrow2.webp" alt="arrow" />
              </div>
            </div>
          </div>
          <div class="divider"></div>
        </div>
      </div>
      <img
        data-not-lazy
        v-if="items[currentIndex]"
        :src="items[currentIndex].image"
        :alt="items[currentIndex].service"
      />
    </div>
  </div>
  <div class="gallery-sm">
    <h2>
      <span v-reveal class="wow reveal-bb">{{ $t("home.servicesH2") }}</span>
    </h2>
    <div class="slider-gallery">
      <Swiper
        :slides-per-view="1"
        :autoplay="{
          delay: 10
        }"
        :speed="3000"
        loop
        grabCursor
        space-between="20"
        class="my-swiper"
      >
        <SwiperSlide v-for="(item, index) in items" :key="index">
          <div class="slide-content">
            <img :src="item.image" :alt="item.service" />
            <div class="description"><NuxtLink :to="localePath(`/services/${item.slug}`)">{{ $t(item.service) }} ↗</NuxtLink></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import photo1 from "/images/services/interior-design/main.webp";
// import photo2 from "/public/images/services/interior-design/1gallery.webp";
// import photo3 from "/public/images/services/interior-design/2gallery.webp";
import photo4 from "/images/services/house-renovation/main.webp";
import photo5 from "/images/services/commerce-renovation/main.webp"
import { useRouter } from "vue-router";

const router = useRouter();
const localePath = useLocalePath();

import SwiperCore from "swiper";
SwiperCore.use([Navigation, Pagination]);

const items = [
  { 
    image: photo1, 
    service: "home.service1", 
    slug: "interiordesign" 
  },
  // { 
  //   image: photo2, 
  //   service: "home.service2", 
  //   slug: "interiordesign" 
  // },
  // { 
  //   image: photo3, 
  //   service: "home.service3", 
  //   slug: "interiordesign" 
  // },
  { 
    image: photo4, 
    service: "home.service4", 
    slug: "houserenovation" 
  },
  { 
    image: photo5, 
    service: "home.service5", 
    slug: "commercerenovation" 
  },
];

const currentIndex = ref(0);

const changeImage = (index) => {
  currentIndex.value = index;
};

const moveToServices = (slug) => {
  router.push(localePath(`/services/${slug}`));
};

const padNumber = (num) => (num < 10 ? `0${num}` : `${num}`);
</script>

<style lang="sass" scoped>

.gallery-sm
  +regpad
  display: none
  h2
    color: black
    padding-bottom: 30px
  .slider-gallery
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    margin-bottom: 12.8rem
    @media (max-width: 576px)
      margin-bottom: 40px
    .my-swiper
      width: 100%
      max-width: 800px
      height: auto
      .swiper-button-next, .swiper-button-prev
        color: $bgc-second !important
        &:hover
          color: $font-grey
      .swiper-pagination-bullet
        background-color: #ccc
        &.swiper-pagination-bullet-active
          background-color: $font-black
    .slide-content
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      border-radius: 10px
      img
        width: 100%
        height: 350px
        object-fit: cover
        border-radius: 12px
    .description
      font-size: 2rem
      font-weight: 500
      color: $font-black
      text-align: center
      a
        color: black
        display: flex
        img
          height: 0.6em

.gallery
  +regpad
  display: flex
  flex-direction: column
  margin-bottom: 12.8rem

  .top
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    h2
      padding-bottom: 3.9rem
      font-size: 5rem
    span
      display: flex
      align-items: center

    &-first, &-last
      font-size: 1rem
      margin: 0 13px
    &-first-minus
      font-size: 0.7rem
      color: $font-grey
    &-last-minus
      font-size: 0.7rem
      color: #ccc

  .display
    display: flex
    flex-direction: row
    justify-content: space-between

    img
      width: 45rem
      border-radius: 12px
      max-height: 610px
      object-fit: cover

    .buttons
      display: flex
      flex-direction: column
      min-width: fit-content
      .button
        display: flex
        flex-direction: column
        min-width: 120%
        font-size: 2rem
        cursor: pointer
        transition: color 0.3s ease
        color: $font-grey
        .button-wrapper
          display: flex
          flex-direction: row
          align-items: center
          text-align: left
          margin: 2.3rem 0
        .divider
          height: 1px
          background-color: black

        &:hover
          color: black

        &.active
          color: $font-black

      .arrow-wrapper
        margin-left: auto
        position: relative

      .arrow
        display: flex
        position: absolute
        justify-content: center
        align-items: center
        width: 3rem
        height: 3rem
        right: 1rem
        top: -1.5rem
        border-radius: 50%
        border: 1px solid $font-black

        img
          width: 0.7rem

      &-idx
        font-size: 1rem
        margin-left: 1rem

// Адаптивные стили
@media (max-width: 1400px)
  .gallery
    .display
      .buttons
        .button
          font-size: 2rem
@media (max-width: 1200px)
  .gallery
    padding-left: 4rem

  .top
    h2
      font-size: 3rem
      padding-bottom: 3rem

    &-first, &-last
      font-size: 0.9rem
    &-first-minus, &-last-minus
      font-size: 0.6rem

  .display
    flex-direction: column
    img
      width: 40rem
    .buttons
      .button
        font-size: 2rem

@media (max-width: 992px)
  .gallery-sm
    display: block
  .gallery
    padding-left: 2rem
    display: none

  .top
    h2
      font-size: 1.8rem
      padding-bottom: 2rem

    &-first, &-last
      font-size: 0.8rem
    &-first-minus, &-last-minus
      font-size: 0.5rem

  .display
    .buttons
      &-idx
        display: none
    img
      width: 35rem

@media (max-width: 768px)
  .gallery
    padding-left: 1rem

  .top
    h2
      font-size: 1.5rem
      padding-bottom: 1.5rem

    &-first, &-last
      font-size: 0.7rem

  .display
    flex-direction: column
    align-items: center
    img
      width: 100%
      max-width: 30rem
    .buttons
      align-items: center
      .button
        font-size: 1.5rem
        padding: 2rem 0

@media (max-width: 576px)
  .gallery
    padding-left: 0.5rem

  .top
    h2
      font-size: 1.2rem
      padding-bottom: 1rem

    &-first, &-last
      font-size: 0.6rem
    &-first-minus, &-last-minus
      font-size: 0.4rem

  .display
    img
      width: 100%
      max-width: 25rem
    .buttons
      .button
        font-size: 1.2rem
        padding: 1.5rem 0
</style>
