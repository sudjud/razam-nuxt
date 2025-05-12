import { ref, resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrGetDirectiveProps } from "vue/server-renderer";
import _imports_0 from "../_virtual/virtual_public15.mjs";
import _imports_1 from "../_virtual/virtual_public16.mjs";
import HomeGallery from "../components/Swipers/HomeGallery.vue.mjs";
import SocialMedias from "../components/Tools/SocialMedias.vue.mjs";
import ProjectsSwiperComponent from "../components/Swipers/ProjectsSwiperComponent.vue.mjs";
import ValuesArrowsComponent from "../components/Tools/ValuesArrowsComponent.vue.mjs";
import ReviewsSliderComponent from "../components/Swipers/ReviewsSliderComponent.vue.mjs";
import FaqComponent from "../components/Tools/FaqComponent.vue.mjs";
import NewsSwiperComponent from "../components/Swipers/NewsSwiperComponent.vue.mjs";
import HomeStatsComponent from "../components/Blocks/HomeStatsComponent.vue.mjs";
import OfferComponent from "../components/Blocks/OfferComponent.vue.mjs";
import { useSeo } from "../composables/useSeo.mjs";
/* empty css            */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    useSeo("home");
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp0, _temp2;
      _push(`<!--[--><section class="home" data-v-da2277b1><div class="container" data-v-da2277b1><div class="social-links" data-v-da2277b1>`);
      _push(ssrRenderComponent(SocialMedias, null, null, _parent));
      _push(`</div><div class="content" data-v-da2277b1><h1 data-v-da2277b1><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-sw reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.headline"))}</span></h1></div></div></section><section class="expert-design" data-v-da2277b1><div class="container" data-v-da2277b1><div class="image-wrapper" data-v-da2277b1><img${ssrRenderAttrs(_temp0 = mergeProps({
        "data-src": _imports_0,
        alt: "Interior"
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-da2277b1>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div><div class="filler" data-v-da2277b1></div><div class="text-content" data-v-da2277b1><h3${ssrRenderAttrs(mergeProps({ class: "wow reveal-sb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.desc"))}</h3><p data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.fullDesc1"))}</p><p data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.fullDesc2"))}</p><p class="${ssrRenderClass([{ open: isOpen.value }, "read-more-text"])}" data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.readMore"))}<br data-v-da2277b1><br data-v-da2277b1> ${ssrInterpolate(_ctx.$t("home.readMore2"))}<br data-v-da2277b1><br data-v-da2277b1> ${ssrInterpolate(_ctx.$t("home.readMore3"))}</p><span class="read-more" data-v-da2277b1>${ssrInterpolate(isOpen.value ? _ctx.$t("common.hide") : _ctx.$t("common.readMore"))}</span></div></div></section><section class="values" data-v-da2277b1><div class="container" data-v-da2277b1><div class="main" data-v-da2277b1><div class="title-block" data-v-da2277b1><h2 data-v-da2277b1><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-da2277b1>${_ctx.$t("home.valuesH2") ?? ""}</span></h2><div class="arrow-down" data-v-da2277b1><span data-v-da2277b1>↓</span></div></div><div class="image-wrapper" data-v-da2277b1><img${ssrRenderAttrs(_temp2 = mergeProps({
        "data-src": _imports_1,
        alt: "Интерьер"
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-da2277b1>${"textContent" in _temp2 ? ssrInterpolate(_temp2.textContent) : _temp2.innerHTML ?? ""}</div></div>`);
      _push(ssrRenderComponent(ValuesArrowsComponent, null, null, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(HomeStatsComponent, null, null, _parent));
      _push(`<section class="services" data-v-da2277b1>`);
      _push(ssrRenderComponent(HomeGallery, null, null, _parent));
      _push(`</section><section class="projects" data-v-da2277b1><div class="projects-container" data-v-da2277b1><h3 data-v-da2277b1><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.projectsH2"))}</span></h3>`);
      _push(ssrRenderComponent(ProjectsSwiperComponent, null, null, _parent));
      _push(`</div></section><section class="reviews" data-v-da2277b1><h2 data-v-da2277b1><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.reviewsH2P1"))}<br data-v-da2277b1> ${ssrInterpolate(_ctx.$t("home.reviewsH2P2"))}</span></h2><div class="divider" data-v-da2277b1></div>`);
      _push(ssrRenderComponent(ReviewsSliderComponent, null, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(OfferComponent, null, null, _parent));
      _push(`<section class="process" data-v-da2277b1><div class="container" data-v-da2277b1><h2 data-v-da2277b1><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.process.h2"))}</span></h2><div class="process-grid" data-v-da2277b1><div class="process-item" data-v-da2277b1><div class="process-item-count" data-v-da2277b1>01</div><div class="process-item-title" data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.process.title1"))}</div><p data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.process.text1"))}</p></div><div class="process-item" data-v-da2277b1><div class="process-item-count" data-v-da2277b1>02</div><div class="process-item-title" data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.process.title2"))}</div><p data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.process.text2"))}</p></div><div class="process-item" data-v-da2277b1><div class="process-item-count" data-v-da2277b1>03</div><div class="process-item-title" data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.process.title3"))}</div><p data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.process.text3"))}</p></div><div class="process-item process-item-moved" data-v-da2277b1><div class="process-item-count" data-v-da2277b1>04</div><div class="process-item-title" data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.process.title4"))}</div><p data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.process.text4"))}</p></div><div class="process-item process-item-moved-mob" data-v-da2277b1><div class="process-item-count" data-v-da2277b1>05</div><div class="process-item-title" data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.process.title5"))}</div><p data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.process.text5"))}</p></div></div></div></section><section class="faq" data-v-da2277b1><h2 data-v-da2277b1><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-da2277b1>FAQ</span></h2>`);
      _push(ssrRenderComponent(FaqComponent, null, null, _parent));
      _push(`</section><section class="news" data-v-da2277b1><h2 data-v-da2277b1><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-da2277b1>${ssrInterpolate(_ctx.$t("home.news.H2"))}</span></h2>`);
      _push(ssrRenderComponent(NewsSwiperComponent, null, null, _parent));
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da2277b1"]]);
export {
  index as default
};
//# sourceMappingURL=index.vue.mjs.map
