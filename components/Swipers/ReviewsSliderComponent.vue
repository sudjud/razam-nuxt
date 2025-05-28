<template>
  <div class="testimonials">
    <swiper
      ref="swiper"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: true }"
      class="testimonials-slider"
      @swiper="bindSwiperInstance"
    >
      <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
        <!-- Фото -->
        <div class="testimonials-photo">
          <!-- <img :src="testimonial.photo" :alt="testimonial.name" /> -->
           <div class="profile-pic">{{ $t(testimonial.name)[0] }}</div>
        </div>
        <!-- Отзыв -->
        <div class="testimonials-content">
          <h5>{{ $t(testimonial.name) }}</h5>
          <p>{{ $t(testimonial.text) }}</p>
          <div class="testimonial-author">
            <img data-not-lazy src="/images/home/yellow-star.png" alt="" v-for="i of testimonial.stars" :key="i" />
            <img data-not-lazy src="/images/home/black-star.png" alt="" v-for="i of 5 - testimonial.stars" :key="i" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="slider-buttons">
      <button class="nav-button left" @click="prevSlide">
        <span class="arrow">←</span>
      </button>
      <button class="nav-button right" @click="nextSlide">
        <span class="arrow">→</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Swiper as SwiperInstance } from "swiper/types";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay, EffectCube } from "swiper/modules";

SwiperCore.use([Navigation, Autoplay, EffectCube]);

export default defineComponent({
  name: "ReviewsSlider",
  components: { Swiper, SwiperSlide },
  setup() {
    const testimonials = [
      {
        photo: undefined,
        title: "",
        text: "home.reviews.1.text",
        name: "home.reviews.1.name",
        stars: 5
      },
      {
        photo: undefined,
        title: "",
        text: "home.reviews.2.text",
        name: "home.reviews.2.name",
        stars: 5
      },
      {
        photo: undefined,
        title: "",
        text: "home.reviews.3.text",
        name: "home.reviews.3.name",
        stars: 4
      },
      {
        photo: undefined,
        title: "",
        text: "home.reviews.4.text",
        name: "home.reviews.4.name",
        stars: 5
      },
      {
        photo: undefined,
        title: "",
        text: "home.reviews.5.text",
        name: "home.reviews.5.name",
        stars: 5
      },
      {
        photo: undefined,
        title: "",
        text: "home.reviews.6.text",
        name: "home.reviews.6.name",
        stars: 5
      },
      {
        photo: undefined,
        title: "",
        text: "home.reviews.7.text",
        name: "home.reviews.7.name",
        stars: 5
      },
      {
        photo: undefined,
        title: "",
        text: "home.reviews.8.text",
        name: "home.reviews.8.name",
        stars: 5
      },
      {
        photo: undefined,
        title: "",
        text: "home.reviews.9.text",
        name: "home.reviews.9.name",
        stars: 5
      },
      {
        photo: undefined,
        title: "",
        text: "home.reviews.10.text",
        name: "home.reviews.10.name",
        stars: 5
      },
      {
        photo: undefined,
        title: "",
        text: "home.reviews.11.text",
        name: "home.reviews.11.name",
        stars: 5
      },
      {
        photo: undefined,
        title: "",
        text: "home.reviews.12.text",
        name: "home.reviews.12.name",
        stars: 5
      },
    ];
    const swiper = ref<SwiperInstance | null>(null);
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
    return {
      testimonials,
      bindSwiperInstance,
      nextSlide,
      prevSlide,
    };
  },
});
</script>

<style lang="sass" scoped>
.testimonials
  width: 100%
  display: flex
  padding: 0 6.25rem
  justify-content: center
  align-items: center
  @media (max-width: 576px)
    padding: 0 20px
  &-slider
    width: 100%
    .swiper-slide
      display: grid
      grid-template-columns: 0.25fr 1.5fr 1fr
      grid-gap: 2rem
      align-items: center
      border-radius: 10px
      @media (max-width: 992px)
        grid-template-columns: 0.25fr 2fr 0.2fr
  &-photo
    display: flex
    justify-content: center
    align-items: flex-start
    justify-content: flex-start
    margin-bottom: auto
    .profile-pic
      width: 5rem
      height: 5rem
      border-radius: 50%
      font-weight: 500
      font-size: 2rem
      display: flex
      align-items: center
      justify-content: center
      color: white
      background-color: purple
    img
      width: 6.25rem
      height: 6.25rem
      border-radius: 12px
      object-fit: cover
      @media (max-width: 768px)
        width: 70px
        height: 70px
  &-content
    h5
      color: $font-black
      font-size: 2rem
    p
      color: $font-grey
      font-size: 1.25rem
    .testimonial-author
      display: flex
      img
        width: 2rem

.slider-buttons
  display: flex
  flex-direction: row
  align-self: flex-end
  padding-bottom: 20px
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
</style>
