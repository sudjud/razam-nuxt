import { resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public38.mjs";
import _imports_1 from "../../_virtual/virtual_public39.mjs";
import _imports_2 from "../../_virtual/virtual_public40.mjs";
import _imports_3 from "../../_virtual/virtual_public41.mjs";
import _imports_4 from "../../_virtual/virtual_public33.mjs";
import ContactShield3 from "../../components/Blocks/ContactShield3.vue.mjs";
import Breadcrumbs from "../../components/Tools/Breadcrumbs.vue.mjs";
import CostCalculator from "../../components/Tools/CostCalculator.vue.mjs";
import { useI18n } from "../../node_modules/vue-i18n/dist/vue-i18n.mjs";
import { useRoute } from "../../node_modules/nuxt/dist/app/composables/router.mjs";
import { useHead } from "../../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
/* empty css                         */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const baseURL = "https://razam.fr";
const _sfc_main = {
  __name: "commercerenovation",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const route = useRoute();
    useHead({
      title: () => t("services.commerceRenovation.h1"),
      titleTemplate: (chunk) => `${chunk}`,
      meta: [
        {
          name: "description",
          content: () => t(`services.commerceRenovation.text.p1`).slice(0, 160)
        },
        { name: "keywords", content: () => t(`meta.common.keywords`) },
        { property: "og:title", content: () => t(`services.commerceRenovation.h1`) },
        {
          property: "og:description",
          content: () => t(`services.commerceRenovation.text.p1`).slice(0, 160)
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
        { property: "og:image:alt", content: () => t(`services.commerceRenovation.h1`) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: () => t(`services.commerceRenovation.h1`) },
        {
          name: "twitter:description",
          content: () => t(`services.commerceRenovation.text.p1`).slice(0, 160)
        },
        { name: "twitter:image", content: `${baseURL}/images/logo.webp` },
        { name: "twitter:image:alt", content: () => t(`services.commerceRenovation.h1`) }
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
      _push(`<!--[--><main data-v-826179dd><p data-v-826179dd>`);
      _push(ssrRenderComponent(Breadcrumbs, null, null, _parent));
      _push(`</p><h1 data-v-826179dd><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.h1"))}<br data-v-826179dd> ${ssrInterpolate(_ctx.$t("services.commerceRenovation.h1p2"))}</span></h1><div class="image-wrapper" data-v-826179dd><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-826179dd></div></main><section class="text" data-v-826179dd><p data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.p1"))}</p><h4 data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.h1"))}</h4><p data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.p2"))}</p><h4 data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.h2"))}</h4><p data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.p3"))}</p><h4 data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.h3"))}</h4><p data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.p4"))}</p><h4 data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.h4"))}</h4><ul data-v-826179dd><li data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul1.li1"))}</li><li data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul1.li2"))}</li><li data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul1.li3"))}</li><li data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul1.li4"))}</li></ul><h4 data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.h5"))}</h4><ul data-v-826179dd><li data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul2.li1"))}</li><li data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul2.li2"))}</li><li data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul2.li3"))}</li><li data-v-826179dd>${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.ul2.li4"))}</li></ul></section><section class="calculate-form" data-v-826179dd>`);
      _push(ssrRenderComponent(CostCalculator, null, null, _parent));
      _push(`</section><section class="why" data-v-826179dd><div class="images" data-v-826179dd><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-826179dd><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-826179dd><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-826179dd></div><div class="quote" data-v-826179dd><div class="image-wrapper" data-v-826179dd><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-826179dd></div><h5 data-v-826179dd>&quot;${ssrInterpolate(_ctx.$t("services.commerceRenovation.text.quote"))}&quot;</h5></div></section>`);
      _push(ssrRenderComponent(ContactShield3, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/commercerenovation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commercerenovation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-826179dd"]]);
export {
  commercerenovation as default
};
//# sourceMappingURL=commercerenovation.vue.mjs.map
