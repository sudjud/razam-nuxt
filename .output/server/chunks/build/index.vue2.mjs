import { ref, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrGetDirectiveProps } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_0$1 } from './virtual_public26.mjs';
import { B as Breadcrumbs } from './Breadcrumbs.vue.mjs';
import { H as HomeGallery } from './HomeGallery.vue.mjs';
import { O as OfferComponent } from './OfferComponent.vue.mjs';
import { u as useSeo } from './useSeo.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import './nuxt-link.mjs';
import 'vue-router';
import './vue-i18n.mjs';
import 'swiper/vue';
import 'swiper/modules';
import './virtual_public29.mjs';
import './virtual_public34.mjs';
import './virtual_public38.mjs';
import 'swiper';
import './virtual_public49.mjs';
import './v3.mjs';
import '@vueuse/core';

const _imports_0 = publicAssetsURL("/images/services/1.webp");

const _imports_1 = publicAssetsURL("/images/services/2.webp");

const _imports_2 = publicAssetsURL("/images/services/arrow-down.svg");

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    useSeo("services");
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main class="services-main" data-v-0037f512><div class="photos" data-v-0037f512><img class="first"${ssrRenderAttr("src", _imports_0)} alt="" data-v-0037f512><img class="second"${ssrRenderAttr("src", _imports_1)} alt="" data-v-0037f512></div><div class="content" data-v-0037f512><div class="content-wrapper" data-v-0037f512><p class="design" data-v-0037f512>${_ctx.$t("services.main.design") ?? ""}</p><h1 data-v-0037f512><div class="breadcrumbs-wrapper" data-v-0037f512>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`</div><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-0037f512>${_ctx.$t("services.main.title") ?? ""}</span></h1><p class="desc" data-v-0037f512>${ssrInterpolate(_ctx.$t("services.main.description"))}</p><p class="${ssrRenderClass([{ open: isOpen.value }, "desc read-more-text"])}" data-v-0037f512>${ssrInterpolate(_ctx.$t("services.main.readMoreText"))}</p><p class="read-more" data-v-0037f512>${ssrInterpolate(isOpen.value ? _ctx.$t("common.hide") : _ctx.$t("common.readMore"))}</p></div><div class="razam" data-v-0037f512><img class="arrow wow animate__animated animate__fadeInDownBig"${ssrRenderAttr("src", _imports_2)} alt="" data-v-0037f512><img class="logo"${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-0037f512><p data-v-0037f512>${ssrInterpolate(_ctx.$t("services.main.razamText"))}</p></div></div></main><section class="services" data-v-0037f512>`);
      _push(ssrRenderComponent(HomeGallery, null, null, _parent));
      _push(`</section><section class="process" data-v-0037f512><div class="container" data-v-0037f512><h2 data-v-0037f512><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-0037f512>${ssrInterpolate(_ctx.$t("home.process.h2"))}</span></h2><div class="process-grid" data-v-0037f512><div class="process-item" data-v-0037f512><div class="process-item-count" data-v-0037f512>01</div><div class="process-item-title" data-v-0037f512>${ssrInterpolate(_ctx.$t("home.process.title1"))}</div><p data-v-0037f512>${ssrInterpolate(_ctx.$t("home.process.text1"))}</p></div><div class="process-item" data-v-0037f512><div class="process-item-count" data-v-0037f512>02</div><div class="process-item-title" data-v-0037f512>${ssrInterpolate(_ctx.$t("home.process.title2"))}</div><p data-v-0037f512>${ssrInterpolate(_ctx.$t("home.process.text2"))}</p></div><div class="process-item" data-v-0037f512><div class="process-item-count" data-v-0037f512>03</div><div class="process-item-title" data-v-0037f512>${ssrInterpolate(_ctx.$t("home.process.title3"))}</div><p data-v-0037f512>${ssrInterpolate(_ctx.$t("home.process.text3"))}</p></div><div class="process-item process-item-moved" data-v-0037f512><div class="process-item-count" data-v-0037f512>04</div><div class="process-item-title" data-v-0037f512>${ssrInterpolate(_ctx.$t("home.process.title4"))}</div><p data-v-0037f512>${ssrInterpolate(_ctx.$t("home.process.text4"))}</p></div><div class="process-item process-item-moved-mob" data-v-0037f512><div class="process-item-count" data-v-0037f512>05</div><div class="process-item-title" data-v-0037f512>${ssrInterpolate(_ctx.$t("home.process.title5"))}</div><p data-v-0037f512>${ssrInterpolate(_ctx.$t("home.process.text5"))}</p></div></div></div></section>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0037f512"]]);

export { index as default };
//# sourceMappingURL=index.vue2.mjs.map
