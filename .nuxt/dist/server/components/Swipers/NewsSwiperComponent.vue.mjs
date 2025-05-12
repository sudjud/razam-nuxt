import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, resolveDirective, unref, mergeProps, withCtx, createVNode, toDisplayString, withDirectives, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps } from "vue/server-renderer";
/* empty css                                    */
/* empty css                                                */
import { Swiper, SwiperSlide } from "swiper/vue";
import news2 from "../../_virtual/virtual_public47.mjs";
import news4 from "../../_virtual/virtual_public48.mjs";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
/* empty css                          */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
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
        swipe.value.slideNext();
      }
    };
    const prevSlide = () => {
      if (swipe.value) {
        swipe.value.slidePrev();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp0;
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
                          _push4(`<article data-v-5e27555d${_scopeId3}><h5 data-v-5e27555d${_scopeId3}>${ssrInterpolate(_ctx.$t(item.category))}</h5><h4 data-v-5e27555d${_scopeId3}>${ssrInterpolate(_ctx.$t(item.title))}</h4><div class="meta" data-v-5e27555d${_scopeId3}><span data-v-5e27555d${_scopeId3}>by ${ssrInterpolate(_ctx.$t(item.by))}</span><span data-v-5e27555d${_scopeId3}>${ssrInterpolate(_ctx.$t(item.date))}</span></div><div class="image" data-v-5e27555d${_scopeId3}><img${ssrRenderAttrs(_temp0 = mergeProps({
                            "data-src": item.photo,
                            alt: ""
                          }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-5e27555d${_scopeId3}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div></article>`);
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
                                withDirectives(createVNode("img", {
                                  "data-src": item.photo,
                                  alt: ""
                                }, null, 8, ["data-src"]), [
                                  [_directive_lazy_load]
                                ])
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
                              withDirectives(createVNode("img", {
                                "data-src": item.photo,
                                alt: ""
                              }, null, 8, ["data-src"]), [
                                [_directive_lazy_load]
                              ])
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
            _push2(`<!--]--><div class="slider-buttons" data-v-5e27555d${_scopeId}><button class="nav-button left" data-v-5e27555d${_scopeId}><div class="arrow" data-v-5e27555d${_scopeId}><svg data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-not-lazy data-v-5e27555d${_scopeId}><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" data-v-5e27555d${_scopeId}></path></svg></div></button><button class="nav-button right" data-v-5e27555d${_scopeId}><div class="arrow" data-v-5e27555d${_scopeId}><svg data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-not-lazy data-v-5e27555d${_scopeId}><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" data-v-5e27555d${_scopeId}></path></svg></div></button></div>`);
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
                            withDirectives(createVNode("img", {
                              "data-src": item.photo,
                              alt: ""
                            }, null, 8, ["data-src"]), [
                              [_directive_lazy_load]
                            ])
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
                      viewBox: "0 0 32 32",
                      "data-not-lazy": ""
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
                      viewBox: "0 0 32 32",
                      "data-not-lazy": ""
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Swipers/NewsSwiperComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NewsSwiperComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e27555d"]]);
export {
  NewsSwiperComponent as default
};
//# sourceMappingURL=NewsSwiperComponent.vue.mjs.map
