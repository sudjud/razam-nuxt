import { mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext, resolveDirective } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as _imports_0$1 } from "./virtual_public-RgXUZhFW.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _imports_5 } from "./virtual_public-B6iiuS77.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BSCCcEt5.js";
import { _ as _imports_0 } from "./virtual_public-BFlYF5SH.js";
import { f as useLocalePath, _ as _export_sfc } from "../server.mjs";
import { B as Breadcrumbs } from "./Breadcrumbs-Cpbe7d2J.js";
import { C as CostCalculator } from "./CostCalculator-BHr9mTCX.js";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "destr";
import "klona";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@vueuse/core";
import "./vue-i18n-nQ1iH6wE.js";
import "libphonenumber-js";
const _imports_1$1 = publicAssetsURL("/images/services/commerce-renovation/1.webp");
const _imports_2 = publicAssetsURL("/images/services/commerce-renovation/2.webp");
const _imports_3 = publicAssetsURL("/images/services/commerce-renovation/3.webp");
const _imports_1 = publicAssetsURL("/images/services/commerce-renovation/shield.webp");
const _sfc_main$1 = {
  __name: "ContactShield3",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shield" }, _attrs))}><div class="text">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}><span class="no-wrap"${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield3.h1"))}</span><div class="spaced"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield3.h2"))}</span><br${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield3.h3"))}<img class="arrow"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}></span></div></h1>`);
          } else {
            return [
              createVNode("h1", null, [
                createVNode("span", { class: "no-wrap" }, toDisplayString(_ctx.$t("services.contactShield3.h1")), 1),
                createVNode("div", { class: "spaced" }, [
                  createVNode("span", null, toDisplayString(_ctx.$t("services.contactShield3.h2")), 1),
                  createVNode("br"),
                  createVNode("span", null, [
                    createTextVNode(toDisplayString(_ctx.$t("services.contactShield3.h3")), 1),
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
      _push(`<p>${ssrInterpolate(_ctx.$t("services.contactShield3.p"))}</p></div><div class="image"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/ContactShield3.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "commercerenovation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main data-v-ed293b55><p data-v-ed293b55>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`</p><h1 data-v-ed293b55><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.h1"))}<br data-v-ed293b55> ${ssrInterpolate(_ctx.$t("services.commerceRenovation.h1p2"))}</span></h1><div class="image-wrapper" data-v-ed293b55><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-ed293b55></div></main><section class="text" data-v-ed293b55><p data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.p1"))}</p><h4 data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.h1"))}</h4><p data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.p2"))}</p><h4 data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.h2"))}</h4><p data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.p3"))}</p><h4 data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.h3"))}</h4><p data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.p4"))}</p><h4 data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.h4"))}</h4><ul data-v-ed293b55><li data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul1.li1"))}</li><li data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul1.li2"))}</li><li data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul1.li3"))}</li><li data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul1.li4"))}</li></ul><h4 data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.h5"))}</h4><ul data-v-ed293b55><li data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul2.li1"))}</li><li data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul2.li2"))}</li><li data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul2.li3"))}</li><li data-v-ed293b55>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul2.li4"))}</li></ul></section><section class="calculate-form" data-v-ed293b55>`);
      _push(ssrRenderComponent(CostCalculator, null, null, _parent));
      _push(`</section><section class="why" data-v-ed293b55><div class="images" data-v-ed293b55><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-ed293b55><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-ed293b55><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-ed293b55></div><div class="quote" data-v-ed293b55><div class="image-wrapper" data-v-ed293b55><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-ed293b55></div><h5 data-v-ed293b55>&quot;${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.quote"))}&quot;</h5></div></section>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/commercerenovation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commercerenovation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ed293b55"]]);
export {
  commercerenovation as default
};
//# sourceMappingURL=commercerenovation-CrFNQHA2.js.map
