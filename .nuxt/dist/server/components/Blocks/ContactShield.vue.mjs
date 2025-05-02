import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public49.mjs";
import _imports_1 from "../../_virtual/virtual_public52.mjs";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
/* empty css                    */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "ContactShield",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shield" }, _attrs))} data-v-4e818f2d><div class="text" data-v-4e818f2d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 data-v-4e818f2d${_scopeId}><span class="no-wrap" data-v-4e818f2d${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield1.h1"))}</span><div class="spaced" data-v-4e818f2d${_scopeId}><span data-v-4e818f2d${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield1.h2"))}</span><br data-v-4e818f2d${_scopeId}><span data-v-4e818f2d${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield1.h3"))}<img class="arrow"${ssrRenderAttr("src", _imports_0)} alt="" data-v-4e818f2d${_scopeId}></span></div></h2>`);
          } else {
            return [
              createVNode("h2", null, [
                createVNode("span", { class: "no-wrap" }, toDisplayString(_ctx.$t("services.contactShield1.h1")), 1),
                createVNode("div", { class: "spaced" }, [
                  createVNode("span", null, toDisplayString(_ctx.$t("services.contactShield1.h2")), 1),
                  createVNode("br"),
                  createVNode("span", null, [
                    createTextVNode(toDisplayString(_ctx.$t("services.contactShield1.h3")), 1),
                    createVNode("img", {
                      class: "arrow",
                      src: _imports_0,
                      alt: ""
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text__small" data-v-4e818f2d><p data-v-4e818f2d>${ssrInterpolate(_ctx.$t("services.contactShield1.p"))}</p></div></div><div class="image" data-v-4e818f2d><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-4e818f2d></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/ContactShield.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactShield = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e818f2d"]]);
export {
  ContactShield as default
};
//# sourceMappingURL=ContactShield.vue.mjs.map
