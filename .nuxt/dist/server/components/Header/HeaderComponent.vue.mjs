import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public26.mjs";
import { useRoute } from "vue-router";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
import LangSwitchComponent from "../Tools/LangSwitchComponent.vue.mjs";
import CostCalcModal from "../Tools/CostCalcModal.vue.mjs";
/* empty css                      */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
import { useI18n } from "../../node_modules/vue-i18n/dist/vue-i18n.mjs";
const _sfc_main = {
  __name: "HeaderComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const localePath = useLocalePath();
    const { locale } = useI18n();
    const isActive = (path) => {
      const localizedPath = localePath(path);
      return route.path === localizedPath;
    };
    const modalOpened = ref(false);
    ref(0);
    const isHidden = ref(false);
    const modalSubmitted = ref(false);
    const submitModal = () => {
      modalSubmitted.value = true;
      setTimeout(() => {
        modalSubmitted.value = false;
      }, 3e3);
      modalOpened.value = false;
    };
    const toggleModal = () => {
      modalOpened.value = !modalOpened.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["headerxl", { hidden: isHidden.value }]
      }, _attrs))} data-v-2cfb8b02><div class="container" data-v-2cfb8b02><div class="logo" data-v-2cfb8b02>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img data-not-lazy${ssrRenderAttr("src", _imports_0)} alt="Razam" data-v-2cfb8b02${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                "data-not-lazy": "",
                src: _imports_0,
                alt: "Razam"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav class="nav-menu" data-v-2cfb8b02><ul data-v-2cfb8b02><li data-v-2cfb8b02>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: { active: isActive("/") }
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
      _push(`</li><span class="divider" data-v-2cfb8b02>/</span><li data-v-2cfb8b02>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/about"),
        class: { active: isActive("/about") }
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
      _push(`</li><span class="divider" data-v-2cfb8b02>/</span><li data-v-2cfb8b02>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/services"),
        class: { active: isActive("/services") }
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
      _push(`</li><span class="divider" data-v-2cfb8b02>/</span><li data-v-2cfb8b02>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/portfolio"),
        class: { active: isActive("/portfolio") }
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
      _push(`</li><span class="divider" data-v-2cfb8b02>/</span><li data-v-2cfb8b02>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/news"),
        class: { active: isActive("/news") }
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
      _push(`</li><span class="divider" data-v-2cfb8b02>/</span><li data-v-2cfb8b02>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contact"),
        class: { active: isActive("/contact") }
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
      _push(`</li><li class="cost-modal" data-v-2cfb8b02>`);
      if (modalOpened.value) {
        _push(ssrRenderComponent(CostCalcModal, {
          onCloseModal: toggleModal,
          onSubmitForm: submitModal
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="go-to-calc_btn" data-v-2cfb8b02>${ssrInterpolate(_ctx.$t("calculator.modalButton"))}</button></li><li data-v-2cfb8b02>`);
      _push(ssrRenderComponent(LangSwitchComponent, null, null, _parent));
      _push(`</li></ul></nav></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/HeaderComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2cfb8b02"]]);
export {
  HeaderComponent as default
};
//# sourceMappingURL=HeaderComponent.vue.mjs.map
