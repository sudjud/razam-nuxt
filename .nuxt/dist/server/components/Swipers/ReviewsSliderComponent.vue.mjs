import _sfc_main from "./ReviewsSliderComponent.vue2.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public47.mjs";
import _imports_1 from "../../_virtual/virtual_public48.mjs";
/* empty css                             */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "testimonials" }, _attrs))} data-v-a557b71d>`);
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
                _push3(`<div class="testimonials-photo" data-v-a557b71d${_scopeId2}><div class="profile-pic" data-v-a557b71d${_scopeId2}>${ssrInterpolate(_ctx.$t(testimonial.name)[0])}</div></div><div class="testimonials-content" data-v-a557b71d${_scopeId2}><h5 data-v-a557b71d${_scopeId2}>${ssrInterpolate(_ctx.$t(testimonial.name))}</h5><p data-v-a557b71d${_scopeId2}>${ssrInterpolate(_ctx.$t(testimonial.text))}</p><div class="testimonial-author" data-v-a557b71d${_scopeId2}><!--[-->`);
                ssrRenderList(testimonial.stars, (i) => {
                  _push3(`<img data-not-lazy${ssrRenderAttr("src", _imports_0)} alt="" data-v-a557b71d${_scopeId2}>`);
                });
                _push3(`<!--]--><!--[-->`);
                ssrRenderList(5 - testimonial.stars, (i) => {
                  _push3(`<img data-not-lazy${ssrRenderAttr("src", _imports_1)} alt="" data-v-a557b71d${_scopeId2}>`);
                });
                _push3(`<!--]--></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonials-photo" }, [
                    createVNode("div", { class: "profile-pic" }, toDisplayString(_ctx.$t(testimonial.name)[0]), 1)
                  ]),
                  createVNode("div", { class: "testimonials-content" }, [
                    createVNode("h5", null, toDisplayString(_ctx.$t(testimonial.name)), 1),
                    createVNode("p", null, toDisplayString(_ctx.$t(testimonial.text)), 1),
                    createVNode("div", { class: "testimonial-author" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(testimonial.stars, (i) => {
                        return openBlock(), createBlock("img", {
                          "data-not-lazy": "",
                          src: _imports_0,
                          alt: "",
                          key: i
                        });
                      }), 128)),
                      (openBlock(true), createBlock(Fragment, null, renderList(5 - testimonial.stars, (i) => {
                        return openBlock(), createBlock("img", {
                          "data-not-lazy": "",
                          src: _imports_1,
                          alt: "",
                          key: i
                        });
                      }), 128))
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
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.testimonials, (testimonial, index) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonials-photo" }, [
                  createVNode("div", { class: "profile-pic" }, toDisplayString(_ctx.$t(testimonial.name)[0]), 1)
                ]),
                createVNode("div", { class: "testimonials-content" }, [
                  createVNode("h5", null, toDisplayString(_ctx.$t(testimonial.name)), 1),
                  createVNode("p", null, toDisplayString(_ctx.$t(testimonial.text)), 1),
                  createVNode("div", { class: "testimonial-author" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(testimonial.stars, (i) => {
                      return openBlock(), createBlock("img", {
                        "data-not-lazy": "",
                        src: _imports_0,
                        alt: "",
                        key: i
                      });
                    }), 128)),
                    (openBlock(true), createBlock(Fragment, null, renderList(5 - testimonial.stars, (i) => {
                      return openBlock(), createBlock("img", {
                        "data-not-lazy": "",
                        src: _imports_1,
                        alt: "",
                        key: i
                      });
                    }), 128))
                  ])
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
  _push(`<div class="slider-buttons" data-v-a557b71d><button class="nav-button left" data-v-a557b71d><span class="arrow" data-v-a557b71d>←</span></button><button class="nav-button right" data-v-a557b71d><span class="arrow" data-v-a557b71d>→</span></button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Swipers/ReviewsSliderComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ReviewsSliderComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a557b71d"]]);
export {
  ReviewsSliderComponent as default
};
//# sourceMappingURL=ReviewsSliderComponent.vue.mjs.map
