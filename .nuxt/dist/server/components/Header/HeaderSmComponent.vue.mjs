import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public68.mjs";
import _imports_0$1 from "../../_virtual/virtual_public69.mjs";
import { useRoute } from "vue-router";
import LangSwitchComponent from "../Tools/LangSwitchComponent.vue.mjs";
import SocialMedias from "../Tools/SocialMedias.vue.mjs";
import CostCalcModal from "../Tools/CostCalcModal.vue.mjs";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
import { useI18n } from "../../node_modules/vue-i18n/dist/vue-i18n.mjs";
/* empty css                        */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "HeaderSmComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const localePath = useLocalePath();
    const { locale } = useI18n();
    const modalOpened = ref(false);
    const modalSubmitted = ref(false);
    const submitModal = () => {
      modalSubmitted.value = true;
      setTimeout(() => {
        modalSubmitted.value = false;
        closeMenu();
      }, 3e3);
      modalOpened.value = false;
    };
    const toggleModal = () => {
      modalOpened.value = !modalOpened.value;
    };
    ref(0);
    const isHidden = ref(false);
    const isActive = (path) => {
      const localizedPath = localePath(path);
      return route.path === localizedPath;
    };
    const isOpen = ref(false);
    const closeMenu = () => {
      isOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["headersm", { open: isOpen.value, hidden: isHidden.value && !isOpen.value }]
      }, _attrs))} data-v-53f4e860><div class="container" data-v-53f4e860><div class="${ssrRenderClass([{ open: isOpen.value }, "logo"])}" data-v-53f4e860>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img data-not-lazy${ssrRenderAttr("src", _imports_0)} alt="Razam" data-v-53f4e860${_scopeId}>`);
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
      _push(`</div><div class="${ssrRenderClass([{ open: isOpen.value }, "logo logo-white"])}" data-v-53f4e860>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img data-not-lazy${ssrRenderAttr("src", _imports_0$1)} alt="Razam" data-v-53f4e860${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                "data-not-lazy": "",
                src: _imports_0$1,
                alt: "Razam"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="${ssrRenderClass([{ open: isOpen.value }, "hamburger"])}"${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-53f4e860><span class="${ssrRenderClass({ open: isOpen.value })}" data-v-53f4e860></span><span class="${ssrRenderClass({ open: isOpen.value })}" data-v-53f4e860></span><span class="${ssrRenderClass({ open: isOpen.value })}" data-v-53f4e860></span></button><nav class="${ssrRenderClass([{ open: isOpen.value }, "nav-menu"])}" data-v-53f4e860><ul data-v-53f4e860><li data-v-53f4e860>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: { active: isActive("/") },
        onClick: closeMenu
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
      _push(`</li><li data-v-53f4e860>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/about"),
        class: { active: isActive("/about") },
        onClick: closeMenu
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
      _push(`</li><li data-v-53f4e860>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/services"),
        class: { active: isActive("/services") },
        onClick: closeMenu
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
      _push(`</li><li data-v-53f4e860>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/portfolio"),
        class: { active: isActive("/portfolio") },
        onClick: closeMenu
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
      _push(`</li><li data-v-53f4e860>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/news"),
        class: { active: isActive("/news") },
        onClick: closeMenu
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
      _push(`</li><li data-v-53f4e860>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contact"),
        class: { active: isActive("/contact") },
        onClick: closeMenu
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
      _push(`</li><li class="cost-modal" data-v-53f4e860>`);
      if (modalOpened.value) {
        _push(ssrRenderComponent(CostCalcModal, {
          onCloseModal: toggleModal,
          onSubmitForm: submitModal,
          onClick: () => {
          }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="go-to-calc_btn" data-v-53f4e860>${ssrInterpolate(_ctx.$t("calculator.modalButton"))}</button></li><li class="lang-switch" data-v-53f4e860>`);
      _push(ssrRenderComponent(LangSwitchComponent, null, null, _parent));
      _push(`</li><li data-v-53f4e860><div class="social-links" data-v-53f4e860>`);
      _push(ssrRenderComponent(SocialMedias, null, null, _parent));
      _push(`</div></li></ul></nav></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/HeaderSmComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderSmComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-53f4e860"]]);
export {
  HeaderSmComponent as default
};
//# sourceMappingURL=HeaderSmComponent.vue.mjs.map
