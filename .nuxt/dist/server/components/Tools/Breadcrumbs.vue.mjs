import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
/* empty css                  */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
import { useI18n } from "../../node_modules/vue-i18n/dist/vue-i18n.mjs";
const _sfc_main = {
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    reservedLastCrumb: String
  },
  setup(__props) {
    const route = useRoute();
    const { t } = useI18n();
    const localePath = useLocalePath();
    const props = __props;
    const breadcrumbs = computed(() => {
      const pathArray = route.path.split("/").filter((p) => p);
      let breadcrumbPath = "";
      const crumbs = [{ label: t("menu.home"), to: "/" }];
      pathArray.forEach((segment, index) => {
        if (segment !== "ru" && segment !== "en") {
          breadcrumbPath += `/${segment}`;
          const isLast = index === pathArray.length - 1;
          let translatedLabel = t(`menu.${segment}`, segment);
          crumbs.push({
            label: isLast && props.reservedLastCrumb ? props.reservedLastCrumb.length > 20 ? `${props.reservedLastCrumb.slice(0, 20)}...` : props.reservedLastCrumb : translatedLabel,
            to: isLast ? null : breadcrumbPath
          });
        }
      });
      return crumbs;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "breadcrumbs",
        "aria-label": "breadcrumbs"
      }, _attrs))} data-v-032cdfb1><ul data-v-032cdfb1><!--[-->`);
      ssrRenderList(breadcrumbs.value, (crumb, index) => {
        _push(`<li data-v-032cdfb1>`);
        if (crumb.to) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(crumb.to),
            "aria-current": index === breadcrumbs.value.length - 1 ? "page" : null
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(crumb.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(crumb.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<span data-v-032cdfb1>${ssrInterpolate(crumb.label)}</span>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Breadcrumbs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-032cdfb1"]]);
export {
  Breadcrumbs as default
};
//# sourceMappingURL=Breadcrumbs.vue.mjs.map
