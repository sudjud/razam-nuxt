import { withAsyncContext, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, resolveDirective } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { B as Breadcrumbs } from "./Breadcrumbs-Cpbe7d2J.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BSCCcEt5.js";
import { useRouter } from "vue-router";
import { u as useAsyncData } from "./asyncData-Dm5xmsft.js";
import { _ as _export_sfc, f as useLocalePath } from "../server.mjs";
import { O as OfferComponent } from "./OfferComponent-WDO5okmE.js";
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
import "./virtual_public-BFlYF5SH.js";
const _imports_0$1 = publicAssetsURL("/images/portfolio/1.webp");
const _imports_1 = publicAssetsURL("/images/portfolio/process-arrow.svg");
const _imports_0 = publicAssetsURL("/images/about/diag-arrow.svg");
const _sfc_main$1 = {
  __name: "TabsPortfolioComponent",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const localePath = useLocalePath();
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "projects",
      () => $fetch("/api/projects")
    )), __temp = await __temp, __restore(), __temp);
    const categories = computed(() => {
      var _a;
      return [...new Set(((_a = projects.value) == null ? void 0 : _a.map((project) => project.category)) || [])];
    });
    const activeTab = ref(-1);
    const prevTab = ref(0);
    const expandedItem = ref(null);
    const filteredProjects = computed(() => {
      var _a;
      if (activeTab.value === -1) {
        return projects.value || [];
      }
      return ((_a = projects.value) == null ? void 0 : _a.filter(
        (project) => project.category === categories.value[activeTab.value]
      )) || [];
    });
    computed(
      () => activeTab.value > prevTab.value ? "slide-right" : "slide-left"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabs-container" }, _attrs))} data-v-2d9d5d2f><div class="tabs" data-v-2d9d5d2f><div class="${ssrRenderClass(["tab", { active: activeTab.value === -1 }])}" data-v-2d9d5d2f>${ssrInterpolate(_ctx.$t("portfolio.tabs.categories.all"))}</div><!--[-->`);
      ssrRenderList(categories.value, (category, index2) => {
        _push(`<div class="${ssrRenderClass(["tab", { active: activeTab.value === index2 }])}" data-v-2d9d5d2f>${ssrInterpolate(_ctx.$t(category))}</div>`);
      });
      _push(`<!--]--></div><div class="tabs-content" data-v-2d9d5d2f><ul data-v-2d9d5d2f><!--[-->`);
      ssrRenderList(filteredProjects.value, (item, index2) => {
        _push(`<li class="${ssrRenderClass({ expanded: expandedItem.value === index2 })}" data-v-2d9d5d2f><div class="index" data-v-2d9d5d2f>0${ssrInterpolate(index2 + 1)}</div><div class="${ssrRenderClass([{ open: expandedItem.value === index2 }, "img"])}" data-v-2d9d5d2f><img${ssrRenderAttr("src", item.preview)} alt="" data-v-2d9d5d2f></div><p class="name" data-v-2d9d5d2f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(`/portfolio/${item.slug}`)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</p><p class="year" data-v-2d9d5d2f>${ssrInterpolate(item.year)}</p><p class="type" data-v-2d9d5d2f>${ssrInterpolate(_ctx.$t(item.type))}</p><div class="${ssrRenderClass([{ open: expandedItem.value === index2 }, "arrow"])}" data-v-2d9d5d2f><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-2d9d5d2f></div></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/TabsPortfolioComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TabsPortfolioComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2d9d5d2f"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main class="main" data-v-2ce5c90b><h1 data-v-2ce5c90b><div class="first" data-v-2ce5c90b>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-2ce5c90b>${_ctx.$t("portfolio.main.titleFirst") ?? ""}</span><span class="slash" data-v-2ce5c90b>/</span></div><div class="second" data-v-2ce5c90b><br data-v-2ce5c90b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-2ce5c90b>${_ctx.$t("portfolio.main.titleSecond") ?? ""}</span></div></h1><div class="desc" data-v-2ce5c90b><p data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("portfolio.main.desc"))}</p><h4 data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("portfolio.main.category1"))}</h4><h4 data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("portfolio.main.category2"))}</h4><h4 data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("portfolio.main.category3"))}</h4></div></main><section class="image" data-v-2ce5c90b><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-2ce5c90b></section><section class="portfolio" data-v-2ce5c90b><h2 data-v-2ce5c90b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("menu.portfolio"))}</span></h2>`);
      _push(ssrRenderComponent(TabsPortfolioComponent, null, null, _parent));
      _push(`</section><section class="process" data-v-2ce5c90b><h2 data-v-2ce5c90b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.h2"))}</span></h2><div class="process-columns" data-v-2ce5c90b><div class="process-column" data-v-2ce5c90b><div class="numbers-item wow animate__animated animate__fadeInLeft" data-v-2ce5c90b><div class="number" data-v-2ce5c90b> 01 <span class="number-arrow" data-v-2ce5c90b><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-2ce5c90b></span></div><h4 data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.title1"))}</h4><p data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.text1"))}</p></div></div><div class="process-column" data-v-2ce5c90b><div class="numbers-item wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s" data-v-2ce5c90b><div class="number" data-v-2ce5c90b> 02 <span class="number-arrow" data-v-2ce5c90b><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-2ce5c90b></span></div><h4 data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.title2"))}</h4><p data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.text2"))}</p></div><div class="numbers-item wow animate__animated animate__fadeInLeft" data-wow-delay="0.4s" data-v-2ce5c90b><div class="number" data-v-2ce5c90b> 04 <span class="number-arrow" data-v-2ce5c90b><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-2ce5c90b></span></div><h4 data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.title4"))}</h4><p data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.text4"))}</p></div></div><div class="process-column" data-v-2ce5c90b><div class="numbers-item wow animate__animated animate__fadeInLeft" data-wow-delay="0.3s" data-v-2ce5c90b><div class="number" data-v-2ce5c90b> 03 <span class="number-arrow" data-v-2ce5c90b><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-2ce5c90b></span></div><h4 data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.title3"))}</h4><p data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.text3"))}</p></div><div class="numbers-item wow animate__animated animate__fadeInLeft" data-wow-delay="0.5s" data-v-2ce5c90b><div class="number" data-v-2ce5c90b> 05 <span class="number-arrow" data-v-2ce5c90b><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-2ce5c90b></span></div><h4 data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.title5"))}</h4><p data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.text5"))}</p></div></div></div><div class="process-columns-mobile" data-v-2ce5c90b><div class="numbers-item wow animate__animated animate__fadeInLeft" data-v-2ce5c90b><div class="number" data-v-2ce5c90b> 01 <span class="number-arrow" data-v-2ce5c90b><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-2ce5c90b></span></div><h4 data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.title1"))}</h4><p data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.text1"))}</p></div><div class="numbers-item wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s" data-v-2ce5c90b><div class="number" data-v-2ce5c90b> 02 <span class="number-arrow" data-v-2ce5c90b><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-2ce5c90b></span></div><h4 data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.title2"))}</h4><p data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.text2"))}</p></div><div class="numbers-item wow animate__animated animate__fadeInLeft" data-v-2ce5c90b><div class="number" data-v-2ce5c90b> 03 <span class="number-arrow" data-v-2ce5c90b><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-2ce5c90b></span></div><h4 data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.title3"))}</h4><p data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.text3"))}</p></div><div class="numbers-item wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s" data-v-2ce5c90b><div class="number" data-v-2ce5c90b> 04 <span class="number-arrow" data-v-2ce5c90b><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-2ce5c90b></span></div><h4 data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.title4"))}</h4><p data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.text4"))}</p></div><div class="numbers-item wow animate__animated animate__fadeInLeft" data-v-2ce5c90b><div class="number" data-v-2ce5c90b> 05 <span class="number-arrow" data-v-2ce5c90b><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-2ce5c90b></span></div><h4 data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.title5"))}</h4><p data-v-2ce5c90b>${ssrInterpolate(_ctx.$t("home.process.text5"))}</p></div></div></section>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ce5c90b"]]);
export {
  index as default
};
//# sourceMappingURL=index-DosyENYM.js.map
