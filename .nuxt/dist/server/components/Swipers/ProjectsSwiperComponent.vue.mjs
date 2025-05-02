import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import _sfc_main from "./ProjectsSwiperComponent.vue2.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
/* empty css                              */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Swipers/ProjectsSwiperComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectsSwiperComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-81ddcecf"]]);
export {
  ProjectsSwiperComponent as default
};
//# sourceMappingURL=ProjectsSwiperComponent.vue.mjs.map
