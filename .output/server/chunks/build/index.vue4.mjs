import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext, reactive, unref, resolveDirective } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrGetDirectiveProps } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { H as HomeGallery } from './HomeGallery.vue.mjs';
import { S as SocialMedias } from './SocialMedias.vue.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { SwiperSlide, Swiper } from 'swiper/vue';
import SwiperCore from 'swiper';
import { Navigation, Autoplay, EffectCube } from 'swiper/modules';
import { u as useLocalePath, _ as _export_sfc } from './server.mjs';
import { O as OfferComponent } from './OfferComponent.vue.mjs';
import { u as useSeo } from './useSeo.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import './virtual_public29.mjs';
import './virtual_public34.mjs';
import './virtual_public38.mjs';
import 'vue-router';
import '@vueuse/core';
import './virtual_public49.mjs';
import './vue-i18n.mjs';
import './v3.mjs';

const _imports_0$1 = publicAssetsURL("/images/home/2.webp");

const _imports_1 = publicAssetsURL("/images/home/3.webp");

const slide1 = publicAssetsURL("/images/projects/previews/chambre-enfant.webp");

const slide2 = publicAssetsURL("/images/projects/previews/elemental-harmony.webp");

const slide3 = publicAssetsURL("/images/projects/previews/modern-vista.webp");

const slide4 = publicAssetsURL("/images/projects/previews/natural-essence.webp");

const slide5 = publicAssetsURL("/images/projects/previews/serene-lines.webp");

const slide6 = publicAssetsURL("/images/projects/previews/urban-grace.webp");

