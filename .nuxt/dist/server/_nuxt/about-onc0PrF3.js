import { reactive, mergeProps, useSSRContext, resolveDirective } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _imports_1$1 } from "./virtual_public-CRjF2Z9m.js";
import { B as Breadcrumbs } from "./Breadcrumbs-DsbAcELI.js";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-BSCCcEt5.js";
import "vue-router";
import "./vue-i18n-Dx5HdeXT.js";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "destr";
import "klona";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@vueuse/core";
const _imports_0 = publicAssetsURL("/images/about/1.jpg");
const _imports_1 = publicAssetsURL("/images/about/2.jpg");
const _imports_2 = publicAssetsURL("/images/about/3.jpg");
const _imports_3 = publicAssetsURL("/images/about/5.jpg");
publicAssetsURL("/images/about/julien.jpg");
publicAssetsURL("/images/about/camile.jpg");
publicAssetsURL("/images/about/arrow-down.svg");
publicAssetsURL("/images/about/emil.jpg");
publicAssetsURL("/images/about/sophie.jpg");
publicAssetsURL("/images/about/tomas.jpg");
publicAssetsURL("/images/about/clara.jpg");
const _imports_12 = publicAssetsURL("/images/about/contact-arrow.svg");
const _imports_13 = publicAssetsURL("/images/about/6.jpg");
const image4 = publicAssetsURL("/images/about/4.jpg");
const _sfc_main$1 = {
  __name: "WhyWeComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const questions = reactive([
      {
        question: "about.why.values.question1",
        answer: "about.why.values.answer1",
        image: image4,
        open: false
      },
      {
        question: "about.why.values.question2",
        answer: "about.why.values.answer2",
        image: image4,
        open: false
      },
      {
        question: "about.why.values.question3",
        answer: "about.why.values.answer3",
        image: image4,
        open: false
      },
      {
        question: "about.why.values.question4",
        answer: "about.why.values.answer4",
        image: image4,
        open: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "question-block" }, _attrs))} data-v-ada7de81><!--[-->`);
      ssrRenderList(questions, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ open: item.open }, "question-item"])}" data-v-ada7de81><div class="question-number-wrapper" data-v-ada7de81><div class="number" data-v-ada7de81>0${ssrInterpolate(index)}</div><div class="question" data-v-ada7de81><h4 data-v-ada7de81>${ssrInterpolate(_ctx.$t(item.question))}</h4></div><div class="filler" data-v-ada7de81></div></div><div class="answer-wrapper" style="${ssrRenderStyle(item.open ? null : { display: "none" })}" data-v-ada7de81><p class="answer" data-v-ada7de81>${ssrInterpolate(_ctx.$t(item.answer))}</p><div class="filler" data-v-ada7de81></div><div class="answer-image" data-v-ada7de81><img${ssrRenderAttr("src", item.image)} alt="" data-v-ada7de81></div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/WhyWeComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WhyWeComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ada7de81"]]);
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main class="main" data-v-b27562c1><h1 data-v-b27562c1>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.h1P1"))}</span><div class="devider" data-v-b27562c1>/</div><div${ssrRenderAttrs(mergeProps({ class: "space wow reveal-sw reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.h1P2"))}</div></h1><h4 data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.h4"))}</h4><div class="main-image" data-v-b27562c1><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-b27562c1></div></main><section class="design" data-v-b27562c1><h2 data-v-b27562c1><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.design.h2"))}</span></h2><div class="content" data-v-b27562c1><p data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.design.p"))}</p><div class="filler" data-v-b27562c1></div><div class="image1" data-v-b27562c1><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-b27562c1></div><div class="image2" data-v-b27562c1><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-b27562c1></div></div></section><section class="why" data-v-b27562c1><h2 data-v-b27562c1><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.why.h2"))}</span></h2>`);
      _push(ssrRenderComponent(WhyWeComponent, null, null, _parent));
      _push(`</section><section class="rates" data-v-b27562c1><div class="rates-first" data-v-b27562c1><div class="rates-top" data-v-b27562c1><div class="rates-item" data-v-b27562c1><h2 data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.rates.stat1_value"))}</h2><div class="separator" data-v-b27562c1></div><p data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.rates.stat1_text"))}</p></div><div class="rates-item" data-v-b27562c1><h2 data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.rates.stat2_value"))}</h2><div class="separator" data-v-b27562c1></div><p data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.rates.stat2_text"))}</p></div><div class="rates-item" data-v-b27562c1><h2 data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.rates.stat3_value"))}</h2><div class="separator" data-v-b27562c1></div><p data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.rates.stat3_text"))}</p></div></div><div class="rates-img" data-v-b27562c1><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-b27562c1></div></div><div class="rates-second" data-v-b27562c1><div class="filler" data-v-b27562c1></div><div class="rates-bottom" data-v-b27562c1><div class="rates-item" data-v-b27562c1><h2 data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.rates.stat4_value"))}</h2><div class="separator" data-v-b27562c1></div><p data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.rates.stat4_text"))}</p></div><div class="rates-item" data-v-b27562c1><h2 data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.rates.stat5_value"))}</h2><div class="separator" data-v-b27562c1></div><p data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.rates.stat5_text"))}</p></div></div></div></section><section class="way" data-v-b27562c1><h2 data-v-b27562c1><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.way.title"))}</span></h2><div class="way-grid" data-v-b27562c1><div class="way-item" data-v-b27562c1><div class="number" data-v-b27562c1> 01 <span data-v-b27562c1><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-b27562c1></span></div><div class="title" data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.way.step1_title"))}</div><p data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.way.step1_text"))}</p></div><div class="way-item" data-v-b27562c1><div class="number" data-v-b27562c1> 02 <span data-v-b27562c1><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-b27562c1></span></div><div class="title" data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.way.step2_title"))}</div><p data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.way.step2_text"))}</p></div><div class="way-item" data-v-b27562c1><div class="number" data-v-b27562c1> 03 <span data-v-b27562c1><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-b27562c1></span></div><div class="title" data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.way.step3_title"))}</div><p data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.way.step3_text"))}</p></div><div class="way-item" data-v-b27562c1><div class="number" data-v-b27562c1> 04 <span data-v-b27562c1><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-b27562c1></span></div><div class="title" data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.way.step4_title"))}</div><p data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.way.step4_text"))}</p></div><div class="way-item" data-v-b27562c1><div class="number" data-v-b27562c1> 05 <span data-v-b27562c1><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-b27562c1></span></div><div class="title" data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.way.step5_title"))}</div><p data-v-b27562c1>${ssrInterpolate(_ctx.$t("about.way.step5_text"))}</p></div></div></section>`);
      {
        _push(`<!---->`);
      }
      _push(`<div class="contact" data-v-b27562c1><h1 data-v-b27562c1><span data-v-b27562c1>${_ctx.$t("contactPlate.h1") ?? ""}</span><span class="indent" data-v-b27562c1>${ssrInterpolate(_ctx.$t("contactPlate.span1"))}</span><br data-v-b27562c1><span class="indent" data-v-b27562c1>${ssrInterpolate(_ctx.$t("contactPlate.span2"))}</span><span data-v-b27562c1><img${ssrRenderAttr("src", _imports_12)} alt="" data-v-b27562c1></span></h1><p data-v-b27562c1>${ssrInterpolate(_ctx.$t("contactPlate.p"))}</p><img${ssrRenderAttr("src", _imports_13)} alt="" data-v-b27562c1></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b27562c1"]]);
export {
  about as default
};
//# sourceMappingURL=about-onc0PrF3.js.map
