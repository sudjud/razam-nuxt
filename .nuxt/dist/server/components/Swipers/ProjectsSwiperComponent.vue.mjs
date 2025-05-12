import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import _sfc_main from "./ProjectsSwiperComponent.vue2.mjs";
import { resolveComponent, resolveDirective, mergeProps, withCtx, withDirectives, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps } from "vue/server-renderer";
/* empty css                              */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0;
  const _directive_lazy_load = resolveDirective("lazy-load");
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider" }, _attrs))} data-v-d2e71302><div class="container" data-v-d2e71302><div class="slider-buttons" data-v-d2e71302><button class="nav-button left" data-v-d2e71302><span class="arrow" data-v-d2e71302>←</span></button><button class="nav-button right" data-v-d2e71302><span class="arrow" data-v-d2e71302>→</span></button></div><div class="slider-container" data-v-d2e71302>`);
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
                _push3(`<div class="slide-content" data-v-d2e71302${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_NuxtLink, {
                  to: _ctx.localePath(`/portfolio/${slide.slug}`)
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<img${ssrRenderAttrs(_temp0 = mergeProps({
                        "data-src": slide.image,
                        alt: slide.title
                      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-d2e71302${_scopeId3}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}<h3 data-v-d2e71302${_scopeId3}>${ssrInterpolate(slide.title)}</h3><p data-v-d2e71302${_scopeId3}>${ssrInterpolate(_ctx.descFormatter(_ctx.$t(slide.description)))}</p>`);
                    } else {
                      return [
                        withDirectives(createVNode("img", {
                          "data-src": slide.image,
                          alt: slide.title
                        }, null, 8, ["data-src", "alt"]), [
                          [_directive_lazy_load]
                        ]),
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
                        withDirectives(createVNode("img", {
                          "data-src": slide.image,
                          alt: slide.title
                        }, null, 8, ["data-src", "alt"]), [
                          [_directive_lazy_load]
                        ]),
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
                      withDirectives(createVNode("img", {
                        "data-src": slide.image,
                        alt: slide.title
                      }, null, 8, ["data-src", "alt"]), [
                        [_directive_lazy_load]
                      ]),
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
const ProjectsSwiperComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d2e71302"]]);
export {
  ProjectsSwiperComponent as default
};
//# sourceMappingURL=ProjectsSwiperComponent.vue.mjs.map
