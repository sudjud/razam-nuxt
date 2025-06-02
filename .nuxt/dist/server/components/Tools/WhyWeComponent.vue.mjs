import { reactive, resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrGetDirectiveProps } from "vue/server-renderer";
import image1 from "../../_virtual/virtual_public42.mjs";
import _imports_1 from "../../_virtual/virtual_public43.mjs";
import _imports_2 from "../../_virtual/virtual_public44.mjs";
import _imports_3 from "../../_virtual/virtual_public45.mjs";
/* empty css                     */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "WhyWeComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const questions = reactive([
      {
        question: "about.why.values.question1",
        answer: "about.why.values.answer1",
        image: image1,
        open: false
      },
      {
        question: "about.why.values.question2",
        answer: "about.why.values.answer2",
        image: _imports_1,
        open: false
      },
      {
        question: "about.why.values.question3",
        answer: "about.why.values.answer3",
        image: _imports_2,
        open: false
      },
      {
        question: "about.why.values.question4",
        answer: "about.why.values.answer4",
        image: _imports_3,
        open: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "question-block" }, _attrs))} data-v-4480b4a3><!--[-->`);
      ssrRenderList(questions, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ open: item.open }, "question-item"])}" data-v-4480b4a3><div class="question-number-wrapper" data-v-4480b4a3><div class="number" data-v-4480b4a3>0${ssrInterpolate(index)}</div><div class="question" data-v-4480b4a3><h4 data-v-4480b4a3>${ssrInterpolate(_ctx.$t(item.question))}</h4></div><div class="filler" data-v-4480b4a3></div></div><div class="answer-wrapper" style="${ssrRenderStyle(item.open ? null : { display: "none" })}" data-v-4480b4a3><p class="answer" data-v-4480b4a3>${ssrInterpolate(_ctx.$t(item.answer))}</p><div class="filler" data-v-4480b4a3></div><div class="answer-image" data-v-4480b4a3><img${ssrRenderAttrs(_temp0 = mergeProps({
          "data-src": item.image,
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-4480b4a3>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/WhyWeComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WhyWeComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4480b4a3"]]);
export {
  WhyWeComponent as default
};
//# sourceMappingURL=WhyWeComponent.vue.mjs.map
