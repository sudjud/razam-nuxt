import { reactive, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import CostCalcModal from "./CostCalcModal.vue.mjs";
/* empty css                   */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "FaqComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const questions = reactive([
      {
        question: "home.FAQ.q3",
        answer: "home.FAQ.a3",
        open: false
      },
      {
        question: "home.FAQ.q1",
        answer: "home.FAQ.a1",
        open: false
      },
      {
        question: "home.FAQ.q6",
        answer: "home.FAQ.a6",
        open: false
      },
      {
        question: "home.FAQ.q2",
        answer: "home.FAQ.a2",
        open: false
      },
      {
        question: "home.FAQ.q5",
        answer: "home.FAQ.a5",
        open: false
      },
      {
        question: "home.FAQ.q4",
        answer: "home.FAQ.a4",
        open: false
      }
    ]);
    const modalOpened = ref(false);
    const modalSubmitted = ref(false);
    const submitModal = () => {
      modalSubmitted.value = true;
      setTimeout(() => {
        modalSubmitted.value = false;
      }, 3e3);
      modalOpened.value = false;
    };
    const toggleModal = () => {
      modalOpened.value = !modalOpened.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "question-block" }, _attrs))} data-v-3984606f><!--[-->`);
      ssrRenderList(questions, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ open: item.open }, "question-item"])}" data-v-3984606f><div class="question-number-wrapper" data-v-3984606f><div class="number" data-v-3984606f>0${ssrInterpolate(index)}</div><div class="question" data-v-3984606f><h4 data-v-3984606f>${ssrInterpolate(_ctx.$t(item.question))}</h4></div><div class="filler" data-v-3984606f></div><div class="${ssrRenderClass([{ open: item.open }, "arrow-circle"])}" data-v-3984606f><svg data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25" height="25" data-not-lazy data-v-3984606f><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" data-v-3984606f></path></svg></div></div><div class="answer-wrapper" style="${ssrRenderStyle(item.open ? null : { display: "none" })}" data-v-3984606f><p class="answer" data-v-3984606f>${ssrInterpolate(_ctx.$t(item.answer))}</p>`);
        if (index === 5) {
          _push(`<button class="go-to-calc_btn" data-v-3984606f>${ssrInterpolate(_ctx.$t("calculator.modalButton"))}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]-->`);
      if (unref(modalOpened)) {
        _push(ssrRenderComponent(unref(CostCalcModal), {
          onCloseModal: toggleModal,
          onSubmitForm: submitModal
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/FaqComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FaqComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3984606f"]]);
export {
  FaqComponent as default
};
//# sourceMappingURL=FaqComponent.vue.mjs.map
