const localeCodes = [
  "en",
  "fr",
  "ru"
];
const localeLoaders = {
  en: [],
  fr: [],
  ru: []
};
const vueI18nConfigs = [
  () => import(
    "../locales/index.mjs"
    /* webpackChunkName: "config_index_46js_30548bad" */
  )
];
const normalizedLocales = [
  {
    code: "en",
    iso: "en-US",
    name: "En",
    files: []
  },
  {
    code: "fr",
    iso: "fr-FR",
    name: "Fr",
    files: []
  },
  {
    code: "ru",
    iso: "ru-RU",
    name: "Ru",
    files: []
  }
];
const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n";
const parallelPlugin = false;
const DEFAULT_COOKIE_KEY = "i18n_redirected";
const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal";
const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp";
export {
  DEFAULT_COOKIE_KEY,
  DEFAULT_DYNAMIC_PARAMS_KEY,
  NUXT_I18N_MODULE_ID,
  SWITCH_LOCALE_PATH_LINK_IDENTIFIER,
  localeCodes,
  localeLoaders,
  normalizedLocales,
  parallelPlugin,
  vueI18nConfigs
};
//# sourceMappingURL=i18n.options.mjs.map
