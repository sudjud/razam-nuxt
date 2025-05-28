import BlogCardComponent from "../components/Blog/BlogCardComponent.vue.mjs";
import { computed, ref, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import projects from "../server/data/projects.mjs";
import articles from "../server/data/blog.mjs";
import ProjectCardComponent from "../components/Projects/ProjectCardComponent.vue.mjs";
import Breadcrumbs from "../components/Tools/Breadcrumbs.vue.mjs";
import SearchComponent from "../components/Tools/SearchComponent.vue.mjs";
import { searchContent } from "../utils/search.mjs";
import { useSeo } from "../composables/useSeo.mjs";
/* empty css             */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
import { useI18n } from "../node_modules/vue-i18n/dist/vue-i18n.mjs";
const _sfc_main = {
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const { locale, t } = useI18n();
    useSeo("search");
    const categoryName = computed(() => {
      var _a;
      return ((_a = route.query.cat) == null ? void 0 : _a.toLowerCase()) ?? "";
    });
    const searchQuery = computed(() => {
      var _a;
      return ((_a = route.query.q) == null ? void 0 : _a.toLowerCase()) ?? "";
    });
    ref(false);
    const searchResults = computed(() => {
      if (searchQuery.value) {
        return searchContent(searchQuery.value, locale.value, t);
      }
      return [];
    });
    const findedProjects = computed(() => {
      return searchResults.value.filter((i) => i.type === "project");
    });
    const findedArticles = computed(() => {
      return searchResults.value.filter((i) => i.type === "article");
    });
    const filteredProjects = computed(() => {
      return projects.filter(
        (p) => t(p.category).toLowerCase() === categoryName.value
      );
    });
    const filteredArticles = computed(() => {
      return articles.filter(
        (a) => t(a.category).toLowerCase() === categoryName.value
      );
    });
    watch(() => route.query.q, () => {
    }, { immediate: true });
    watch(() => route.query.cat, () => {
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogCardComponent = BlogCardComponent;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-page" }, _attrs))} data-v-895a9f05>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`<div data-v-895a9f05>`);
      if (categoryName.value) {
        _push(`<h3 data-v-895a9f05>${ssrInterpolate(_ctx.$t("search.category"))}: ${ssrInterpolate(categoryName.value)}</h3>`);
      } else {
        _push(`<h3 data-v-895a9f05>${ssrInterpolate(_ctx.$t("menu.search"))}: &#39;${ssrInterpolate(searchQuery.value)}&#39;</h3>`);
      }
      _push(ssrRenderComponent(SearchComponent, null, null, _parent));
      _push(`</div><h4 data-v-895a9f05>${ssrInterpolate(_ctx.$t("search.projects"))}</h4>`);
      if (!filteredProjects.value.length && !findedProjects.value.length) {
        _push(`<p class="nothing" data-v-895a9f05>${ssrInterpolate(_ctx.$t("search.nothing"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (filteredProjects.value.length || findedProjects.value.length) {
        _push(`<div class="projects" data-v-895a9f05><!--[-->`);
        ssrRenderList(searchQuery.value ? findedProjects.value : filteredProjects.value, (project) => {
          _push(ssrRenderComponent(ProjectCardComponent, mergeProps({
            key: project.slug,
            ref_for: true
          }, project), null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="devider" data-v-895a9f05></div><h4 data-v-895a9f05>${ssrInterpolate(_ctx.$t("search.articles"))}</h4>`);
      if (!filteredArticles.value.length && !findedArticles.value.length) {
        _push(`<p class="nothing" data-v-895a9f05>${ssrInterpolate(_ctx.$t("search.nothing"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (filteredArticles.value.length || findedArticles.value.length) {
        _push(`<div class="articles" data-v-895a9f05><!--[-->`);
        ssrRenderList(searchQuery.value ? findedArticles.value : filteredArticles.value, (article) => {
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
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-895a9f05"]]);
export {
  search as default
};
//# sourceMappingURL=search.vue.mjs.map
