import { reactive, mergeProps, useSSRContext, resolveDirective } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { B as Breadcrumbs } from "./Breadcrumbs-Ce7WFUYu.js";
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
const _imports_4 = publicAssetsURL("/images/about/arrow.svg");
const _imports_5 = publicAssetsURL("/images/about/julien.jpg");
const _imports_6 = publicAssetsURL("/images/about/camile.jpg");
const _imports_7 = publicAssetsURL("/images/about/arrow-down.svg");
const _imports_8 = publicAssetsURL("/images/about/emil.jpg");
const _imports_9 = publicAssetsURL("/images/about/sophie.jpg");
const _imports_10 = publicAssetsURL("/images/about/tomas.jpg");
const _imports_11 = publicAssetsURL("/images/about/clara.jpg");
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
      _push(`<!--[--><main class="main" data-v-5595cc5a><h1 data-v-5595cc5a>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.h1P1"))}</span><div class="devider" data-v-5595cc5a>/</div><div${ssrRenderAttrs(mergeProps({ class: "space wow reveal-sw reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.h1P2"))}</div></h1><h4 data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.h4"))}</h4><div class="main-image" data-v-5595cc5a><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-5595cc5a></div></main><section class="design" data-v-5595cc5a><h2 data-v-5595cc5a><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.design.h2"))}</span></h2><div class="content" data-v-5595cc5a><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.design.p"))}</p><div class="filler" data-v-5595cc5a></div><div class="image1" data-v-5595cc5a><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-5595cc5a></div><div class="image2" data-v-5595cc5a><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-5595cc5a></div></div></section><section class="why" data-v-5595cc5a><h2 data-v-5595cc5a><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.why.h2"))}</span></h2>`);
      _push(ssrRenderComponent(WhyWeComponent, null, null, _parent));
      _push(`</section><section class="rates" data-v-5595cc5a><div class="rates-first" data-v-5595cc5a><div class="rates-top" data-v-5595cc5a><div class="rates-item" data-v-5595cc5a><h2 data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.rates.stat1_value"))}</h2><div class="separator" data-v-5595cc5a></div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.rates.stat1_text"))}</p></div><div class="rates-item" data-v-5595cc5a><h2 data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.rates.stat2_value"))}</h2><div class="separator" data-v-5595cc5a></div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.rates.stat2_text"))}</p></div><div class="rates-item" data-v-5595cc5a><h2 data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.rates.stat3_value"))}</h2><div class="separator" data-v-5595cc5a></div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.rates.stat3_text"))}</p></div></div><div class="rates-img" data-v-5595cc5a><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-5595cc5a></div></div><div class="rates-second" data-v-5595cc5a><div class="filler" data-v-5595cc5a></div><div class="rates-bottom" data-v-5595cc5a><div class="rates-item" data-v-5595cc5a><h2 data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.rates.stat4_value"))}</h2><div class="separator" data-v-5595cc5a></div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.rates.stat4_text"))}</p></div><div class="rates-item" data-v-5595cc5a><h2 data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.rates.stat5_value"))}</h2><div class="separator" data-v-5595cc5a></div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.rates.stat5_text"))}</p></div></div></div></section><section class="way" data-v-5595cc5a><h2 data-v-5595cc5a><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.way.title"))}</span></h2><div class="way-grid" data-v-5595cc5a><div class="way-item" data-v-5595cc5a><div class="number" data-v-5595cc5a> 01 <span data-v-5595cc5a><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-5595cc5a></span></div><div class="title" data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.way.step1_title"))}</div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.way.step1_text"))}</p></div><div class="way-item" data-v-5595cc5a><div class="number" data-v-5595cc5a> 02 <span data-v-5595cc5a><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-5595cc5a></span></div><div class="title" data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.way.step2_title"))}</div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.way.step2_text"))}</p></div><div class="way-item" data-v-5595cc5a><div class="number" data-v-5595cc5a> 03 <span data-v-5595cc5a><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-5595cc5a></span></div><div class="title" data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.way.step3_title"))}</div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.way.step3_text"))}</p></div><div class="way-item" data-v-5595cc5a><div class="number" data-v-5595cc5a> 04 <span data-v-5595cc5a><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-5595cc5a></span></div><div class="title" data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.way.step4_title"))}</div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.way.step4_text"))}</p></div><div class="way-item" data-v-5595cc5a><div class="number" data-v-5595cc5a> 05 <span data-v-5595cc5a><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-5595cc5a></span></div><div class="title" data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.way.step5_title"))}</div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.way.step5_text"))}</p></div></div></section><section class="team" data-v-5595cc5a><div class="team-top" data-v-5595cc5a><div class="team-item" data-v-5595cc5a><div class="item-img" data-v-5595cc5a><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-5595cc5a></div><h4 data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.team.member1_name"))}</h4><div class="separator" data-v-5595cc5a></div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.team.member1_role"))}</p></div><div class="team-item" data-v-5595cc5a><div class="item-img" data-v-5595cc5a><img${ssrRenderAttr("src", _imports_6)} alt="" data-v-5595cc5a></div><h4 data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.team.member2_name"))}</h4><div class="separator" data-v-5595cc5a></div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.team.member2_role"))}</p></div><div class="filler" data-v-5595cc5a></div><h2 data-v-5595cc5a><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.team.title"))}</span><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-5595cc5a></h2></div><div class="team-bottom" data-v-5595cc5a><div class="team-item wow animate__animated animate__fadeIn" data-v-5595cc5a><div class="item-img" data-v-5595cc5a><img${ssrRenderAttr("src", _imports_8)} alt="" data-v-5595cc5a></div><h4 data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.team.member3_name"))}</h4><div class="separator" data-v-5595cc5a></div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.team.member3_role"))}</p></div><div class="team-item wow animate__animated animate__fadeIn" data-v-5595cc5a><div class="item-img" data-v-5595cc5a><img${ssrRenderAttr("src", _imports_9)} alt="" data-v-5595cc5a></div><h4 data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.team.member4_name"))}</h4><div class="separator" data-v-5595cc5a></div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.team.member4_role"))}</p></div><div class="team-item wow animate__animated animate__fadeIn" data-v-5595cc5a><div class="item-img" data-v-5595cc5a><img${ssrRenderAttr("src", _imports_10)} alt="" data-v-5595cc5a></div><h4 data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.team.member5_name"))}</h4><div class="separator" data-v-5595cc5a></div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.team.member5_role"))}</p></div><div class="team-item wow animate__animated animate__fadeIn" data-v-5595cc5a><div class="item-img" data-v-5595cc5a><img${ssrRenderAttr("src", _imports_11)} alt="" data-v-5595cc5a></div><h4 data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.team.member6_name"))}</h4><div class="separator" data-v-5595cc5a></div><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("about.team.member6_role"))}</p></div></div></section><div class="contact" data-v-5595cc5a><h1 data-v-5595cc5a><span data-v-5595cc5a>${_ctx.$t("contactPlate.h1") ?? ""}</span><span class="indent" data-v-5595cc5a>${ssrInterpolate(_ctx.$t("contactPlate.span1"))}</span><br data-v-5595cc5a><span class="indent" data-v-5595cc5a>${ssrInterpolate(_ctx.$t("contactPlate.span2"))}</span><span data-v-5595cc5a><img${ssrRenderAttr("src", _imports_12)} alt="" data-v-5595cc5a></span></h1><p data-v-5595cc5a>${ssrInterpolate(_ctx.$t("contactPlate.p"))}</p><img${ssrRenderAttr("src", _imports_13)} alt="" data-v-5595cc5a></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5595cc5a"]]);
export {
  about as default
};
//# sourceMappingURL=about-CfphGqtp.js.map
