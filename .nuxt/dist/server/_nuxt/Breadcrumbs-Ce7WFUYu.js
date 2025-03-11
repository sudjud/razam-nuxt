import { _ as __nuxt_component_0 } from "./nuxt-link-BSCCcEt5.js";
import { computed, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
import { u as useI18n } from "./vue-i18n-Dx5HdeXT.js";
const _sfc_main = {
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    reservedLastCrumb: String
  },
  setup(__props) {
    const route = useRoute();
    const { t } = useI18n();
    const props = __props;
    const breadcrumbs = computed(() => {
      const pathArray = route.path.split("/").filter((p) => p);
      let breadcrumbPath = "";
      const crumbs = [{ label: t("menu.home"), to: "/" }];
      pathArray.forEach((segment, index) => {
        if (segment !== "fr" && segment !== "en") {
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
      }, _attrs))} data-v-c34f0528><ul data-v-c34f0528><!--[-->`);
      ssrRenderList(breadcrumbs.value, (crumb, index) => {
        _push(`<li data-v-c34f0528>`);
        if (crumb.to) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: crumb.to,
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
          _push(`<span data-v-c34f0528>${ssrInterpolate(crumb.label)}</span>`);
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
const Breadcrumbs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c34f0528"]]);
export {
  Breadcrumbs as B
};
//# sourceMappingURL=Breadcrumbs-Ce7WFUYu.js.map
