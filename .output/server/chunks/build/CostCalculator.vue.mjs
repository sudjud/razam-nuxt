import { ref, computed, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead } from './v3.mjs';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAfQAAAH0Bx0gPAAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACeSURBVDiN1ZPBDcIwDEWfMwt7sAQLMEWvnaRRC0dG4tY9+FyMZKgTIZULkSwl9n9PudgkseeUXfQvBAYcgQNQJT2+gswKcAbuACsgYAKKJHrlv56cWQEGfwioPYnDNeSH12AMzTmTODyH3CiJGIiSJUocXj7hN0EiuThY/L6BN4JEcvVK4VSQSJpwU5BIUlgS1tsFMzsBSLo1M/+/TE92ZfjD1tAH3gAAAABJRU5ErkJggg==";

const frImg = publicAssetsURL("/images/flags/France.png");

const deImg = publicAssetsURL("/images/flags/Germany.png");

const esImg = publicAssetsURL("/images/flags/Spain.png");

const itImg = publicAssetsURL("/images/flags/Italy.png");

const gbImg = publicAssetsURL("/images/flags/United-Kingdom.png");

const ruImg = publicAssetsURL("/images/flags/Russia.png");

const uaImg = publicAssetsURL("/images/flags/Ukraine.png");

const _sfc_main$1 = {
  __name: "PhoneInputComponent",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useHead({
      link: [
        { rel: "preload", href: "/images/flags/France.png", as: "image" },
        { rel: "preload", href: "/images/flags/Germany.png", as: "image" },
        { rel: "preload", href: "/images/flags/Spain.png", as: "image" },
        { rel: "preload", href: "/images/flags/Italy.png", as: "image" },
        { rel: "preload", href: "/images/flags/UnitedKingdom.png", as: "image" },
        { rel: "preload", href: "/images/flags/Russia.png", as: "image" },
        { rel: "preload", href: "/images/flags/Ukraine.png", as: "image" }
      ]
    });
    const countries = {
      fr: { name: "France", prefix: "+33", phoneLength: 12, format: [1, 2, 2, 2, 2], placeholder: "6 12 34 56 78", flag: frImg },
      de: { name: "Germany", prefix: "+49", phoneLength: 11, format: [3, 3, 4], placeholder: "151 123 4567", flag: deImg },
      es: { name: "Spain", prefix: "+34", phoneLength: 10, format: [3, 3, 3], placeholder: "612 345 678", flag: esImg },
      it: { name: "Italy", prefix: "+39", phoneLength: 11, format: [3, 3, 4], placeholder: "312 345 6789", flag: itImg },
      gb: { name: "United Kingdom", prefix: "+44", phoneLength: 12, format: [4, 6], placeholder: "7123 456789", flag: gbImg },
      ru: { name: "Russia", prefix: "+7", phoneLength: 10, format: [3, 3, 4], placeholder: "912 345 6789", flag: ruImg },
      ua: { name: "Ukraine", prefix: "+380", phoneLength: 11, format: [2, 3, 4], placeholder: "67 123 4567", flag: uaImg }
    };
    const selectedCountry = ref("fr");
    const rawPhone = ref("");
    const dropdownOpen = ref(false);
    const formattedPhone = computed(() => {
      const { prefix, format } = countries[selectedCountry.value];
      let numbers = rawPhone.value;
      let formatted = "";
      let index = 0;
      for (const groupLength of format) {
        if (numbers.length > index) {
          formatted += numbers.substr(index, groupLength) + " ";
          index += groupLength;
        }
      }
      formatted = formatted.trim();
      return prefix + " " + formatted;
    });
    watch(() => props.modelValue, (newVal) => {
      if (newVal !== formattedPhone.value) ;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "phone-input" }, _attrs))} data-v-5477557d><div class="phone-input__select" data-v-5477557d><div class="phone-input__selected" data-v-5477557d><img${ssrRenderAttr("src", countries[selectedCountry.value].flag)} alt="" data-v-5477557d><img class="arrow"${ssrRenderAttr("src", _imports_0)} alt="" data-v-5477557d></div><div style="${ssrRenderStyle(dropdownOpen.value ? null : { display: "none" })}" class="phone-input__dropdown" data-v-5477557d><!--[-->`);
      ssrRenderList(countries, (country, code) => {
        _push(`<div class="phone-input__option" data-v-5477557d><img${ssrRenderAttr("src", country.flag)} alt="" data-v-5477557d></div>`);
      });
      _push(`<!--]--></div></div><div class="phone-input__field" data-v-5477557d><input type="tel"${ssrRenderAttr("value", formattedPhone.value)}${ssrRenderAttr("maxlength", countries[selectedCountry.value].phoneLength + 5)}${ssrRenderAttr("placeholder", countries[selectedCountry.value].placeholder)} data-v-5477557d></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/PhoneInputComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PhoneInputComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5477557d"]]);

