import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { resolveDirective, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public55.mjs";
import _imports_1 from "../../_virtual/virtual_public59.mjs";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
/* empty css                     */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "ContactShield2",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shield" }, _attrs))} data-v-7a156f89><div class="text" data-v-7a156f89>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 data-v-7a156f89${_scopeId}><span class="no-wrap" data-v-7a156f89${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield2.h1"))}</span><div class="spaced" data-v-7a156f89${_scopeId}><span data-v-7a156f89${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield2.h2"))}</span><br data-v-7a156f89${_scopeId}><span data-v-7a156f89${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield2.h3"))}<img data-not-lazy class="arrow"${ssrRenderAttr("src", _imports_0)} alt="" data-v-7a156f89${_scopeId}></span></div></h2>`);
          } else {
            return [
              createVNode("h2", null, [
                createVNode("span", { class: "no-wrap" }, toDisplayString(_ctx.$t("services.contactShield2.h1")), 1),
                createVNode("div", { class: "spaced" }, [
                  createVNode("span", null, toDisplayString(_ctx.$t("services.contactShield2.h2")), 1),
                  createVNode("br"),
                  createVNode("span", null, [
                    createTextVNode(toDisplayString(_ctx.$t("services.contactShield2.h3")), 1),
                    createVNode("img", {
                      "data-not-lazy": "",
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
      _push(`<p data-v-7a156f89>${ssrInterpolate(_ctx.$t("services.contactShield2.p"))}</p></div><div class="image" data-v-7a156f89><img${ssrRenderAttrs(_temp0 = mergeProps({
        "data-src": _imports_1,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-7a156f89>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/ContactShield2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactShield2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7a156f89"]]);
export {
  ContactShield2 as default
};
//# sourceMappingURL=ContactShield2.vue.mjs.map
