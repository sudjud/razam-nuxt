import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { useI18n } from "../../node_modules/vue-i18n/dist/vue-i18n.mjs";
import { useSwitchLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
/* empty css                          */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "LangSwitchComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales } = useI18n();
    const switchLocalePath = useSwitchLocalePath();
    const availableLocales = computed(() => {
      return locales.value.filter((i) => i.code !== locale.value);
    });
    const currentLocal = computed(() => {
      return locales.value.find((i) => i.code === locale.value).name;
    });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "switcher" }, _attrs))} data-v-3b363efb><div class="current" data-v-3b363efb>${ssrInterpolate(unref(currentLocal).toUpperCase())}</div><div class="${ssrRenderClass([{ open: unref(isOpen) }, "dropdown"])}" data-v-3b363efb><!--[-->`);
      ssrRenderList(unref(availableLocales), (locale2) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: locale2.code,
          to: unref(switchLocalePath)(locale2.code)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(locale2.name.toUpperCase())}`);
            } else {
              return [
                createTextVNode(toDisplayString(locale2.name.toUpperCase()), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/LangSwitchComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LangSwitchComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b363efb"]]);
export {
  LangSwitchComponent as default
};
//# sourceMappingURL=LangSwitchComponent.vue.mjs.map
