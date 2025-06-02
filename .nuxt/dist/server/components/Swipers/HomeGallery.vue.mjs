import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, resolveDirective, mergeProps, unref, withCtx, withDirectives, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import _imports_0$3 from "../../public/images/home/diag-arrow2.webp.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
/* empty css                                           */
import _imports_0 from "../../_virtual/virtual_public29.mjs";
import _imports_0$1 from "../../_virtual/virtual_public34.mjs";
import _imports_0$2 from "../../_virtual/virtual_public38.mjs";
import { useRouter } from "vue-router";
import SwiperCore from "swiper";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
/* empty css                  */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "HomeGallery",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const localePath = useLocalePath();
    SwiperCore.use([Navigation, Pagination]);
    const items = [
      {
        image: _imports_0,
        service: "home.service1",
        // Дизайн интерьера, коммерческих помещений, домов и квартир
        slug: "interiordesign"
      },
      {
        image: _imports_0$1,
        service: "home.service4",
        // Ремонт домов и квартир
        slug: "houserenovation"
      },
      {
        image: _imports_0$2,
        service: "home.service5",
        // Ремонт коммерческих помещений
        slug: "commercerenovation"
      }
    ];
    const currentIndex = ref(0);
    const padNumber = (num) => num < 10 ? `0${num}` : `${num}`;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_reveal = resolveDirective("reveal");
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp0;
      _push(`<!--[--><div class="gallery" data-v-15467e0c><div class="top" data-v-15467e0c><span data-v-15467e0c><span class="top-first" data-v-15467e0c>${ssrInterpolate(padNumber(currentIndex.value + 1))}</span><!--[-->`);
      ssrRenderList(currentIndex.value + 1, (i) => {
        _push(`<span class="top-first-minus" data-v-15467e0c>—</span>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(items.length - currentIndex.value - 1, (i) => {
        _push(`<span class="top-last-minus" data-v-15467e0c>—</span>`);
      });
      _push(`<!--]--><span class="top-last" data-v-15467e0c>${ssrInterpolate(padNumber(items.length))}</span></span><h2 data-v-15467e0c><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-15467e0c>${ssrInterpolate(_ctx.$t("home.servicesH2"))}</span></h2></div><div class="display" data-v-15467e0c><div class="buttons" data-v-15467e0c><!--[-->`);
      ssrRenderList(items, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ active: index === currentIndex.value }, "button"])}" data-v-15467e0c><div class="button-wrapper" data-v-15467e0c><div data-v-15467e0c>${ssrInterpolate(_ctx.$t(item.service))}</div><div class="buttons-idx" data-v-15467e0c>${ssrInterpolate(padNumber(index + 1))}</div>`);
        if (index === currentIndex.value) {
          _push(`<div class="arrow-wrapper" data-v-15467e0c><div class="arrow" data-v-15467e0c><img data-not-lazy${ssrRenderAttr("src", _imports_0$3)} alt="arrow" data-v-15467e0c></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="divider" data-v-15467e0c></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (items[currentIndex.value]) {
        _push(`<img data-not-lazy${ssrRenderAttr("src", items[currentIndex.value].image)}${ssrRenderAttr("alt", items[currentIndex.value].service)} data-v-15467e0c>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="gallery-sm" data-v-15467e0c><h2 data-v-15467e0c><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-15467e0c>${ssrInterpolate(_ctx.$t("home.servicesH2"))}</span></h2><div class="slider-gallery" data-v-15467e0c>`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 1,
        autoplay: {
          delay: 10,
          disableOnInteraction: true,
          pauseOnMouseEnter: true
        },
        speed: 3e3,
        loop: "",
        grabCursor: "",
        "space-between": "20",
        class: "my-swiper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items, (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="slide-content" data-v-15467e0c${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: unref(localePath)(`/services/${item.slug}`)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttrs(_temp0 = mergeProps({
                            "data-src": item.image,
                            alt: item.service
                          }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-15467e0c${_scopeId3}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}<div class="description" data-v-15467e0c${_scopeId3}><u data-v-15467e0c${_scopeId3}>${ssrInterpolate(_ctx.$t(item.service))}</u></div>`);
                        } else {
                          return [
                            withDirectives(createVNode("img", {
                              "data-src": item.image,
                              alt: item.service
                            }, null, 8, ["data-src", "alt"]), [
                              [_directive_lazy_load]
                            ]),
                            createVNode("div", { class: "description" }, [
                              createVNode("u", null, toDisplayString(_ctx.$t(item.service)), 1)
                            ])
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
                          to: unref(localePath)(`/services/${item.slug}`)
                        }, {
                          default: withCtx(() => [
                            withDirectives(createVNode("img", {
                              "data-src": item.image,
                              alt: item.service
                            }, null, 8, ["data-src", "alt"]), [
                              [_directive_lazy_load]
                            ]),
                            createVNode("div", { class: "description" }, [
                              createVNode("u", null, toDisplayString(_ctx.$t(item.service)), 1)
                            ])
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
              (openBlock(), createBlock(Fragment, null, renderList(items, (item, index) => {
                return createVNode(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "slide-content" }, [
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)(`/services/${item.slug}`)
                      }, {
                        default: withCtx(() => [
                          withDirectives(createVNode("img", {
                            "data-src": item.image,
                            alt: item.service
                          }, null, 8, ["data-src", "alt"]), [
                            [_directive_lazy_load]
                          ]),
                          createVNode("div", { class: "description" }, [
                            createVNode("u", null, toDisplayString(_ctx.$t(item.service)), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Swipers/HomeGallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeGallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15467e0c"]]);
export {
  HomeGallery as default
};
//# sourceMappingURL=HomeGallery.vue.mjs.map
