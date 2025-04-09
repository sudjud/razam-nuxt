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
      _push(`<!--[--><main data-v-c509d66e><p data-v-c509d66e>${ssrInterpolate(_ctx.$t("menu.home"))} / ${ssrInterpolate(_ctx.$t("menu.contact"))}</p><h1 data-v-c509d66e><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.contactUs"))}</span><span data-v-c509d66e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-c509d66e></span></h1><div class="image-wrapper" data-v-c509d66e><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-c509d66e></div></main><section class="form" data-v-c509d66e><p data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.form.description"))}</p><form data-v-c509d66e><h2 id="formContactLink" data-v-c509d66e><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.form.title"))}</span></h2><label data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.form.nameLabel"))}<span data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input type="text"${ssrRenderAttr("value", form.value.name)} required data-v-c509d66e><label data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.form.emailLabel"))}<span data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input type="email"${ssrRenderAttr("value", form.value.email)} required data-v-c509d66e><label data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.form.phoneLabel"))}<span data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input type="tel"${ssrRenderAttr("value", form.value.phone)} required data-v-c509d66e><label data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.form.messageLabel"))}<span data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input${ssrRenderAttr("value", form.value.message)} required data-v-c509d66e><button type="submit" data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.form.submitButton"))}<span data-v-c509d66e><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-c509d66e></span></button></form></section><section class="info" data-v-c509d66e><div class="image-wrapper" data-v-c509d66e><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-c509d66e></div><div class="content" data-v-c509d66e><h2 data-v-c509d66e><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.info.titleFirst"))}</span><span data-v-c509d66e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-c509d66e></span><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.info.titleSecond"))}</span></h2><div class="info-wrapper" data-v-c509d66e><div class="field" data-v-c509d66e><p data-v-c509d66e>Email</p><h4 data-v-c509d66e>contact@razam.fr</h4></div><div class="field" data-v-c509d66e><p data-v-c509d66e>Телефон</p><h4 data-v-c509d66e>+33 7 88 77 88 66</h4></div><div class="field" data-v-c509d66e><p data-v-c509d66e>${ssrInterpolate(_ctx.$t("contact.info.locationLabel"))}</p><h4 data-v-c509d66e>${_ctx.$t("contact.info.location") ?? ""}</h4></div><div class="social-links" data-v-c509d66e><a href="#" aria-label="Facebook" target="_blank" class="wow animate__animated animate__backInDown" data-v-c509d66e><i class="fab fa-facebook-f" data-v-c509d66e></i></a><a href="#" aria-label="YouTube" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.1s" data-v-c509d66e><i class="fab fa-youtube" data-v-c509d66e></i></a><a href="#" aria-label="LinkedIn" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.2s" data-v-c509d66e><i class="fab fa-linkedin-in" data-v-c509d66e></i></a><a href="#" aria-label="X" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.3s" data-v-c509d66e><i class="fa-brands fa-x-twitter" data-v-c509d66e></i></a><a href="#" aria-label="Instagram" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.4s" data-v-c509d66e><i class="fab fa-instagram" data-v-c509d66e></i></a></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c509d66e"]]);
export {
  contact as default
};
//# sourceMappingURL=contact-CoPpj1_B.js.map
