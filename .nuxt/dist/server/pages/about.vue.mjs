import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { resolveDirective, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps } from "vue/server-renderer";
import _imports_0 from "../_virtual/virtual_public.mjs";
import _imports_1 from "../_virtual/virtual_public2.mjs";
import _imports_2 from "../_virtual/virtual_public3.mjs";
import _imports_3 from "../_virtual/virtual_public4.mjs";
import _imports_1$1 from "../_virtual/virtual_public5.mjs";
import "../_virtual/virtual_public6.mjs";
import "../_virtual/virtual_public7.mjs";
import "../_virtual/virtual_public8.mjs";
import "../_virtual/virtual_public9.mjs";
import "../_virtual/virtual_public10.mjs";
import "../_virtual/virtual_public11.mjs";
import "../_virtual/virtual_public12.mjs";
import _imports_12 from "../_virtual/virtual_public13.mjs";
import _imports_13 from "../_virtual/virtual_public14.mjs";
import Breadcrumbs from "../components/Tools/Breadcrumbs.vue.mjs";
import WhyWeComponent from "../components/Tools/WhyWeComponent.vue.mjs";
import { useSeo } from "../composables/useSeo.mjs";
import { useLocalePath } from "../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
/* empty css            */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    useSeo("about");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main class="main" data-v-174da0fc><h1 data-v-174da0fc>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.h1P1"))}</span><div class="devider" data-v-174da0fc>/</div><div${ssrRenderAttrs(mergeProps({ class: "space wow reveal-sw reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.h1P2"))}</div></h1><h4 data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.h4"))}</h4><div class="main-image" data-v-174da0fc><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-174da0fc></div></main><section class="design" data-v-174da0fc><h2 data-v-174da0fc><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.design.h2"))}</span></h2><div class="content" data-v-174da0fc><p data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.design.p"))}</p><div class="filler" data-v-174da0fc></div><div class="image1" data-v-174da0fc><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-174da0fc></div><div class="image2" data-v-174da0fc><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-174da0fc></div></div></section><section class="why" data-v-174da0fc><h2 data-v-174da0fc><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.why.h2"))}</span></h2>`);
      _push(ssrRenderComponent(WhyWeComponent, null, null, _parent));
      _push(`</section><section class="rates" data-v-174da0fc><div class="rates-first" data-v-174da0fc><div class="rates-top" data-v-174da0fc><div class="rates-item" data-v-174da0fc><h2 data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.rates.stat1_value"))}</h2><div class="separator" data-v-174da0fc></div><p data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.rates.stat1_text"))}</p></div><div class="rates-item" data-v-174da0fc><h2 data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.rates.stat2_value"))}</h2><div class="separator" data-v-174da0fc></div><p data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.rates.stat2_text"))}</p></div><div class="rates-item" data-v-174da0fc><h2 data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.rates.stat3_value"))}</h2><div class="separator" data-v-174da0fc></div><p data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.rates.stat3_text"))}</p></div></div><div class="rates-img" data-v-174da0fc><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-174da0fc></div></div><div class="rates-second" data-v-174da0fc><div class="filler" data-v-174da0fc></div><div class="rates-bottom" data-v-174da0fc><div class="rates-item" data-v-174da0fc><h2 data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.rates.stat4_value"))}</h2><div class="separator" data-v-174da0fc></div><p data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.rates.stat4_text"))}</p></div><div class="rates-item" data-v-174da0fc><h2 data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.rates.stat5_value"))}</h2><div class="separator" data-v-174da0fc></div><p data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.rates.stat5_text"))}</p></div></div></div></section><section class="way" data-v-174da0fc><h2 data-v-174da0fc><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.way.title"))}</span></h2><div class="way-grid" data-v-174da0fc><div class="way-item" data-v-174da0fc><div class="number" data-v-174da0fc> 01 <span data-v-174da0fc><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-174da0fc></span></div><div class="title" data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.way.step1_title"))}</div><p data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.way.step1_text"))}</p></div><div class="way-item" data-v-174da0fc><div class="number" data-v-174da0fc> 02 <span data-v-174da0fc><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-174da0fc></span></div><div class="title" data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.way.step2_title"))}</div><p data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.way.step2_text"))}</p></div><div class="way-item" data-v-174da0fc><div class="number" data-v-174da0fc> 03 <span data-v-174da0fc><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-174da0fc></span></div><div class="title" data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.way.step3_title"))}</div><p data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.way.step3_text"))}</p></div><div class="way-item" data-v-174da0fc><div class="number" data-v-174da0fc> 04 <span data-v-174da0fc><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-174da0fc></span></div><div class="title" data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.way.step4_title"))}</div><p data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.way.step4_text"))}</p></div><div class="way-item" data-v-174da0fc><div class="number" data-v-174da0fc> 05 <span data-v-174da0fc><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-174da0fc></span></div><div class="title" data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.way.step5_title"))}</div><p data-v-174da0fc>${ssrInterpolate(_ctx.$t("about.way.step5_text"))}</p></div></div></section>`);
      {
        _push(`<!---->`);
      }
      _push(`<div class="contact" data-v-174da0fc><div class="text" data-v-174da0fc>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 data-v-174da0fc${_scopeId}><span data-v-174da0fc${_scopeId}>${_ctx.$t("contactPlate.h1") ?? ""}</span><span class="indent" data-v-174da0fc${_scopeId}>${ssrInterpolate(_ctx.$t("contactPlate.span1"))}</span><br data-v-174da0fc${_scopeId}><span class="indent" data-v-174da0fc${_scopeId}>${ssrInterpolate(_ctx.$t("contactPlate.span2"))}</span><span data-v-174da0fc${_scopeId}><img${ssrRenderAttr("src", _imports_12)} alt="" data-v-174da0fc${_scopeId}></span></h2>`);
          } else {
            return [
              createVNode("h2", null, [
                createVNode("span", {
                  innerHTML: _ctx.$t("contactPlate.h1")
                }, null, 8, ["innerHTML"]),
                createVNode("span", { class: "indent" }, toDisplayString(_ctx.$t("contactPlate.span1")), 1),
                createVNode("br"),
                createVNode("span", { class: "indent" }, toDisplayString(_ctx.$t("contactPlate.span2")), 1),
                createVNode("span", null, [
                  createVNode("img", {
                    src: _imports_12,
                    alt: ""
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p data-v-174da0fc>${ssrInterpolate(_ctx.$t("contactPlate.p"))}</p></div><div class="contact__image" data-v-174da0fc><img${ssrRenderAttr("src", _imports_13)} alt="" data-v-174da0fc></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-174da0fc"]]);
export {
  about as default
};
//# sourceMappingURL=about.vue.mjs.map
