import { ref, resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrGetDirectiveProps } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "destr";
import "klona";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@vueuse/core";
const _imports_0 = publicAssetsURL("/images/contact-us/arrow.svg");
const _imports_1 = publicAssetsURL("/images/contact-us/main.webp");
const _imports_2 = publicAssetsURL("/images/contact-us/submit-arrow.svg");
const _imports_3 = publicAssetsURL("/images/contact-us/2.webp");
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main data-v-6a566909><p data-v-6a566909>${ssrInterpolate(_ctx.$t("menu.home"))} / ${ssrInterpolate(_ctx.$t("menu.contact"))}</p><h1 data-v-6a566909><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.contactUs"))}</span><span data-v-6a566909><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-6a566909></span></h1><div class="image-wrapper" data-v-6a566909><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-6a566909></div></main><section class="form" data-v-6a566909><p data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.form.description"))}</p><form data-v-6a566909><h2 id="formContactLink" data-v-6a566909><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.form.title"))}</span></h2><label data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.form.nameLabel"))}<span data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input type="text"${ssrRenderAttr("value", form.value.name)} required data-v-6a566909><label data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.form.emailLabel"))}<span data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input type="email"${ssrRenderAttr("value", form.value.email)} required data-v-6a566909><label data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.form.phoneLabel"))}<span data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input type="tel"${ssrRenderAttr("value", form.value.phone)} required data-v-6a566909><label data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.form.messageLabel"))}<span data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input${ssrRenderAttr("value", form.value.message)} required data-v-6a566909><button type="submit" data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.form.submitButton"))}<span data-v-6a566909><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-6a566909></span></button></form></section><section class="info" data-v-6a566909><div class="image-wrapper" data-v-6a566909><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-6a566909></div><div class="content" data-v-6a566909><h2 data-v-6a566909><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.info.titleFirst"))}</span><span data-v-6a566909><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-6a566909></span><br data-v-6a566909><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.info.titleSecond"))}</span></h2><div class="info-wrapper" data-v-6a566909><div class="field" data-v-6a566909><p data-v-6a566909>Email</p><h4 data-v-6a566909>contact@razam.fr</h4></div><div class="field" data-v-6a566909><p data-v-6a566909>${ssrInterpolate(_ctx.$t("footer.tel"))}</p><h4 data-v-6a566909>+33 7 88 77 88 66</h4></div><div class="field" data-v-6a566909><p data-v-6a566909>${ssrInterpolate(_ctx.$t("contact.info.locationLabel"))}</p><h4 data-v-6a566909>${_ctx.$t("contact.info.location") ?? ""}</h4></div><div class="social-links" data-v-6a566909><a href="#" aria-label="Facebook" target="_blank" class="wow animate__animated animate__backInDown" data-v-6a566909><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-v-6a566909><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" data-v-6a566909></path></svg></a><a href="#" aria-label="YouTube" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.1s" data-v-6a566909><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-v-6a566909><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" data-v-6a566909></path></svg></a><a href="#" aria-label="LinkedIn" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.2s" data-v-6a566909><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-v-6a566909><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" data-v-6a566909></path></svg></a><a href="#" aria-label="X" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.3s" data-v-6a566909><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-6a566909><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" data-v-6a566909></path></svg></a><a href="#" aria-label="Instagram" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.4s" data-v-6a566909><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-v-6a566909><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" data-v-6a566909></path></svg></a></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6a566909"]]);
export {
  contact as default
};
//# sourceMappingURL=contact-BhspUc8L.js.map
