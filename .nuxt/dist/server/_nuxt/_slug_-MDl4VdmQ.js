import { resolveDirective, mergeProps, useSSRContext, withAsyncContext, ref, computed } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_0$1 } from "./virtual_public-BFlYF5SH.js";
import { useRoute } from "vue-router";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import { B as Breadcrumbs } from "./Breadcrumbs-DsbAcELI.js";
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
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_reveal = resolveDirective("reveal");
  _push(`<!--[--><section class="lounge" data-v-b55881fe><h5 data-v-b55881fe>U / G</h5><h2 data-v-b55881fe><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.lounge.h1"))}</span></h2><div class="content-wrapper" data-v-b55881fe><div class="text-wrapper" data-v-b55881fe><h2 data-v-b55881fe><span data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.lounge.h2"))}</span></h2><p data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.lounge.p"))}</p></div><div class="lounge-image" data-v-b55881fe><img${ssrRenderAttr("src", _imports_0)} alt="urban-grace" data-v-b55881fe></div></div></section><section class="bedroom" data-v-b55881fe><h4 data-v-b55881fe>Urban grace</h4><div class="content-wrapper" data-v-b55881fe><div class="text-wrapper" data-v-b55881fe><h2 data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.bedroom.h1"))} <span data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.bedroom.h2"))}</span></h2><p data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.bedroom.p"))}</p></div><div class="image" data-v-b55881fe><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-b55881fe></div></div></section><section class="lights" data-v-b55881fe><div class="content-wrapper" data-v-b55881fe><div class="images" data-v-b55881fe><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-b55881fe><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-b55881fe></div><div class="text-wrapper" data-v-b55881fe><h2 data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.lights.h1"))}<br data-v-b55881fe><span data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.lights.h2"))}</span></h2><p data-v-b55881fe>${ssrInterpolate(_ctx.$t("portfolio.projects.urbanGrace.componentData.lights.p"))}</p></div></div></section><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects/UrbanGraceComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const UrbanGraceComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b55881fe"]]);
const _sfc_main$1 = {
  __name: "SingleComponent",
  __ssrInlineRender: true,
  props: {
    nameAcronym: String,
    nameCamelCase: String,
    name: String,
    slug: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><section class="lounge" data-v-bd5b9908><h5 data-v-bd5b9908>${ssrInterpolate(__props.nameAcronym)}</h5><h2 data-v-bd5b9908><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-bd5b9908>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.firstBlock.h1`))}</span></h2><div class="content-wrapper" data-v-bd5b9908><div class="text-wrapper" data-v-bd5b9908><h2 data-v-bd5b9908><span data-v-bd5b9908>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.firstBlock.h2`))}</span></h2><p data-v-bd5b9908>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.firstBlock.p`))}</p></div><div class="lounge-image" data-v-bd5b9908><img${ssrRenderAttr("src", `/images/projects/${__props.slug}/1.jpg`)} alt="urban-grace" data-v-bd5b9908></div></div></section><section class="bedroom" data-v-bd5b9908><h4 data-v-bd5b9908>${ssrInterpolate(__props.name)}</h4><div class="content-wrapper" data-v-bd5b9908><div class="text-wrapper" data-v-bd5b9908><h2 data-v-bd5b9908>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.secondBlock.h1`))} <br data-v-bd5b9908> ${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.secondBlock.h2`))}</h2><p data-v-bd5b9908>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.secondBlock.p`))}</p></div><div class="image" data-v-bd5b9908><img${ssrRenderAttr("src", `/images/projects/${__props.slug}/2.jpg`)} alt="" data-v-bd5b9908></div></div></section><section class="lights" data-v-bd5b9908><div class="content-wrapper" data-v-bd5b9908><div class="images" data-v-bd5b9908><img${ssrRenderAttr("src", `/images/projects/${__props.slug}/3.jpg`)} alt="" data-v-bd5b9908><img${ssrRenderAttr("src", `/images/projects/${__props.slug}/4.jpg`)} alt="" data-v-bd5b9908></div><div class="text-wrapper" data-v-bd5b9908><h2 data-v-bd5b9908>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.thirdBlock.h1`))}<br data-v-bd5b9908><span data-v-bd5b9908>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.thirdBlock.h2`))}</span></h2><p data-v-bd5b9908>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.thirdBlock.p`))}</p></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects/SingleComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SingleComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bd5b9908"]]);
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
    const nameAcronym = computed(() => {
      var _a, _b, _c, _d;
      const firstLetter = (_b = (_a = project.value) == null ? void 0 : _a.slug) == null ? void 0 : _b.split("-")[0][0];
      const secondLetter = (_d = (_c = project.value) == null ? void 0 : _c.slug) == null ? void 0 : _d.split("-")[1][0];
      return `${firstLetter.toUpperCase()} / ${secondLetter.toUpperCase()}`;
    });
    const nameCamelCase = computed(() => {
      var _a, _b;
      return (_b = (_a = project.value) == null ? void 0 : _a.slug) == null ? void 0 : _b.toLowerCase().split("-").map((word, index) => {
        return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
      }).join("");
    });
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
    computed(
      () => {
        var _a;
        return projectComponents[(_a = project.value) == null ? void 0 : _a.slug] || null;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main class="project" data-v-ea3b39f9><div class="route" data-v-ea3b39f9>`);
      _push(ssrRenderComponent(Breadcrumbs, {
        reservedLastCrumb: project.value.name
      }, null, _parent));
      _push(`</div><section class="cover" data-v-ea3b39f9><div class="numbers" style="${ssrRenderStyle(`--bg-url: url(${project.value.preview})`)}" data-v-ea3b39f9><div class="label" data-v-ea3b39f9><div data-v-ea3b39f9><p data-v-ea3b39f9>${ssrInterpolate(_ctx.$t("portfolio.projects.common.square"))}</p><p data-v-ea3b39f9>${ssrInterpolate(project.value.totalArea)} m³</p></div><div data-v-ea3b39f9><p data-v-ea3b39f9>${ssrInterpolate(_ctx.$t("portfolio.projects.common.livingArea"))}</p><p data-v-ea3b39f9>${ssrInterpolate(project.value.livingArea)} m²</p></div><div data-v-ea3b39f9><p data-v-ea3b39f9>${ssrInterpolate(_ctx.$t("portfolio.projects.common.workingTime"))}</p><p data-v-ea3b39f9>${ssrInterpolate(_ctx.$t(project.value.workingTime))}</p></div><div data-v-ea3b39f9><p class="cost" data-v-ea3b39f9>${ssrInterpolate(_ctx.$t("portfolio.projects.common.cost"))}</p><h4 data-v-ea3b39f9>€${ssrInterpolate(project.value.cost)}</h4></div></div></div><div class="info" data-v-ea3b39f9><h1 class="name" data-v-ea3b39f9><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-ea3b39f9>${ssrInterpolate(project.value.name)}</span></h1><p class="type" data-v-ea3b39f9>${ssrInterpolate(_ctx.$t(project.value.type))}</p><div class="customer" data-v-ea3b39f9><p data-v-ea3b39f9>${ssrInterpolate(_ctx.$t("portfolio.projects.common.client"))}</p><h4 data-v-ea3b39f9>${ssrInterpolate(_ctx.$t(project.value.client))}</h4><p data-v-ea3b39f9>${ssrInterpolate(_ctx.$t("portfolio.projects.common.location"))}</p><h4 data-v-ea3b39f9>${ssrInterpolate(_ctx.$t(project.value.dislocation))}</h4><p data-v-ea3b39f9>${ssrInterpolate(_ctx.$t("portfolio.projects.common.year"))}</p><h4 data-v-ea3b39f9>${ssrInterpolate(project.value.year)}</h4></div><p class="desc" data-v-ea3b39f9>${ssrInterpolate(_ctx.$t(project.value.desc))}</p></div></section></main><section class="photos" data-v-ea3b39f9><!--[-->`);
      ssrRenderList(smallImages.value, (item, index) => {
        _push(`<div class="photo" data-v-ea3b39f9><img${ssrRenderAttr("src", item.photo)} alt="" data-v-ea3b39f9><p data-v-ea3b39f9>${ssrInterpolate(_ctx.$t(item.name))}</p></div>`);
      });
      _push(`<!--]--><div class="photo-main" data-v-ea3b39f9><img${ssrRenderAttr("src", mainImage.value.photo)} alt="" data-v-ea3b39f9><p class="photo-main-desc" data-v-ea3b39f9>${ssrInterpolate(_ctx.$t(mainImage.value.name))}</p></div></section><section class="single" data-v-ea3b39f9>`);
      _push(ssrRenderComponent(SingleComponent, {
        nameAcronym: nameAcronym.value,
        nameCamelCase: nameCamelCase.value,
        name: project.value.name,
        slug: project.value.slug
      }, null, _parent));
      _push(`</section><section class="offer" data-v-ea3b39f9><h2 data-v-ea3b39f9>${ssrInterpolate(_ctx.$t("home.offer.h2P1"))}<span class="arrow" data-v-ea3b39f9><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-ea3b39f9></span><br data-v-ea3b39f9><div class="decor" data-v-ea3b39f9>${ssrInterpolate(_ctx.$t("home.offer.h2P2"))}<br data-v-ea3b39f9> ${ssrInterpolate(_ctx.$t("home.offer.h2P3"))} ? </div></h2><p data-v-ea3b39f9>${ssrInterpolate(_ctx.$t("home.offer.p"))}</p></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea3b39f9"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-MDl4VdmQ.js.map
