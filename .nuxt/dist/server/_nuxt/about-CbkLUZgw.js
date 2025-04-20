import { _ as __nuxt_component_0 } from "./nuxt-link-BSCCcEt5.js";
import { reactive, mergeProps, useSSRContext, resolveDirective, unref, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _imports_1$2 } from "./virtual_public-CRjF2Z9m.js";
import { B as Breadcrumbs } from "./Breadcrumbs-Cpbe7d2J.js";
import { _ as _imports_1$1, a as _imports_2$1, b as _imports_3$1 } from "./virtual_public-CHJHGFSn.js";
import { _ as _export_sfc, f as useLocalePath } from "../server.mjs";
import "vue-router";
import "./vue-i18n-nQ1iH6wE.js";
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
const _imports_0 = publicAssetsURL("/images/about/1.webp");
const _imports_1 = publicAssetsURL("/images/about/2.webp");
const _imports_2 = publicAssetsURL("/images/about/3.webp");
const _imports_3 = publicAssetsURL("/images/about/5.webp");
publicAssetsURL("/images/about/julien.webp");
publicAssetsURL("/images/about/camile.webp");
publicAssetsURL("/images/about/arrow-down.svg");
publicAssetsURL("/images/about/emil.webp");
publicAssetsURL("/images/about/sophie.webp");
publicAssetsURL("/images/about/tomas.webp");
publicAssetsURL("/images/about/clara.webp");
const _imports_12 = publicAssetsURL("/images/about/contact-arrow.svg");
const _imports_13 = publicAssetsURL("/images/about/6.webp");
const image1 = publicAssetsURL("/images/about/4.webp");
const _sfc_main$1 = {
  __name: "WhyWeComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const questions = reactive([
      {
        question: "about.why.values.question1",
        answer: "about.why.values.answer1",
        image: image1,
        open: false
      },
      {
        question: "about.why.values.question2",
        answer: "about.why.values.answer2",
        image: _imports_1$1,
        open: false
      },
      {
        question: "about.why.values.question3",
        answer: "about.why.values.answer3",
        image: _imports_2$1,
        open: false
      },
      {
        question: "about.why.values.question4",
        answer: "about.why.values.answer4",
        image: _imports_3$1,
        open: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "question-block" }, _attrs))} data-v-c5c2bf78><!--[-->`);
      ssrRenderList(questions, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ open: item.open }, "question-item"])}" data-v-c5c2bf78><div class="question-number-wrapper" data-v-c5c2bf78><div class="number" data-v-c5c2bf78>0${ssrInterpolate(index)}</div><div class="question" data-v-c5c2bf78><h4 data-v-c5c2bf78>${ssrInterpolate(_ctx.$t(item.question))}</h4></div><div class="filler" data-v-c5c2bf78></div></div><div class="answer-wrapper" style="${ssrRenderStyle(item.open ? null : { display: "none" })}" data-v-c5c2bf78><p class="answer" data-v-c5c2bf78>${ssrInterpolate(_ctx.$t(item.answer))}</p><div class="filler" data-v-c5c2bf78></div><div class="answer-image" data-v-c5c2bf78><img${ssrRenderAttr("src", item.image)} alt="" data-v-c5c2bf78></div></div></div>`);
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
const WhyWeComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c5c2bf78"]]);
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main class="main" data-v-28db401f><h1 data-v-28db401f>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-28db401f>${ssrInterpolate(_ctx.$t("about.h1P1"))}</span><div class="devider" data-v-28db401f>/</div><div${ssrRenderAttrs(mergeProps({ class: "space wow reveal-sw reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-28db401f>${ssrInterpolate(_ctx.$t("about.h1P2"))}</div></h1><h4 data-v-28db401f>${ssrInterpolate(_ctx.$t("about.h4"))}</h4><div class="main-image" data-v-28db401f><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-28db401f></div></main><section class="design" data-v-28db401f><h2 data-v-28db401f><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-28db401f>${ssrInterpolate(_ctx.$t("about.design.h2"))}</span></h2><div class="content" data-v-28db401f><p data-v-28db401f>${ssrInterpolate(_ctx.$t("about.design.p"))}</p><div class="filler" data-v-28db401f></div><div class="image1" data-v-28db401f><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-28db401f></div><div class="image2" data-v-28db401f><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-28db401f></div></div></section><section class="why" data-v-28db401f><h2 data-v-28db401f><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-28db401f>${ssrInterpolate(_ctx.$t("about.why.h2"))}</span></h2>`);
      _push(ssrRenderComponent(WhyWeComponent, null, null, _parent));
      _push(`</section><section class="rates" data-v-28db401f><div class="rates-first" data-v-28db401f><div class="rates-top" data-v-28db401f><div class="rates-item" data-v-28db401f><h2 data-v-28db401f>${ssrInterpolate(_ctx.$t("about.rates.stat1_value"))}</h2><div class="separator" data-v-28db401f></div><p data-v-28db401f>${ssrInterpolate(_ctx.$t("about.rates.stat1_text"))}</p></div><div class="rates-item" data-v-28db401f><h2 data-v-28db401f>${ssrInterpolate(_ctx.$t("about.rates.stat2_value"))}</h2><div class="separator" data-v-28db401f></div><p data-v-28db401f>${ssrInterpolate(_ctx.$t("about.rates.stat2_text"))}</p></div><div class="rates-item" data-v-28db401f><h2 data-v-28db401f>${ssrInterpolate(_ctx.$t("about.rates.stat3_value"))}</h2><div class="separator" data-v-28db401f></div><p data-v-28db401f>${ssrInterpolate(_ctx.$t("about.rates.stat3_text"))}</p></div></div><div class="rates-img" data-v-28db401f><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-28db401f></div></div><div class="rates-second" data-v-28db401f><div class="filler" data-v-28db401f></div><div class="rates-bottom" data-v-28db401f><div class="rates-item" data-v-28db401f><h2 data-v-28db401f>${ssrInterpolate(_ctx.$t("about.rates.stat4_value"))}</h2><div class="separator" data-v-28db401f></div><p data-v-28db401f>${ssrInterpolate(_ctx.$t("about.rates.stat4_text"))}</p></div><div class="rates-item" data-v-28db401f><h2 data-v-28db401f>${ssrInterpolate(_ctx.$t("about.rates.stat5_value"))}</h2><div class="separator" data-v-28db401f></div><p data-v-28db401f>${ssrInterpolate(_ctx.$t("about.rates.stat5_text"))}</p></div></div></div></section><section class="way" data-v-28db401f><h2 data-v-28db401f><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-28db401f>${ssrInterpolate(_ctx.$t("about.way.title"))}</span></h2><div class="way-grid" data-v-28db401f><div class="way-item" data-v-28db401f><div class="number" data-v-28db401f> 01 <span data-v-28db401f><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-28db401f></span></div><div class="title" data-v-28db401f>${ssrInterpolate(_ctx.$t("about.way.step1_title"))}</div><p data-v-28db401f>${ssrInterpolate(_ctx.$t("about.way.step1_text"))}</p></div><div class="way-item" data-v-28db401f><div class="number" data-v-28db401f> 02 <span data-v-28db401f><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-28db401f></span></div><div class="title" data-v-28db401f>${ssrInterpolate(_ctx.$t("about.way.step2_title"))}</div><p data-v-28db401f>${ssrInterpolate(_ctx.$t("about.way.step2_text"))}</p></div><div class="way-item" data-v-28db401f><div class="number" data-v-28db401f> 03 <span data-v-28db401f><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-28db401f></span></div><div class="title" data-v-28db401f>${ssrInterpolate(_ctx.$t("about.way.step3_title"))}</div><p data-v-28db401f>${ssrInterpolate(_ctx.$t("about.way.step3_text"))}</p></div><div class="way-item" data-v-28db401f><div class="number" data-v-28db401f> 04 <span data-v-28db401f><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-28db401f></span></div><div class="title" data-v-28db401f>${ssrInterpolate(_ctx.$t("about.way.step4_title"))}</div><p data-v-28db401f>${ssrInterpolate(_ctx.$t("about.way.step4_text"))}</p></div><div class="way-item" data-v-28db401f><div class="number" data-v-28db401f> 05 <span data-v-28db401f><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-28db401f></span></div><div class="title" data-v-28db401f>${ssrInterpolate(_ctx.$t("about.way.step5_title"))}</div><p data-v-28db401f>${ssrInterpolate(_ctx.$t("about.way.step5_text"))}</p></div></div></section>`);
      {
        _push(`<!---->`);
      }
      _push(`<div class="contact" data-v-28db401f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 data-v-28db401f${_scopeId}><span data-v-28db401f${_scopeId}>${_ctx.$t("contactPlate.h1") ?? ""}</span><span class="indent" data-v-28db401f${_scopeId}>${ssrInterpolate(_ctx.$t("contactPlate.span1"))}</span><br data-v-28db401f${_scopeId}><span class="indent" data-v-28db401f${_scopeId}>${ssrInterpolate(_ctx.$t("contactPlate.span2"))}</span><span data-v-28db401f${_scopeId}><img${ssrRenderAttr("src", _imports_12)} alt="" data-v-28db401f${_scopeId}></span></h2>`);
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
      _push(`<p data-v-28db401f>${ssrInterpolate(_ctx.$t("contactPlate.p"))}</p><img${ssrRenderAttr("src", _imports_13)} alt="" data-v-28db401f></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-28db401f"]]);
export {
  about as default
};
//# sourceMappingURL=about-CbkLUZgw.js.map
