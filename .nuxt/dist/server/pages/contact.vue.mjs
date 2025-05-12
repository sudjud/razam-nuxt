import { ref, resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrGetDirectiveProps } from "vue/server-renderer";
import _imports_0 from "../_virtual/virtual_public17.mjs";
import _imports_1 from "../_virtual/virtual_public18.mjs";
import _imports_2 from "../_virtual/virtual_public19.mjs";
import _imports_3 from "../_virtual/virtual_public20.mjs";
import { useSeo } from "../composables/useSeo.mjs";
/* empty css              */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useSeo("contact");
    const form = ref({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp0, _temp1;
      _push(`<!--[--><main data-v-aa8f63b0><p data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("menu.home"))} / ${ssrInterpolate(_ctx.$t("menu.contact"))}</p><h1 data-v-aa8f63b0><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.contactUs"))}</span><span data-v-aa8f63b0><img data-not-lazy${ssrRenderAttr("src", _imports_0)} alt="" data-v-aa8f63b0></span></h1><div class="image-wrapper" data-v-aa8f63b0><img${ssrRenderAttrs(_temp0 = mergeProps({
        "data-src": _imports_1,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-aa8f63b0>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div></main><section class="form" data-v-aa8f63b0><p data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.form.description"))}</p><form data-v-aa8f63b0><h2 id="formContactLink" data-v-aa8f63b0><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.form.title"))}</span></h2><label data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.form.nameLabel"))}<span data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input type="text"${ssrRenderAttr("value", form.value.name)} required data-v-aa8f63b0><label data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.form.emailLabel"))}<span data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input type="email"${ssrRenderAttr("value", form.value.email)} required data-v-aa8f63b0><label data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.form.phoneLabel"))}<span data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input type="tel"${ssrRenderAttr("value", form.value.phone)} required data-v-aa8f63b0><label data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.form.messageLabel"))}<span data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.form.required"))}</span></label><input${ssrRenderAttr("value", form.value.message)} required data-v-aa8f63b0><button type="submit" data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.form.submitButton"))}<span data-v-aa8f63b0><img data-not-lazy${ssrRenderAttr("src", _imports_2)} alt="" data-v-aa8f63b0></span></button></form></section><section class="info" data-v-aa8f63b0><div class="image-wrapper" data-v-aa8f63b0><img${ssrRenderAttrs(_temp1 = mergeProps({
        "data-src": _imports_3,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-aa8f63b0>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : _temp1.innerHTML ?? ""}</div><div class="content" data-v-aa8f63b0><h2 data-v-aa8f63b0><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.info.titleFirst"))}</span><span data-v-aa8f63b0><img data-not-lazy${ssrRenderAttr("src", _imports_0)} alt="" data-v-aa8f63b0></span><br data-v-aa8f63b0><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.info.titleSecond"))}</span></h2><div class="info-wrapper" data-v-aa8f63b0><div class="field" data-v-aa8f63b0><p data-v-aa8f63b0>Email</p><h4 data-v-aa8f63b0>info@razam.fr</h4></div><div class="field" data-v-aa8f63b0><p data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("footer.tel"))}</p><h4 data-v-aa8f63b0>+33 6 64 36 12 20</h4></div><div class="field" data-v-aa8f63b0><p data-v-aa8f63b0>${ssrInterpolate(_ctx.$t("contact.info.locationLabel"))}</p><h4 data-v-aa8f63b0>${_ctx.$t("contact.info.location") ?? ""}</h4></div><div class="social-links" data-v-aa8f63b0><a href="https://www.instagram.com/razam.design/profilecard/?igsh=MWx5ZTd0amUwZnMxbA==" aria-label="Instagram" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.4s" data-v-aa8f63b0><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-v-aa8f63b0><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" data-v-aa8f63b0></path></svg></a><a href="https://www.threads.net/@razam.design?igshid=NTc4MTIwNjQ2YQ==" aria-label="Threads" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.4s" data-v-aa8f63b0><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-v-aa8f63b0><path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" data-v-aa8f63b0></path></svg></a><a href="https://www.houzz.ru/pro/webuser-913531865" aria-label="Houzz" target="_blank" class="wow animate__animated animate__backInDown" data-wow-delay="0.4s" data-v-aa8f63b0><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-v-aa8f63b0><path d="M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z" data-v-aa8f63b0></path></svg></a></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aa8f63b0"]]);
export {
  contact as default
};
//# sourceMappingURL=contact.vue.mjs.map
