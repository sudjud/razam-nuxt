
// @ts-nocheck


export const localeCodes =  [
  "en",
  "fr",
  "ru"
]

export const localeLoaders = {
  "en": [],
  "fr": [],
  "ru": []
}

export const vueI18nConfigs = [
  () => import("../locales/index.js?hash=3bdf132e&config=1" /* webpackChunkName: "__locales_index_js_3bdf132e" */)
]

export const nuxtI18nOptions = {
  "restructureDir": "i18n",
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false,
    "typedPages": true,
    "typedOptionsAndMessages": false,
    "generatedLocaleFilePathFormat": "absolute",
    "alternateLinkCanonicalQueries": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false,
    "optimizeTranslationDirective": true
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "./locales/index.js",
  "locales": [
    {
      "code": "en",
      "iso": "en-US",
      "name": "En"
    },
    {
      "code": "fr",
      "iso": "fr-FR",
      "name": "Fr"
    },
    {
      "code": "ru",
      "iso": "ru-RU",
      "name": "Ru"
    }
  ],
  "defaultLocale": "fr",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": "locales",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "http://localhost:3000",
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "iso": "en-US",
    "name": "En",
    "files": []
  },
  {
    "code": "fr",
    "iso": "fr-FR",
    "name": "Fr",
    "files": []
  },
  {
    "code": "ru",
    "iso": "ru-RU",
    "name": "Ru",
    "files": []
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false
export const hasPages = true

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
