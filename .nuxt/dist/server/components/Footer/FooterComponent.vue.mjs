import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public69.mjs";
import SocialMedias from "../Tools/SocialMedias.vue.mjs";
import { useRoute } from "vue-router";
import { useLocalePath } from "../../node_modules/_nuxtjs/i18n/dist/runtime/composables/index.mjs";
import { useI18n } from "../../node_modules/vue-i18n/dist/vue-i18n.mjs";
/* empty css                      */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
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
      _push(`<!--[--><footer class="footer" data-v-ad09d62a><div class="links" data-v-ad09d62a><div class="logo" data-v-ad09d62a><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-ad09d62a></div><div class="medias" data-v-ad09d62a>`);
      _push(ssrRenderComponent(SocialMedias, null, null, _parent));
      _push(`</div><nav class="nav" data-v-ad09d62a><ul data-v-ad09d62a><li data-v-ad09d62a>${ssrInterpolate(_ctx.$t("footer.terms"))}</li><li data-v-ad09d62a>`);
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
      _push(`</li><li data-v-ad09d62a>`);
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
      _push(`</li><li data-v-ad09d62a>`);
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
      _push(`</li><li data-v-ad09d62a>`);
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
      _push(`</li><li data-v-ad09d62a>`);
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
      _push(`</li><li data-v-ad09d62a>`);
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
      _push(`</li></ul><ul data-v-ad09d62a><li data-v-ad09d62a>${ssrInterpolate(_ctx.$t("footer.documentsH"))}</li><li data-v-ad09d62a><a href="" data-v-ad09d62a>${ssrInterpolate(_ctx.$t("footer.policy"))}</a></li><li data-v-ad09d62a><a href="" data-v-ad09d62a>${ssrInterpolate(_ctx.$t("footer.terms"))}</a></li><li data-v-ad09d62a><a href="" data-v-ad09d62a>К bis</a></li></ul></nav></div><div class="filler" data-v-ad09d62a></div><div class="info" data-v-ad09d62a><h2 data-v-ad09d62a>${ssrInterpolate(_ctx.$t("footer.contact"))} <span data-v-ad09d62a><svg viewBox="0 0 59 70" xmlns="http://www.w3.org/2000/svg" data-v-ad09d62a><path d="M48.6481 0.0951899L11.5821 6.01396C10.6032 6.18776 9.73171 6.73909 9.15537 7.54919C8.57902 8.35929 8.34392 9.36335 8.50069 10.3451C8.65746 11.3269 9.19356 12.2078 9.99352 12.7981C10.7935 13.3885 11.7933 13.641 12.7776 13.5013L40.8048 9.02586L1.67946 63.0209C1.0894 63.8352 0.846996 64.8505 1.00556 65.8436C1.16413 66.8366 1.71069 67.726 2.52499 68.316C3.3393 68.9061 4.35465 69.1485 5.34768 68.9899C6.34071 68.8313 7.23008 68.2848 7.82014 67.4705L46.9455 13.4755L51.4209 41.5027C51.4917 42.0011 51.661 42.4805 51.919 42.9129C52.177 43.3452 52.5185 43.7219 52.9236 44.0208C53.3287 44.3198 53.7893 44.535 54.2785 44.6541C54.7677 44.7731 55.2757 44.7935 55.7729 44.7142C56.2701 44.6348 56.7465 44.4572 57.1743 44.1917C57.6021 43.9262 57.9727 43.5782 58.2646 43.168C58.5564 42.7577 58.7637 42.2935 58.8742 41.8023C58.9847 41.3111 58.9963 40.8028 58.9083 40.3071L52.9895 3.24106C52.8308 2.24825 52.2843 1.35911 51.4702 0.769174C50.656 0.179236 49.6409 -0.0632003 48.6481 0.0951899Z" data-v-ad09d62a></path></svg></span></h2><div class="field" data-v-ad09d62a><p data-v-ad09d62a>Email</p><h4 data-v-ad09d62a>contact@razam.fr</h4></div><div class="field" data-v-ad09d62a><p data-v-ad09d62a>${ssrInterpolate(_ctx.$t("footer.tel"))}</p><h4 data-v-ad09d62a>+33 7 88 77 88 66</h4></div><div class="field" data-v-ad09d62a><p data-v-ad09d62a>${ssrInterpolate(_ctx.$t("footer.location"))}</p><h4 data-v-ad09d62a> 305 Av. Georges Pompidou, 06220<br data-v-ad09d62a>Vallauris, ${ssrInterpolate(_ctx.$t("footer.france"))}</h4></div></div></footer><div class="add" data-v-ad09d62a> © 2025 Razam. Made with ♥<a target="_blank" href="https://novoweb.eu/" data-v-ad09d62a>NOVOWEB.</a></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/FooterComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FooterComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ad09d62a"]]);
export {
  FooterComponent as default
};
//# sourceMappingURL=FooterComponent.vue.mjs.map
