import { resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public27.mjs";
import _imports_1 from "../../_virtual/virtual_public28.mjs";
import Breadcrumbs from "../../components/Tools/Breadcrumbs.vue.mjs";
import { useSeo } from "../../composables/useSeo.mjs";
import TabsPortfolioComponent from "../../components/Blocks/TabsPortfolioComponent.vue.mjs";
import OfferComponent from "../../components/Blocks/OfferComponent.vue.mjs";
/* empty css            */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeo("portfolio");
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp2;
      _push(`<!--[--><main class="main" data-v-b639cae5><h1 data-v-b639cae5><div class="first" data-v-b639cae5>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b639cae5>${_ctx.$t("portfolio.main.titleFirst") ?? ""}</span><span class="slash" data-v-b639cae5>/</span></div><div class="second" data-v-b639cae5><br data-v-b639cae5><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b639cae5>${_ctx.$t("portfolio.main.titleSecond") ?? ""}</span></div></h1><div class="desc" data-v-b639cae5><p data-v-b639cae5>${ssrInterpolate(_ctx.$t("portfolio.main.desc"))}</p><h4 data-v-b639cae5>${ssrInterpolate(_ctx.$t("portfolio.main.category1"))}</h4><h4 data-v-b639cae5>${ssrInterpolate(_ctx.$t("portfolio.main.category2"))}</h4><h4 data-v-b639cae5>${ssrInterpolate(_ctx.$t("portfolio.main.category3"))}</h4></div></main><section class="image" data-v-b639cae5><img${ssrRenderAttrs(_temp2 = mergeProps({
        "data-src": _imports_0,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-b639cae5>${"textContent" in _temp2 ? ssrInterpolate(_temp2.textContent) : _temp2.innerHTML ?? ""}</section><section class="portfolio" data-v-b639cae5><h2 data-v-b639cae5><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b639cae5>${ssrInterpolate(_ctx.$t("menu.portfolio"))}</span></h2>`);
      _push(ssrRenderComponent(TabsPortfolioComponent, null, null, _parent));
      _push(`</section><section class="process" data-v-b639cae5><h2 data-v-b639cae5><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.h2"))}</span></h2><div class="process-columns" data-v-b639cae5><div class="process-column" data-v-b639cae5><div class="numbers-item wow animate__animated animate__fadeInLeft" data-v-b639cae5><div class="number" data-v-b639cae5> 01 <span class="number-arrow" data-v-b639cae5><img${ssrRenderAttr("src", _imports_1)} data-not-lazy alt="" data-v-b639cae5></span></div><h4 data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.title1"))}</h4><p data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.text1"))}</p></div></div><div class="process-column" data-v-b639cae5><div class="numbers-item wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s" data-v-b639cae5><div class="number" data-v-b639cae5> 02 <span class="number-arrow" data-v-b639cae5><img${ssrRenderAttr("src", _imports_1)} data-not-lazy alt="" data-v-b639cae5></span></div><h4 data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.title2"))}</h4><p data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.text2"))}</p></div><div class="numbers-item wow animate__animated animate__fadeInLeft" data-wow-delay="0.4s" data-v-b639cae5><div class="number" data-v-b639cae5> 04 <span class="number-arrow" data-v-b639cae5><img${ssrRenderAttr("src", _imports_1)} data-not-lazy alt="" data-v-b639cae5></span></div><h4 data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.title4"))}</h4><p data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.text4"))}</p></div></div><div class="process-column" data-v-b639cae5><div class="numbers-item wow animate__animated animate__fadeInLeft" data-wow-delay="0.3s" data-v-b639cae5><div class="number" data-v-b639cae5> 03 <span class="number-arrow" data-v-b639cae5><img${ssrRenderAttr("src", _imports_1)} data-not-lazy alt="" data-v-b639cae5></span></div><h4 data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.title3"))}</h4><p data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.text3"))}</p></div><div class="numbers-item wow animate__animated animate__fadeInLeft" data-wow-delay="0.5s" data-v-b639cae5><div class="number" data-v-b639cae5> 05 <span class="number-arrow" data-v-b639cae5><img${ssrRenderAttr("src", _imports_1)} data-not-lazy alt="" data-v-b639cae5></span></div><h4 data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.title5"))}</h4><p data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.text5"))}</p></div></div></div><div class="process-columns-mobile" data-v-b639cae5><div class="numbers-item wow animate__animated animate__fadeInLeft" data-v-b639cae5><div class="number" data-v-b639cae5> 01 <span class="number-arrow" data-v-b639cae5><img${ssrRenderAttr("src", _imports_1)} data-not-lazy alt="" data-v-b639cae5></span></div><h4 data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.title1"))}</h4><p data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.text1"))}</p></div><div class="numbers-item wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s" data-v-b639cae5><div class="number" data-v-b639cae5> 02 <span class="number-arrow" data-v-b639cae5><img${ssrRenderAttr("src", _imports_1)} data-not-lazy alt="" data-v-b639cae5></span></div><h4 data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.title2"))}</h4><p data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.text2"))}</p></div><div class="numbers-item wow animate__animated animate__fadeInLeft" data-v-b639cae5><div class="number" data-v-b639cae5> 03 <span class="number-arrow" data-v-b639cae5><img${ssrRenderAttr("src", _imports_1)} data-not-lazy alt="" data-v-b639cae5></span></div><h4 data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.title3"))}</h4><p data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.text3"))}</p></div><div class="numbers-item wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s" data-v-b639cae5><div class="number" data-v-b639cae5> 04 <span class="number-arrow" data-v-b639cae5><img${ssrRenderAttr("src", _imports_1)} data-not-lazy alt="" data-v-b639cae5></span></div><h4 data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.title4"))}</h4><p data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.text4"))}</p></div><div class="numbers-item wow animate__animated animate__fadeInLeft" data-v-b639cae5><div class="number" data-v-b639cae5> 05 <span class="number-arrow" data-v-b639cae5><img${ssrRenderAttr("src", _imports_1)} data-not-lazy alt="" data-v-b639cae5></span></div><h4 data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.title5"))}</h4><p data-v-b639cae5>${ssrInterpolate(_ctx.$t("home.process.text5"))}</p></div></div></section>`);
      _push(ssrRenderComponent(OfferComponent, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b639cae5"]]);
export {
  index as default
};
//# sourceMappingURL=index.vue.mjs.map
