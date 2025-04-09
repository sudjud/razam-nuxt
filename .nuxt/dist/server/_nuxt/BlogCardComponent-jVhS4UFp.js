import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as __nuxt_component_0 } from "./nuxt-link-BSCCcEt5.js";
import { mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, ab as useLocalePath } from "../server.mjs";
const _imports_0 = publicAssetsURL("/images/blog/left-arrow.svg");
const _imports_1 = publicAssetsURL("/images/blog/right-arrow.svg");
const _sfc_main = {
  __name: "BlogCardComponent",
  __ssrInlineRender: true,
  props: {
    previewImg: String,
    category: String,
    name: String,
    by: String,
    date: String,
    slug: String
  },
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-a8c31b6a><div class="wrapper-image" data-v-a8c31b6a><img${ssrRenderAttr("src", __props.previewImg)} alt="" data-v-a8c31b6a></div><p class="category" data-v-a8c31b6a>${ssrInterpolate(_ctx.$t(__props.category))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)(`/news/${__props.slug}`)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 class="name" data-v-a8c31b6a${_scopeId}>${ssrInterpolate(_ctx.$t(__props.name))}</h4>`);
          } else {
            return [
              createVNode("h4", { class: "name" }, toDisplayString(_ctx.$t(__props.name)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="details" data-v-a8c31b6a><p class="by" data-v-a8c31b6a>by ${ssrInterpolate(__props.by)}</p><p class="date" data-v-a8c31b6a>${ssrInterpolate(__props.date)}</p></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/BlogCardComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogCardComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a8c31b6a"]]);
export {
  BlogCardComponent as B,
  _imports_0 as _,
  _imports_1 as a
};
//# sourceMappingURL=BlogCardComponent-jVhS4UFp.js.map
