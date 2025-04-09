import { computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, defineComponent, resolveComponent, createVNode, shallowRef, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderVNode, ssrRenderSlot } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-BSCCcEt5.js";
import { useRoute } from "vue-router";
import { u as useI18n } from "./vue-i18n-Dx5HdeXT.js";
import { ac as useRequestEvent, _ as _export_sfc, ad as useSwitchLocalePath, ab as useLocalePath } from "../server.mjs";
import { _ as _imports_0$2 } from "./logo-KvsXDODS.js";
import { S as SocialMedias } from "./SocialMedias-DjZ_d0nS.js";
import "hookable";
import { u as useHead } from "./index-CrXeyONu.js";
import "destr";
import "klona";
import "defu";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { getRequestURL } from "h3";
import "ofetch";
import "unctx";
import "unhead";
import "@unhead/shared";
import "radix3";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@vueuse/core";
function useRequestURL(opts) {
  {
    return getRequestURL(useRequestEvent(), opts);
  }
}
const _sfc_main$4 = {
  __name: "LangSwitchComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales } = useI18n();
    const switchLocalePath = useSwitchLocalePath();
    const availableLocales = computed(() => {
      return locales.value.filter((i) => i.code !== locale.value);
    });
    const currentLocal = computed(() => {
      return locales.value.find((i) => i.code === locale.value).name;
    });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "switcher" }, _attrs))} data-v-f9dd566f><div class="current" data-v-f9dd566f>${ssrInterpolate(unref(currentLocal))}</div><div class="${ssrRenderClass([{ open: unref(isOpen) }, "dropdown"])}" data-v-f9dd566f><!--[-->`);
      ssrRenderList(unref(availableLocales), (locale2) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: locale2.code,
          to: unref(switchLocalePath)(locale2.code)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(locale2.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(locale2.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/LangSwitchComponent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const LangSwitchComponent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-f9dd566f"]]);
const _sfc_main$3 = defineComponent({
  name: "HeaderComponent",
  components: {
    LangSwitchComponent
  },
  setup() {
    const route = useRoute();
    const localePath = useLocalePath();
    const { locale } = useI18n();
    const isActive = (path) => {
      const localizedPath = localePath(path);
      return route.path === localizedPath;
    };
    ref(0);
    const isHidden = ref(false);
    return { isActive, isHidden, localePath, locale };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_LangSwitchComponent = resolveComponent("LangSwitchComponent");
  _push(`<header${ssrRenderAttrs(mergeProps({
    class: ["header", { hidden: _ctx.isHidden }]
  }, _attrs))} data-v-cac19269><div class="container" data-v-cac19269><div class="logo" data-v-cac19269>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="Razam" data-v-cac19269${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$2,
            alt: "Razam"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><nav class="nav-menu" data-v-cac19269><ul data-v-cac19269><li data-v-cac19269>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.localePath("/"),
    class: { active: _ctx.isActive("/") }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><span class="divider" data-v-cac19269>/</span><li data-v-cac19269>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.localePath("/about"),
    class: { active: _ctx.isActive("/about") }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.about"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.about")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><span class="divider" data-v-cac19269>/</span><li data-v-cac19269>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.localePath("/services"),
    class: { active: _ctx.isActive("/services") }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.services"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.services")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><span class="divider" data-v-cac19269>/</span><li data-v-cac19269>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.localePath("/portfolio"),
    class: { active: _ctx.isActive("/portfolio") }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.portfolio"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.portfolio")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><span class="divider" data-v-cac19269>/</span><li data-v-cac19269>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.localePath("/news"),
    class: { active: _ctx.isActive("/news") }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.news"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.news")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><span class="divider" data-v-cac19269>/</span><li data-v-cac19269>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.localePath("/contact"),
    class: { active: _ctx.isActive("/contact") }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("menu.contact"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("menu.contact")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-cac19269>`);
  _push(ssrRenderComponent(_component_LangSwitchComponent, null, null, _parent));
  _push(`</li></ul></nav></div></header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/HeaderComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HeaderComponent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cac19269"]]);
const _imports_0$1 = "" + __buildAssetsURL("logo-white.DakQc2sh.png");
const _sfc_main$2 = {
  __name: "FooterComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute;
    const localePath = useLocalePath();
    const { locale } = useI18n();
    const isActive = (path) => {
      const localizedPath = localePath(path);
      return route.path === localizedPath;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><footer class="footer" data-v-5fe09354><div class="links" data-v-5fe09354><div class="logo" data-v-5fe09354><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-5fe09354></div><div class="medias" data-v-5fe09354>`);
      _push(ssrRenderComponent(SocialMedias, null, null, _parent));
      _push(`</div><nav class="nav" data-v-5fe09354><ul data-v-5fe09354><li data-v-5fe09354>${ssrInterpolate(_ctx.$t("footer.terms"))}</li><li data-v-5fe09354>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: { active: isActive("/") }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("menu.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("menu.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-5fe09354>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/about"),
        class: { active: isActive("/about") }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("menu.about"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("menu.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-5fe09354>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/services"),
        class: { active: isActive("/services") }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("menu.services"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("menu.services")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-5fe09354>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/portfolio"),
        class: { active: isActive("/portfolio") }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("menu.portfolio"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("menu.portfolio")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-5fe09354>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/news"),
        class: { active: isActive("/news") }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("menu.news"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("menu.news")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-5fe09354>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/contact"),
        class: { active: isActive("/contact") }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("menu.contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("menu.contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><ul data-v-5fe09354><li data-v-5fe09354>${ssrInterpolate(_ctx.$t("footer.documentsH"))}</li><li data-v-5fe09354><a href="" data-v-5fe09354>${ssrInterpolate(_ctx.$t("footer.policy"))}</a></li><li data-v-5fe09354><a href="" data-v-5fe09354>${ssrInterpolate(_ctx.$t("footer.terms"))}</a></li><li data-v-5fe09354><a href="" data-v-5fe09354>К bis</a></li></ul></nav></div><div class="filler" data-v-5fe09354></div><div class="info" data-v-5fe09354><h2 data-v-5fe09354>${ssrInterpolate(_ctx.$t("footer.contact"))} <span data-v-5fe09354><svg viewBox="0 0 59 70" xmlns="http://www.w3.org/2000/svg" data-v-5fe09354><path d="M48.6481 0.0951899L11.5821 6.01396C10.6032 6.18776 9.73171 6.73909 9.15537 7.54919C8.57902 8.35929 8.34392 9.36335 8.50069 10.3451C8.65746 11.3269 9.19356 12.2078 9.99352 12.7981C10.7935 13.3885 11.7933 13.641 12.7776 13.5013L40.8048 9.02586L1.67946 63.0209C1.0894 63.8352 0.846996 64.8505 1.00556 65.8436C1.16413 66.8366 1.71069 67.726 2.52499 68.316C3.3393 68.9061 4.35465 69.1485 5.34768 68.9899C6.34071 68.8313 7.23008 68.2848 7.82014 67.4705L46.9455 13.4755L51.4209 41.5027C51.4917 42.0011 51.661 42.4805 51.919 42.9129C52.177 43.3452 52.5185 43.7219 52.9236 44.0208C53.3287 44.3198 53.7893 44.535 54.2785 44.6541C54.7677 44.7731 55.2757 44.7935 55.7729 44.7142C56.2701 44.6348 56.7465 44.4572 57.1743 44.1917C57.6021 43.9262 57.9727 43.5782 58.2646 43.168C58.5564 42.7577 58.7637 42.2935 58.8742 41.8023C58.9847 41.3111 58.9963 40.8028 58.9083 40.3071L52.9895 3.24106C52.8308 2.24825 52.2843 1.35911 51.4702 0.769174C50.656 0.179236 49.6409 -0.0632003 48.6481 0.0951899Z" data-v-5fe09354></path></svg></span></h2><div class="field" data-v-5fe09354><p data-v-5fe09354>Email</p><h4 data-v-5fe09354>contact@razam.fr</h4></div><div class="field" data-v-5fe09354><p data-v-5fe09354>${ssrInterpolate(_ctx.$t("footer.tel"))}</p><h4 data-v-5fe09354>+33 7 88 77 88 66</h4></div><div class="field" data-v-5fe09354><p data-v-5fe09354>${ssrInterpolate(_ctx.$t("footer.location"))}</p><h4 data-v-5fe09354> 305 Av. Georges Pompidou, 06220<br data-v-5fe09354>Vallauris, ${ssrInterpolate(_ctx.$t("footer.france"))}</h4></div></div></footer><div class="add" data-v-5fe09354> © 2025 Razam. Made with ♥<a target="_blank" href="https://novoweb.eu/" data-v-5fe09354>NOVOWEB.</a></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/FooterComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FooterComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5fe09354"]]);
const _imports_0 = publicAssetsURL("/images/loader/logo-white.webp");
const _imports_1 = publicAssetsURL("/images/loader/devider.webp");
const _sfc_main$1 = {
  __name: "LoaderComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const loaded = ref(false);
    const percentage = ref(0);
    const scale = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      if (!loaded.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader" }, _attrs))} data-v-7b6ae4c1><div class="logo" data-v-7b6ae4c1><img class="logo-img"${ssrRenderAttr("src", _imports_0)} alt="Logo" data-v-7b6ae4c1><img${ssrRenderAttr("src", _imports_1)} alt="Loading Stick" class="stick" style="${ssrRenderStyle({ transform: `scaleY(${scale.value})` })}" data-v-7b6ae4c1></div><div class="percentage" data-v-7b6ae4c1>${ssrInterpolate(percentage.value)}%</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loader/LoaderComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LoaderComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7b6ae4c1"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const loader = ref(true);
    setTimeout(() => {
      loader.value = false;
    }, 2310);
    const url = useRequestURL();
    const baseURL = `${url.protocol}//${url.host}`;
    const { t, locale } = useI18n();
    const route = useRoute();
    useHead({
      title: () => t("meta.title"),
      meta: [
        { name: "description", content: () => t("meta.description").slice(0, 160) },
        { property: "og:title", content: () => t("meta.title") },
        { property: "og:description", content: () => t("meta.description").slice(0, 160) },
        { property: "og:url", content: () => `${baseURL}${route.path}` },
        { property: "og:locale", content: () => locale.value },
        { property: "og:image", content: `${baseURL}/images/logo.png` },
        { property: "og:image:alt", content: t("meta.title") }
      ],
      link: [
        { rel: "canonical", href: `${baseURL}${route.path}` },
        { rel: "alternate", hreflang: "en", href: `${baseURL}/en/` },
        { rel: "alternate", hreflang: "fr", href: `${baseURL}/fr/` },
        { rel: "alternate", hreflang: "ru", href: `${baseURL}/ru/` },
        { rel: "alternate", hreflang: "x-default", href: `${baseURL}/` }
      ]
    });
    const getInitialHeaderComponent = () => {
      return HeaderComponent;
    };
    const currentHeaderComponent = shallowRef(getInitialHeaderComponent());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))}>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(currentHeaderComponent.value), null, null), _parent);
      _push(ssrRenderComponent(LoaderComponent, null, null, _parent));
      _push(`<div>`);
      if (!unref(loader)) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
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
//# sourceMappingURL=default-BvCjiDyW.js.map
