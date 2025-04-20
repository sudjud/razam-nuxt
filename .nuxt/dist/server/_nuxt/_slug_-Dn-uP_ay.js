import { resolveDirective, mergeProps, useSSRContext, withAsyncContext, ref, computed } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { B as Breadcrumbs } from "./Breadcrumbs-Cpbe7d2J.js";
import { _ as _export_sfc } from "../server.mjs";
import { O as OfferComponent } from "./OfferComponent-WDO5okmE.js";
import { u as useAsyncData } from "./asyncData-Dm5xmsft.js";
import "./nuxt-link-BSCCcEt5.js";
import "./vue-i18n-nQ1iH6wE.js";
import "ofetch";
import "#internal/nuxt/paths";
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
import "./virtual_public-BFlYF5SH.js";
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
      _push(`<!--[--><section class="lounge" data-v-b483fed6><h5 data-v-b483fed6>${ssrInterpolate(__props.nameAcronym)}</h5><h2 data-v-b483fed6><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.firstBlock.h1`))}</span></h2><div class="content-wrapper" data-v-b483fed6><div class="text-wrapper" data-v-b483fed6><h2 data-v-b483fed6><span data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.firstBlock.h2`))}</span></h2><p data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.firstBlock.p`))}</p></div><div class="lounge-image" data-v-b483fed6><img${ssrRenderAttr("src", `/images/projects/${__props.slug}/1.webp`)} alt="urban-grace" data-v-b483fed6></div></div></section><section class="bedroom" data-v-b483fed6><h4 data-v-b483fed6>${ssrInterpolate(__props.name)}</h4><div class="content-wrapper" data-v-b483fed6><div class="text-wrapper" data-v-b483fed6><h2 data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.secondBlock.h1`))} <br data-v-b483fed6> ${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.secondBlock.h2`))}</h2><p data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.secondBlock.p`))}</p></div><div class="image" data-v-b483fed6><img${ssrRenderAttr("src", `/images/projects/${__props.slug}/2.webp`)} alt="" data-v-b483fed6></div></div></section><section class="lights" data-v-b483fed6><div class="content-wrapper" data-v-b483fed6><div class="images" data-v-b483fed6><img${ssrRenderAttr("src", `/images/projects/${__props.slug}/3.webp`)} alt="" data-v-b483fed6><img${ssrRenderAttr("src", `/images/projects/${__props.slug}/4.webp`)} alt="" data-v-b483fed6></div><div class="text-wrapper" data-v-b483fed6><h2 data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.thirdBlock.h1`))}<br data-v-b483fed6><span data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.thirdBlock.h2`))}</span></h2><p data-v-b483fed6>${ssrInterpolate(_ctx.$t(`portfolio.projects.${__props.nameCamelCase}.componentData.thirdBlock.p`))}</p></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects/SingleComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SingleComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b483fed6"]]);
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
    computed(
      () => {
        var _a, _b;
        return ((_b = (_a = project.value) == null ? void 0 : _a.images) == null ? void 0 : _b.map((item) => item.photo)) || [];
      }
    );
    ref(false);
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
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main class="project" data-v-a940132c><div class="route" data-v-a940132c>`);
      _push(ssrRenderComponent(Breadcrumbs, {
        reservedLastCrumb: project.value.name
      }, null, _parent));
      _push(`</div><section class="cover" data-v-a940132c><div class="numbers" style="${ssrRenderStyle(`--bg-url: url(${project.value.preview})`)}" data-v-a940132c><div class="label" data-v-a940132c><div data-v-a940132c><p data-v-a940132c>${ssrInterpolate(_ctx.$t("portfolio.projects.common.square"))}</p><p data-v-a940132c>${ssrInterpolate(project.value.totalArea)} m³</p></div><div data-v-a940132c><p data-v-a940132c>${ssrInterpolate(_ctx.$t("portfolio.projects.common.livingArea"))}</p><p data-v-a940132c>${ssrInterpolate(project.value.livingArea)} m²</p></div><div data-v-a940132c><p data-v-a940132c>${ssrInterpolate(_ctx.$t("portfolio.projects.common.workingTime"))}</p><p data-v-a940132c>${ssrInterpolate(_ctx.$t(project.value.workingTime))}</p></div><div data-v-a940132c><p class="cost" data-v-a940132c>${ssrInterpolate(_ctx.$t("portfolio.projects.common.cost"))}</p><h4 data-v-a940132c>€${ssrInterpolate(project.value.cost)}</h4></div></div></div><div class="info" data-v-a940132c><h1 class="name" data-v-a940132c><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-a940132c>${ssrInterpolate(project.value.name)}</span></h1><p class="type" data-v-a940132c>${ssrInterpolate(_ctx.$t(project.value.type))}</p><div class="customer" data-v-a940132c><p data-v-a940132c>${ssrInterpolate(_ctx.$t("portfolio.projects.common.client"))}</p><h4 data-v-a940132c>${ssrInterpolate(_ctx.$t(project.value.client))}</h4><p data-v-a940132c>${ssrInterpolate(_ctx.$t("portfolio.projects.common.location"))}</p><h4 data-v-a940132c>${ssrInterpolate(_ctx.$t(project.value.dislocation))}</h4><p data-v-a940132c>${ssrInterpolate(_ctx.$t("portfolio.projects.common.year"))}</p><h4 data-v-a940132c>${ssrInterpolate(project.value.year)}</h4></div><p class="desc" data-v-a940132c>${ssrInterpolate(_ctx.$t(project.value.desc))}</p></div></section></main>`);
      {
        _push(`<!---->`);
      }
      _push(`<section class="photos" data-v-a940132c><!--[-->`);
      ssrRenderList(smallImages.value, (item, index) => {
        _push(`<div class="photo" data-v-a940132c><img${ssrRenderAttr("src", item.photo)} alt="" data-v-a940132c><p data-v-a940132c>${ssrInterpolate(_ctx.$t(item.name))}</p></div>`);
      });
      _push(`<!--]--><div class="photo-main" data-v-a940132c><img${ssrRenderAttr("src", mainImage.value.photo)} alt="" data-v-a940132c><p class="photo-main-desc" data-v-a940132c>${ssrInterpolate(_ctx.$t(mainImage.value.name))}</p></div></section><section class="single" data-v-a940132c>`);
      _push(ssrRenderComponent(SingleComponent, {
        nameAcronym: nameAcronym.value,
        nameCamelCase: nameCamelCase.value,
        name: project.value.name,
        slug: project.value.slug
      }, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(OfferComponent, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a940132c"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-Dn-uP_ay.js.map
