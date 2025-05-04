<template>
  <swiper
    :space-between="50"
    :breakpoints="breakpoints"
    loop
    @swiper="bindSwiperInstance"
  >
    <swiper-slide v-for="(item, index) in news" :key="index">
      <NuxtLink :to="localePath(`/news/${item.slug}`)">
        <article>
          <h5>{{ $t(item.category) }}</h5>
          <h4>{{ $t(item.title) }}</h4>
          <div class="meta">
            <span>by {{ $t(item.by) }}</span>
            <span>{{ $t(item.date) }}</span>
          </div>
          <div class="image">
            <img :src="item.photo" alt="" />
          </div>
        </article>
      </NuxtLink>
    </swiper-slide>
    <div class="slider-buttons">
      <button class="nav-button left" @click="prevSlide">
        <div class="arrow">
          <svg
            data-name="1-Arrow Up"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"
            />
          </svg>
        </div>
      </button>
      <button class="nav-button right" @click="nextSlide">
        <div class="arrow">
          <svg
            data-name="1-Arrow Up"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"
            />
          </svg>
        </div>
      </button>
    </div>
  </swiper>
</template>

<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import news2 from "/images/news/illumination.webp";
import news4 from "/images/news/ideas.webp";
import { ref } from "vue";

const localePath = useLocalePath();

const news = ref([
  {
    photo: news4,
    category: "home.news.category1",
    title: "home.news.title1",
    by: "home.news.by1",
    date: "home.news.date1",
    slug: "materials"
  },
  {
    photo: news2,
    category: "home.news.category2",
    title: "home.news.title2",
    by: "home.news.by2",
    date: "home.news.date2",
    slug: "lights"
  },
  {
    photo: news4,
    category: "home.news.category3",
    title: "home.news.title3",
    by: "home.news.by3",
    date: "home.news.date3",
    slug: "ideas"
  },
  {
    photo: news2,
    category: "home.news.category4",
    title: "home.news.title4",
    by: "home.news.by4",
    date: "home.news.date4",
    slug: "trends"
  },
]);

const breakpoints = ref({
  300: {
    slidesPerView: 1.1,
    spaceBetween: 15,
  },
  576: {
    slidesPerView: 1.1,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 1.4,
    spaceBetween: 15,
  },
  992: {
    slidesPerView: 1.7,
    spaceBetween: 15,
  },
  1200: {
    slidesPerView: 2.1,
    spaceBetween: 15,
  },
  1400: {
    slidesPerView: 2.5,
    spaceBetween: 15,
  },
  1700: {
    slidesPerView: 2.9,
    spaceBetween: 15,
  },
  1920: {
    slidesPerView: 3.3,
    spaceBetween: 20,
  },
});

const swipe = ref(null);

const bindSwiperInstance = (instance) => {
  swipe.value = instance;
};

const nextSlide = () => {
  if (swipe.value) {
    swipe.value.slideNext();
  }
};

const prevSlide = () => {
  if (swipe.value) {
    swipe.value.slidePrev();
  }
};
</script>

<style lang="sass" scoped>
a
  text-decoration: none
  &:hover h4
    text-decoration: underline
  article
    display: grid
    *
      max-width: 100%
    h5
      font-size: 1rem
      color: $font-grey
      font-weight: 400
      border-bottom: 1px solid $bgc-second
      padding: 0 23px 10px 23px
    h4
      font-size: 2rem
      color: $font-black
      font-weight: 500
      padding: 1rem 23px 0 23px
      min-height: 6rem
    .meta
      display: flex
      justify-content: space-between
      padding: 8px 23px 15px 23px
      span
        font-size: 1rem
        color: $font-grey
    .image
      img
        width: 100%

.slider-buttons
  display: flex
  flex-direction: row
  align-self: flex-end
  padding-bottom: 20px
  @media (max-width: 768px)
    display: none

.slider-buttons
  margin-right: 80px
  margin-top: 72px
.nav-button
  background: rgba(255, 255, 255, 0)
  margin-left: auto
  width: 60px
  height: 60px
  border: 1px solid $font-grey
  cursor: pointer
  border-radius: 50%
  z-index: 10
  display: inline-block
  padding: 0
  .arrow
    width: 21px
    height: 21px
    margin: 0 auto
  svg
    width: 21px
    height: 21px
    transform: rotate(-90deg)

  &:active
    background: rgba(0, 0, 0, 0.8)
    color: white
    transition: 0.3s

  &.right
    margin-left: 10px
    transform: rotate(180deg)
</style>
