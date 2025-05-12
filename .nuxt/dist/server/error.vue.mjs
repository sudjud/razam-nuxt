import __nuxt_component_0 from "./node_modules/nuxt/dist/app/components/nuxt-layout.mjs";
import __nuxt_component_0$1 from "./node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useLocalePath } from "./node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
/* empty css            */
import _export_sfc from "./_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="error-page" data-v-7ec18b79${_scopeId}><div class="text" data-v-7ec18b79${_scopeId}><h1 data-v-7ec18b79${_scopeId}>${ssrInterpolate(__props.error.statusCode)}</h1><p data-v-7ec18b79${_scopeId}>${ssrInterpolate(__props.error.message)}</p></div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`← ${ssrInterpolate(_ctx.$t("menu.home"))}`);
                } else {
                  return [
                    createTextVNode("← " + toDisplayString(_ctx.$t("menu.home")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "error-page" }, [
                createVNode("div", { class: "text" }, [
                  createVNode("h1", null, toDisplayString(__props.error.statusCode), 1),
                  createVNode("p", null, toDisplayString(__props.error.message), 1)
                ]),
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/")
                }, {
                  default: withCtx(() => [
                    createTextVNode("← " + toDisplayString(_ctx.$t("menu.home")), 1)
                  ]),
                  _: 1
                }, 8, ["to"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ErrorComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7ec18b79"]]);
export {
  ErrorComponent as default
};
//# sourceMappingURL=error.vue.mjs.map