SwiperCore.use([Navigation, Autoplay]);
const _sfc_main$6 = defineComponent({
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
        description: "portfolio.projects.chambreEnfant.desc",
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

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider" }, _attrs))} data-v-81ddcecf><div class="container" data-v-81ddcecf><div class="slider-buttons" data-v-81ddcecf><button class="nav-button left" data-v-81ddcecf><span class="arrow" data-v-81ddcecf>←</span></button><button class="nav-button right" data-v-81ddcecf><span class="arrow" data-v-81ddcecf>→</span></button></div><div class="slider-container" data-v-81ddcecf>`);
  _push(ssrRenderComponent(_component_swiper, {
    ref: "swiper",
    breakpoints: _ctx.breakpoints,
    loop: false,
    speed: 2e3,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
      pauseOnMouseEnter: true
    },
    onSwiper: _ctx.bindSwiperInstance
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.slides, (slide, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="slide-content" data-v-81ddcecf${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_NuxtLink, {
                  to: _ctx.localePath(`/portfolio/${slide.slug}`)
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} data-v-81ddcecf${_scopeId3}><h3 data-v-81ddcecf${_scopeId3}>${ssrInterpolate(slide.title)}</h3><p data-v-81ddcecf${_scopeId3}>${ssrInterpolate(_ctx.descFormatter(_ctx.$t(slide.description)))}</p>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: slide.image,
                          alt: slide.title
                        }, null, 8, ["src", "alt"]),
                        createVNode("h3", null, toDisplayString(slide.title), 1),
                        createVNode("p", null, toDisplayString(_ctx.descFormatter(_ctx.$t(slide.description))), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "slide-content" }, [
                    createVNode(_component_NuxtLink, {
                      to: _ctx.localePath(`/portfolio/${slide.slug}`)
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: slide.image,
                          alt: slide.title
                        }, null, 8, ["src", "alt"]),
                        createVNode("h3", null, toDisplayString(slide.title), 1),
                        createVNode("p", null, toDisplayString(_ctx.descFormatter(_ctx.$t(slide.description))), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.slides, (slide, index) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
              default: withCtx(() => [
                createVNode("div", { class: "slide-content" }, [
                  createVNode(_component_NuxtLink, {
                    to: _ctx.localePath(`/portfolio/${slide.slug}`)
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: slide.image,
                        alt: slide.title
                      }, null, 8, ["src", "alt"]),
                      createVNode("h3", null, toDisplayString(slide.title), 1),
                      createVNode("p", null, toDisplayString(_ctx.descFormatter(_ctx.$t(slide.description))), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Swipers/ProjectsSwiperComponent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ProjectsSwiperComponent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-81ddcecf"]]);

const _imports_0 = publicAssetsURL("/images/home/diag-arrow.webp");

const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "values-list" }, _attrs))} data-v-695a6236><div class="values-list-top" data-v-695a6236><div class="value-item wow animate__animated animate__fadeInBottomLeft" data-v-695a6236><span class="circle" data-v-695a6236><img${ssrRenderAttr("src", _imports_0)} alt="arrow" data-v-695a6236></span><p data-v-695a6236>${_ctx.$t("home.valuesP1") ?? ""}</p></div><div class="value-item wow animate__animated animate__fadeInBottomLeft" data-wow-delay="0.1s" data-v-695a6236><span class="circle" data-v-695a6236><img${ssrRenderAttr("src", _imports_0)} alt="arrow" data-v-695a6236></span><p data-v-695a6236>${_ctx.$t("home.valuesP2") ?? ""}</p></div><div class="value-item wow animate__animated animate__fadeInBottomLeft" data-wow-delay="0.2s" data-v-695a6236><span class="circle" data-v-695a6236><img${ssrRenderAttr("src", _imports_0)} alt="arrow" data-v-695a6236></span><p data-v-695a6236>${_ctx.$t("home.valuesP3") ?? ""}</p></div></div><div class="values-list-bottom" data-v-695a6236><div class="value-item wow animate__animated animate__fadeInBottomLeft" data-wow-delay="0.3s" data-v-695a6236><span class="circle" data-v-695a6236><img${ssrRenderAttr("src", _imports_0)} alt="arrow" data-v-695a6236></span><p data-v-695a6236>${_ctx.$t("home.valuesP4") ?? ""}</p></div><div class="value-item wow animate__animated animate__fadeInBottomLeft" data-wow-delay="0.4s" data-v-695a6236><span class="circle" data-v-695a6236><img${ssrRenderAttr("src", _imports_0)} alt="arrow" data-v-695a6236></span><p data-v-695a6236>${_ctx.$t("home.valuesP5") ?? ""}</p></div><div class="value-item wow animate__animated animate__fadeInBottomLeft" data-wow-delay="0.5s" data-v-695a6236><span class="circle" data-v-695a6236><img${ssrRenderAttr("src", _imports_0)} alt="arrow" data-v-695a6236></span><p data-v-695a6236>${_ctx.$t("home.valuesP6") ?? ""}</p></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/ValuesArrowsComponent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ValuesArrowsComponent = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-695a6236"]]);

const user2 = publicAssetsURL("/images/home/Julien.webp");

SwiperCore.use([Navigation, Autoplay, EffectCube]);
const _sfc_main$4 = defineComponent({
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

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "testimonials" }, _attrs))} data-v-21a891fc>`);
  _push(ssrRenderComponent(_component_swiper, {
    ref: "swiper",
    loop: true,
    autoplay: { delay: 3e3, disableOnInteraction: true },
    class: "testimonials-slider",
    onSwiper: _ctx.bindSwiperInstance
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.testimonials, (testimonial, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonials-photo" data-v-21a891fc${_scopeId2}><img${ssrRenderAttr("src", testimonial.photo)}${ssrRenderAttr("alt", testimonial.name)} data-v-21a891fc${_scopeId2}></div><div class="testimonials-content" data-v-21a891fc${_scopeId2}><h5 data-v-21a891fc${_scopeId2}>${ssrInterpolate(_ctx.$t(testimonial.title))}</h5><p data-v-21a891fc${_scopeId2}>${ssrInterpolate(_ctx.$t(testimonial.text))}</p><div class="testimonial-author" data-v-21a891fc${_scopeId2}>${ssrInterpolate(_ctx.$t(testimonial.name))}</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonials-photo" }, [
                    createVNode("img", {
                      src: testimonial.photo,
                      alt: testimonial.name
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", { class: "testimonials-content" }, [
                    createVNode("h5", null, toDisplayString(_ctx.$t(testimonial.title)), 1),
                    createVNode("p", null, toDisplayString(_ctx.$t(testimonial.text)), 1),
                    createVNode("div", { class: "testimonial-author" }, toDisplayString(_ctx.$t(testimonial.name)), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.testimonials, (testimonial, index) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonials-photo" }, [
                  createVNode("img", {
                    src: testimonial.photo,
                    alt: testimonial.name
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "testimonials-content" }, [
                  createVNode("h5", null, toDisplayString(_ctx.$t(testimonial.title)), 1),
                  createVNode("p", null, toDisplayString(_ctx.$t(testimonial.text)), 1),
                  createVNode("div", { class: "testimonial-author" }, toDisplayString(_ctx.$t(testimonial.name)), 1)
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="slider-buttons" data-v-21a891fc><button class="nav-button left" data-v-21a891fc><span class="arrow" data-v-21a891fc>←</span></button><button class="nav-button right" data-v-21a891fc><span class="arrow" data-v-21a891fc>→</span></button></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Swipers/ReviewsSliderComponent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ReviewsSliderComponent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-21a891fc"]]);

const _sfc_main$3 = {
  __name: "FaqComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const questions = reactive([
      {
        question: "home.FAQ.q1",
        answer: "home.FAQ.a1",
        open: false
      },
      {
        question: "home.FAQ.q2",
        answer: "home.FAQ.a2",
        open: false
      },
      {
        question: "home.FAQ.q3",
        answer: "home.FAQ.a3",
        open: false
      },
      {
        question: "home.FAQ.q4",
        answer: "home.FAQ.a4",
        open: false
      },
      {
        question: "home.FAQ.q5",
        answer: "home.FAQ.a5",
        open: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "question-block" }, _attrs))} data-v-7cee5938><!--[-->`);
      ssrRenderList(questions, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ open: item.open }, "question-item"])}" data-v-7cee5938><div class="question-number-wrapper" data-v-7cee5938><div class="number" data-v-7cee5938>0${ssrInterpolate(index)}</div><div class="question" data-v-7cee5938><h4 data-v-7cee5938>${ssrInterpolate(_ctx.$t(item.question))}</h4></div><div class="filler" data-v-7cee5938></div><div class="${ssrRenderClass([{ open: item.open }, "arrow-circle"])}" data-v-7cee5938><svg data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25" height="25" data-v-7cee5938><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" data-v-7cee5938></path></svg></div></div><div class="answer-wrapper" style="${ssrRenderStyle(item.open ? null : { display: "none" })}" data-v-7cee5938><p class="answer" data-v-7cee5938>${ssrInterpolate(_ctx.$t(item.answer))}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/FaqComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FaqComponent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7cee5938"]]);

