import { mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext, withAsyncContext, ref, computed, resolveDirective } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as __nuxt_component_0 } from "./nuxt-link-BSCCcEt5.js";
import { _ as _export_sfc, ab as useLocalePath } from "../server.mjs";
import { u as useAsyncData } from "./asyncData-DgfO3ufQ.js";
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
const _imports_0 = publicAssetsURL("/images/blog/left-arrow.svg");
const _imports_1 = publicAssetsURL("/images/blog/right-arrow.svg");
const _sfc_main$1 = {
  __name: "BlogCardComponent",
  __ssrInlineRender: true,
  props: {
    previewImg: String,
    category: String,
    name: String,
    by: String,
    date: String,
    slug: String
  },
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-a8c31b6a><div class="wrapper-image" data-v-a8c31b6a><img${ssrRenderAttr("src", __props.previewImg)} alt="" data-v-a8c31b6a></div><p class="category" data-v-a8c31b6a>${ssrInterpolate(_ctx.$t(__props.category))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)(`/news/${__props.slug}`)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 class="name" data-v-a8c31b6a${_scopeId}>${ssrInterpolate(_ctx.$t(__props.name))}</h4>`);
          } else {
            return [
              createVNode("h4", { class: "name" }, toDisplayString(_ctx.$t(__props.name)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="details" data-v-a8c31b6a><p class="by" data-v-a8c31b6a>by ${ssrInterpolate(__props.by)}</p><p class="date" data-v-a8c31b6a>${ssrInterpolate(__props.date)}</p></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/BlogCardComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BlogCardComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a8c31b6a"]]);
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
//# sourceMappingURL=index-DMY0HnLy.js.map
