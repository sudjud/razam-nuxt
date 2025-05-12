import { withAsyncContext, ref, computed, resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public21.mjs";
import _imports_1 from "../../_virtual/virtual_public22.mjs";
import BlogCardComponent from "../../components/Blog/BlogCardComponent.vue.mjs";
import { useSeo } from "../../composables/useSeo.mjs";
import { useAsyncData } from "../../node_modules/nuxt/dist/app/composables/asyncData.mjs";
/* empty css            */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const itemsPerPage = 6;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeo("news");
    const { data: blog } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("blog", async () => {
      const response = await $fetch("/api/blog");
      return Array.isArray(response) ? response : [];
    })), __temp = await __temp, __restore(), __temp);
    const currentPage = ref(1);
    const articlesSection = ref(null);
    const totalPages = computed(() => {
      return blog.value.length > 0 ? Math.ceil(blog.value.length / itemsPerPage) : 1;
    });
    const paginatedBlog = computed(() => {
      if (!Array.isArray(blog.value)) return [];
      const start = (currentPage.value - 1) * itemsPerPage;
      return blog.value.slice(start, start + itemsPerPage);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main data-v-1abe080c><p data-v-1abe080c>${ssrInterpolate(_ctx.$t("menu.home"))} / ${ssrInterpolate(_ctx.$t("menu.blog"))}</p><h1 data-v-1abe080c><span${ssrRenderAttrs(mergeProps({
        class: "wow reveal-bb reveal-visible",
        ref_key: "articlesSection",
        ref: articlesSection
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-1abe080c>${ssrInterpolate(_ctx.$t("menu.blog"))}</span></h1></main><section class="articles" data-v-1abe080c><!--[-->`);
      ssrRenderList(paginatedBlog.value, (article, idx) => {
        _push(ssrRenderComponent(BlogCardComponent, mergeProps({
          key: idx,
          ref_for: true
        }, article), null, _parent));
      });
      _push(`<!--]--></section><div class="pagination" data-v-1abe080c><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} data-v-1abe080c><img data-not-lazy${ssrRenderAttr("src", _imports_0)} alt="" data-v-1abe080c></button><!--[-->`);
      ssrRenderList(totalPages.value, (page) => {
        _push(`<div class="${ssrRenderClass(["page-number", { current: page === currentPage.value }])}" data-v-1abe080c>${ssrInterpolate(page)}</div>`);
      });
      _push(`<!--]--><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} data-v-1abe080c><img data-not-lazy${ssrRenderAttr("src", _imports_1)} alt="" data-v-1abe080c></button></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1abe080c"]]);
export {
  index as default
};
//# sourceMappingURL=index.vue.mjs.map
