import { ref, resolveDirective, mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { _ as _imports_0$1, a as _imports_2 } from "./virtual_public-CUDB83zt.js";
import { _ as _imports_2$1, a as _imports_0$2 } from "./virtual_public-CQt7_jRy.js";
import { _ as _imports_0$3 } from "./virtual_public-DAfNXu09.js";
import { useRouter } from "vue-router";
import SwiperCore from "swiper";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = publicAssetsURL("/images/home/diag-arrow2.png");
const _sfc_main = {
  __name: "HomeGallery",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    SwiperCore.use([Navigation, Pagination]);
    const items = [
      {
        image: _imports_0$1,
        service: "home.service1",
        slug: "interiordesign"
      },
      {
        image: _imports_2,
        service: "home.service2",
        slug: "interiordesign"
      },
      {
        image: _imports_2$1,
        service: "home.service3",
        slug: "interiordesign"
      },
      {
        image: _imports_0$2,
        service: "home.service4",
        slug: "houserenovation"
      },
      {
        image: _imports_0$3,
        service: "home.service5",
        slug: "commercerenovation"
      }
    ];
    const currentIndex = ref(0);
    const padNumber = (num) => num < 10 ? `0${num}` : `${num}`;
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><div class="gallery" data-v-ecc5389e><div class="top" data-v-ecc5389e><span data-v-ecc5389e><span class="top-first" data-v-ecc5389e>${ssrInterpolate(padNumber(currentIndex.value + 1))}</span><!--[-->`);
      ssrRenderList(currentIndex.value + 1, (i) => {
        _push(`<span class="top-first-minus" data-v-ecc5389e>—</span>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(items.length - currentIndex.value - 1, (i) => {
        _push(`<span class="top-last-minus" data-v-ecc5389e>—</span>`);
      });
      _push(`<!--]--><span class="top-last" data-v-ecc5389e>${ssrInterpolate(padNumber(items.length))}</span></span><h2 data-v-ecc5389e><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-ecc5389e>${ssrInterpolate(_ctx.$t("home.servicesH2"))}</span></h2></div><div class="display" data-v-ecc5389e><div class="buttons" data-v-ecc5389e><!--[-->`);
      ssrRenderList(items, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ active: index === currentIndex.value }, "button"])}" data-v-ecc5389e><div class="button-wrapper" data-v-ecc5389e><div data-v-ecc5389e>${ssrInterpolate(_ctx.$t(item.service))}</div><div class="buttons-idx" data-v-ecc5389e>${ssrInterpolate(padNumber(index + 1))}</div>`);
        if (index === currentIndex.value) {
          _push(`<div class="arrow-wrapper" data-v-ecc5389e><div class="arrow" data-v-ecc5389e><img${ssrRenderAttr("src", _imports_0)} alt="arrow" data-v-ecc5389e></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="divider" data-v-ecc5389e></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (items[currentIndex.value]) {
        _push(`<img${ssrRenderAttr("src", items[currentIndex.value].image)}${ssrRenderAttr("alt", items[currentIndex.value].service)} data-v-ecc5389e>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="gallery-sm" data-v-ecc5389e><h2 data-v-ecc5389e><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-ecc5389e>${ssrInterpolate(_ctx.$t("home.servicesH2"))}</span></h2><div class="slider-gallery" data-v-ecc5389e>`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 1,
        autoplay: {
          delay: 10
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
                    _push3(`<div class="slide-content" data-v-ecc5389e${_scopeId2}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.service)} data-v-ecc5389e${_scopeId2}><div class="description" data-v-ecc5389e${_scopeId2}>${ssrInterpolate(_ctx.$t(item.service))}</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "slide-content" }, [
                        createVNode("img", {
                          src: item.image,
                          alt: item.service
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", { class: "description" }, toDisplayString(_ctx.$t(item.service)), 1)
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
                      createVNode("img", {
                        src: item.image,
                        alt: item.service
                      }, null, 8, ["src", "alt"]),
                      createVNode("div", { class: "description" }, toDisplayString(_ctx.$t(item.service)), 1)
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
const HomeGallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ecc5389e"]]);
export {
  HomeGallery as H
};
//# sourceMappingURL=HomeGallery-BkOhHJUK.js.map
