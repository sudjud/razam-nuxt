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
const _imports_1 = publicAssetsURL("/images/contact-us/main.jpg");
const _imports_2 = publicAssetsURL("/images/contact-us/submit-arrow.svg");
const _imports_3 = publicAssetsURL("/images/contact-us/2.jpg");
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
      _push(`<!--[--><main data-v-177b12b1><p data-v-177b12b1>${ssrInterpolate(_ctx.$t("menu.home"))} / ${ssrInterpolate(_ctx.$t("menu.contact"))}</p><h1 data-v-177b12b1><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.contactUs"))}</span><span data-v-177b12b1><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-177b12b1></span></h1><div class="image-wrapper" data-v-177b12b1><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-177b12b1></div></main><section class="form" data-v-177b12b1><p data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.form.description"))}</p><form data-v-177b12b1><h2 data-v-177b12b1><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.form.title"))}</span></h2><label data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.form.nameLabel"))}<span data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input type="text"${ssrRenderAttr("value", form.value.name)} required data-v-177b12b1><label data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.form.emailLabel"))}<span data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input type="email"${ssrRenderAttr("value", form.value.email)} required data-v-177b12b1><label data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.form.phoneLabel"))}<span data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input type="tel"${ssrRenderAttr("value", form.value.phone)} required data-v-177b12b1><label data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.form.messageLabel"))}<span data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input${ssrRenderAttr("value", form.value.message)} required data-v-177b12b1><button type="submit" data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.form.submitButton"))}<span data-v-177b12b1><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-177b12b1></span></button></form></section><section class="info" data-v-177b12b1><div class="image-wrapper" data-v-177b12b1><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-177b12b1></div><div class="content" data-v-177b12b1><h2 data-v-177b12b1><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.info.titleFirst"))}</span><span data-v-177b12b1><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-177b12b1></span><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.info.titleSecond"))}</span></h2><div class="info-wrapper" data-v-177b12b1><div class="field" data-v-177b12b1><p data-v-177b12b1>Email</p><h4 data-v-177b12b1>contact@razam.fr</h4></div><div class="field" data-v-177b12b1><p data-v-177b12b1>Телефон</p><h4 data-v-177b12b1>+33 7 88 77 88 66</h4></div><div class="field" data-v-177b12b1><p data-v-177b12b1>${ssrInterpolate(_ctx.$t("contact.info.locationLabel"))}</p><h4 data-v-177b12b1>${_ctx.$t("contact.info.location") ?? ""}</h4></div><div class="social-links" data-v-177b12b1><a href="#" aria-label="Facebook" target="_blank" class="wow animate__animated animate__backInDown" data-v-177b12b1><i class="fab fa-facebook-f" data-v-177b12b1></i></a><a href="#" aria-label="YouTube" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.1s" data-v-177b12b1><i class="fab fa-youtube" data-v-177b12b1></i></a><a href="#" aria-label="LinkedIn" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.2s" data-v-177b12b1><i class="fab fa-linkedin-in" data-v-177b12b1></i></a><a href="#" aria-label="X" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.3s" data-v-177b12b1><i class="fa-brands fa-x-twitter" data-v-177b12b1></i></a><a href="#" aria-label="Instagram" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.4s" data-v-177b12b1><i class="fab fa-instagram" data-v-177b12b1></i></a></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-177b12b1"]]);
export {
  contact as default
};
//# sourceMappingURL=contact-CIV2ljt5.js.map
