import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public46.mjs";
/* empty css                            */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "values-list" }, _attrs))} data-v-192c7ec3><div class="values-list-top" data-v-192c7ec3><div class="value-item wow animate__animated animate__fadeInBottomLeft" data-v-192c7ec3><span class="circle" data-v-192c7ec3><img data-not-lazy${ssrRenderAttr("src", _imports_0)} alt="arrow" data-v-192c7ec3></span><p data-v-192c7ec3>${_ctx.$t("home.valuesP1") ?? ""}</p></div><div class="value-item wow animate__animated animate__fadeInBottomLeft" data-wow-delay="0.1s" data-v-192c7ec3><span class="circle" data-v-192c7ec3><img data-not-lazy${ssrRenderAttr("src", _imports_0)} alt="arrow" data-v-192c7ec3></span><p data-v-192c7ec3>${_ctx.$t("home.valuesP2") ?? ""}</p></div><div class="value-item wow animate__animated animate__fadeInBottomLeft" data-wow-delay="0.2s" data-v-192c7ec3><span class="circle" data-v-192c7ec3><img data-not-lazy${ssrRenderAttr("src", _imports_0)} alt="arrow" data-v-192c7ec3></span><p data-v-192c7ec3>${_ctx.$t("home.valuesP3") ?? ""}</p></div></div><div class="values-list-bottom" data-v-192c7ec3><div class="value-item wow animate__animated animate__fadeInBottomLeft" data-wow-delay="0.3s" data-v-192c7ec3><span class="circle" data-v-192c7ec3><img data-not-lazy${ssrRenderAttr("src", _imports_0)} alt="arrow" data-v-192c7ec3></span><p data-v-192c7ec3>${_ctx.$t("home.valuesP4") ?? ""}</p></div><div class="value-item wow animate__animated animate__fadeInBottomLeft" data-wow-delay="0.4s" data-v-192c7ec3><span class="circle" data-v-192c7ec3><img data-not-lazy${ssrRenderAttr("src", _imports_0)} alt="arrow" data-v-192c7ec3></span><p data-v-192c7ec3>${_ctx.$t("home.valuesP5") ?? ""}</p></div><div class="value-item wow animate__animated animate__fadeInBottomLeft" data-wow-delay="0.5s" data-v-192c7ec3><span class="circle" data-v-192c7ec3><img data-not-lazy${ssrRenderAttr("src", _imports_0)} alt="arrow" data-v-192c7ec3></span><p data-v-192c7ec3>${_ctx.$t("home.valuesP6") ?? ""}</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/ValuesArrowsComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ValuesArrowsComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-192c7ec3"]]);
export {
  ValuesArrowsComponent as default
};
//# sourceMappingURL=ValuesArrowsComponent.vue.mjs.map
