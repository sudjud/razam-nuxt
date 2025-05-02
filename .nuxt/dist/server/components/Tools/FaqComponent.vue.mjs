import { reactive, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
/* empty css                   */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "FaqComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const questions = reactive([
      {
        question: "home.FAQ.q1",
        answer: "home.FAQ.a1",
        open: false
      },
      {
        question: "home.FAQ.q2",
        answer: "home.FAQ.a2",
        open: false
      },
      {
        question: "home.FAQ.q3",
        answer: "home.FAQ.a3",
        open: false
      },
      {
        question: "home.FAQ.q4",
        answer: "home.FAQ.a4",
        open: false
      },
      {
        question: "home.FAQ.q5",
        answer: "home.FAQ.a5",
        open: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "question-block" }, _attrs))} data-v-7cee5938><!--[-->`);
      ssrRenderList(questions, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ open: item.open }, "question-item"])}" data-v-7cee5938><div class="question-number-wrapper" data-v-7cee5938><div class="number" data-v-7cee5938>0${ssrInterpolate(index)}</div><div class="question" data-v-7cee5938><h4 data-v-7cee5938>${ssrInterpolate(_ctx.$t(item.question))}</h4></div><div class="filler" data-v-7cee5938></div><div class="${ssrRenderClass([{ open: item.open }, "arrow-circle"])}" data-v-7cee5938><svg data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25" height="25" data-v-7cee5938><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" data-v-7cee5938></path></svg></div></div><div class="answer-wrapper" style="${ssrRenderStyle(item.open ? null : { display: "none" })}" data-v-7cee5938><p class="answer" data-v-7cee5938>${ssrInterpolate(_ctx.$t(item.answer))}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/FaqComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FaqComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7cee5938"]]);
export {
  FaqComponent as default
};
//# sourceMappingURL=FaqComponent.vue.mjs.map
