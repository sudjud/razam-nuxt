import { u as useI18n } from './vue-i18n.mjs';
import { a as useRoute } from './server.mjs';
import { u as useHead } from './v3.mjs';

const useSeo = (pageKey = "home") => {
  const { t, locale } = useI18n();
  const route = useRoute();
  const baseURL = "https://razam.fr";
  useHead({
    title: () => t(`meta.${pageKey}.title`),
    titleTemplate: (chunk) => `Razam | ${chunk}`,
    meta: [
      { name: "description", content: () => t(`meta.${pageKey}.description`).slice(0, 160) },
      { name: "keywords", content: () => t(`meta.${pageKey}.keywords`) },
      { property: "og:title", content: () => t(`meta.${pageKey}.title`) },
      { property: "og:description", content: () => t(`meta.${pageKey}.description`).slice(0, 160) },
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
      { property: "og:image:alt", content: () => t(`meta.${pageKey}.title`) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: () => t(`meta.${pageKey}.title`) },
      { name: "twitter:description", content: () => t(`meta.${pageKey}.description`).slice(0, 160) },
      { name: "twitter:image", content: `${baseURL}/images/logo.webp` },
      { name: "twitter:image:alt", content: () => t(`meta.${pageKey}.title`) }
    ],
    link: [
      { rel: "canonical", href: `${baseURL}${route.path}` },
      { rel: "alternate", hreflang: "en", href: `${baseURL}/en${route.path}` },
      { rel: "alternate", hreflang: "fr", href: `${baseURL}${route.path}` },
      { rel: "alternate", hreflang: "ru", href: `${baseURL}/ru${route.path}` },
      { rel: "alternate", hreflang: "x-default", href: `${baseURL}${route.path}` }
    ]
  });
};

export { useSeo as u };
//# sourceMappingURL=useSeo.mjs.map
