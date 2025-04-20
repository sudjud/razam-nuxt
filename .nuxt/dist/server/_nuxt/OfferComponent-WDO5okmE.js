import { _ as __nuxt_component_0 } from "./nuxt-link-BSCCcEt5.js";
import { mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-BFlYF5SH.js";
import { _ as _export_sfc, f as useLocalePath } from "../server.mjs";
const _sfc_main = {
  __name: "OfferComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "offer" }, _attrs))} data-v-fcef0ebf>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 data-v-fcef0ebf${_scopeId}>${ssrInterpolate(_ctx.$t("home.offer.h2P1"))}<span class="arrow" data-v-fcef0ebf${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-fcef0ebf${_scopeId}></span><br data-v-fcef0ebf${_scopeId}><div class="decor" data-v-fcef0ebf${_scopeId}>${ssrInterpolate(_ctx.$t("home.offer.h2P2"))}<br data-v-fcef0ebf${_scopeId}> ${ssrInterpolate(_ctx.$t("home.offer.h2P3"))} ? </div></h2>`);
          } else {
            return [
              createVNode("h2", null, [
                createTextVNode(toDisplayString(_ctx.$t("home.offer.h2P1")), 1),
                createVNode("span", { class: "arrow" }, [
                  createVNode("img", {
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
      _push(`<p data-v-fcef0ebf>${ssrInterpolate(_ctx.$t("home.offer.p"))}</p></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/OfferComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OfferComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fcef0ebf"]]);
export {
  OfferComponent as O
};
//# sourceMappingURL=OfferComponent-WDO5okmE.js.map
