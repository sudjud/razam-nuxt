import { resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrGetDirectiveProps } from "vue/server-renderer";
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
      _push(`<!--[--><section class="lounge" data-v-b483fed6><h5 data-v-b483fed6>${ssrInterpolate(__props.nameAcronym)}</h5><h2 data-v-b483fed6><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.firstBlock.h1`))}</span></h2><div class="content-wrapper" data-v-b483fed6><div class="text-wrapper" data-v-b483fed6><h2 data-v-b483fed6><span data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.firstBlock.h2`))}</span></h2><p data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.firstBlock.p`))}</p></div><div class="lounge-image" data-v-b483fed6><img${ssrRenderAttr("src", `/images/projects/${__props.slug}/1.webp`)} alt="urban-grace" data-v-b483fed6></div></div></section><section class="bedroom" data-v-b483fed6><h4 data-v-b483fed6>${ssrInterpolate(__props.name)}</h4><div class="content-wrapper" data-v-b483fed6><div class="text-wrapper" data-v-b483fed6><h2 data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.secondBlock.h1`))} <br data-v-b483fed6> ${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.secondBlock.h2`))}</h2><p data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.secondBlock.p`))}</p></div><div class="image" data-v-b483fed6><img${ssrRenderAttr("src", `/images/projects/${__props.slug}/2.webp`)} alt="" data-v-b483fed6></div></div></section><section class="lights" data-v-b483fed6><div class="content-wrapper" data-v-b483fed6><div class="images" data-v-b483fed6><img${ssrRenderAttr("src", `/images/projects/${__props.slug}/3.webp`)} alt="" data-v-b483fed6><img${ssrRenderAttr("src", `/images/projects/${__props.slug}/4.webp`)} alt="" data-v-b483fed6></div><div class="text-wrapper" data-v-b483fed6><h2 data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.thirdBlock.h1`))}<br data-v-b483fed6><span data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.thirdBlock.h2`))}</span></h2><p data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.thirdBlock.p`))}</p></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects/SingleComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SingleComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b483fed6"]]);
export {
  SingleComponent as default
};
//# sourceMappingURL=SingleComponent.vue.mjs.map
