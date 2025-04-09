import { ref, watchEffect, computed, resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import { B as BlogCardComponent, _ as _imports_0, a as _imports_1 } from "./BlogCardComponent-jVhS4UFp.js";
import { useRoute } from "vue-router";
import { u as useAsyncData } from "./asyncData-DgfO3ufQ.js";
import { _ as _export_sfc } from "../server.mjs";
import { u as useI18n } from "./vue-i18n-Dx5HdeXT.js";
import "#internal/nuxt/paths";
import "./nuxt-link-BSCCcEt5.js";
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
const itemsPerPage = 6;
const _sfc_main = {
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const searchResults = ref([]);
    const currentPage = ref(1);
    const resultsSection = ref(null);
    const { locale } = useI18n();
    watchEffect(async () => {
      const query = route.query.q || "";
      if (!query) {
        searchResults.value = [];
        return;
      }
      const { data } = await useAsyncData(
        `search-${query}`,
        () => {
          $fetch(`/api/search?q=${query}&lang=${locale.value}`);
        }
      );
      console.log("Raw data from API:", data.value);
      searchResults.value = Array.isArray(data.value) ? data.value : [];
      console.log("Search results after processing:", searchResults.value);
    });
    const blogResults = computed(() => searchResults.value.filter((item) => item.type === "blog"));
    const projectResults = computed(() => searchResults.value.filter((item) => item.type === "project"));
    const totalPages = computed(() => {
      const totalResults = blogResults.value.length + projectResults.value.length;
      return totalResults > 0 ? Math.ceil(totalResults / itemsPerPage) : 1;
    });
    const paginatedBlogResults = computed(() => {
      if (!Array.isArray(blogResults.value)) return [];
      const start = (currentPage.value - 1) * itemsPerPage;
      return blogResults.value.slice(start, start + itemsPerPage);
    });
    computed(() => {
      if (!Array.isArray(projectResults.value)) return [];
      const start = (currentPage.value - 1) * itemsPerPage;
      return projectResults.value.slice(start, start + itemsPerPage);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main data-v-92f07586><p data-v-92f07586>${ssrInterpolate(_ctx.$t("menu.home"))} / ${ssrInterpolate(_ctx.$t("menu.searchResults"))}</p><h1 data-v-92f07586><span${ssrRenderAttrs(mergeProps({
        class: "wow reveal-bb reveal-visible",
        ref_key: "resultsSection",
        ref: resultsSection
      }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-92f07586>${ssrInterpolate(_ctx.$t("menu.searchResults"))}</span></h1></main>`);
      if (searchResults.value.length > 0) {
        _push(`<section data-v-92f07586>`);
        if (blogResults.value.length > 0) {
          _push(`<h2 data-v-92f07586>${ssrInterpolate(_ctx.$t("search.blogResults"))}</h2>`);
        } else {
          _push(`<!---->`);
        }
        if (blogResults.value.length > 0) {
          _push(`<div class="articles" data-v-92f07586><!--[-->`);
          ssrRenderList(paginatedBlogResults.value, (article, idx) => {
            _push(ssrRenderComponent(BlogCardComponent, mergeProps({
              key: `blog-${idx}`,
              ref_for: true
            }, article), null, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (projectResults.value.length > 0) {
          _push(`<h2 data-v-92f07586>${ssrInterpolate(_ctx.$t("search.projectResults"))}</h2>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section>`);
      } else {
        _push(`<div class="no-results" data-v-92f07586><p data-v-92f07586>${ssrInterpolate(_ctx.$t("search.noResults"))}</p></div>`);
      }
      if (totalPages.value > 1) {
        _push(`<div class="pagination" data-v-92f07586><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} data-v-92f07586><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-92f07586></button><!--[-->`);
        ssrRenderList(totalPages.value, (page) => {
          _push(`<div class="${ssrRenderClass(["page-number", { current: page === currentPage.value }])}" data-v-92f07586>${ssrInterpolate(page)}</div>`);
        });
        _push(`<!--]--><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} data-v-92f07586><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-92f07586></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-92f07586"]]);
export {
  search as default
};
//# sourceMappingURL=search-B08x4Rg9.js.map
