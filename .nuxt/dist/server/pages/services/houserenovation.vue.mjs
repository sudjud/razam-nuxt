import { resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public34.mjs";
import _imports_1 from "../../_virtual/virtual_public35.mjs";
import _imports_2 from "../../_virtual/virtual_public36.mjs";
import _imports_3 from "../../_virtual/virtual_public37.mjs";
import _imports_4 from "../../_virtual/virtual_public33.mjs";
import ContactShield2 from "../../components/Blocks/ContactShield2.vue.mjs";
import Breadcrumbs from "../../components/Tools/Breadcrumbs.vue.mjs";
import CostCalculator from "../../components/Tools/CostCalculator.vue.mjs";
import { useI18n } from "../../node_modules/vue-i18n/dist/vue-i18n.mjs";
import { useRoute } from "../../node_modules/nuxt/dist/app/composables/router.mjs";
import { useHead } from "../../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
/* empty css                      */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
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
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp0, _temp1, _temp2, _temp3, _temp4;
      _push(`<!--[--><main data-v-3021cb34><p data-v-3021cb34>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`</p><h1 data-v-3021cb34><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.h1"))}<br data-v-3021cb34> ${ssrInterpolate(_ctx.$t("services.houseRenovation.h1p2"))}</span></h1><div class="image-wrapper" data-v-3021cb34><img${ssrRenderAttrs(_temp0 = mergeProps({
        "data-src": _imports_0,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-3021cb34>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div></main><section class="text" data-v-3021cb34><p data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.p1"))}</p><h4 data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.h1"))}</h4><p data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.p2"))}</p><h4 data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.h2"))}</h4><p data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.p3"))}</p><h4 data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.h3"))}</h4><ul data-v-3021cb34><li data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul1.li1"))}</li><li data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul1.li2"))}</li><li data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul1.li3"))}</li><li data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul1.li4"))}</li><li data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul1.li5"))}</li><li data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul1.li6"))}</li><li data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul1.li7"))}</li></ul><h4 data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.h4"))}</h4><p data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.p4"))}</p><h4 data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.h5"))}</h4><ul data-v-3021cb34><li data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul2.li1"))}</li><li data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul2.li2"))}</li><li data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul2.li3"))}</li><li data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul2.li4"))}</li><li data-v-3021cb34>${ssrInterpolate(_ctx.$t("services.houseRenovation.text.ul2.li5"))}</li></ul></section><section class="calculate-form" data-v-3021cb34>`);
      _push(ssrRenderComponent(CostCalculator, null, null, _parent));
      _push(`</section><section class="why" data-v-3021cb34><div class="images" data-v-3021cb34><img${ssrRenderAttrs(_temp1 = mergeProps({
        "data-src": _imports_1,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-3021cb34>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : _temp1.innerHTML ?? ""}<img${ssrRenderAttrs(_temp2 = mergeProps({
        "data-src": _imports_2,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-3021cb34>${"textContent" in _temp2 ? ssrInterpolate(_temp2.textContent) : _temp2.innerHTML ?? ""}<img${ssrRenderAttrs(_temp3 = mergeProps({
        "data-src": _imports_3,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-3021cb34>${"textContent" in _temp3 ? ssrInterpolate(_temp3.textContent) : _temp3.innerHTML ?? ""}</div><div class="quote" data-v-3021cb34><div class="image-wrapper" data-v-3021cb34><img${ssrRenderAttrs(_temp4 = mergeProps({
        "data-src": _imports_4,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-3021cb34>${"textContent" in _temp4 ? ssrInterpolate(_temp4.textContent) : _temp4.innerHTML ?? ""}</div><h5 data-v-3021cb34>&quot;${ssrInterpolate(_ctx.$t("services.houseRenovation.text.quote"))}&quot;</h5></div></section>`);
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
const houserenovation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3021cb34"]]);
export {
  houserenovation as default
};
//# sourceMappingURL=houserenovation.vue.mjs.map
