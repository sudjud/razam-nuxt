import { resolveDirective, mergeProps, useSSRContext, withAsyncContext, ref, computed } from 'vue';
import { ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { B as Breadcrumbs } from './Breadcrumbs.vue.mjs';
import { _ as _export_sfc } from './server.mjs';
import { O as OfferComponent } from './OfferComponent.vue.mjs';
import { u as useAsyncData } from './asyncData.mjs';
import { u as useI18n } from './vue-i18n.mjs';
import { u as useHead } from './v3.mjs';
import './nuxt-link.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@vueuse/core';
import './virtual_public49.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

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

const baseURL = "https://razam.fr";
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
    const { t, locale } = useI18n();
    useHead({
      title: () => project.value.name,
      titleTemplate: (chunk) => `${chunk}`,
      meta: [
        {
          name: "description",
          content: () => t(project.value.desc).slice(0, 160)
        },
        { name: "keywords", content: () => t(`meta.common.keywords`) },
        { property: "og:title", content: () => project.value.name },
        {
          property: "og:description",
          content: () => t(project.value.desc).slice(0, 160)
        },
        { property: "og:url", content: () => `${baseURL}${route.path}` },
        {
          property: "og:locale",
          content: () => {
            switch (locale.value) {
              case "en":
                return "en_US";
              case "ru":
                return "ru_RU";
              default:
                return "fr_FR";
            }
          }
        },
        { property: "og:image", content: `${baseURL}/images/logo.webp` },
        { property: "og:image:alt", content: () => project.value.name },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: () => project.value.name },
        {
          name: "twitter:description",
          content: () => t(project.value.desc).slice(0, 160)
        },
        { name: "twitter:image", content: `${baseURL}/images/logo.webp` },
        { name: "twitter:image:alt", content: () => project.value.name }
      ],
      link: [
        { rel: "canonical", href: `${baseURL}${route.path}` },
        { rel: "alternate", hreflang: "en", href: `${baseURL}/en${route.path}` },
        { rel: "alternate", hreflang: "fr", href: `${baseURL}${route.path}` },
        { rel: "alternate", hreflang: "ru", href: `${baseURL}/ru${route.path}` },
        {
          rel: "alternate",
          hreflang: "x-default",
          href: `${baseURL}${route.path}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><main class="project" data-v-45dddc0d><div class="route" data-v-45dddc0d>`);
      _push(ssrRenderComponent(Breadcrumbs, {
        reservedLastCrumb: project.value.name
      }, null, _parent));
      _push(`</div><section class="cover" data-v-45dddc0d><div class="numbers" style="${ssrRenderStyle(`--bg-url: url(${project.value.preview})`)}" data-v-45dddc0d><div class="label" data-v-45dddc0d><div data-v-45dddc0d><p data-v-45dddc0d>${ssrInterpolate(_ctx.$t("portfolio.projects.common.square"))}</p><p data-v-45dddc0d>${ssrInterpolate(project.value.totalArea)} m³</p></div><div data-v-45dddc0d><p data-v-45dddc0d>${ssrInterpolate(_ctx.$t("portfolio.projects.common.livingArea"))}</p><p data-v-45dddc0d>${ssrInterpolate(project.value.livingArea)} m²</p></div><div data-v-45dddc0d><p data-v-45dddc0d>${ssrInterpolate(_ctx.$t("portfolio.projects.common.workingTime"))}</p><p data-v-45dddc0d>${ssrInterpolate(_ctx.$t(project.value.workingTime))}</p></div><div data-v-45dddc0d><p class="cost" data-v-45dddc0d>${ssrInterpolate(_ctx.$t("portfolio.projects.common.cost"))}</p><h4 data-v-45dddc0d>€${ssrInterpolate(project.value.cost)}</h4></div></div></div><div class="info" data-v-45dddc0d><h1 class="name" data-v-45dddc0d><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-45dddc0d>${ssrInterpolate(project.value.name)}</span></h1><p class="type" data-v-45dddc0d>${ssrInterpolate(_ctx.$t(project.value.type))}</p><div class="customer" data-v-45dddc0d><p data-v-45dddc0d>${ssrInterpolate(_ctx.$t("portfolio.projects.common.client"))}</p><h4 data-v-45dddc0d>${ssrInterpolate(_ctx.$t(project.value.client))}</h4><p data-v-45dddc0d>${ssrInterpolate(_ctx.$t("portfolio.projects.common.location"))}</p><h4 data-v-45dddc0d>${ssrInterpolate(_ctx.$t(project.value.dislocation))}</h4><p data-v-45dddc0d>${ssrInterpolate(_ctx.$t("portfolio.projects.common.year"))}</p><h4 data-v-45dddc0d>${ssrInterpolate(project.value.year)}</h4></div><p class="desc" data-v-45dddc0d>${ssrInterpolate(_ctx.$t(project.value.desc))}</p></div></section></main>`);
      {
        _push(`<!---->`);
      }
      _push(`<section class="photos" data-v-45dddc0d><!--[-->`);
      ssrRenderList(smallImages.value, (item, index) => {
        _push(`<div class="photo" data-v-45dddc0d><img${ssrRenderAttr("src", item.photo)} alt="" data-v-45dddc0d><p data-v-45dddc0d>${ssrInterpolate(_ctx.$t(item.name))}</p></div>`);
      });
      _push(`<!--]--><div class="photo-main" data-v-45dddc0d><img${ssrRenderAttr("src", mainImage.value.photo)} alt="" data-v-45dddc0d><p class="photo-main-desc" data-v-45dddc0d>${ssrInterpolate(_ctx.$t(mainImage.value.name))}</p></div></section><section class="single" data-v-45dddc0d>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-45dddc0d"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_.vue.mjs.map
