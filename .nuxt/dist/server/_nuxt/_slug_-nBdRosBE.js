import { mergeProps, useSSRContext, ref, watchEffect, computed, resolveDirective, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderVNode } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { useRoute } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
import { B as Breadcrumbs } from "./Breadcrumbs-Ce7WFUYu.js";
import { u as useAsyncData } from "./asyncData-DgfO3ufQ.js";
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
import "./nuxt-link-BSCCcEt5.js";
import "./vue-i18n-Dx5HdeXT.js";
const _imports_0$1 = publicAssetsURL("/images/blog/loupe.svg");
const _imports_0 = publicAssetsURL("/images/blog/lights/1.jpg");
const _imports_1 = publicAssetsURL("/images/blog/lights/2.jpg");
const _imports_2 = publicAssetsURL("/images/blog/lights/3.jpg");
const _imports_3 = publicAssetsURL("/images/blog/lights/4.jpg");
const _imports_4 = publicAssetsURL("/images/blog/lights/quote.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "lights" }, _attrs))} data-v-547e5175><div class="main-image" data-v-547e5175><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-547e5175></div><div class="text-content" data-v-547e5175><h5 data-v-547e5175> Как правильно выбранное освещение способно полностью преобразить интерьер и создать идеальную атмосферу для каждого пространства </h5><p data-v-547e5175> Освещение — это не просто способ сделать помещение светлым. Это ключевой элемент, который способен полностью изменить восприятие пространства. От правильного выбора света зависит уют, функциональность и даже настроение в интерьере. </p><h4 data-v-547e5175>Роль освещения в интерьере</h4><p data-v-547e5175> Освещение помогает зонировать пространство, выделять акценты и создавать комфортную атмосферу. Например, тёплый свет делает комнату более уютной, а холодный добавляет свежести и концентрации. </p><p class="black-p" data-v-547e5175><b data-v-547e5175>Общее — </b>основное освещение, которое равномерно заполняет комнату светом. </p><p class="black-p" data-v-547e5175><b data-v-547e5175>Акцентное — </b>подчеркивает отдельные элементы: картины, мебель или архитектурные детали. </p><p class="black-p" data-v-547e5175><b data-v-547e5175>Функциональное — </b>создаёт направленный свет для работы или чтения, например, настольные лампы. </p><h4 data-v-547e5175>Советы по выбору освещения</h4><ul data-v-547e5175><li data-v-547e5175> Выбирайте регулируемые светильники для создания разных настроений. </li><li data-v-547e5175>Используйте светодиоды — они энергоэффективны и долговечны.</li><li data-v-547e5175>Сочетайте источники света, чтобы добиться баланса.</li></ul><p class="black-p" data-v-547e5175> Освещение — это инструмент, который делает интерьер живым и динамичным. Подберите свет, который подчеркнёт стиль вашего пространства и создаст комфортную атмосферу для жизни. </p></div><div class="images-block" data-v-547e5175><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-547e5175><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-547e5175><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-547e5175></div><div class="quote" data-v-547e5175><div class="image-wrapper" data-v-547e5175><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-547e5175></div><h5 data-v-547e5175> &quot;Правильно подобранное освещение — это невидимая магия, которая наполняет пространство жизнью и создаёт уникальную атмосферу.&quot; </h5></div></main>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/LightsArticleComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LightsArticleComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-547e5175"]]);
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
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
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[-->`);
      if (!loading.value && article.value) {
        _push(`<main class="article" data-v-054c48ca><div class="left" data-v-054c48ca>`);
        _push(ssrRenderComponent(Breadcrumbs, {
          reservedLastCrumb: _ctx.$t(article.value.name)
        }, null, _parent));
        _push(`<h4 data-v-054c48ca>${ssrInterpolate(_ctx.$t(((_a = article.value) == null ? void 0 : _a.category) || "blog.articles.unknownCategory"))}</h4><div class="search" data-v-054c48ca><input type="text" class="search" placeholder="Поиск" data-v-054c48ca><div class="loupe" data-v-054c48ca><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-054c48ca></div></div></div><div class="right" data-v-054c48ca><h1 data-v-054c48ca><span${ssrRenderAttrs(mergeProps({ class: "reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-054c48ca>${ssrInterpolate(_ctx.$t(((_b = article.value) == null ? void 0 : _b.name) || "blog.articles.unknown"))}</span><div class="divider" data-v-054c48ca></div><div class="details" data-v-054c48ca>`);
        if ((_c = article.value) == null ? void 0 : _c.by) {
          _push(`<p data-v-054c48ca>By ${ssrInterpolate(article.value.by)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if ((_d = article.value) == null ? void 0 : _d.date) {
          _push(`<p data-v-054c48ca>${ssrInterpolate(article.value.date)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></h1></div><aside data-v-054c48ca><div class="categories" data-v-054c48ca><h4 data-v-054c48ca>Категории</h4><ul data-v-054c48ca><li data-v-054c48ca>${ssrInterpolate(_ctx.$t("blog.articles.categories.architecture"))}</li><li data-v-054c48ca>${ssrInterpolate(_ctx.$t("blog.articles.categories.interiorDesign"))}</li><li data-v-054c48ca>${ssrInterpolate(_ctx.$t("blog.articles.categories.construction"))}</li><li data-v-054c48ca>${ssrInterpolate(_ctx.$t("blog.articles.categories.renovation"))}</li><li data-v-054c48ca>${ssrInterpolate(_ctx.$t("blog.articles.categories.landscapeDesign"))}</li></ul></div></aside><section class="content" data-v-054c48ca>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(currentArticleComponent.value), null, null), _parent);
        _push(`</section></main>`);
      } else {
        _push(`<!---->`);
      }
      if (loading.value) {
        _push(`<div class="loading" data-v-054c48ca><p data-v-054c48ca>Загрузка...</p></div>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-054c48ca"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-nBdRosBE.js.map
