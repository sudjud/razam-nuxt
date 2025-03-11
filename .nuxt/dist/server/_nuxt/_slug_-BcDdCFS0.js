import { resolveDirective, mergeProps, useSSRContext, withAsyncContext, ref, computed, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { _ as _imports_4 } from "./virtual_public-Cp26jsqk.js";
import { useRoute } from "vue-router";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import { B as Breadcrumbs } from "./Breadcrumbs-Ce7WFUYu.js";
import { u as useAsyncData } from "./asyncData-DgfO3ufQ.js";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "destr";
import "klona";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@vueuse/core";
import "./nuxt-link-BSCCcEt5.js";
import "./vue-i18n-Dx5HdeXT.js";
const _imports_0 = publicAssetsURL("/images/projects/urban-grace/lounge.jpg");
const _imports_1 = publicAssetsURL("/images/projects/urban-grace/bedroom.jpg");
const _imports_2 = publicAssetsURL("/images/projects/urban-grace/lights1.jpg");
const _imports_3 = publicAssetsURL("/images/projects/urban-grace/lights2.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_reveal = resolveDirective("reveal");
  _push(`<!--[--><section class="lounge" data-v-b55881fe><h5 data-v-b55881fe>U / G</h5><h2 data-v-b55881fe><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.lounge.h1"))}</span></h2><div class="content-wrapper" data-v-b55881fe><div class="text-wrapper" data-v-b55881fe><h2 data-v-b55881fe><span data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.lounge.h2"))}</span></h2><p data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.lounge.p"))}</p></div><div class="lounge-image" data-v-b55881fe><img${ssrRenderAttr("src", _imports_0)} alt="urban-grace" data-v-b55881fe></div></div></section><section class="bedroom" data-v-b55881fe><h4 data-v-b55881fe>Urban grace</h4><div class="content-wrapper" data-v-b55881fe><div class="text-wrapper" data-v-b55881fe><h2 data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.bedroom.h1"))} <span data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.bedroom.h2"))}</span></h2><p data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.bedroom.p"))}</p></div><div class="image" data-v-b55881fe><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-b55881fe></div></div></section><section class="lights" data-v-b55881fe><div class="content-wrapper" data-v-b55881fe><div class="images" data-v-b55881fe><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-b55881fe><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-b55881fe></div><div class="text-wrapper" data-v-b55881fe><h2 data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.lights.h1"))}<br data-v-b55881fe><span data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.lights.h2"))}</span></h2><p data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.lights.p"))}</p></div></div></section><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects/UrbanGraceComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UrbanGraceComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b55881fe"]]);
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: projectData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "project",
      () => $fetch(`/api/projects?slug=${route.params.slug}`)
    )), __temp = await __temp, __restore(), __temp);
    const project = ref(projectData.value || null);
    const smallImages = computed(() => {
      var _a, _b;
      return ((_b = (_a = project.value) == null ? void 0 : _a.images) == null ? void 0 : _b.slice(0, -1)) || [];
    });
    const mainImage = computed(() => {
      var _a, _b;
      return ((_b = (_a = project.value) == null ? void 0 : _a.images) == null ? void 0 : _b[project.value.images.length - 1]) || {};
    });
    const projectComponents = {
      "urban-grace": UrbanGraceComponent
    };
    const currentProjectComponent = computed(
      () => {
        var _a;
        return projectComponents[(_a = project.value) == null ? void 0 : _a.slug] || null;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main class="project" data-v-3099651a><div class="route" data-v-3099651a>`);
      _push(ssrRenderComponent(Breadcrumbs, {
        reservedLastCrumb: project.value.name
      }, null, _parent));
      _push(`</div><section class="cover" data-v-3099651a><div class="numbers" style="${ssrRenderStyle(`--bg-url: url(${project.value.preview})`)}" data-v-3099651a><div class="label" data-v-3099651a><div data-v-3099651a><p data-v-3099651a>${ssrInterpolate(_ctx.$t("portfolio.projects.common.square"))}</p><p data-v-3099651a>${ssrInterpolate(project.value.totalArea)} m³</p></div><div data-v-3099651a><p data-v-3099651a>${ssrInterpolate(_ctx.$t("portfolio.projects.common.livingArea"))}</p><p data-v-3099651a>${ssrInterpolate(project.value.livingArea)} m²</p></div><div data-v-3099651a><p data-v-3099651a>${ssrInterpolate(_ctx.$t("portfolio.projects.common.workingTime"))}</p><p data-v-3099651a>${ssrInterpolate(_ctx.$t(project.value.workingTime))}</p></div><div data-v-3099651a><p class="cost" data-v-3099651a>${ssrInterpolate(_ctx.$t("portfolio.projects.common.cost"))}</p><h4 data-v-3099651a>€${ssrInterpolate(project.value.cost)}</h4></div></div></div><div class="info" data-v-3099651a><h1 class="name" data-v-3099651a><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-3099651a>${ssrInterpolate(project.value.name)}</span></h1><p class="type" data-v-3099651a>${ssrInterpolate(_ctx.$t(project.value.type))}</p><div class="customer" data-v-3099651a><p data-v-3099651a>${ssrInterpolate(_ctx.$t("portfolio.projects.common.client"))}</p><h4 data-v-3099651a>${ssrInterpolate(_ctx.$t(project.value.client))}</h4><p data-v-3099651a>${ssrInterpolate(_ctx.$t("portfolio.projects.common.location"))}</p><h4 data-v-3099651a>${ssrInterpolate(_ctx.$t(project.value.dislocation))}</h4><p data-v-3099651a>${ssrInterpolate(_ctx.$t("portfolio.projects.common.year"))}</p><h4 data-v-3099651a>${ssrInterpolate(project.value.year)}</h4></div><p class="desc" data-v-3099651a>${ssrInterpolate(_ctx.$t(project.value.desc))}</p></div></section></main><section class="photos" data-v-3099651a><!--[-->`);
      ssrRenderList(smallImages.value, (item, index) => {
        _push(`<div class="photo" data-v-3099651a><img${ssrRenderAttr("src", item.photo)} alt="" data-v-3099651a><p data-v-3099651a>${ssrInterpolate(_ctx.$t(item.name))}</p></div>`);
      });
      _push(`<!--]--><div class="photo-main" data-v-3099651a><img${ssrRenderAttr("src", mainImage.value.photo)} alt="" data-v-3099651a><p data-v-3099651a>${ssrInterpolate(_ctx.$t(mainImage.value.name))}</p></div></section><section class="single" data-v-3099651a>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(currentProjectComponent.value), null, null), _parent);
      _push(`</section><section class="offer" data-v-3099651a><h2 data-v-3099651a>${ssrInterpolate(_ctx.$t("home.offer.h2P1"))}<span class="arrow" data-v-3099651a><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-3099651a></span><br data-v-3099651a><div class="decor" data-v-3099651a>${ssrInterpolate(_ctx.$t("home.offer.h2P2"))}<br data-v-3099651a> ${ssrInterpolate(_ctx.$t("home.offer.h2P3"))} ? </div></h2><p data-v-3099651a>${ssrInterpolate(_ctx.$t("home.offer.p"))}</p></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3099651a"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-BcDdCFS0.js.map
