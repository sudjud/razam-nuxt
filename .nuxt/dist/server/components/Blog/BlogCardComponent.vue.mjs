import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { resolveDirective, mergeProps, unref, withCtx, createVNode, withDirectives, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps } from "vue/server-renderer";
/* empty css                        */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
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
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: unref(localePath)(`/news/${__props.slug}`)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="card" data-v-d96c79d5${_scopeId}><div class="wrapper-image" data-v-d96c79d5${_scopeId}><img${ssrRenderAttrs(_temp0 = mergeProps({
              "data-src": __props.previewImg,
              alt: ""
            }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-d96c79d5${_scopeId}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div><p class="category" data-v-d96c79d5${_scopeId}>${ssrInterpolate(_ctx.$t(__props.category))}</p><h4 class="name" data-v-d96c79d5${_scopeId}>${ssrInterpolate(_ctx.$t(__props.name))}</h4><div class="details" data-v-d96c79d5${_scopeId}><p class="by" data-v-d96c79d5${_scopeId}>by ${ssrInterpolate(__props.by)}</p><p class="date" data-v-d96c79d5${_scopeId}>${ssrInterpolate(__props.date)}</p></div></section>`);
          } else {
            return [
              createVNode("section", { class: "card" }, [
                createVNode("div", { class: "wrapper-image" }, [
                  withDirectives(createVNode("img", {
                    "data-src": __props.previewImg,
                    alt: ""
                  }, null, 8, ["data-src"]), [
                    [_directive_lazy_load]
                  ])
                ]),
                createVNode("p", { class: "category" }, toDisplayString(_ctx.$t(__props.category)), 1),
                createVNode("h4", { class: "name" }, toDisplayString(_ctx.$t(__props.name)), 1),
                createVNode("div", { class: "details" }, [
                  createVNode("p", { class: "by" }, "by " + toDisplayString(__props.by), 1),
                  createVNode("p", { class: "date" }, toDisplayString(__props.date), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/BlogCardComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogCardComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d96c79d5"]]);
export {
  BlogCardComponent as default
};
//# sourceMappingURL=BlogCardComponent.vue.mjs.map
