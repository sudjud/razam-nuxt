import { mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext, resolveDirective } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as _imports_0$1, a as _imports_2 } from "./virtual_public-CUDB83zt.js";
import { _ as _imports_1$1 } from "./virtual_public-CRjF2Z9m.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _imports_5 } from "./virtual_public-B6iiuS77.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BSCCcEt5.js";
import { _ as _imports_0 } from "./virtual_public-BFlYF5SH.js";
import { _ as _export_sfc } from "../server.mjs";
import { B as Breadcrumbs } from "./Breadcrumbs-DsbAcELI.js";
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
import "./vue-i18n-Dx5HdeXT.js";
const _imports_3 = publicAssetsURL("/images/services/interior-design/2.jpg");
const _imports_4 = publicAssetsURL("/images/services/interior-design/3.jpg");
const _imports_1 = publicAssetsURL("/images/services/shield.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "shield" }, _attrs))}><div class="text">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact#formContactLink" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1${_scopeId}><span class="no-wrap"${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield1.h1"))}</span><div class="spaced"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield1.h2"))}</span><br${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield1.h3"))}<img class="arrow"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}></span></div></h1>`);
      } else {
        return [
          createVNode("h1", null, [
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
  _push(`<p>${ssrInterpolate(_ctx.$t("services.contactShield1.p"))}</p></div><div class="image"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/ContactShield.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactShield = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "interiordesign",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main data-v-530c1d88><p data-v-530c1d88>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`</p><h1 data-v-530c1d88><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.h1"))}<br data-v-530c1d88> ${ssrInterpolate(_ctx.$t("services.interiorDesign.h1p2"))}</span></h1><div class="image-wrapper" data-v-530c1d88><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-530c1d88></div></main><section class="text" data-v-530c1d88><p data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.p1"))}</p><h4 data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.h1"))}</h4><p data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.p2"))}</p><h4 data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.h2"))}</h4><p data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.p3"))}</p><h4 data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.h3"))}</h4><p data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.p4"))}</p><h4 data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.h4"))}</h4><p data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.p5"))}</p></section><section class="way" data-v-530c1d88><h3 data-v-530c1d88><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.title1"))} <br data-v-530c1d88> ${ssrInterpolate(_ctx.$t("services.interiorDesign.way.title2"))}</span></h3><div class="way-grid" data-v-530c1d88><div class="way-item" data-v-530c1d88><div class="number" data-v-530c1d88> 01 <span data-v-530c1d88><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-530c1d88></span></div><div class="title" data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step1_title"))}</div><p data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step1_text"))}</p></div><div class="way-item" data-v-530c1d88><div class="number" data-v-530c1d88> 02 <span data-v-530c1d88><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-530c1d88></span></div><div class="title" data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step2_title"))}</div><p data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step2_text"))}</p></div><div class="way-item" data-v-530c1d88><div class="number" data-v-530c1d88> 03 <span data-v-530c1d88><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-530c1d88></span></div><div class="title" data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step3_title"))}</div><p data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step3_text"))}</p></div><div class="way-item" data-v-530c1d88><div class="number" data-v-530c1d88> 04 <span data-v-530c1d88><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-530c1d88></span></div><div class="title" data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step4_title"))}</div><p data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step4_text"))}</p></div><div class="way-item" data-v-530c1d88><div class="number" data-v-530c1d88> 05 <span data-v-530c1d88><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-530c1d88></span></div><div class="title" data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step5_title"))}</div><p data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step5_text"))}</p></div></div></section><section class="why" data-v-530c1d88><h3 data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.why.h4"))}</h3><ul data-v-530c1d88><li data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.why.li1"))}</li><li data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.why.li2"))}</li><li data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.why.li3"))}</li><li data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.why.li4"))}</li><li data-v-530c1d88>${ssrInterpolate(_ctx.$t("services.interiorDesign.why.li5"))}</li></ul><div class="images" data-v-530c1d88><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-530c1d88><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-530c1d88><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-530c1d88></div><div class="quote" data-v-530c1d88><div class="image-wrapper" data-v-530c1d88><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-530c1d88></div><h5 data-v-530c1d88> &quot;${ssrInterpolate(_ctx.$t("services.interiorDesign.why.quote"))}&quot; </h5></div></section>`);
      _push(ssrRenderComponent(ContactShield, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/interiordesign.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const interiordesign = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-530c1d88"]]);
export {
  interiordesign as default
};
//# sourceMappingURL=interiordesign-kyrk9Jbx.js.map
