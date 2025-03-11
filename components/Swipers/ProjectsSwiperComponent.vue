<template>
  <div class="slider">
    <div class="container">
      <div class="slider-buttons">
        <button class="nav-button left" @click="prevSlide">
          <span class="arrow">←</span>
        </button>
        <button class="nav-button right" @click="nextSlide">
          <span class="arrow">→</span>
        </button>
      </div>
      <div class="slider-container">
        <swiper
          ref="swiper"
          :breakpoints="breakpoints"
          :loop="false"
          :speed="2000"
          :autoplay="{
            delay: 0,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }"
          @swiper="bindSwiperInstance"
        >
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <div class="slide-content">
              <img :src="slide.image" :alt="slide.title" />
              <h3>{{ slide.title }}</h3>
              <p>{{ $t(slide.description) }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Swiper as SwiperInstance } from "swiper/types";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
import slide1 from "/images/home/projects/1.jpg";
import slide2 from "/images/home/projects/2.jpg";

SwiperCore.use([Navigation, Autoplay]);

export default defineComponent({
  name: "ProjectsSlider",
  components: { Swiper, SwiperSlide },
  setup() {
    const slides = ref([
      {
        title: "Chambre d'enfant",
        description: "home.project1",
        image: slide1,
      },
      {
        title: "ELEMENTAL HARMONY",
        description: "home.project2",
        image: slide2,
      },
      {
        title: "MODERN VISTA",
        description: "home.project3",
        image: slide1,
      },
      {
        title: "URBAN LIVING",
        description: "home.project4",
        image: slide2,
      },
    ]);
    const currentPage = ref(1);
    const totalPages = slides.value.length;
    const swiper = ref<SwiperInstance | null>(null);

    // Привязка экземпляра Swiper
    const bindSwiperInstance = (instance: SwiperInstance) => {
      swiper.value = instance;
    };

    // Навигация
    const nextSlide = () => {
      swiper.value?.slideNext();
    };
    const prevSlide = () => {
      swiper.value?.slidePrev();
    };

    const breakpoints = ref({
      300: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 1.7,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 1.8,
        spaceBetween: 15,
      },
      1080: {
        slidesPerView: 2.1,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      1501: {
        slidesPerView: 2.1,
        spaceBetween: 15,
      },
      1760: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      1920: {
        slidesPerView: 2.7,
        spaceBetween: 15,
      },
    });

    return {
      slides,
      currentPage,
      totalPages,
      nextSlide,
      prevSlide,
      bindSwiperInstance,
      breakpoints,
    };
  },
});
</script>

<style lang="sass" scoped>

.slider
  .container
    justify-content: space-between
    padding-right: 0
    @media (max-width: 992px)
      padding-left: 50px
    @media (max-width: 768px)
      padding-left: 0px
      display: block
  h2
    font-weight: bold
    margin-bottom: 20px
    color: black
  h3
    color: black

  .slider-container
    width: 90%
    position: relative
    display: flex
    align-items: center
    justify-content: center
    padding-left: 80px
    @media (max-width: 1200px)
      padding-left: 70px
    @media (max-width: 992px)
      padding-left: 30px
    @media (max-width: 768px)
      padding-left: 20px
      width: 100%

  .slider-buttons
    align-self: flex-end
    padding-bottom: 100px
    @media (max-width: 768px)
      display: none

  .nav-button
    background: rgba(255, 255, 255, 0)
    border: 1px solid black
    cursor: pointer
    padding: 10px
    border-radius: 50%
    z-index: 10
    display: inline-block
    font-size: 1rem

    &:active
      background: rgba(0, 0, 0, 0.8)
      color: white
      transition: 0.3s

    &.right
      margin-left: 10px

/* Слайды */
.swiper-slide
  display: flex
  flex-direction: column
  align-items: center
  border-radius: 8px
  text-align: left

.slide-content
  width: 35rem
  img
    width: 100%
    border-radius: 8px

  h3
    font-size: 2rem
    margin: 12px 0 8px

  p
    color: $font-grey

/* Пагинация */
.pagination
  margin-top: 20px
  font-size: 14px
  color: $font-black
</style>
