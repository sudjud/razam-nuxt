import { ref, computed, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import _imports_0 from "../../public/images/flags/arrow.png.mjs";
import frImg from "../../_virtual/virtual_public62.mjs";
import deImg from "../../_virtual/virtual_public63.mjs";
import esImg from "../../_virtual/virtual_public64.mjs";
import itImg from "../../_virtual/virtual_public65.mjs";
import gbImg from "../../_virtual/virtual_public66.mjs";
import ruImg from "../../_virtual/virtual_public67.mjs";
import uaImg from "../../_virtual/virtual_public68.mjs";
import { useHead } from "../../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
/* empty css                          */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/PhoneInputComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PhoneInputComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5477557d"]]);
export {
  PhoneInputComponent as default
};
//# sourceMappingURL=PhoneInputComponent.vue.mjs.map
