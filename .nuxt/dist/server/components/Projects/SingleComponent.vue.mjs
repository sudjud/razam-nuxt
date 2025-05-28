import { resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps } from "vue/server-renderer";
/* empty css                      */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "SingleComponent",
  __ssrInlineRender: true,
  props: {
    nameAcronym: String,
    nameCamelCase: String,
    name: String,
    slug: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp0, _temp1, _temp2, _temp3;
      _push(`<!--[--><section class="lounge" data-v-3eede882><h5 data-v-3eede882>${ssrInterpolate(__props.nameAcronym)}</h5><h2 data-v-3eede882><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-3eede882>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.firstBlock.h1`))}</span></h2><div class="content-wrapper" data-v-3eede882><div class="text-wrapper" data-v-3eede882><h2 data-v-3eede882><span data-v-3eede882>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.firstBlock.h2`))}</span></h2><p data-v-3eede882>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.firstBlock.p`))}</p></div><div class="lounge-image" data-v-3eede882><img${ssrRenderAttrs(_temp0 = mergeProps({
        "data-src": `/images/projects/${__props.slug}/1.webp`,
        alt: "urban-grace"
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-3eede882>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div></div></section><section class="bedroom" data-v-3eede882><h4 data-v-3eede882>${ssrInterpolate(__props.name)}</h4><div class="content-wrapper" data-v-3eede882><div class="text-wrapper" data-v-3eede882><h2 data-v-3eede882>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.secondBlock.h1`))} <br data-v-3eede882> ${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.secondBlock.h2`))}</h2><p data-v-3eede882>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.secondBlock.p`))}</p></div><div class="image" data-v-3eede882><img${ssrRenderAttrs(_temp1 = mergeProps({
        "data-src": `/images/projects/${__props.slug}/2.webp`,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-3eede882>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : _temp1.innerHTML ?? ""}</div></div></section><section class="lights" data-v-3eede882><div class="content-wrapper" data-v-3eede882><div class="images" data-v-3eede882><img${ssrRenderAttrs(_temp2 = mergeProps({
        "data-src": `/images/projects/${__props.slug}/3.webp`,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-3eede882>${"textContent" in _temp2 ? ssrInterpolate(_temp2.textContent) : _temp2.innerHTML ?? ""}<img${ssrRenderAttrs(_temp3 = mergeProps({
        "data-src": `/images/projects/${__props.slug}/4.webp`,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-3eede882>${"textContent" in _temp3 ? ssrInterpolate(_temp3.textContent) : _temp3.innerHTML ?? ""}</div><div class="text-wrapper" data-v-3eede882><h2 data-v-3eede882>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.thirdBlock.h1`))}<br data-v-3eede882><span data-v-3eede882>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.thirdBlock.h2`))}</span></h2><p data-v-3eede882>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.thirdBlock.p`))}</p></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects/SingleComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SingleComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3eede882"]]);
export {
  SingleComponent as default
};
//# sourceMappingURL=SingleComponent.vue.mjs.map
