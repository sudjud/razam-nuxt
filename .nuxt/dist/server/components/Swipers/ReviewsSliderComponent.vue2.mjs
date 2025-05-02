import { defineComponent, ref } from "vue";
import { SwiperSlide, Swiper } from "swiper/vue";
import SwiperCore from "swiper";
/* empty css                                           */
import { Navigation, Autoplay, EffectCube } from "swiper/modules";
import user2 from "../../_virtual/virtual_public61.mjs";
SwiperCore.use([Navigation, Autoplay, EffectCube]);
const _sfc_main = defineComponent({
  name: "ReviewsSlider",
  components: { Swiper, SwiperSlide },
  setup() {
    const testimonials = [
      {
        photo: user2,
        title: "home.reviews.review1Title",
        text: "home.reviews.review1Text",
        name: "home.reviews.review1Name"
      },
      {
        photo: user2,
        title: "home.reviews.review2Title",
        text: "home.reviews.review2Text",
        name: "home.reviews.review2Name"
      }
    ];
    const swiper = ref(null);
    const bindSwiperInstance = (instance) => {
      swiper.value = instance;
    };
    const nextSlide = () => {
      var _a;
      (_a = swiper.value) == null ? void 0 : _a.slideNext();
    };
    const prevSlide = () => {
      var _a;
      (_a = swiper.value) == null ? void 0 : _a.slidePrev();
    };
    return {
      testimonials,
      bindSwiperInstance,
      nextSlide,
      prevSlide
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ReviewsSliderComponent.vue2.mjs.map
