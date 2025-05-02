import { withAsyncContext, ref, computed, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { B as BlogCardComponent } from './BlogCardComponent.vue.mjs';
import { u as useSeo } from './useSeo.mjs';
import { u as useAsyncData } from './asyncData.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import './nuxt-link.mjs';
import './vue-i18n.mjs';
import './v3.mjs';
import 'vue-router';
import '@vueuse/core';

const _imports_0 = publicAssetsURL("/images/blog/left-arrow.svg");

const _imports_1 = publicAssetsURL("/images/blog/right-arrow.svg");

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
      _push(`<!--[--><main data-v-1cf5543c><p data-v-1cf5543c>${ssrInterpolate(_ctx.$t("menu.home"))} / ${ssrInterpolate(_ctx.$t("menu.blog"))}</p><h1 data-v-1cf5543c><span${ssrRenderAttrs(mergeProps({
        class: "wow reveal-bb reveal-visible",
        ref_key: "articlesSection",
        ref: articlesSection
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-1cf5543c>${ssrInterpolate(_ctx.$t("menu.blog"))}</span></h1></main><section class="articles" data-v-1cf5543c><!--[-->`);
      ssrRenderList(paginatedBlog.value, (article, idx) => {
        _push(ssrRenderComponent(BlogCardComponent, mergeProps({
          key: idx,
          ref_for: true
        }, article), null, _parent));
      });
      _push(`<!--]--></section><div class="pagination" data-v-1cf5543c><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} data-v-1cf5543c><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-1cf5543c></button><!--[-->`);
      ssrRenderList(totalPages.value, (page) => {
        _push(`<div class="${ssrRenderClass(["page-number", { current: page === currentPage.value }])}" data-v-1cf5543c>${ssrInterpolate(page)}</div>`);
      });
      _push(`<!--]--><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} data-v-1cf5543c><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-1cf5543c></button></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1cf5543c"]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
