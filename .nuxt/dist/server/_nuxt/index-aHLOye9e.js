import { withAsyncContext, ref, computed, resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import { B as BlogCardComponent, _ as _imports_0, a as _imports_1 } from "./BlogCardComponent-jVhS4UFp.js";
import { u as useAsyncData } from "./asyncData-DgfO3ufQ.js";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nuxt/paths";
import "./nuxt-link-BSCCcEt5.js";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "destr";
import "klona";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@vueuse/core";
const itemsPerPage = 6;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
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
      _push(`<!--[--><main data-v-e63e23d0><p data-v-e63e23d0>${ssrInterpolate(_ctx.$t("menu.home"))} / ${ssrInterpolate(_ctx.$t("menu.blog"))}</p><h1 data-v-e63e23d0><span${ssrRenderAttrs(mergeProps({
        class: "wow reveal-bb reveal-visible",
        ref_key: "articlesSection",
        ref: articlesSection
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-e63e23d0>${ssrInterpolate(_ctx.$t("menu.blog"))}</span></h1></main><section class="articles" data-v-e63e23d0><!--[-->`);
      ssrRenderList(paginatedBlog.value, (article, idx) => {
        _push(ssrRenderComponent(BlogCardComponent, mergeProps({
          key: idx,
          ref_for: true
        }, article), null, _parent));
      });
      _push(`<!--]--></section><div class="pagination" data-v-e63e23d0><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} data-v-e63e23d0><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-e63e23d0></button><!--[-->`);
      ssrRenderList(totalPages.value, (page) => {
        _push(`<div class="${ssrRenderClass(["page-number", { current: page === currentPage.value }])}" data-v-e63e23d0>${ssrInterpolate(page)}</div>`);
      });
      _push(`<!--]--><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} data-v-e63e23d0><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-e63e23d0></button></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e63e23d0"]]);
export {
  index as default
};
//# sourceMappingURL=index-aHLOye9e.js.map