const news2 = publicAssetsURL("/images/news/illumination.webp");

const news4 = publicAssetsURL("/images/news/ideas.webp");

const _sfc_main$2 = {
  __name: "NewsSwiperComponent",
  __ssrInlineRender: true,
  setup(__props) {
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
      }
    ]);
    const breakpoints = ref({
      300: {
        slidesPerView: 1.1,
        spaceBetween: 15
      },
      576: {
        slidesPerView: 1.1,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 1.4,
        spaceBetween: 15
      },
      992: {
        slidesPerView: 1.7,
        spaceBetween: 15
      },
      1200: {
        slidesPerView: 2.1,
        spaceBetween: 15
      },
      1400: {
        slidesPerView: 2.5,
        spaceBetween: 15
      },
      1700: {
        slidesPerView: 2.9,
        spaceBetween: 15
      },
      1920: {
        slidesPerView: 3.3,
        spaceBetween: 20
      }
    });
    const swipe = ref(null);
    const bindSwiperInstance = (instance) => {
      swipe.value = instance;
    };
    const nextSlide = () => {
      if (swipe.value) {
        swipe.value.slideNex;
      }
    };
    const prevSlide = () => {
      if (swipe.value) {
        swipe.value.slidePrev();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        "space-between": 50,
        breakpoints: breakpoints.value,
        loop: "",
        onSwiper: bindSwiperInstance
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(news.value, (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: unref(localePath)(`/news/${item.slug}`)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<article data-v-90e0f5cd${_scopeId3}><h5 data-v-90e0f5cd${_scopeId3}>${ssrInterpolate(_ctx.$t(item.category))}</h5><h4 data-v-90e0f5cd${_scopeId3}>${ssrInterpolate(_ctx.$t(item.title))}</h4><div class="meta" data-v-90e0f5cd${_scopeId3}><span data-v-90e0f5cd${_scopeId3}>by ${ssrInterpolate(_ctx.$t(item.by))}</span><span data-v-90e0f5cd${_scopeId3}>${ssrInterpolate(_ctx.$t(item.date))}</span></div><div class="image" data-v-90e0f5cd${_scopeId3}><img${ssrRenderAttr("src", item.photo)} alt="" data-v-90e0f5cd${_scopeId3}></div></article>`);
                        } else {
                          return [
                            createVNode("article", null, [
                              createVNode("h5", null, toDisplayString(_ctx.$t(item.category)), 1),
                              createVNode("h4", null, toDisplayString(_ctx.$t(item.title)), 1),
                              createVNode("div", { class: "meta" }, [
                                createVNode("span", null, "by " + toDisplayString(_ctx.$t(item.by)), 1),
                                createVNode("span", null, toDisplayString(_ctx.$t(item.date)), 1)
                              ]),
                              createVNode("div", { class: "image" }, [
                                createVNode("img", {
                                  src: item.photo,
                                  alt: ""
                                }, null, 8, ["src"])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)(`/news/${item.slug}`)
                      }, {
                        default: withCtx(() => [
                          createVNode("article", null, [
                            createVNode("h5", null, toDisplayString(_ctx.$t(item.category)), 1),
                            createVNode("h4", null, toDisplayString(_ctx.$t(item.title)), 1),
                            createVNode("div", { class: "meta" }, [
                              createVNode("span", null, "by " + toDisplayString(_ctx.$t(item.by)), 1),
                              createVNode("span", null, toDisplayString(_ctx.$t(item.date)), 1)
                            ]),
                            createVNode("div", { class: "image" }, [
                              createVNode("img", {
                                src: item.photo,
                                alt: ""
                              }, null, 8, ["src"])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><div class="slider-buttons" data-v-90e0f5cd${_scopeId}><button class="nav-button left" data-v-90e0f5cd${_scopeId}><div class="arrow" data-v-90e0f5cd${_scopeId}><svg data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-v-90e0f5cd${_scopeId}><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" data-v-90e0f5cd${_scopeId}></path></svg></div></button><button class="nav-button right" data-v-90e0f5cd${_scopeId}><div class="arrow" data-v-90e0f5cd${_scopeId}><svg data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-v-90e0f5cd${_scopeId}><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" data-v-90e0f5cd${_scopeId}></path></svg></div></button></div>`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(news.value, (item, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)(`/news/${item.slug}`)
                    }, {
                      default: withCtx(() => [
                        createVNode("article", null, [
                          createVNode("h5", null, toDisplayString(_ctx.$t(item.category)), 1),
                          createVNode("h4", null, toDisplayString(_ctx.$t(item.title)), 1),
                          createVNode("div", { class: "meta" }, [
                            createVNode("span", null, "by " + toDisplayString(_ctx.$t(item.by)), 1),
                            createVNode("span", null, toDisplayString(_ctx.$t(item.date)), 1)
                          ]),
                          createVNode("div", { class: "image" }, [
                            createVNode("img", {
                              src: item.photo,
                              alt: ""
                            }, null, 8, ["src"])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              createVNode("div", { class: "slider-buttons" }, [
                createVNode("button", {
                  class: "nav-button left",
                  onClick: prevSlide
                }, [
                  createVNode("div", { class: "arrow" }, [
                    (openBlock(), createBlock("svg", {
                      "data-name": "1-Arrow Up",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 32 32"
                    }, [
                      createVNode("path", { d: "m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" })
                    ]))
                  ])
                ]),
                createVNode("button", {
                  class: "nav-button right",
                  onClick: nextSlide
                }, [
                  createVNode("div", { class: "arrow" }, [
                    (openBlock(), createBlock("svg", {
                      "data-name": "1-Arrow Up",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 32 32"
                    }, [
                      createVNode("path", { d: "m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" })
                    ]))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Swipers/NewsSwiperComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NewsSwiperComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-90e0f5cd"]]);

function useCountAnimation(targetValue, duration = 2e3) {
  const count = ref(0);
  return { count };
}

const _sfc_main$1 = {
  __name: "HomeStatsComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = useCountAnimation();
    const clients = useCountAnimation();
    const interiors = useCountAnimation();
    const goal = useCountAnimation();
    const deadlines = useCountAnimation();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "statistics" }, _attrs))} data-v-b3cc5ef7><div class="container" data-v-b3cc5ef7><div class="statistics-row" data-v-b3cc5ef7><div class="stat-item" data-v-b3cc5ef7><h2 data-v-b3cc5ef7>${ssrInterpolate(unref(projects).count)}+</h2><p data-v-b3cc5ef7>${ssrInterpolate(_ctx.$t("home.stats1"))}</p></div><div class="stat-item" data-v-b3cc5ef7><h2 data-v-b3cc5ef7>${ssrInterpolate(unref(clients).count)}%</h2><p data-v-b3cc5ef7>${ssrInterpolate(_ctx.$t("home.stats2"))}</p></div><div class="stat-item hidden" data-v-b3cc5ef7><h2 data-v-b3cc5ef7></h2><p data-v-b3cc5ef7></p></div></div><div class="divider" data-v-b3cc5ef7></div><div class="statistics-row" data-v-b3cc5ef7><div class="stat-item" data-v-b3cc5ef7><h2 data-v-b3cc5ef7>${ssrInterpolate(unref(interiors).count.value.toLocaleString())}</h2><p data-v-b3cc5ef7>${ssrInterpolate(_ctx.$t("home.stats3"))}</p></div><div class="stat-item" data-v-b3cc5ef7><h2 data-v-b3cc5ef7>${ssrInterpolate(unref(goal).count)} ${ssrInterpolate(_ctx.$t("home.statsGoal"))}</h2><p data-v-b3cc5ef7>${ssrInterpolate(_ctx.$t("home.stats4"))}</p></div><div class="stat-item" data-v-b3cc5ef7><h2 data-v-b3cc5ef7>${ssrInterpolate(unref(deadlines).count)}%</h2><p data-v-b3cc5ef7>${ssrInterpolate(_ctx.$t("home.stats5"))}</p></div></div></div><div class="circle-r" data-v-b3cc5ef7><span data-v-b3cc5ef7>R</span></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/HomeStatsComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HomeStatsComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b3cc5ef7"]]);

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    useSeo("home");
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><section class="home" data-v-6f90779b><div class="container" data-v-6f90779b><div class="social-links" data-v-6f90779b>`);
      _push(ssrRenderComponent(SocialMedias, null, null, _parent));
      _push(`</div><div class="content" data-v-6f90779b><h1 data-v-6f90779b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-sw reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.headline"))}</span></h1></div></div></section><section class="expert-design" data-v-6f90779b><div class="container" data-v-6f90779b><div class="image-wrapper" data-v-6f90779b><img${ssrRenderAttr("src", _imports_0$1)} alt="Interior" data-v-6f90779b></div><div class="filler" data-v-6f90779b></div><div class="text-content" data-v-6f90779b><h3${ssrRenderAttrs(mergeProps({ class: "wow reveal-sb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.desc"))}</h3><p data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.fullDesc1"))}</p><p data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.fullDesc2"))}</p><p class="${ssrRenderClass([{ open: isOpen.value }, "read-more-text"])}" data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.readMore"))}<br data-v-6f90779b><br data-v-6f90779b> ${ssrInterpolate(_ctx.$t("home.readMore2"))}<br data-v-6f90779b><br data-v-6f90779b> ${ssrInterpolate(_ctx.$t("home.readMore3"))}</p><span class="read-more" data-v-6f90779b>${ssrInterpolate(isOpen.value ? _ctx.$t("common.hide") : _ctx.$t("common.readMore"))}</span></div></div></section><section class="values" data-v-6f90779b><div class="container" data-v-6f90779b><div class="main" data-v-6f90779b><div class="title-block" data-v-6f90779b><h2 data-v-6f90779b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>${_ctx.$t("home.valuesH2") ?? ""}</span></h2><div class="arrow-down" data-v-6f90779b><span data-v-6f90779b>↓</span></div></div><div class="image-wrapper" data-v-6f90779b><img${ssrRenderAttr("src", _imports_1)} alt="Интерьер" data-v-6f90779b></div></div>`);
      _push(ssrRenderComponent(ValuesArrowsComponent, null, null, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(HomeStatsComponent, null, null, _parent));
      _push(`<section class="services" data-v-6f90779b>`);
      _push(ssrRenderComponent(HomeGallery, null, null, _parent));
      _push(`</section><section class="projects" data-v-6f90779b><div class="projects-container" data-v-6f90779b><h3 data-v-6f90779b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.projectsH2"))}</span></h3>`);
      _push(ssrRenderComponent(ProjectsSwiperComponent, null, null, _parent));
      _push(`</div></section><section class="reviews" data-v-6f90779b><h2 data-v-6f90779b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.reviewsH2P1"))}<br data-v-6f90779b> ${ssrInterpolate(_ctx.$t("home.reviewsH2P2"))}</span></h2><div class="divider" data-v-6f90779b></div>`);
      _push(ssrRenderComponent(ReviewsSliderComponent, null, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(OfferComponent, null, null, _parent));
      _push(`<section class="process" data-v-6f90779b><div class="container" data-v-6f90779b><h2 data-v-6f90779b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.h2"))}</span></h2><div class="process-grid" data-v-6f90779b><div class="process-item" data-v-6f90779b><div class="process-item-count" data-v-6f90779b>01</div><div class="process-item-title" data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.title1"))}</div><p data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.text1"))}</p></div><div class="process-item" data-v-6f90779b><div class="process-item-count" data-v-6f90779b>02</div><div class="process-item-title" data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.title2"))}</div><p data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.text2"))}</p></div><div class="process-item" data-v-6f90779b><div class="process-item-count" data-v-6f90779b>03</div><div class="process-item-title" data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.title3"))}</div><p data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.text3"))}</p></div><div class="process-item process-item-moved" data-v-6f90779b><div class="process-item-count" data-v-6f90779b>04</div><div class="process-item-title" data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.title4"))}</div><p data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.text4"))}</p></div><div class="process-item process-item-moved-mob" data-v-6f90779b><div class="process-item-count" data-v-6f90779b>05</div><div class="process-item-title" data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.title5"))}</div><p data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.text5"))}</p></div></div></div></section><section class="faq" data-v-6f90779b><h2 data-v-6f90779b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>FAQ</span></h2>`);
      _push(ssrRenderComponent(FaqComponent, null, null, _parent));
      _push(`</section><section class="news" data-v-6f90779b><h2 data-v-6f90779b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.news.H2"))}</span></h2>`);
      _push(ssrRenderComponent(NewsSwiperComponent, null, null, _parent));
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6f90779b"]]);

export { index as default };
//# sourceMappingURL=index.vue4.mjs.map
