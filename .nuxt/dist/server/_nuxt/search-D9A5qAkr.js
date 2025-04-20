import { _ as __nuxt_component_0$1 } from "./BlogCardComponent-CzVifdxq.js";
import { mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext, ref } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { p as projects, a as articles, S as SearchComponent } from "./SearchComponent-Bv1Uerwr.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BSCCcEt5.js";
import { _ as _export_sfc, f as useLocalePath } from "../server.mjs";
import { B as Breadcrumbs } from "./Breadcrumbs-Cpbe7d2J.js";
import { u as useI18n } from "./vue-i18n-nQ1iH6wE.js";
import "lodash/debounce.js";
import "ofetch";
import "#internal/nuxt/paths";
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
const _sfc_main$1 = {
  __name: "ProjectCardComponent",
  __ssrInlineRender: true,
  props: {
    preview: String,
    category: String,
    name: String,
    dislocation: String,
    year: String,
    slug: String
  },
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: unref(localePath)(`/portfolio/${__props.slug}`)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="card" data-v-5a096bdf${_scopeId}><div class="wrapper-image" data-v-5a096bdf${_scopeId}><img${ssrRenderAttr("src", __props.preview)} alt="" data-v-5a096bdf${_scopeId}></div><p class="category" data-v-5a096bdf${_scopeId}>${ssrInterpolate(_ctx.$t(__props.category))}</p><h4 class="name" data-v-5a096bdf${_scopeId}>${ssrInterpolate(_ctx.$t(__props.name))}</h4><div class="details" data-v-5a096bdf${_scopeId}><p class="by" data-v-5a096bdf${_scopeId}>${ssrInterpolate(_ctx.$t(__props.dislocation))}</p><p class="date" data-v-5a096bdf${_scopeId}>${ssrInterpolate(__props.year)}</p></div></section>`);
          } else {
            return [
              createVNode("section", { class: "card" }, [
                createVNode("div", { class: "wrapper-image" }, [
                  createVNode("img", {
                    src: __props.preview,
                    alt: ""
                  }, null, 8, ["src"])
                ]),
                createVNode("p", { class: "category" }, toDisplayString(_ctx.$t(__props.category)), 1),
                createVNode("h4", { class: "name" }, toDisplayString(_ctx.$t(__props.name)), 1),
                createVNode("div", { class: "details" }, [
                  createVNode("p", { class: "by" }, toDisplayString(_ctx.$t(__props.dislocation)), 1),
                  createVNode("p", { class: "date" }, toDisplayString(__props.year), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects/ProjectCardComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectCardComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5a096bdf"]]);
const _sfc_main = {
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const route = useRoute();
    const { t } = useI18n();
    const categoryName = ((_a = route.query.cat) == null ? void 0 : _a.toLowerCase()) ?? "";
    ref(false);
    const filteredProjects = projects.filter(
      (p) => t(p.category).toLowerCase() === categoryName
    );
    const filteredArticles = articles.filter(
      (a) => t(a.category).toLowerCase() === categoryName
    );
    console.log(filteredArticles);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogCardComponent = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-page" }, _attrs))} data-v-c54c4050>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`<div data-v-c54c4050><h3 data-v-c54c4050>${ssrInterpolate(_ctx.$t("search.category"))}: ${ssrInterpolate(unref(categoryName))}</h3>`);
      _push(ssrRenderComponent(SearchComponent, null, null, _parent));
      _push(`</div><h4 data-v-c54c4050>${ssrInterpolate(_ctx.$t("search.projects"))}</h4>`);
      if (!unref(filteredProjects).length) {
        _push(`<p class="nothing" data-v-c54c4050>${ssrInterpolate(_ctx.$t("search.nothing"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(filteredProjects).length) {
        _push(`<div class="projects" data-v-c54c4050><!--[-->`);
        ssrRenderList(unref(filteredProjects), (project) => {
          _push(ssrRenderComponent(ProjectCardComponent, mergeProps({
            key: project.slug,
            ref_for: true
          }, project), null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="devider" data-v-c54c4050></div><h4 data-v-c54c4050>${ssrInterpolate(_ctx.$t("search.articles"))}</h4>`);
      if (!unref(filteredArticles).length) {
        _push(`<p class="nothing" data-v-c54c4050>${ssrInterpolate(_ctx.$t("search.nothing"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(filteredArticles).length) {
        _push(`<div class="articles" data-v-c54c4050><!--[-->`);
        ssrRenderList(unref(filteredArticles), (article) => {
          _push(ssrRenderComponent(_component_BlogCardComponent, mergeProps({
            key: article.slug,
            ref_for: true
          }, article), null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c54c4050"]]);
export {
  search as default
};
//# sourceMappingURL=search-D9A5qAkr.js.map
