import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { ref, resolveDirective, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import { _ as _imports_0$1 } from './virtual_public29.mjs';
import { _ as _imports_0$2 } from './virtual_public34.mjs';
import { _ as _imports_0$3 } from './virtual_public38.mjs';
import { useRouter } from 'vue-router';
import SwiperCore from 'swiper';
import { _ as _export_sfc, u as useLocalePath } from './server.mjs';

const _imports_0 = "data:image/webp;base64,UklGRlABAABXRUJQVlA4WAoAAAAQAAAAIQAAHgAAQUxQSPIAAAABgFDbVh3nSngOigQkICEOioOJg+Ig4yB1kDpAAhKeBCScfhLCVEFETID+dzyOreQlBZvnDHqte1lzijZmzHUbUZlDHpJCSrk8j9r6yHJjOMTjLM2znfO3aaFxqdnRAQ4Hn/XgbxFQJ20APSsAX1OsAniUEvCcERygBUkLUCakDvBpkrQC+d6Dv0WnBUi3NoC+6PwA4o3QADzosgI2Fh2gmq4bdA2/d4CnRoE29MHfVaMG1AHbAXrScAT2q9AAPGg8AeUiOsBhupmB9ezB36Lb5ng42QB61sSQTJKsAnjU/OAALeiFFeDT9MoGFL02el/0YlZQOCA4AAAAMAMAnQEqIgAfAD5lKJBFpCKhmqQAQAZEtIAAUnmAXsXFAAD++zX//pY23dRnm4U9eZ//w9AAAAA=";

const photo2 = "" + __buildAssetsURL("1gallery.n3sT0Igd.webp");

const photo3 = "" + __buildAssetsURL("2gallery.BtNliHdW.webp");

const _sfc_main = {
  __name: "HomeGallery",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const localePath = useLocalePath();
    SwiperCore.use([Navigation, Pagination]);
    const items = [
      {
        image: _imports_0$1,
        service: "home.service1",
        slug: "interiordesign"
      },
      {
        image: photo2,
        service: "home.service2",
        slug: "interiordesign"
      },
      {
        image: photo3,
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
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><div class="gallery" data-v-f9004d45><div class="top" data-v-f9004d45><span data-v-f9004d45><span class="top-first" data-v-f9004d45>${ssrInterpolate(padNumber(currentIndex.value + 1))}</span><!--[-->`);
      ssrRenderList(currentIndex.value + 1, (i) => {
        _push(`<span class="top-first-minus" data-v-f9004d45>—</span>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(items.length - currentIndex.value - 1, (i) => {
        _push(`<span class="top-last-minus" data-v-f9004d45>—</span>`);
      });
      _push(`<!--]--><span class="top-last" data-v-f9004d45>${ssrInterpolate(padNumber(items.length))}</span></span><h2 data-v-f9004d45><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-f9004d45>${ssrInterpolate(_ctx.$t("home.servicesH2"))}</span></h2></div><div class="display" data-v-f9004d45><div class="buttons" data-v-f9004d45><!--[-->`);
      ssrRenderList(items, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ active: index === currentIndex.value }, "button"])}" data-v-f9004d45><div class="button-wrapper" data-v-f9004d45><div data-v-f9004d45>${ssrInterpolate(_ctx.$t(item.service))}</div><div class="buttons-idx" data-v-f9004d45>${ssrInterpolate(padNumber(index + 1))}</div>`);
        if (index === currentIndex.value) {
          _push(`<div class="arrow-wrapper" data-v-f9004d45><div class="arrow" data-v-f9004d45><img${ssrRenderAttr("src", _imports_0)} alt="arrow" data-v-f9004d45></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="divider" data-v-f9004d45></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (items[currentIndex.value]) {
        _push(`<img${ssrRenderAttr("src", items[currentIndex.value].image)}${ssrRenderAttr("alt", items[currentIndex.value].service)} data-v-f9004d45>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="gallery-sm" data-v-f9004d45><h2 data-v-f9004d45><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-f9004d45>${ssrInterpolate(_ctx.$t("home.servicesH2"))}</span></h2><div class="slider-gallery" data-v-f9004d45>`);
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
                    _push3(`<div class="slide-content" data-v-f9004d45${_scopeId2}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.service)} data-v-f9004d45${_scopeId2}><div class="description" data-v-f9004d45${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: unref(localePath)(`/services/${item.slug}`)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t(item.service))} ↗`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t(item.service)) + " ↗", 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "slide-content" }, [
                        createVNode("img", {
                          src: item.image,
                          alt: item.service
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", { class: "description" }, [
                          createVNode(_component_NuxtLink, {
                            to: unref(localePath)(`/services/${item.slug}`)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t(item.service)) + " ↗", 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ])
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
                      createVNode("div", { class: "description" }, [
                        createVNode(_component_NuxtLink, {
                          to: unref(localePath)(`/services/${item.slug}`)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t(item.service)) + " ↗", 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
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
const HomeGallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f9004d45"]]);

export { HomeGallery as H };
//# sourceMappingURL=HomeGallery.vue.mjs.map
