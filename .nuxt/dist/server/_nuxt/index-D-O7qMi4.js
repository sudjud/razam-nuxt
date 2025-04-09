import { ref, resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrGetDirectiveProps } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _imports_0$1 } from "./logo-KvsXDODS.js";
import { _ as _imports_0$2 } from "./virtual_public-BFlYF5SH.js";
import { B as Breadcrumbs } from "./Breadcrumbs-DsbAcELI.js";
import { H as HomeGallery } from "./HomeGallery-BkOhHJUK.js";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-BSCCcEt5.js";
import "vue-router";
import "./vue-i18n-Dx5HdeXT.js";
import "swiper/vue";
import "swiper/modules";
import "./virtual_public-CUDB83zt.js";
import "./virtual_public-CQt7_jRy.js";
import "./virtual_public-DAfNXu09.js";
import "swiper";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "destr";
import "klona";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@vueuse/core";
const _imports_0 = publicAssetsURL("/images/services/1.jpg");
const _imports_1 = publicAssetsURL("/images/services/2.jpg");
const _imports_2 = publicAssetsURL("/images/services/arrow-down.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main class="services-main" data-v-3484fccb><div class="photos" data-v-3484fccb><img class="first"${ssrRenderAttr("src", _imports_0)} alt="" data-v-3484fccb><img class="second"${ssrRenderAttr("src", _imports_1)} alt="" data-v-3484fccb></div><div class="content" data-v-3484fccb><div class="content-wrapper" data-v-3484fccb><p class="design" data-v-3484fccb>${_ctx.$t("services.main.design") ?? ""}</p><h1 data-v-3484fccb><div class="breadcrumbs-wrapper" data-v-3484fccb>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`</div><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-3484fccb>${_ctx.$t("services.main.title") ?? ""}</span></h1><p class="desc" data-v-3484fccb>${ssrInterpolate(_ctx.$t("services.main.description"))}</p><p class="${ssrRenderClass([{ open: isOpen.value }, "desc read-more-text"])}" data-v-3484fccb>${ssrInterpolate(_ctx.$t("services.main.readMoreText"))}</p><p class="read-more" data-v-3484fccb>${ssrInterpolate(isOpen.value ? _ctx.$t("common.hide") : _ctx.$t("common.readMore"))}</p></div><div class="razam" data-v-3484fccb><img class="arrow wow animate__animated animate__fadeInDownBig"${ssrRenderAttr("src", _imports_2)} alt="" data-v-3484fccb><img class="logo"${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-3484fccb><p data-v-3484fccb>${ssrInterpolate(_ctx.$t("services.main.razamText"))}</p></div></div></main><section class="services" data-v-3484fccb>`);
      _push(ssrRenderComponent(HomeGallery, null, null, _parent));
      _push(`</section><section class="process" data-v-3484fccb><div class="container" data-v-3484fccb><h2 data-v-3484fccb><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-3484fccb>${ssrInterpolate(_ctx.$t("home.process.h2"))}</span></h2><div class="process-grid" data-v-3484fccb><div class="process-item" data-v-3484fccb><div class="process-item-count" data-v-3484fccb>01</div><div class="process-item-title" data-v-3484fccb>${ssrInterpolate(_ctx.$t("home.process.title1"))}</div><p data-v-3484fccb>${ssrInterpolate(_ctx.$t("home.process.text1"))}</p></div><div class="process-item" data-v-3484fccb><div class="process-item-count" data-v-3484fccb>02</div><div class="process-item-title" data-v-3484fccb>${ssrInterpolate(_ctx.$t("home.process.title2"))}</div><p data-v-3484fccb>${ssrInterpolate(_ctx.$t("home.process.text2"))}</p></div><div class="process-item" data-v-3484fccb><div class="process-item-count" data-v-3484fccb>03</div><div class="process-item-title" data-v-3484fccb>${ssrInterpolate(_ctx.$t("home.process.title3"))}</div><p data-v-3484fccb>${ssrInterpolate(_ctx.$t("home.process.text3"))}</p></div><div class="process-item process-item-moved" data-v-3484fccb><div class="process-item-count" data-v-3484fccb>04</div><div class="process-item-title" data-v-3484fccb>${ssrInterpolate(_ctx.$t("home.process.title4"))}</div><p data-v-3484fccb>${ssrInterpolate(_ctx.$t("home.process.text4"))}</p></div><div class="process-item process-item-moved-mob" data-v-3484fccb><div class="process-item-count" data-v-3484fccb>05</div><div class="process-item-title" data-v-3484fccb>${ssrInterpolate(_ctx.$t("home.process.title5"))}</div><p data-v-3484fccb>${ssrInterpolate(_ctx.$t("home.process.text5"))}</p></div></div></div></section><section class="offer" data-v-3484fccb><h2 data-v-3484fccb>${ssrInterpolate(_ctx.$t("home.offer.h2P1"))}<span class="arrow" data-v-3484fccb><img${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-3484fccb></span><br data-v-3484fccb><div class="decor" data-v-3484fccb>${ssrInterpolate(_ctx.$t("home.offer.h2P2"))}<br data-v-3484fccb> ${ssrInterpolate(_ctx.$t("home.offer.h2P3"))} ? </div></h2><p data-v-3484fccb>${ssrInterpolate(_ctx.$t("home.offer.p"))}</p></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3484fccb"]]);
export {
  index as default
};
//# sourceMappingURL=index-D-O7qMi4.js.map
