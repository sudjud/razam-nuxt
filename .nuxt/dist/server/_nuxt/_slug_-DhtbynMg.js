import { _ as __nuxt_component_0 } from "./nuxt-link-BSCCcEt5.js";
import { mergeProps, useSSRContext, ref, watchEffect, computed, resolveDirective, unref, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderVNode } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _imports_1, a as _imports_2, b as _imports_3 } from "./virtual_public-CHJHGFSn.js";
import { _ as _imports_5 } from "./virtual_public-B6iiuS77.js";
import { _ as _export_sfc, f as useLocalePath } from "../server.mjs";
import { B as Breadcrumbs } from "./Breadcrumbs-Cpbe7d2J.js";
import { S as SearchComponent } from "./SearchComponent-Bv1Uerwr.js";
import { u as useAsyncData } from "./asyncData-Dm5xmsft.js";
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
import "./vue-i18n-nQ1iH6wE.js";
import "lodash/debounce.js";
const _imports_0 = publicAssetsURL("/images/blog/lights/1.webp");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "lights" }, _attrs))} data-v-863fce5c><div class="main-image" data-v-863fce5c><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-863fce5c></div><div class="text-content" data-v-863fce5c><h5 data-v-863fce5c> Как правильно выбранное освещение способно полностью преобразить интерьер и создать идеальную атмосферу для каждого пространства </h5><p data-v-863fce5c> Освещение — это не просто способ сделать помещение светлым. Это ключевой элемент, который способен полностью изменить восприятие пространства. От правильного выбора света зависит уют, функциональность и даже настроение в интерьере. </p><h4 data-v-863fce5c>Роль освещения в интерьере</h4><p data-v-863fce5c> Освещение помогает зонировать пространство, выделять акценты и создавать комфортную атмосферу. Например, тёплый свет делает комнату более уютной, а холодный добавляет свежести и концентрации. </p><p class="black-p" data-v-863fce5c><b data-v-863fce5c>Общее — </b>основное освещение, которое равномерно заполняет комнату светом. </p><p class="black-p" data-v-863fce5c><b data-v-863fce5c>Акцентное — </b>подчеркивает отдельные элементы: картины, мебель или архитектурные детали. </p><p class="black-p" data-v-863fce5c><b data-v-863fce5c>Функциональное — </b>создаёт направленный свет для работы или чтения, например, настольные лампы. </p><h4 data-v-863fce5c>Советы по выбору освещения</h4><ul data-v-863fce5c><li data-v-863fce5c> Выбирайте регулируемые светильники для создания разных настроений. </li><li data-v-863fce5c>Используйте светодиоды — они энергоэффективны и долговечны.</li><li data-v-863fce5c>Сочетайте источники света, чтобы добиться баланса.</li></ul><p class="black-p" data-v-863fce5c> Освещение — это инструмент, который делает интерьер живым и динамичным. Подберите свет, который подчеркнёт стиль вашего пространства и создаст комфортную атмосферу для жизни. </p></div><div class="images-block" data-v-863fce5c><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-863fce5c><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-863fce5c><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-863fce5c></div><div class="quote" data-v-863fce5c><div class="image-wrapper" data-v-863fce5c><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-863fce5c></div><h5 data-v-863fce5c> &quot;Правильно подобранное освещение — это невидимая магия, которая наполняет пространство жизнью и создаёт уникальную атмосферу.&quot; </h5></div></main>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/LightsArticleComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LightsArticleComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-863fce5c"]]);
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
        _push(`<main class="article" data-v-6cba1439><div class="left" data-v-6cba1439>`);
        _push(ssrRenderComponent(Breadcrumbs, {
          reservedLastCrumb: _ctx.$t(article.value.name)
        }, null, _parent));
        _push(`<h4 data-v-6cba1439>${ssrInterpolate(_ctx.$t(((_a = article.value) == null ? void 0 : _a.category) || "blog.articles.unknownCategory"))}</h4>`);
        _push(ssrRenderComponent(SearchComponent, null, null, _parent));
        _push(`</div><div class="right" data-v-6cba1439><h1 data-v-6cba1439><span${ssrRenderAttrs(mergeProps({ class: "reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6cba1439>${ssrInterpolate(_ctx.$t(((_b = article.value) == null ? void 0 : _b.name) || "blog.articles.unknown"))}</span><div class="divider" data-v-6cba1439></div><div class="details" data-v-6cba1439>`);
        if ((_c = article.value) == null ? void 0 : _c.by) {
          _push(`<p data-v-6cba1439>By ${ssrInterpolate(article.value.by)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if ((_d = article.value) == null ? void 0 : _d.date) {
          _push(`<p data-v-6cba1439>${ssrInterpolate(article.value.date)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></h1></div><aside data-v-6cba1439><div class="categories" data-v-6cba1439><h4 data-v-6cba1439>${ssrInterpolate(_ctx.$t("search.category"))}</h4><ul data-v-6cba1439><li data-v-6cba1439>`);
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
        _push(`</li><li data-v-6cba1439>`);
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
        _push(`</li><li data-v-6cba1439>`);
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
        _push(`</li><li data-v-6cba1439>`);
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
        _push(`</li><li data-v-6cba1439>`);
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
        _push(`</li></ul></div></aside><section class="content" data-v-6cba1439>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(currentArticleComponent.value), null, null), _parent);
        _push(`</section></main>`);
      } else {
        _push(`<!---->`);
      }
      if (loading.value) {
        _push(`<div class="loading" data-v-6cba1439><p data-v-6cba1439>${ssrInterpolate(_ctx.$t("search.loading"))}...</p></div>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6cba1439"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-DhtbynMg.js.map
