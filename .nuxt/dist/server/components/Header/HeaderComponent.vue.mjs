import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, ref, useSSRContext } from "vue";
import { useRoute } from "vue-router";
import LangSwitchComponent from "../Tools/LangSwitchComponent.vue.mjs";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
import { useI18n } from "../../node_modules/vue-i18n/dist/vue-i18n.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public26.mjs";
/* empty css                      */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = defineComponent({
  name: "HeaderComponent",
  components: {
    LangSwitchComponent
  },
  setup() {
    const route = useRoute();
    const localePath = useLocalePath();
    const { locale } = useI18n();
    const isActive = (path) => {
      const localizedPath = localePath(path);
      return route.path === localizedPath;
    };
    ref(0);
    const isHidden = ref(false);
    return { isActive, isHidden, localePath, locale };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_LangSwitchComponent = resolveComponent("LangSwitchComponent");
  _push(`<header${ssrRenderAttrs(mergeProps({
    class: ["header", { hidden: _ctx.isHidden }]
  }, _attrs))} data-v-90449e12><div class="container" data-v-90449e12><div class="logo" data-v-90449e12>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.localePath("/")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Razam" data-v-90449e12${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "Razam"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><nav class="nav-menu" data-v-90449e12><ul data-v-90449e12><li data-v-90449e12>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.localePath("/"),
    class: { active: _ctx.isActive("/") }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><span class="divider" data-v-90449e12>/</span><li data-v-90449e12>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.localePath("/about"),
    class: { active: _ctx.isActive("/about") }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.about"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.about")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><span class="divider" data-v-90449e12>/</span><li data-v-90449e12>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.localePath("/services"),
    class: { active: _ctx.isActive("/services") }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.services"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.services")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><span class="divider" data-v-90449e12>/</span><li data-v-90449e12>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.localePath("/portfolio"),
    class: { active: _ctx.isActive("/portfolio") }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.portfolio"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.portfolio")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><span class="divider" data-v-90449e12>/</span><li data-v-90449e12>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.localePath("/news"),
    class: { active: _ctx.isActive("/news") }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.news"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.news")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><span class="divider" data-v-90449e12>/</span><li data-v-90449e12>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.localePath("/contact"),
    class: { active: _ctx.isActive("/contact") }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.contact"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.contact")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-90449e12>`);
  _push(ssrRenderComponent(_component_LangSwitchComponent, null, null, _parent));
  _push(`</li></ul></nav></div></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/HeaderComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-90449e12"]]);
export {
  HeaderComponent as default
};
//# sourceMappingURL=HeaderComponent.vue.mjs.map