const _sfc_main = {
  __name: "CostCalculator",
  __ssrInlineRender: true,
  setup(__props) {
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
    const submitted = ref(false);
    const objectTypes = {
      apartment: "calculator.objectType.apartment",
      public: "calculator.objectType.public",
      office: "calculator.objectType.office"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "calculator-wrapper" }, _attrs))} data-v-bfe59a38><form class="calculator" data-v-bfe59a38><h3 data-v-bfe59a38>${ssrInterpolate(_ctx.$t("calculator.h1"))} <br data-v-bfe59a38> ${ssrInterpolate(_ctx.$t("calculator.h2"))}</h3>`);
      if (page.value === 1) {
        _push(`<section class="design-or-repair" data-v-bfe59a38><label data-v-bfe59a38><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.design) ? ssrLooseContain(form.value.design, null) : form.value.design) ? " checked" : ""} data-v-bfe59a38> ${ssrInterpolate(_ctx.$t("calculator.directions.design"))}</label><label data-v-bfe59a38><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.renovation) ? ssrLooseContain(form.value.renovation, null) : form.value.renovation) ? " checked" : ""} data-v-bfe59a38> ${ssrInterpolate(_ctx.$t("calculator.directions.renovation"))}</label></section>`);
      } else {
        _push(`<!---->`);
      }
      if (page.value === 1) {
        _push(`<section data-v-bfe59a38><div class="object-type" data-v-bfe59a38><!--[-->`);
        ssrRenderList(objectTypes, (label, value) => {
          _push(`<label data-v-bfe59a38><input type="radio" name="objectType"${ssrRenderAttr("value", value)}${ssrIncludeBooleanAttr(ssrLooseEqual(form.value.objectType, value)) ? " checked" : ""} data-v-bfe59a38> ${ssrInterpolate(_ctx.$t(label))}</label>`);
        });
        _push(`<!--]--></div><div class="object-details" data-v-bfe59a38><label data-v-bfe59a38><input type="number"${ssrRenderAttr("value", form.value.area)} min="0"${ssrRenderAttr("placeholder", _ctx.$t("calculator.params.area") + " (м²)")} data-v-bfe59a38></label><label data-v-bfe59a38><input type="number"${ssrRenderAttr("value", form.value.bathrooms)} min="0"${ssrRenderAttr("placeholder", _ctx.$t("calculator.params.bathrooms"))} data-v-bfe59a38></label><label data-v-bfe59a38><input type="number"${ssrRenderAttr("value", form.value.rooms)} min="0"${ssrRenderAttr("placeholder", _ctx.$t("calculator.params.rooms"))} data-v-bfe59a38></label><label class="kitchen" data-v-bfe59a38><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.hasKitchen) ? ssrLooseContain(form.value.hasKitchen, null) : form.value.hasKitchen) ? " checked" : ""} data-v-bfe59a38> ${ssrInterpolate(_ctx.$t("calculator.params.kitchen"))}</label></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (page.value === 2) {
        _push(`<section class="contact-info" data-v-bfe59a38><input type="text"${ssrRenderAttr("value", form.value.name)}${ssrRenderAttr("placeholder", _ctx.$t("calculator.contact.name"))} required data-v-bfe59a38>`);
        _push(ssrRenderComponent(PhoneInputComponent, {
          modelValue: form.value.phone,
          "onUpdate:modelValue": ($event) => form.value.phone = $event,
          ref_key: "phoneInput",
          ref: phoneInput
        }, null, _parent));
        _push(`<input type="email"${ssrRenderAttr("value", form.value.email)}${ssrRenderAttr("placeholder", _ctx.$t("calculator.contact.email"))} required data-v-bfe59a38><textarea${ssrRenderAttr("placeholder", _ctx.$t("calculator.contact.message"))} data-v-bfe59a38>${ssrInterpolate(form.value.message)}</textarea></section>`);
      } else {
        _push(`<!---->`);
      }
      if (page.value === 2) {
        _push(`<section class="confirmation" data-v-bfe59a38><label data-v-bfe59a38><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.accepted) ? ssrLooseContain(form.value.accepted, null) : form.value.accepted) ? " checked" : ""} required data-v-bfe59a38> ${ssrInterpolate(_ctx.$t("calculator.confirmation"))}</label></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="buttons" data-v-bfe59a38><button style="${ssrRenderStyle(page.value === 2 ? null : { display: "none" })}" class="prev-button" type="button" data-v-bfe59a38>${ssrInterpolate(_ctx.$t("calculator.prev"))}</button><p class="${ssrRenderClass([{ submit: submitted.value }, "success-message"])}" data-v-bfe59a38>${ssrInterpolate(_ctx.$t("calculator.success"))}</p><button class="next-submit"${ssrRenderAttr("type", page.value === 2 ? "submit" : "button")}${ssrIncludeBooleanAttr(page.value === 1 && (!form.value.objectType || !form.value.design && !form.value.renovation || !form.value.area || !form.value.bathrooms || !form.value.rooms) || page.value === 2 && (!form.value.name || !form.value.email || !form.value.accepted)) ? " disabled" : ""} data-v-bfe59a38>${ssrInterpolate(page.value === 2 ? _ctx.$t("calculator.button") : _ctx.$t("calculator.next"))}</button></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/CostCalculator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CostCalculator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bfe59a38"]]);

export { CostCalculator as C };
//# sourceMappingURL=CostCalculator.vue.mjs.map
