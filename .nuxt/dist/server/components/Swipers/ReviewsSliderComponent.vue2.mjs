import { defineComponent, ref } from "vue";
import { SwiperSlide, Swiper } from "swiper/vue";
import SwiperCore from "swiper";
/* empty css                                           */
import { Navigation, Autoplay, EffectCube } from "swiper/modules";
SwiperCore.use([Navigation, Autoplay, EffectCube]);
const _sfc_main = defineComponent({
  name: "ReviewsSlider",
  components: { Swiper, SwiperSlide },
  setup() {
    const testimonials = [
      {
        photo: void 0,
        title: "",
        text: "home.reviews.1.text",
        name: "home.reviews.1.name",
        stars: 5
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.2.text",
        name: "home.reviews.2.name",
        stars: 5
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.3.text",
        name: "home.reviews.3.name",
        stars: 4
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.4.text",
        name: "home.reviews.4.name",
        stars: 5
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.5.text",
        name: "home.reviews.5.name",
        stars: 5
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.6.text",
        name: "home.reviews.6.name",
        stars: 5
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.7.text",
        name: "home.reviews.7.name",
        stars: 5
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.8.text",
        name: "home.reviews.8.name",
        stars: 5
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.9.text",
        name: "home.reviews.9.name",
        stars: 5
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.10.text",
        name: "home.reviews.10.name",
        stars: 5
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.11.text",
        name: "home.reviews.11.name",
        stars: 5
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.12.text",
        name: "home.reviews.12.name",
        stars: 5
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
