import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public76.mjs";
import _imports_1 from "../../_virtual/virtual_public77.mjs";
/* empty css                      */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "LoaderComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const loaded = ref(false);
    const percentage = ref(0);
    const scale = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      if (!loaded.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader" }, _attrs))} data-v-b4c51871><div class="logo" data-v-b4c51871><img data-not-lazy class="logo-img"${ssrRenderAttr("src", _imports_0)} alt="Logo" data-v-b4c51871><img data-not-lazy${ssrRenderAttr("src", _imports_1)} alt="Loading Stick" class="stick" style="${ssrRenderStyle({ transform: `scaleY(${scale.value})` })}" data-v-b4c51871></div><div class="percentage" data-v-b4c51871>${ssrInterpolate(percentage.value)}%</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loader/LoaderComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LoaderComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4c51871"]]);
export {
  LoaderComponent as default
};
//# sourceMappingURL=LoaderComponent.vue.mjs.map
