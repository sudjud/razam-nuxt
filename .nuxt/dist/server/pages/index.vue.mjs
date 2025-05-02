import { ref, resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrGetDirectiveProps } from "vue/server-renderer";
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
      _push(`<!--[--><section class="home" data-v-6f90779b><div class="container" data-v-6f90779b><div class="social-links" data-v-6f90779b>`);
      _push(ssrRenderComponent(SocialMedias, null, null, _parent));
      _push(`</div><div class="content" data-v-6f90779b><h1 data-v-6f90779b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-sw reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.headline"))}</span></h1></div></div></section><section class="expert-design" data-v-6f90779b><div class="container" data-v-6f90779b><div class="image-wrapper" data-v-6f90779b><img${ssrRenderAttr("src", _imports_0)} alt="Interior" data-v-6f90779b></div><div class="filler" data-v-6f90779b></div><div class="text-content" data-v-6f90779b><h3${ssrRenderAttrs(mergeProps({ class: "wow reveal-sb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.desc"))}</h3><p data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.fullDesc1"))}</p><p data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.fullDesc2"))}</p><p class="${ssrRenderClass([{ open: isOpen.value }, "read-more-text"])}" data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.readMore"))}<br data-v-6f90779b><br data-v-6f90779b> ${ssrInterpolate(_ctx.$t("home.readMore2"))}<br data-v-6f90779b><br data-v-6f90779b> ${ssrInterpolate(_ctx.$t("home.readMore3"))}</p><span class="read-more" data-v-6f90779b>${ssrInterpolate(isOpen.value ? _ctx.$t("common.hide") : _ctx.$t("common.readMore"))}</span></div></div></section><section class="values" data-v-6f90779b><div class="container" data-v-6f90779b><div class="main" data-v-6f90779b><div class="title-block" data-v-6f90779b><h2 data-v-6f90779b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>${_ctx.$t("home.valuesH2") ?? ""}</span></h2><div class="arrow-down" data-v-6f90779b><span data-v-6f90779b>↓</span></div></div><div class="image-wrapper" data-v-6f90779b><img${ssrRenderAttr("src", _imports_1)} alt="Интерьер" data-v-6f90779b></div></div>`);
      _push(ssrRenderComponent(ValuesArrowsComponent, null, null, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(HomeStatsComponent, null, null, _parent));
      _push(`<section class="services" data-v-6f90779b>`);
      _push(ssrRenderComponent(HomeGallery, null, null, _parent));
      _push(`</section><section class="projects" data-v-6f90779b><div class="projects-container" data-v-6f90779b><h3 data-v-6f90779b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.projectsH2"))}</span></h3>`);
      _push(ssrRenderComponent(ProjectsSwiperComponent, null, null, _parent));
      _push(`</div></section><section class="reviews" data-v-6f90779b><h2 data-v-6f90779b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.reviewsH2P1"))}<br data-v-6f90779b> ${ssrInterpolate(_ctx.$t("home.reviewsH2P2"))}</span></h2><div class="divider" data-v-6f90779b></div>`);
      _push(ssrRenderComponent(ReviewsSliderComponent, null, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(OfferComponent, null, null, _parent));
      _push(`<section class="process" data-v-6f90779b><div class="container" data-v-6f90779b><h2 data-v-6f90779b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.h2"))}</span></h2><div class="process-grid" data-v-6f90779b><div class="process-item" data-v-6f90779b><div class="process-item-count" data-v-6f90779b>01</div><div class="process-item-title" data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.title1"))}</div><p data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.text1"))}</p></div><div class="process-item" data-v-6f90779b><div class="process-item-count" data-v-6f90779b>02</div><div class="process-item-title" data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.title2"))}</div><p data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.text2"))}</p></div><div class="process-item" data-v-6f90779b><div class="process-item-count" data-v-6f90779b>03</div><div class="process-item-title" data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.title3"))}</div><p data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.text3"))}</p></div><div class="process-item process-item-moved" data-v-6f90779b><div class="process-item-count" data-v-6f90779b>04</div><div class="process-item-title" data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.title4"))}</div><p data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.text4"))}</p></div><div class="process-item process-item-moved-mob" data-v-6f90779b><div class="process-item-count" data-v-6f90779b>05</div><div class="process-item-title" data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.title5"))}</div><p data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.process.text5"))}</p></div></div></div></section><section class="faq" data-v-6f90779b><h2 data-v-6f90779b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>FAQ</span></h2>`);
      _push(ssrRenderComponent(FaqComponent, null, null, _parent));
      _push(`</section><section class="news" data-v-6f90779b><h2 data-v-6f90779b><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-6f90779b>${ssrInterpolate(_ctx.$t("home.news.H2"))}</span></h2>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6f90779b"]]);
export {
  index as default
};
//# sourceMappingURL=index.vue.mjs.map
