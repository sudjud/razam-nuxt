import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public49.mjs";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
/* empty css                     */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "OfferComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "offer" }, _attrs))} data-v-38338185>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 data-v-38338185${_scopeId}>${ssrInterpolate(_ctx.$t("home.offer.h2P1"))}<span class="arrow" data-v-38338185${_scopeId}><img data-not-lazy${ssrRenderAttr("src", _imports_0)} alt="" data-v-38338185${_scopeId}></span><br data-v-38338185${_scopeId}><div class="decor" data-v-38338185${_scopeId}>${ssrInterpolate(_ctx.$t("home.offer.h2P2"))}<br data-v-38338185${_scopeId}> ${ssrInterpolate(_ctx.$t("home.offer.h2P3"))} ? </div></h2>`);
          } else {
            return [
              createVNode("h2", null, [
                createTextVNode(toDisplayString(_ctx.$t("home.offer.h2P1")), 1),
                createVNode("span", { class: "arrow" }, [
                  createVNode("img", {
                    "data-not-lazy": "",
                    src: _imports_0,
                    alt: ""
                  })
                ]),
                createVNode("br"),
                createVNode("div", { class: "decor" }, [
                  createTextVNode(toDisplayString(_ctx.$t("home.offer.h2P2")), 1),
                  createVNode("br"),
                  createTextVNode(" " + toDisplayString(_ctx.$t("home.offer.h2P3")) + " ? ", 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p data-v-38338185>${ssrInterpolate(_ctx.$t("home.offer.p"))}</p></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/OfferComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OfferComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-38338185"]]);
export {
  OfferComponent as default
};
//# sourceMappingURL=OfferComponent.vue.mjs.map
