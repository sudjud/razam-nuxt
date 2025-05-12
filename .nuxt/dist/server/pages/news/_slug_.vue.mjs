import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, watchEffect, computed, resolveDirective, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderVNode } from "vue/server-renderer";
import { useRoute } from "vue-router";
import LightsArticleComponent from "../../components/Blog/LightsArticleComponent.vue.mjs";
import Breadcrumbs from "../../components/Tools/Breadcrumbs.vue.mjs";
import SearchComponent from "../../components/Tools/SearchComponent.vue.mjs";
import { useAsyncData } from "../../node_modules/nuxt/dist/app/composables/asyncData.mjs";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
/* empty css             */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const route = useRoute();
    const article = ref(null);
    const loading = ref(true);
    watchEffect(async () => {
      loading.value = true;
      const { data: articleData } = await useAsyncData(
        `article-${route.params.slug}`,
        () => $fetch(`/api/blog?slug=${route.params.slug}`)
      );
      article.value = articleData.value || null;
      loading.value = false;
    });
    const articleComponents = {
      lights: LightsArticleComponent
    };
    const currentArticleComponent = computed(() => {
      var _a;
      return ((_a = article.value) == null ? void 0 : _a.slug) ? articleComponents[article.value.slug] || null : null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[-->`);
      if (!loading.value && article.value) {
        _push(`<main class="article" data-v-9fb0ff9d><div class="left" data-v-9fb0ff9d>`);
        _push(ssrRenderComponent(Breadcrumbs, {
          reservedLastCrumb: _ctx.$t(article.value.name)
        }, null, _parent));
        _push(`<h4 data-v-9fb0ff9d>${ssrInterpolate(_ctx.$t(((_a = article.value) == null ? void 0 : _a.category) || "blog.articles.unknownCategory"))}</h4>`);
        _push(ssrRenderComponent(SearchComponent, null, null, _parent));
        _push(`</div><div class="right" data-v-9fb0ff9d><h1 data-v-9fb0ff9d><span${ssrRenderAttrs(mergeProps({ class: "reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-9fb0ff9d>${ssrInterpolate(_ctx.$t(((_b = article.value) == null ? void 0 : _b.name) || "blog.articles.unknown"))}</span><div class="divider" data-v-9fb0ff9d></div><div class="details" data-v-9fb0ff9d>`);
        if ((_c = article.value) == null ? void 0 : _c.by) {
          _push(`<p data-v-9fb0ff9d>By ${ssrInterpolate(article.value.by)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if ((_d = article.value) == null ? void 0 : _d.date) {
          _push(`<p data-v-9fb0ff9d>${ssrInterpolate(article.value.date)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></h1></div><aside data-v-9fb0ff9d><div class="categories" data-v-9fb0ff9d><h4 data-v-9fb0ff9d>${ssrInterpolate(_ctx.$t("search.category"))}</h4><ul data-v-9fb0ff9d><li data-v-9fb0ff9d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(`/search?cat=${_ctx.$t("blog.articles.categories.architecture")}`)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("blog.articles.categories.architecture"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("blog.articles.categories.architecture")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-9fb0ff9d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(`/search?cat=${_ctx.$t("blog.articles.categories.interiorDesign")}`)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("blog.articles.categories.interiorDesign"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("blog.articles.categories.interiorDesign")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-9fb0ff9d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(`/search?cat=${_ctx.$t("blog.articles.categories.construction")}`)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("blog.articles.categories.construction"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("blog.articles.categories.construction")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-9fb0ff9d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(`/search?cat=${_ctx.$t("blog.articles.categories.renovation")}`)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("blog.articles.categories.renovation"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("blog.articles.categories.renovation")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-9fb0ff9d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(`/search?cat=${_ctx.$t("blog.articles.categories.landscapeDesign")}`)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("blog.articles.categories.landscapeDesign"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("blog.articles.categories.landscapeDesign")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div></aside><section class="content" data-v-9fb0ff9d>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(currentArticleComponent.value), null, null), _parent);
        _push(`</section></main>`);
      } else {
        _push(`<!---->`);
      }
      if (loading.value) {
        _push(`<div class="loading" data-v-9fb0ff9d><p data-v-9fb0ff9d>${ssrInterpolate(_ctx.$t("search.loading"))}...</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9fb0ff9d"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_.vue.mjs.map
