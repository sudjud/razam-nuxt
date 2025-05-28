<template>
  <div class="image-overlay">
    <span class="loader" v-if="!loaded"></span>
    <div class="close" @click="handleClose">X</div>
    <div class="img-swiper">
      <swiper
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="[FreeMode, Navigation, Thumbs]"
        :loop="true"
        :spaceBetween="10"
        :navigation="true"
        class="main-swiper"
        @imagesReady="loaded = true"
      >
        <swiper-slide v-for="(img, index) in images" :key="index">
          <img :src="img" :alt="'image-' + index" @load="onImgLoad" />
        </swiper-slide>
      </swiper>

      <swiper
        class="thumbs-swiper"
        :loop="true"
        :spaceBetween="10"
        :slidesPerView="4"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="[FreeMode, Navigation, Thumbs]"
        @swiper="thumbsSwiper = $event"
      >
        <swiper-slide v-for="(img, index) in images" :key="'thumb-' + index">
          <img :src="img" :alt="'thumb-' + index" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Thumbs, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

const props = defineProps({
  images: Array,
})
const emit = defineEmits(['close-event'])

const thumbsSwiper = ref(null)
const loaded = ref(false)

const handleClose = () => emit('close-event')

const onImgLoad = () => {
  loaded.value = true
}

const onEsc = (e) => {
  if (e.key === 'Escape') handleClose()
}

onMounted(() => window.addEventListener('keydown', onEsc))
onBeforeUnmount(() => window.removeEventListener('keydown', onEsc))
</script>

<style lang="sass" scoped>
*
  user-select: none

:deep(.swiper-slide)
  display: flex
  align-items: center
  justify-content: center
  img
    width: 50%
    @media (max-width: 1200px)
      width: 70%
    @media (max-width: 768px)
      width: 100%

:deep(.swiper-button-prev)
  color: white
  @media (max-width: 768px)
    display: none

:deep(.swiper-button-next)
  color: white
  @media (max-width: 768px)
    display: none

.image-overlay
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0
  z-index: 999999
  background-color: rgba(black, 0.9)
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column

  .img-swiper
    max-width: 90%
    width: 100%
    display: flex
    flex-direction: column
    align-items: center
    gap: 20px
    @media (max-width: 768px)
      min-width: 100%

  .main-swiper
    width: 100%
    display: flex
    justify-content: center
    align-items: center

    img
      max-height: 80vh
      border-radius: 30px
      @media (max-width: 768px)
        border-radius: 0

  .thumbs-swiper
    width: 30%
    img
      height: auto
      max-height: 100px
      border-radius: 10px

  .close
    position: absolute
    top: 30px
    right: 30px
    color: white
    font-size: 24px
    cursor: pointer
    z-index: 10000

.loader
  z-index: 10000
  position: absolute
  top: calc(50% - 24px)
  left: calc(50% - 24px)
  width: 48px
  height: 48px
  border: 5px solid #fff
  border-bottom-color: transparent
  border-radius: 50%
  display: inline-block
  box-sizing: border-box
  animation: rotation 1s linear infinite

@keyframes rotation
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>
