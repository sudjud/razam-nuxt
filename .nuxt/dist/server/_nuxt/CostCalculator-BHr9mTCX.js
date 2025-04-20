import { ref, computed, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$1 = {
  __name: "PhoneInputComponent",
  __ssrInlineRender: true,
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const phone = ref("+33 ");
    const emit = __emit;
    const hasBeenBlurred = ref(false);
    const isValid = computed(() => {
      const parsed = parsePhoneNumberFromString(phone.value, "FR");
      return (parsed == null ? void 0 : parsed.isValid()) || false;
    });
    const showError = computed(() => {
      return hasBeenBlurred.value && !isValid.value && phone.value.length > 4;
    });
    watch(phone, () => {
      emit("update:modelValue", phone.value);
    });
    __expose({
      isValid,
      triggerValidation: () => {
        hasBeenBlurred.value = true;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "phone-wrapper" }, _attrs))} data-v-d0d00d15><input${ssrRenderAttr("value", phone.value)} type="tel" placeholder="+33 6 12 34 56 78" maxlength="17" class="${ssrRenderClass([{ "invalid": showError.value }, "phone-input"])}" data-v-d0d00d15>`);
      if (showError.value) {
        _push(`<span class="error" data-v-d0d00d15>Неверный номер телефона</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/PhoneInputComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PhoneInputComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d0d00d15"]]);
const _sfc_main = {
  __name: "CostCalculator",
  __ssrInlineRender: true,
  setup(__props) {
    const phoneInput = ref(null);
    const form = ref({
      design: false,
      renovation: false,
      objectType: "",
      area: null,
      bathrooms: null,
      hasKitchen: false,
      rooms: null,
      name: "",
      phone: "",
      email: "",
      message: "",
      accepted: false
    });
    const submitted = ref(false);
    const objectTypes = {
      apartment: "calculator.objectType.apartment",
      public: "calculator.objectType.public",
      office: "calculator.objectType.office"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "calculator-wrapper" }, _attrs))} data-v-0b2e4801><form class="calculator" data-v-0b2e4801><h3 data-v-0b2e4801>${ssrInterpolate(_ctx.$t("calculator.h"))}</h3><section class="design-or-repair" data-v-0b2e4801><label data-v-0b2e4801><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.design) ? ssrLooseContain(form.value.design, null) : form.value.design) ? " checked" : ""} data-v-0b2e4801> ${ssrInterpolate(_ctx.$t("calculator.directions.design"))}</label><label data-v-0b2e4801><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.renovation) ? ssrLooseContain(form.value.renovation, null) : form.value.renovation) ? " checked" : ""} data-v-0b2e4801> ${ssrInterpolate(_ctx.$t("calculator.directions.renovation"))}</label></section>`);
      if (form.value.design || form.value.renovation) {
        _push(`<section data-v-0b2e4801><div class="object-type" data-v-0b2e4801><!--[-->`);
        ssrRenderList(objectTypes, (label, value) => {
          _push(`<label data-v-0b2e4801><input type="radio" name="objectType"${ssrRenderAttr("value", value)}${ssrIncludeBooleanAttr(ssrLooseEqual(form.value.objectType, value)) ? " checked" : ""} data-v-0b2e4801> ${ssrInterpolate(_ctx.$t(label))}</label>`);
        });
        _push(`<!--]--></div><div class="object-details" data-v-0b2e4801><label data-v-0b2e4801>${ssrInterpolate(_ctx.$t("calculator.params.area"))} (м²) <input type="number"${ssrRenderAttr("value", form.value.area)} min="0" data-v-0b2e4801></label><label data-v-0b2e4801>${ssrInterpolate(_ctx.$t("calculator.params.bathrooms"))} <input type="number"${ssrRenderAttr("value", form.value.bathrooms)} min="0" data-v-0b2e4801></label><label data-v-0b2e4801>${ssrInterpolate(_ctx.$t("calculator.params.rooms"))} <input type="number"${ssrRenderAttr("value", form.value.rooms)} min="0" data-v-0b2e4801></label><label class="kitchen" data-v-0b2e4801><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.hasKitchen) ? ssrLooseContain(form.value.hasKitchen, null) : form.value.hasKitchen) ? " checked" : ""} data-v-0b2e4801> ${ssrInterpolate(_ctx.$t("calculator.params.kitchen"))}</label></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="contact-info" data-v-0b2e4801><input type="text"${ssrRenderAttr("value", form.value.name)}${ssrRenderAttr("placeholder", _ctx.$t("calculator.contact.name"))} required data-v-0b2e4801>`);
      _push(ssrRenderComponent(PhoneInputComponent, {
        modelValue: form.value.phone,
        "onUpdate:modelValue": ($event) => form.value.phone = $event,
        ref_key: "phoneInput",
        ref: phoneInput
      }, null, _parent));
      _push(`<input type="email"${ssrRenderAttr("value", form.value.email)}${ssrRenderAttr("placeholder", _ctx.$t("calculator.contact.email"))} required data-v-0b2e4801><textarea${ssrRenderAttr("placeholder", _ctx.$t("calculator.contact.message"))} data-v-0b2e4801>${ssrInterpolate(form.value.message)}</textarea></section><section class="confirmation" data-v-0b2e4801><label data-v-0b2e4801><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.accepted) ? ssrLooseContain(form.value.accepted, null) : form.value.accepted) ? " checked" : ""} required data-v-0b2e4801> ${ssrInterpolate(_ctx.$t("calculator.confirmation"))}</label><button type="submit" data-v-0b2e4801>${ssrInterpolate(_ctx.$t("calculator.button"))}</button></section>`);
      if (submitted.value) {
        _push(`<p class="success-message" data-v-0b2e4801>${ssrInterpolate(_ctx.$t("calculator.success"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/CostCalculator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CostCalculator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0b2e4801"]]);
export {
  CostCalculator as C
};
//# sourceMappingURL=CostCalculator-BHr9mTCX.js.map
