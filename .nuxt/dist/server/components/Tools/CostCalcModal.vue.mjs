import { ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderAttr, ssrLooseEqual, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import PhoneInputComponent from "./PhoneInputComponent.vue.mjs";
/* empty css                    */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "CostCalcModal",
  __ssrInlineRender: true,
  emits: ["close-modal", "submit-form"],
  setup(__props, { emit: __emit }) {
    const submitted = ref(false);
    const page = ref(1);
    const phoneInput = ref(null);
    const form = ref({
      design: false,
      renovation: false,
      objectType: "",
      area: null,
      bathrooms: null,
      rooms: null,
      hasKitchen: false,
      name: "",
      phone: "",
      email: "",
      message: "",
      accepted: false
    });
    const objectTypes = {
      apartment: "calculator.objectType.apartment",
      public: "calculator.objectType.public",
      office: "calculator.objectType.office"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="${ssrRenderClass([{ submit: submitted.value }, "overlay"])}" data-v-4c5039be><div class="calculator-wrapper" data-v-4c5039be><div class="close" data-v-4c5039be>✕</div><form class="calculator" data-v-4c5039be><h3 data-v-4c5039be>${ssrInterpolate(_ctx.$t("calculator.h1"))} <br data-v-4c5039be> ${ssrInterpolate(_ctx.$t("calculator.h2"))}</h3>`);
      if (page.value === 1) {
        _push(`<section class="design-or-repair" data-v-4c5039be><span class="prompt" data-v-4c5039be>${ssrInterpolate(_ctx.$t("calculator.prompt1"))}</span><div class="design-or-repair_wrapper" data-v-4c5039be><label data-v-4c5039be><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.design) ? ssrLooseContain(form.value.design, null) : form.value.design) ? " checked" : ""} data-v-4c5039be> ${ssrInterpolate(_ctx.$t("calculator.directions.design"))}</label><label data-v-4c5039be><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.renovation) ? ssrLooseContain(form.value.renovation, null) : form.value.renovation) ? " checked" : ""} data-v-4c5039be> ${ssrInterpolate(_ctx.$t("calculator.directions.renovation"))}</label></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (page.value === 1) {
        _push(`<section data-v-4c5039be><div class="object-type" data-v-4c5039be><span class="prompt" data-v-4c5039be>${ssrInterpolate(_ctx.$t("calculator.prompt2"))}</span><!--[-->`);
        ssrRenderList(objectTypes, (label, value) => {
          _push(`<label data-v-4c5039be><input type="radio" name="objectType"${ssrRenderAttr("value", value)}${ssrIncludeBooleanAttr(ssrLooseEqual(form.value.objectType, value)) ? " checked" : ""} data-v-4c5039be> ${ssrInterpolate(_ctx.$t(label))}</label>`);
        });
        _push(`<!--]--></div><div class="object-details" data-v-4c5039be><label data-v-4c5039be><input type="number"${ssrRenderAttr("value", form.value.area)} min="0"${ssrRenderAttr("placeholder", _ctx.$t("calculator.params.area") + " (м²)")} data-v-4c5039be></label><label data-v-4c5039be><input type="number"${ssrRenderAttr("value", form.value.bathrooms)} min="0"${ssrRenderAttr("placeholder", _ctx.$t("calculator.params.bathrooms"))} data-v-4c5039be></label><label data-v-4c5039be><input type="number"${ssrRenderAttr("value", form.value.rooms)} min="0"${ssrRenderAttr("placeholder", _ctx.$t("calculator.params.rooms"))} data-v-4c5039be></label><label class="kitchen" data-v-4c5039be><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.hasKitchen) ? ssrLooseContain(form.value.hasKitchen, null) : form.value.hasKitchen) ? " checked" : ""} data-v-4c5039be> ${ssrInterpolate(_ctx.$t("calculator.params.kitchen"))}</label></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (page.value === 2) {
        _push(`<section class="contact-info" data-v-4c5039be><input type="text"${ssrRenderAttr("value", form.value.name)}${ssrRenderAttr("placeholder", _ctx.$t("calculator.contact.name"))} required data-v-4c5039be>`);
        _push(ssrRenderComponent(PhoneInputComponent, {
          modelValue: form.value.phone,
          "onUpdate:modelValue": ($event) => form.value.phone = $event,
          ref_key: "phoneInput",
          ref: phoneInput
        }, null, _parent));
        _push(`<input type="email"${ssrRenderAttr("value", form.value.email)}${ssrRenderAttr("placeholder", _ctx.$t("calculator.contact.email"))} required data-v-4c5039be><textarea${ssrRenderAttr("placeholder", _ctx.$t("calculator.contact.message"))} data-v-4c5039be>${ssrInterpolate(form.value.message)}</textarea></section>`);
      } else {
        _push(`<!---->`);
      }
      if (page.value === 2) {
        _push(`<section class="confirmation" data-v-4c5039be><label data-v-4c5039be><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.accepted) ? ssrLooseContain(form.value.accepted, null) : form.value.accepted) ? " checked" : ""} required data-v-4c5039be> ${ssrInterpolate(_ctx.$t("calculator.confirmation"))}</label></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="buttons" data-v-4c5039be><button style="${ssrRenderStyle(page.value === 2 ? null : { display: "none" })}" class="prev-button" type="button" data-v-4c5039be>${ssrInterpolate(_ctx.$t("calculator.prev"))}</button><button class="next-submit"${ssrRenderAttr("type", page.value === 2 ? "submit" : "button")}${ssrIncludeBooleanAttr(
        page.value === 1 && (!form.value.objectType || !form.value.design && !form.value.renovation || !form.value.area || !form.value.bathrooms || !form.value.rooms) || page.value === 2 && (!form.value.name || !form.value.email || !form.value.accepted)
      ) ? " disabled" : ""} data-v-4c5039be>${ssrInterpolate(page.value === 2 ? _ctx.$t("calculator.button") : _ctx.$t("calculator.next"))}</button></div></form></div></div><p class="${ssrRenderClass([{ submit: submitted.value }, "success-message"])}" data-v-4c5039be>${ssrInterpolate(_ctx.$t("calculator.success"))}</p><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/CostCalcModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CostCalcModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4c5039be"]]);
export {
  CostCalcModal as default
};
//# sourceMappingURL=CostCalcModal.vue.mjs.map
