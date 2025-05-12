import BlogCardComponent from "../components/Blog/BlogCardComponent.vue.mjs";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useRoute } from "vue-router";
import projects from "../server/data/projects.mjs";
import articles from "../server/data/blog.mjs";
import ProjectCardComponent from "../components/Projects/ProjectCardComponent.vue.mjs";
import Breadcrumbs from "../components/Tools/Breadcrumbs.vue.mjs";
import SearchComponent from "../components/Tools/SearchComponent.vue.mjs";
import { useSeo } from "../composables/useSeo.mjs";
/* empty css             */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
import { useI18n } from "../node_modules/vue-i18n/dist/vue-i18n.mjs";
const _sfc_main = {
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const route = useRoute();
    const { t } = useI18n();
    useSeo("search");
    const categoryName = ((_a = route.query.cat) == null ? void 0 : _a.toLowerCase()) ?? "";
    ref(false);
    const filteredProjects = projects.filter(
      (p) => t(p.category).toLowerCase() === categoryName
    );
    const filteredArticles = articles.filter(
      (a) => t(a.category).toLowerCase() === categoryName
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogCardComponent = BlogCardComponent;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-page" }, _attrs))} data-v-d6a7abad>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`<div data-v-d6a7abad><h3 data-v-d6a7abad>${ssrInterpolate(_ctx.$t("search.category"))}: ${ssrInterpolate(unref(categoryName))}</h3>`);
      _push(ssrRenderComponent(SearchComponent, null, null, _parent));
      _push(`</div><h4 data-v-d6a7abad>${ssrInterpolate(_ctx.$t("search.projects"))}</h4>`);
      if (!unref(filteredProjects).length) {
        _push(`<p class="nothing" data-v-d6a7abad>${ssrInterpolate(_ctx.$t("search.nothing"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(filteredProjects).length) {
        _push(`<div class="projects" data-v-d6a7abad><!--[-->`);
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
      _push(`<div class="devider" data-v-d6a7abad></div><h4 data-v-d6a7abad>${ssrInterpolate(_ctx.$t("search.articles"))}</h4>`);
      if (!unref(filteredArticles).length) {
        _push(`<p class="nothing" data-v-d6a7abad>${ssrInterpolate(_ctx.$t("search.nothing"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(filteredArticles).length) {
        _push(`<div class="articles" data-v-d6a7abad><!--[-->`);
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
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d6a7abad"]]);
export {
  search as default
};
//# sourceMappingURL=search.vue.mjs.map
