import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import HeaderComponent from "../components/Header/HeaderComponent.vue.mjs";
import HeaderSmComponent from "../components/Header/HeaderSmComponent.vue.mjs";
import FooterComponent from "../components/Footer/FooterComponent.vue.mjs";
import { useRuntimeConfig } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import { useHead } from "../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
import "D:/projects/razam-nuxt/node_modules/klona/dist/index.mjs";
import "D:/projects/razam-nuxt/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { useRoute } from "vue-router";
import LoaderComponent from "../components/Loader/LoaderComponent.vue.mjs";
import { useLocalePath } from "../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
/* empty css              */
import { useI18n } from "../node_modules/vue-i18n/dist/vue-i18n.mjs";
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const loader = ref(true);
    setTimeout(() => {
      loader.value = false;
    }, 2310);
    const { t, locale } = useI18n();
    const route = useRoute();
    const localePath = useLocalePath();
    const config = useRuntimeConfig();
    const baseURL = config.public.siteUrl || "https://razam.fr";
    useHead({
      title: () => t("meta.common.title"),
      htmlAttrs: {
        lang: () => locale.value || "fr"
      },
      meta: [
        { name: "description", content: () => t("meta.common.description").slice(0, 160) },
        { name: "keywords", content: () => t("meta.common.keywords") },
        // Open Graph
        { property: "og:title", content: () => t("meta.common.title") },
        { property: "og:description", content: () => t("meta.common.description").slice(0, 160) },
        { property: "og:url", content: () => `${baseURL}${route.fullPath}` },
        { property: "og:locale", content: () => {
          switch (locale.value) {
            case "en":
              return "en_US";
            case "ru":
              return "ru_RU";
            default:
              return "fr_FR";
          }
        } },
        { property: "og:image", content: `${baseURL}/images/logo.webp` },
        { property: "og:image:alt", content: () => t("meta.common.title") },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: () => t("meta.common.title") },
        { name: "twitter:description", content: () => t("meta.common.description").slice(0, 160) },
        { name: "twitter:image", content: `${baseURL}/images/logo.webp` },
        { name: "twitter:image:alt", content: () => t("meta.common.title") }
      ],
      link: [
        { rel: "canonical", href: `${baseURL}${route.fullPath}` },
        { rel: "alternate", hreflang: "fr", href: `${baseURL}${localePath("index", "fr")}` },
        { rel: "alternate", hreflang: "en", href: `${baseURL}${localePath("index", "en")}` },
        { rel: "alternate", hreflang: "ru", href: `${baseURL}${localePath("index", "ru")}` },
        { rel: "alternate", hreflang: "x-default", href: `${baseURL}${localePath("index", "fr")}` }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))}><div class="headersm__wrapper">`);
      _push(ssrRenderComponent(HeaderSmComponent, null, null, _parent));
      _push(`</div><div class="headerxl__wrapper">`);
      _push(ssrRenderComponent(HeaderComponent, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(LoaderComponent, null, null, _parent));
      _push(`<div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(FooterComponent, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default.vue.mjs.map
