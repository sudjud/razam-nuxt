import _sfc_main from "./ReviewsSliderComponent.vue2.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
/* empty css                             */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Swipers/ReviewsSliderComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ReviewsSliderComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-21a891fc"]]);
export {
  ReviewsSliderComponent as default
};
//# sourceMappingURL=ReviewsSliderComponent.vue.mjs.map
