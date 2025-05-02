import { mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext, resolveDirective } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './virtual_public34.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_4 } from './virtual_public33.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { _ as _imports_0 } from './virtual_public49.mjs';
import { _ as _export_sfc, u as useLocalePath, a as useRoute } from './server.mjs';
import { B as Breadcrumbs } from './Breadcrumbs.vue.mjs';
import { C as CostCalculator } from './CostCalculator.vue.mjs';
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

const _imports_1$1 = publicAssetsURL("/images/services/house-renovation/1.webp");

const _imports_2 = publicAssetsURL("/images/services/house-renovation/2.webp");

const _imports_3 = publicAssetsURL("/images/services/house-renovation/3.webp");

const _imports_1 = publicAssetsURL("/images/services/house-renovation/shield.webp");

const _sfc_main$1 = {
  __name: "ContactShield2",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shield" }, _attrs))} data-v-76fa4aec><div class="text" data-v-76fa4aec>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 data-v-76fa4aec${_scopeId}><span class="no-wrap" data-v-76fa4aec${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield2.h1"))}</span><div class="spaced" data-v-76fa4aec${_scopeId}><span data-v-76fa4aec${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield2.h2"))}</span><br data-v-76fa4aec${_scopeId}><span data-v-76fa4aec${_scopeId}>${ssrInterpolate(_ctx.$t("services.contactShield2.h3"))}<img class="arrow"${ssrRenderAttr("src", _imports_0)} alt="" data-v-76fa4aec${_scopeId}></span></div></h2>`);
          } else {
            return [
              createVNode("h2", null, [
                createVNode("span", { class: "no-wrap" }, toDisplayString(_ctx.$t("services.contactShield2.h1")), 1),
                createVNode("div", { class: "spaced" }, [
                  createVNode("span", null, toDisplayString(_ctx.$t("services.contactShield2.h2")), 1),
                  createVNode("br"),
                  createVNode("span", null, [
                    createTextVNode(toDisplayString(_ctx.$t("services.contactShield2.h3")), 1),
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
      _push(`<p data-v-76fa4aec>${ssrInterpolate(_ctx.$t("services.contactShield2.p"))}</p></div><div class="image" data-v-76fa4aec><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-76fa4aec></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/ContactShield2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactShield2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-76fa4aec"]]);

const baseURL = "https://razam.fr";
const _sfc_main = {
  __name: "houserenovation",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const route = useRoute();
    useHead({
      title: () => t("services.houseRenovation.h1"),
      titleTemplate: (chunk) => `${chunk}`,
      meta: [
        {
          name: "description",
          content: () => t(`services.houseRenovation.text.p1`).slice(0, 160)
        },
        { name: "keywords", content: () => t(`meta.common.keywords`) },
        { property: "og:title", content: () => t(`services.houseRenovation.h1`) },
        {
          property: "og:description",
          content: () => t(`services.houseRenovation.text.p1`).slice(0, 160)
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
        { property: "og:image:alt", content: () => t(`services.houseRenovation.h1`) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: () => t(`services.houseRenovation.h1`) },
        {
          name: "twitter:description",
          content: () => t(`services.houseRenovation.text.p1`).slice(0, 160)
        },
        { name: "twitter:image", content: `${baseURL}/images/logo.webp` },
        { name: "twitter:image:alt", content: () => t(`services.houseRenovation.h1`) }
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
      _push(`<!--[--><main data-v-8f510af7><p data-v-8f510af7>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`</p><h1 data-v-8f510af7><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.h1"))}<br data-v-8f510af7> ${ssrInterpolate(_ctx.$t("services.houseRenovation.h1p2"))}</span></h1><div class="image-wrapper" data-v-8f510af7><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-8f510af7></div></main><section class="text" data-v-8f510af7><p data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.p1"))}</p><h4 data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.h1"))}</h4><p data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.p2"))}</p><h4 data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.h2"))}</h4><p data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.p3"))}</p><h4 data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.h3"))}</h4><ul data-v-8f510af7><li data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul1.li1"))}</li><li data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul1.li2"))}</li><li data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul1.li3"))}</li><li data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul1.li4"))}</li><li data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul1.li5"))}</li><li data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul1.li6"))}</li><li data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul1.li7"))}</li></ul><h4 data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.h4"))}</h4><p data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.p4"))}</p><h4 data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.h5"))}</h4><ul data-v-8f510af7><li data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul2.li1"))}</li><li data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul2.li2"))}</li><li data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul2.li3"))}</li><li data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul2.li4"))}</li><li data-v-8f510af7>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul2.li5"))}</li></ul></section><section class="calculate-form" data-v-8f510af7>`);
      _push(ssrRenderComponent(CostCalculator, null, null, _parent));
      _push(`</section><section class="why" data-v-8f510af7><div class="images" data-v-8f510af7><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-8f510af7><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-8f510af7><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-8f510af7></div><div class="quote" data-v-8f510af7><div class="image-wrapper" data-v-8f510af7><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-8f510af7></div><h5 data-v-8f510af7>&quot;${ssrInterpolate(_ctx.$t("services.houseRenovation.text.quote"))}&quot;</h5></div></section>`);
      _push(ssrRenderComponent(ContactShield2, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/houserenovation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const houserenovation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f510af7"]]);

export { houserenovation as default };
//# sourceMappingURL=houserenovation.vue.mjs.map
