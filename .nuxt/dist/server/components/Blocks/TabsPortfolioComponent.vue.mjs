import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { withAsyncContext, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public51.mjs";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabs-container" }, _attrs))} data-v-2d9d5d2f><div class="tabs" data-v-2d9d5d2f><div class="${ssrRenderClass(["tab", { active: activeTab.value === -1 }])}" data-v-2d9d5d2f>${ssrInterpolate(_ctx.$t("portfolio.tabs.categories.all"))}</div><!--[-->`);
      ssrRenderList(categories.value, (category, index) => {
        _push(`<div class="${ssrRenderClass(["tab", { active: activeTab.value === index }])}" data-v-2d9d5d2f>${ssrInterpolate(_ctx.$t(category))}</div>`);
      });
      _push(`<!--]--></div><div class="tabs-content" data-v-2d9d5d2f><ul data-v-2d9d5d2f><!--[-->`);
      ssrRenderList(filteredProjects.value, (item, index) => {
        _push(`<li class="${ssrRenderClass({ expanded: expandedItem.value === index })}" data-v-2d9d5d2f><div class="index" data-v-2d9d5d2f>0${ssrInterpolate(index + 1)}</div><div class="${ssrRenderClass([{ open: expandedItem.value === index }, "img"])}" data-v-2d9d5d2f><img${ssrRenderAttr("src", item.preview)} alt="" data-v-2d9d5d2f></div><p class="name" data-v-2d9d5d2f>`);
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
        _push(`</p><p class="year" data-v-2d9d5d2f>${ssrInterpolate(item.year)}</p><p class="type" data-v-2d9d5d2f>${ssrInterpolate(_ctx.$t(item.type))}</p><div class="${ssrRenderClass([{ open: expandedItem.value === index }, "arrow"])}" data-v-2d9d5d2f><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-2d9d5d2f></div></li>`);
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
const TabsPortfolioComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2d9d5d2f"]]);
export {
  TabsPortfolioComponent as default
};
//# sourceMappingURL=TabsPortfolioComponent.vue.mjs.map
