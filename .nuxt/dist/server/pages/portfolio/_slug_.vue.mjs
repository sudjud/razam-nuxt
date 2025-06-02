import { withAsyncContext, ref, computed, resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList } from "vue/server-renderer";
import { useRoute } from "vue-router";
import Breadcrumbs from "../../components/Tools/Breadcrumbs.vue.mjs";
import SingleComponent from "../../components/Projects/SingleComponent.vue.mjs";
import OfferComponent from "../../components/Blocks/OfferComponent.vue.mjs";
import { useAsyncData } from "../../node_modules/nuxt/dist/app/composables/asyncData.mjs";
import { useI18n } from "../../node_modules/vue-i18n/dist/vue-i18n.mjs";
import { useHead } from "../../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
/* empty css             */
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
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
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp0, _temp1;
      _push(`<!--[--><main class="project" data-v-42778140><div class="route" data-v-42778140>`);
      _push(ssrRenderComponent(Breadcrumbs, {
        reservedLastCrumb: project.value.name
      }, null, _parent));
      _push(`</div><section class="cover" data-v-42778140><div class="numbers" style="${ssrRenderStyle(`--bg-url: url(${project.value.preview})`)}" data-v-42778140><div class="label" data-v-42778140><div data-v-42778140><p data-v-42778140>${ssrInterpolate(_ctx.$t("portfolio.projects.common.livingArea"))}</p><p data-v-42778140>${ssrInterpolate(project.value.livingArea)} m²</p></div><div data-v-42778140><p data-v-42778140>${ssrInterpolate(_ctx.$t("portfolio.projects.common.workingTime"))}</p><p data-v-42778140>${ssrInterpolate(_ctx.$t(project.value.workingTime))}</p></div></div></div><div class="info" data-v-42778140><h1 class="name" data-v-42778140><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-42778140>${ssrInterpolate(project.value.name)}</span></h1><p class="type" data-v-42778140>${ssrInterpolate(_ctx.$t(project.value.type))}</p><div class="customer" data-v-42778140><p data-v-42778140>${ssrInterpolate(_ctx.$t("portfolio.projects.common.client"))}</p><h4 data-v-42778140>${ssrInterpolate(_ctx.$t(project.value.client))}</h4><p data-v-42778140>${ssrInterpolate(_ctx.$t("portfolio.projects.common.location"))}</p><h4 data-v-42778140>${ssrInterpolate(_ctx.$t(project.value.dislocation))}</h4><p data-v-42778140>${ssrInterpolate(_ctx.$t("portfolio.projects.common.year"))}</p><h4 data-v-42778140>${ssrInterpolate(project.value.year)}</h4></div><p class="desc" data-v-42778140>${ssrInterpolate(_ctx.$t(project.value.desc))}</p></div></section></main>`);
      {
        _push(`<!---->`);
      }
      _push(`<section class="photos" data-v-42778140><!--[-->`);
      ssrRenderList(smallImages.value, (item, index) => {
        _push(`<div class="photo" data-v-42778140><img${ssrRenderAttrs(_temp0 = mergeProps({
          "data-src": item.photo,
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-42778140>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}<p data-v-42778140>${ssrInterpolate(_ctx.$t(item.name))}</p></div>`);
      });
      _push(`<!--]--><div class="photo-main" data-v-42778140><img${ssrRenderAttrs(_temp1 = mergeProps({
        "data-src": mainImage.value.photo,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-42778140>${"textContent" in _temp1 ? ssrInterpolate(_temp1.textContent) : _temp1.innerHTML ?? ""}<p class="photo-main-desc" data-v-42778140>${ssrInterpolate(_ctx.$t(mainImage.value.name))}</p></div></section><section class="single" data-v-42778140>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-42778140"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_.vue.mjs.map
