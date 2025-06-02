import { defineComponent, ref } from "vue";
import { SwiperSlide, Swiper } from "swiper/vue";
import SwiperCore from "swiper";
/* empty css                                           */
import { Navigation, Autoplay } from "swiper/modules";
import slide1 from "../../_virtual/virtual_public68.mjs";
import slide2 from "../../_virtual/virtual_public69.mjs";
import slide3 from "../../_virtual/virtual_public70.mjs";
import slide4 from "../../_virtual/virtual_public71.mjs";
import slide5 from "../../_virtual/virtual_public72.mjs";
import slide6 from "../../_virtual/virtual_public73.mjs";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
SwiperCore.use([Navigation, Autoplay]);
const _sfc_main = defineComponent({
  name: "ProjectsSlider",
  components: { Swiper, SwiperSlide },
  setup() {
    const slides = ref([
      {
        title: "Chambre d'enfant",
        description: "portfolio.projects.chambreEnfant.desc",
        image: slide1,
        slug: "chambre-enfant"
      },
      {
        title: "Elemental harmony",
        description: "portfolio.projects.elementalHarmony.desc",
        image: slide2,
        slug: "elemental-harmony"
      },
      {
        title: "Modern vista",
        description: "portfolio.projects.modernVista.desc",
        image: slide3,
        slug: "modern-vista"
      },
      {
        title: "Natural essence",
        description: "portfolio.projects.naturalEssence.desc",
        image: slide4,
        slug: "natural-essence"
      },
      {
        title: "Serene lines",
        description: "portfolio.projects.sereneLines.desc",
        image: slide5,
        slug: "serene-lines"
      },
      {
        title: "Urban grace",
        description: "portfolio.projects.urbanGrace.desc",
        image: slide6,
        slug: "urban-grace"
      }
    ]);
    const currentPage = ref(1);
    const totalPages = slides.value.length;
    const swiper = ref(null);
    const localePath = useLocalePath();
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
    const descFormatter = (str) => {
      if (str.length > 70) {
        return str.split(" ").slice(0, 16).join(" ") + "...";
      } else {
        return str;
      }
    };
    const breakpoints = ref({
      300: {
        slidesPerView: 1.2,
        spaceBetween: 15
      },
      576: {
        slidesPerView: 1.7,
        spaceBetween: 15
      },
      992: {
        slidesPerView: 1.8,
        spaceBetween: 15
      },
      1080: {
        slidesPerView: 2.1,
        spaceBetween: 15
      },
      1400: {
        slidesPerView: 2.5,
        spaceBetween: 15
      },
      1501: {
        slidesPerView: 2.1,
        spaceBetween: 15
      },
      1760: {
        slidesPerView: 2.5,
        spaceBetween: 15
      },
      1920: {
        slidesPerView: 2.7,
        spaceBetween: 15
      }
    });
    return {
      slides,
      currentPage,
      totalPages,
      nextSlide,
      prevSlide,
      bindSwiperInstance,
      breakpoints,
      descFormatter,
      localePath
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ProjectsSwiperComponent.vue2.mjs.map
