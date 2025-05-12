import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, watch, resolveDirective, mergeProps, unref, withCtx, withDirectives, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _imports_0 from "../../public/images/blog/loupe.svg.mjs";
import debounce from "lodash/debounce.js";
import { searchContent } from "../../utils/search.mjs";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
/* empty css                      */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
import { useI18n } from "../../node_modules/vue-i18n/dist/vue-i18n.mjs";
const _sfc_main = {
  __name: "SearchComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const localePath = useLocalePath();
    const searchQuery = ref("");
    const searchResults = ref([]);
    const doSearch = debounce((q) => {
      searchResults.value = searchContent(q, locale.value, t);
      console.log(searchResults.value);
    }, 300);
    watch(searchQuery, (newQuery) => {
      if (!newQuery.trim()) {
        searchResults.value = [];
      } else {
        doSearch(newQuery);
      }
    });
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function highlightMatch(text) {
      const query = searchQuery.value.trim();
      if (!query) return text;
      const pattern = new RegExp(`(${escapeRegExp(query)})`, "gi");
      return text.replace(pattern, "<strong>$1</strong>");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp0, _temp1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search" }, _attrs))} data-v-d75f645c><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="search"${ssrRenderAttr("placeholder", _ctx.$t("menu.search"))} data-v-d75f645c><div class="loupe" data-v-d75f645c><img${ssrRenderAttrs(_temp0 = mergeProps({
        "data-src": _imports_0,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-d75f645c>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div>`);
      if (searchQuery.value.trim() && searchResults.value.length) {
        _push(`<ul class="results" data-v-d75f645c><!--[-->`);
        ssrRenderList(searchResults.value, (item, i) => {
          _push(`<li data-v-d75f645c>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.type === "project" ? unref(localePath)(`/portfolio/${item.slug}`) : unref(localePath)(`/news/${item.slug}`),
            class: "result-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttrs(_temp1 = mergeProps({
                  "data-src": item.type === "project" ? item.preview : item.previewImg,
                  alt: "",
                  class: "result-img"
                }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-d75f645c${_scopeId}>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : _temp1.innerHTML ?? ""}<div class="result-text" data-v-d75f645c${_scopeId}>${highlightMatch(
                  `${item.type === "project" ? "📁" : "📰"} ${unref(t)(item.title)}`
                ) ?? ""}</div>`);
              } else {
                return [
                  withDirectives(createVNode("img", {
                    "data-src": item.type === "project" ? item.preview : item.previewImg,
                    alt: "",
                    class: "result-img"
                  }, null, 8, ["data-src"]), [
                    [_directive_lazy_load]
                  ]),
                  createVNode("div", {
                    class: "result-text",
                    innerHTML: highlightMatch(
                      `${item.type === "project" ? "📁" : "📰"} ${unref(t)(item.title)}`
                    )
                  }, null, 8, ["innerHTML"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/SearchComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SearchComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d75f645c"]]);
export {
  SearchComponent as default
};
//# sourceMappingURL=SearchComponent.vue.mjs.map
