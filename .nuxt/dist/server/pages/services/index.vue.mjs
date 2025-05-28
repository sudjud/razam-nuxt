import { ref, resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public23.mjs";
import _imports_1 from "../../_virtual/virtual_public24.mjs";
import _imports_2 from "../../_virtual/virtual_public25.mjs";
import _imports_0$1 from "../../_virtual/virtual_public26.mjs";
import Breadcrumbs from "../../components/Tools/Breadcrumbs.vue.mjs";
import HomeGallery from "../../components/Swipers/HomeGallery.vue.mjs";
import OfferComponent from "../../components/Blocks/OfferComponent.vue.mjs";
import { useSeo } from "../../composables/useSeo.mjs";
/* empty css            */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    useSeo("services");
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_lazy_load = resolveDirective("lazy-load");
      const _directive_reveal = resolveDirective("reveal");
      let _temp0, _temp1, _temp3;
      _push(`<!--[--><main class="services-main" data-v-6af95351><div class="photos" data-v-6af95351><img${ssrRenderAttrs(_temp0 = mergeProps({
        class: "first",
        "data-src": _imports_0,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-6af95351>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}<img${ssrRenderAttrs(_temp1 = mergeProps({
        class: "second",
        "data-src": _imports_1,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-6af95351>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : _temp1.innerHTML ?? ""}</div><div class="content" data-v-6af95351><div class="content-wrapper" data-v-6af95351><p class="design" data-v-6af95351>${_ctx.$t("services.main.design") ?? ""}</p><h1 data-v-6af95351><div class="breadcrumbs-wrapper" data-v-6af95351>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`</div><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6af95351>${_ctx.$t("services.main.title") ?? ""}</span></h1><p class="desc" data-v-6af95351>${ssrInterpolate(_ctx.$t("services.main.description"))}</p><p class="${ssrRenderClass([{ open: isOpen.value }, "desc read-more-text"])}" data-v-6af95351>${ssrInterpolate(_ctx.$t("services.main.readMoreText"))}</p><p class="read-more" data-v-6af95351>${ssrInterpolate(isOpen.value ? _ctx.$t("common.hide") : _ctx.$t("common.readMore"))}</p></div><div class="razam" data-v-6af95351><img class="arrow wow animate__animated animate__fadeInDownBig"${ssrRenderAttr("src", _imports_2)} alt="" data-not-lazy data-v-6af95351><img${ssrRenderAttrs(_temp3 = mergeProps({
        class: "logo",
        "data-src": _imports_0$1,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-6af95351>${"textContent" in _temp3 ? ssrInterpolate(_temp3.textContent) : _temp3.innerHTML ?? ""}<p class="under-logo-p" data-v-6af95351>${ssrInterpolate(_ctx.$t("services.main.razamText"))}</p></div></div></main><section class="services" data-v-6af95351>`);
      _push(ssrRenderComponent(HomeGallery, null, null, _parent));
      _push(`</section><section class="process" data-v-6af95351><div class="container" data-v-6af95351><h2 data-v-6af95351><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6af95351>${ssrInterpolate(_ctx.$t("home.process.h2"))}</span></h2><div class="process-grid" data-v-6af95351><div class="process-item" data-v-6af95351><div class="process-item-count" data-v-6af95351>01</div><div class="process-item-title" data-v-6af95351>${ssrInterpolate(_ctx.$t("home.process.title1"))}</div><p data-v-6af95351>${ssrInterpolate(_ctx.$t("home.process.text1"))}</p></div><div class="process-item" data-v-6af95351><div class="process-item-count" data-v-6af95351>02</div><div class="process-item-title" data-v-6af95351>${ssrInterpolate(_ctx.$t("home.process.title2"))}</div><p data-v-6af95351>${ssrInterpolate(_ctx.$t("home.process.text2"))}</p></div><div class="process-item" data-v-6af95351><div class="process-item-count" data-v-6af95351>03</div><div class="process-item-title" data-v-6af95351>${ssrInterpolate(_ctx.$t("home.process.title3"))}</div><p data-v-6af95351>${ssrInterpolate(_ctx.$t("home.process.text3"))}</p></div><div class="process-item process-item-moved" data-v-6af95351><div class="process-item-count" data-v-6af95351>04</div><div class="process-item-title" data-v-6af95351>${ssrInterpolate(_ctx.$t("home.process.title4"))}</div><p data-v-6af95351>${ssrInterpolate(_ctx.$t("home.process.text4"))}</p></div><div class="process-item process-item-moved-mob" data-v-6af95351><div class="process-item-count" data-v-6af95351>05</div><div class="process-item-title" data-v-6af95351>${ssrInterpolate(_ctx.$t("home.process.title5"))}</div><p data-v-6af95351>${ssrInterpolate(_ctx.$t("home.process.text5"))}</p></div></div></div></section>`);
      _push(ssrRenderComponent(OfferComponent, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6af95351"]]);
export {
  index as default
};
//# sourceMappingURL=index.vue.mjs.map
