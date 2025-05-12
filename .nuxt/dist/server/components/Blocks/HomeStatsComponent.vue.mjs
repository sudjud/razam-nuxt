import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useCountAnimation } from "../../scripts/useCountAnimation.mjs";
/* empty css                         */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "HomeStatsComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = useCountAnimation();
    const clients = useCountAnimation();
    const interiors = useCountAnimation();
    const goal = useCountAnimation();
    const deadlines = useCountAnimation();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "statistics" }, _attrs))} data-v-b3cc5ef7><div class="container" data-v-b3cc5ef7><div class="statistics-row" data-v-b3cc5ef7><div class="stat-item" data-v-b3cc5ef7><h2 data-v-b3cc5ef7>${ssrInterpolate(unref(projects).count)}+</h2><p data-v-b3cc5ef7>${ssrInterpolate(_ctx.$t("home.stats1"))}</p></div><div class="stat-item" data-v-b3cc5ef7><h2 data-v-b3cc5ef7>${ssrInterpolate(unref(clients).count)}%</h2><p data-v-b3cc5ef7>${ssrInterpolate(_ctx.$t("home.stats2"))}</p></div><div class="stat-item hidden" data-v-b3cc5ef7><h2 data-v-b3cc5ef7></h2><p data-v-b3cc5ef7></p></div></div><div class="divider" data-v-b3cc5ef7></div><div class="statistics-row" data-v-b3cc5ef7><div class="stat-item" data-v-b3cc5ef7><h2 data-v-b3cc5ef7>${ssrInterpolate(unref(interiors).count.value.toLocaleString())}</h2><p data-v-b3cc5ef7>${ssrInterpolate(_ctx.$t("home.stats3"))}</p></div><div class="stat-item" data-v-b3cc5ef7><h2 data-v-b3cc5ef7>${ssrInterpolate(unref(goal).count)} ${ssrInterpolate(_ctx.$t("home.statsGoal"))}</h2><p data-v-b3cc5ef7>${ssrInterpolate(_ctx.$t("home.stats4"))}</p></div><div class="stat-item" data-v-b3cc5ef7><h2 data-v-b3cc5ef7>${ssrInterpolate(unref(deadlines).count)}%</h2><p data-v-b3cc5ef7>${ssrInterpolate(_ctx.$t("home.stats5"))}</p></div></div></div><div class="circle-r" data-v-b3cc5ef7><span data-v-b3cc5ef7>R</span></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/HomeStatsComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeStatsComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b3cc5ef7"]]);
export {
  HomeStatsComponent as default
};
//# sourceMappingURL=HomeStatsComponent.vue.mjs.map
