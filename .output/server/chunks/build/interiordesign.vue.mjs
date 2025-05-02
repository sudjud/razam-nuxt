import { mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext, resolveDirective } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './virtual_public29.mjs';
import { _ as _imports_1$1 } from './virtual_public5.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_4$1 } from './virtual_public33.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { _ as _imports_0 } from './virtual_public49.mjs';
import { _ as _export_sfc, u as useLocalePath, a as useRoute } from './server.mjs';
import { C as CostCalculator } from './CostCalculator.vue.mjs';
import { B as Breadcrumbs } from './Breadcrumbs.vue.mjs';
import { u as useI18n } from './vue-i18n.mjs';
import { u as useHead } from './v3.mjs';
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
import 'vue-router';
import '@vueuse/core';

const _imports_2 = publicAssetsURL("/images/services/interior-design/1.webp");

const _imports_3 = publicAssetsURL("/images/services/interior-design/2.webp");

const _imports_4 = publicAssetsURL("/images/services/interior-design/3.webp");

const _imports_1 = publicAssetsURL("/images/services/shield.webp");

const _sfc_main$1 = {
  __name: "ContactShield",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shield" }, _attrs))} data-v-4e818f2d><div class="text" data-v-4e818f2d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 data-v-4e818f2d${_scopeId}><span class="no-wrap" data-v-4e818f2d${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield1.h1"))}</span><div class="spaced" data-v-4e818f2d${_scopeId}><span data-v-4e818f2d${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield1.h2"))}</span><br data-v-4e818f2d${_scopeId}><span data-v-4e818f2d${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield1.h3"))}<img class="arrow"${ssrRenderAttr("src", _imports_0)} alt="" data-v-4e818f2d${_scopeId}></span></div></h2>`);
          } else {
            return [
              createVNode("h2", null, [
                createVNode("span", { class: "no-wrap" }, toDisplayString(_ctx.$t("services.contactShield1.h1")), 1),
                createVNode("div", { class: "spaced" }, [
                  createVNode("span", null, toDisplayString(_ctx.$t("services.contactShield1.h2")), 1),
                  createVNode("br"),
                  createVNode("span", null, [
                    createTextVNode(toDisplayString(_ctx.$t("services.contactShield1.h3")), 1),
                    createVNode("img", {
                      class: "arrow",
                      src: _imports_0,
                      alt: ""
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text__small" data-v-4e818f2d><p data-v-4e818f2d>${ssrInterpolate(_ctx.$t("services.contactShield1.p"))}</p></div></div><div class="image" data-v-4e818f2d><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-4e818f2d></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/ContactShield.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactShield = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4e818f2d"]]);

const baseURL = "https://razam.fr";
const _sfc_main = {
  __name: "interiordesign",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const route = useRoute();
    useHead({
      title: () => t("services.interiorDesign.h1"),
      titleTemplate: (chunk) => `${chunk}`,
      meta: [
        {
          name: "description",
          content: () => t(`services.interiorDesign.text.p1`).slice(0, 160)
        },
        { name: "keywords", content: () => t(`meta.common.keywords`) },
        { property: "og:title", content: () => t(`services.interiorDesign.h1`) },
        {
          property: "og:description",
          content: () => t(`services.interiorDesign.text.p1`).slice(0, 160)
        },
        { property: "og:url", content: () => `${baseURL}${route.path}` },
        {
          property: "og:locale",
          content: () => {
            switch (locale.value) {
              case "en":
                return "en_US";
              case "ru":
                return "ru_RU";
              default:
                return "fr_FR";
            }
          }
        },
        { property: "og:image", content: `${baseURL}/images/logo.webp` },
        { property: "og:image:alt", content: () => t(`services.interiorDesign.h1`) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: () => t(`services.interiorDesign.h1`) },
        {
          name: "twitter:description",
          content: () => t(`services.interiorDesign.text.p1`).slice(0, 160)
        },
        { name: "twitter:image", content: `${baseURL}/images/logo.webp` },
        { name: "twitter:image:alt", content: () => t(`services.interiorDesign.h1`) }
      ],
      link: [
        { rel: "canonical", href: `${baseURL}${route.path}` },
        { rel: "alternate", hreflang: "en", href: `${baseURL}/en${route.path}` },
        { rel: "alternate", hreflang: "fr", href: `${baseURL}${route.path}` },
        { rel: "alternate", hreflang: "ru", href: `${baseURL}/ru${route.path}` },
        {
          rel: "alternate",
          hreflang: "x-default",
          href: `${baseURL}${route.path}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main data-v-07b3e25a><p data-v-07b3e25a>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`</p><h1 data-v-07b3e25a><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.h1"))}<br data-v-07b3e25a> ${ssrInterpolate(_ctx.$t("services.interiorDesign.h1p2"))}</span></h1><div class="image-wrapper" data-v-07b3e25a><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-07b3e25a></div></main><section class="text" data-v-07b3e25a><p data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.p1"))}</p><h4 data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.h1"))}</h4><p data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.p2"))}</p><h4 data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.h2"))}</h4><p data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.p3"))}</p><h4 data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.h3"))}</h4><p data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.p4"))}</p><h4 data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.h4"))}</h4><p data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.text.p5"))}</p></section><section class="way" data-v-07b3e25a><h3 data-v-07b3e25a><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.title1"))} <br data-v-07b3e25a> ${ssrInterpolate(_ctx.$t("services.interiorDesign.way.title2"))}</span></h3><div class="way-grid" data-v-07b3e25a><div class="way-item" data-v-07b3e25a><div class="number" data-v-07b3e25a> 01 <span data-v-07b3e25a><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-07b3e25a></span></div><div class="title" data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step1_title"))}</div><p data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step1_text"))}</p></div><div class="way-item" data-v-07b3e25a><div class="number" data-v-07b3e25a> 02 <span data-v-07b3e25a><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-07b3e25a></span></div><div class="title" data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step2_title"))}</div><p data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step2_text"))}</p></div><div class="way-item" data-v-07b3e25a><div class="number" data-v-07b3e25a> 03 <span data-v-07b3e25a><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-07b3e25a></span></div><div class="title" data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step3_title"))}</div><p data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step3_text"))}</p></div><div class="way-item" data-v-07b3e25a><div class="number" data-v-07b3e25a> 04 <span data-v-07b3e25a><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-07b3e25a></span></div><div class="title" data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step4_title"))}</div><p data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step4_text"))}</p></div><div class="way-item" data-v-07b3e25a><div class="number" data-v-07b3e25a> 05 <span data-v-07b3e25a><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-07b3e25a></span></div><div class="title" data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step5_title"))}</div><p data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.way.step5_text"))}</p></div></div></section><section class="calculate-form" data-v-07b3e25a>`);
      _push(ssrRenderComponent(CostCalculator, null, null, _parent));
      _push(`</section><section class="why" data-v-07b3e25a><h3 data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.why.h4"))}</h3><ul data-v-07b3e25a><li data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.why.li1"))}</li><li data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.why.li2"))}</li><li data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.why.li3"))}</li><li data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.why.li4"))}</li><li data-v-07b3e25a>${ssrInterpolate(_ctx.$t("services.interiorDesign.why.li5"))}</li></ul><div class="images" data-v-07b3e25a><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-07b3e25a><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-07b3e25a><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-07b3e25a></div><div class="quote" data-v-07b3e25a><div class="image-wrapper" data-v-07b3e25a><img${ssrRenderAttr("src", _imports_4$1)} alt="" data-v-07b3e25a></div><h5 data-v-07b3e25a> &quot;${ssrInterpolate(_ctx.$t("services.interiorDesign.why.quote"))}&quot; </h5></div></section>`);
      _push(ssrRenderComponent(ContactShield, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/interiordesign.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const interiordesign = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-07b3e25a"]]);

export { interiordesign as default };
//# sourceMappingURL=interiordesign.vue.mjs.map
