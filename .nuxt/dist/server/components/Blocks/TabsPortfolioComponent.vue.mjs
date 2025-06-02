import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { withAsyncContext, computed, ref, resolveDirective, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public57.mjs";
import { useRouter } from "vue-router";
import { useAsyncData } from "../../node_modules/nuxt/dist/app/composables/asyncData.mjs";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
/* empty css                             */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "TabsPortfolioComponent",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const localePath = useLocalePath();
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "projects",
      () => $fetch("/api/projects")
    )), __temp = await __temp, __restore(), __temp);
    const categories = computed(() => {
      var _a;
      return [...new Set(((_a = projects.value) == null ? void 0 : _a.map((project) => project.category)) || [])];
    });
    const activeTab = ref(-1);
    const prevTab = ref(0);
    const expandedItem = ref(null);
    const filteredProjects = computed(() => {
      var _a;
      if (activeTab.value === -1) {
        return projects.value || [];
      }
      return ((_a = projects.value) == null ? void 0 : _a.filter(
        (project) => project.category === categories.value[activeTab.value]
      )) || [];
    });
    computed(
      () => activeTab.value > prevTab.value ? "slide-right" : "slide-left"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabs-container" }, _attrs))} data-v-5ee7d74f><div class="tabs" data-v-5ee7d74f><div class="${ssrRenderClass(["tab", { active: activeTab.value === -1 }])}" data-v-5ee7d74f>${ssrInterpolate(_ctx.$t("portfolio.tabs.categories.all"))}</div><!--[-->`);
      ssrRenderList(categories.value, (category, index) => {
        _push(`<div class="${ssrRenderClass(["tab", { active: activeTab.value === index }])}" data-v-5ee7d74f>${ssrInterpolate(_ctx.$t(category))}</div>`);
      });
      _push(`<!--]--></div><div class="tabs-content" data-v-5ee7d74f><ul data-v-5ee7d74f><!--[-->`);
      ssrRenderList(filteredProjects.value, (item, index) => {
        _push(`<li class="${ssrRenderClass({ expanded: expandedItem.value === index })}" data-v-5ee7d74f><div class="index" data-v-5ee7d74f>0${ssrInterpolate(index + 1)}</div><div class="${ssrRenderClass([{ open: expandedItem.value === index }, "img"])}" data-v-5ee7d74f><img${ssrRenderAttrs(_temp0 = mergeProps({
          "data-src": item.preview,
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-5ee7d74f>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div><p class="name" data-v-5ee7d74f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(`/portfolio/${item.slug}`)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</p><p class="year" data-v-5ee7d74f>${ssrInterpolate(item.year)}</p><p class="type" data-v-5ee7d74f>${ssrInterpolate(_ctx.$t(item.type))}</p><div class="${ssrRenderClass([{ open: expandedItem.value === index }, "arrow"])}" data-v-5ee7d74f><img data-not-lazy${ssrRenderAttr("src", _imports_0)} alt="" data-v-5ee7d74f></div></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/TabsPortfolioComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TabsPortfolioComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ee7d74f"]]);
export {
  TabsPortfolioComponent as default
};
//# sourceMappingURL=TabsPortfolioComponent.vue.mjs.map
