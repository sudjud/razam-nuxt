import { _ as __nuxt_component_0 } from "./nuxt-link-BSCCcEt5.js";
import { ref, watch, mergeProps, withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import debounce from "lodash/debounce.js";
import { _ as _export_sfc } from "../server.mjs";
import { u as useI18n } from "./vue-i18n-nQ1iH6wE.js";
const _imports_0 = "data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.5'%20d='M7.22987%200C3.24558%200%200%203.22274%200%207.17903C0%2011.1353%203.24558%2014.3643%207.22987%2014.3643C8.93169%2014.3643%2010.4968%2013.7721%2011.7338%2012.7888L14.7454%2015.7776C14.8973%2015.9223%2015.1003%2016.0021%2015.3108%2016C15.5213%2015.9978%2015.7226%2015.9139%2015.8716%2015.7662C16.0206%2015.6185%2016.1054%2015.4188%2016.1078%2015.2097C16.1103%2015.0007%2016.0302%2014.799%2015.8847%2014.6479L12.8732%2011.6576C13.8642%2010.4274%2014.4613%208.87082%2014.4613%207.17903C14.4613%203.22274%2011.2142%200%207.22987%200ZM7.22987%201.59571C10.3457%201.59571%2012.8528%204.08513%2012.8528%207.17903C12.8528%2010.2729%2010.3457%2012.7686%207.22987%2012.7686C4.11406%2012.7686%201.60699%2010.2729%201.60699%207.17903C1.60699%204.08513%204.11406%201.59571%207.22987%201.59571Z'%20fill='%23636363'/%3e%3c/svg%3e";
const projects = [
  {
    name: "Chambre d'enfant",
    slug: "chambre-enfant",
    year: 2023,
    category: "portfolio.tabs.categories.livingRooms",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/chambre-enfant.webp",
    totalArea: "276.50",
    livingArea: "95.30",
    workingTime: "portfolio.projects.chambreEnfant.workingTime",
    client: "portfolio.projects.chambreEnfant.client",
    dislocation: "portfolio.projects.chambreEnfant.dislocation",
    desc: "portfolio.projects.chambreEnfant.desc",
    cost: "12.590",
    images: [
      {
        name: "portfolio.tabs.rooms.playingRoom",
        photo: "/images/projects/chambre-enfant/playing-room.webp"
      },
      {
        name: "portfolio.tabs.rooms.bedroom",
        photo: "/images/projects/chambre-enfant/bedroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.playingRoom",
        photo: "/images/projects/chambre-enfant/playing-room-2.webp"
      },
      {
        name: "portfolio.tabs.rooms.room",
        photo: "/images/projects/chambre-enfant/room.webp"
      },
      {
        name: "portfolio.tabs.rooms.room",
        photo: "/images/projects/chambre-enfant/room2.webp"
      }
    ]
  },
  {
    name: "Elemental harmony",
    slug: "elemental-harmony",
    year: 2022,
    category: "portfolio.tabs.categories.livingRooms",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/elemental-harmony.webp",
    totalArea: "276.50",
    livingArea: "95.30",
    workingTime: "portfolio.projects.chambreEnfant.workingTime",
    client: "portfolio.projects.chambreEnfant.client",
    dislocation: "portfolio.projects.elementalHarmony.dislocation",
    desc: "portfolio.projects.chambreEnfant.desc",
    cost: "12.590",
    images: [
      {
        name: "portfolio.tabs.rooms.hall",
        photo: "/images/projects/elemental-harmony/hall.webp"
      },
      {
        name: "portfolio.tabs.rooms.bedroom",
        photo: "/images/projects/elemental-harmony/bedroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.kitchen",
        photo: "/images/projects/elemental-harmony/kitchen.webp"
      },
      {
        name: "portfolio.tabs.rooms.corridor",
        photo: "/images/projects/elemental-harmony/corridor.webp"
      },
      {
        name: "portfolio.tabs.rooms.bathroom",
        photo: "/images/projects/elemental-harmony/bathroom.webp"
      }
    ]
  },
  {
    name: "Modern vista",
    slug: "modern-vista",
    year: 2022,
    category: "portfolio.tabs.categories.livingRooms",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/modern-vista.webp",
    totalArea: "276.50",
    livingArea: "95.30",
    workingTime: "portfolio.projects.modernVista.workingTime",
    client: "portfolio.projects.modernVista.client",
    dislocation: "portfolio.projects.modernVista.dislocation",
    desc: "portfolio.projects.modernVista.desc",
    cost: "12.590",
    images: [
      {
        name: "portfolio.tabs.rooms.hall",
        photo: "/images/projects/modern-vista/hall.webp"
      },
      {
        name: "portfolio.tabs.rooms.bedroom",
        photo: "/images/projects/modern-vista/bedroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.childbedroom",
        photo: "/images/projects/modern-vista/childbedroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.toilet",
        photo: "/images/projects/modern-vista/toilet.webp"
      },
      {
        name: "portfolio.tabs.rooms.bathroom",
        photo: "/images/projects/modern-vista/bathroom.webp"
      }
    ]
  },
  {
    name: "Natural essence",
    slug: "natural-essence",
    year: 2021,
    category: "portfolio.tabs.categories.livingRooms",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/natural-essence.webp",
    totalArea: "276.50",
    livingArea: "95.30",
    workingTime: "portfolio.projects.naturalEssence.workingTime",
    client: "portfolio.projects.naturalEssence.client",
    dislocation: "portfolio.projects.naturalEssence.dislocation",
    desc: "portfolio.projects.naturalEssence.desc",
    cost: "12.590",
    images: [
      {
        name: "portfolio.tabs.rooms.corridor",
        photo: "/images/projects/natural-essence/corridor.webp"
      },
      {
        name: "portfolio.tabs.rooms.bedroom",
        photo: "/images/projects/natural-essence/bedroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.kitchen",
        photo: "/images/projects/natural-essence/kitchen.webp"
      },
      {
        name: "portfolio.tabs.rooms.hall",
        photo: "/images/projects/natural-essence/hall.webp"
      },
      {
        name: "portfolio.tabs.rooms.bathroom",
        photo: "/images/projects/natural-essence/bathroom.webp"
      }
    ]
  },
  {
    name: "Serene lines",
    slug: "serene-lines",
    year: 2024,
    category: "portfolio.tabs.categories.livingRooms",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/serene-lines.webp",
    totalArea: "276.50",
    livingArea: "95.30",
    workingTime: "portfolio.projects.sereneLines.workingTime",
    client: "portfolio.projects.sereneLines.client",
    dislocation: "portfolio.projects.sereneLines.dislocation",
    desc: "portfolio.projects.sereneLines.desc",
    cost: "12.500",
    images: [
      {
        name: "portfolio.tabs.rooms.hall",
        photo: "/images/projects/serene-lines/hall.webp"
      },
      {
        name: "portfolio.tabs.rooms.bedroom",
        photo: "/images/projects/serene-lines/bedroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.kitchen",
        photo: "/images/projects/serene-lines/kitchen.webp"
      },
      {
        name: "portfolio.tabs.rooms.childroom",
        photo: "/images/projects/serene-lines/childroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.bathroom",
        photo: "/images/projects/serene-lines/bathroom.webp"
      }
    ]
  },
  {
    name: "Urban grace",
    slug: "urban-grace",
    year: 2024,
    category: "portfolio.tabs.categories.livingRooms",
    type: "portfolio.tabs.types.designAndRepair",
    preview: "/images/projects/previews/urban-grace.webp",
    totalArea: "276.50",
    livingArea: "95.30",
    workingTime: "portfolio.projects.urbanGrace.workingTime",
    client: "portfolio.projects.urbanGrace.client",
    dislocation: "portfolio.projects.urbanGrace.dislocation",
    desc: "portfolio.projects.urbanGrace.desc",
    cost: "12.500",
    images: [
      {
        name: "portfolio.tabs.rooms.kitchen",
        photo: "/images/projects/urban-grace/kitchen.webp"
      },
      {
        name: "portfolio.tabs.rooms.bedroom",
        photo: "/images/projects/urban-grace/bedroom.webp"
      },
      {
        name: "portfolio.tabs.rooms.corridor",
        photo: "/images/projects/urban-grace/corridor.webp"
      },
      {
        name: "portfolio.tabs.rooms.lounge",
        photo: "/images/projects/urban-grace/lounge2.webp"
      },
      {
        name: "portfolio.tabs.rooms.lounge",
        photo: "/images/projects/urban-grace/lounge.webp"
      }
    ]
  }
];
const articles = [
  {
    previewImg: "/images/blog/previews/lights.webp",
    category: "blog.articles.categories.architecture",
    name: "blog.articles.lights.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "lights",
    tags: [
      "blog.articles.tags.interiorLights",
      "blog.articles.tags.lightDesign",
      "blog.articles.tags.homeAtmosphere",
      "blog.articles.tags.lightZonation",
      "blog.articles.tags.lightStyles",
      "blog.articles.tags.lightIdeas",
      "blog.articles.tags.lightTrands"
    ]
  },
  {
    previewImg: "/images/blog/previews/ideas.webp",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.ideas.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "ideas"
  },
  {
    previewImg: "/images/blog/previews/trends.webp",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.trends.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "trends"
  },
  {
    previewImg: "/images/blog/previews/materials.webp",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.materials.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "materials"
  },
  {
    previewImg: "/images/blog/previews/bedroom.webp",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.bedroom.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "bedroom"
  },
  {
    previewImg: "/images/blog/previews/minimalism.webp",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.minimalism.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "minimalism"
  },
  {
    previewImg: "/images/blog/previews/minimalism.webp",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.minimalism.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "minimalism"
  }
];
function isI18nKey(value) {
  return typeof value === "string" && value.includes(".");
}
function localize(value, t, locale) {
  if (isI18nKey(value)) {
    return t(value, locale);
  }
  return value;
}
function searchContent(query, locale, t) {
  if (!query.trim()) return [];
  const q = query.trim().toLowerCase();
  const results = [];
  for (const project of projects) {
    const keysToCheck = [
      project.name,
      project.category,
      project.type,
      project.workingTime,
      project.client,
      project.dislocation,
      project.desc,
      ...(project.images || []).map((img) => img.name)
    ];
    const projectMatches = keysToCheck.some((key) => {
      const translated = localize(key, t, locale).toLowerCase();
      return translated.includes(q);
    });
    if (projectMatches) {
      results.push({
        type: "project",
        slug: project.slug,
        title: project.name,
        preview: project.preview
      });
    }
  }
  for (const article of articles) {
    const tagKeys = Array.isArray(article.tags) ? article.tags : [];
    const keysToCheck = [article.name, article.category, ...tagKeys];
    const articleMatches = keysToCheck.some((key) => {
      const translated = localize(key, t, locale).toLowerCase();
      return translated.includes(q);
    });
    if (articleMatches) {
      results.push({
        type: "article",
        slug: article.slug,
        title: article.name,
        previewImg: article.previewImg
      });
    }
  }
  return results;
}
const _sfc_main = {
  __name: "SearchComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const searchQuery = ref("");
    const searchResults = ref([]);
    const doSearch = debounce((q) => {
      searchResults.value = searchContent(q, locale.value, t);
      console.log(searchResults.value);
    }, 300);
    watch(searchQuery, (newQuery) => {
      if (!newQuery.trim()) {
        searchResults.value = [];
      } else {
        doSearch(newQuery);
      }
    });
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function highlightMatch(text) {
      const query = searchQuery.value.trim();
      if (!query) return text;
      const pattern = new RegExp(`(${escapeRegExp(query)})`, "gi");
      return text.replace(pattern, "<strong>$1</strong>");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search" }, _attrs))} data-v-0a2a957b><input${ssrRenderAttr("value", searchQuery.value)} type="text" class="search"${ssrRenderAttr("placeholder", _ctx.$t("menu.search"))} data-v-0a2a957b><div class="loupe" data-v-0a2a957b><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-0a2a957b></div>`);
      if (searchQuery.value.trim() && searchResults.value.length) {
        _push(`<ul class="results" data-v-0a2a957b><!--[-->`);
        ssrRenderList(searchResults.value, (item, i) => {
          _push(`<li data-v-0a2a957b>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.type === "project" ? `/portfolio/${item.slug}` : `/news/${item.slug}`,
            class: "result-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", item.type === "project" ? item.preview : item.previewImg)} alt="" class="result-img" data-v-0a2a957b${_scopeId}><div class="result-text" data-v-0a2a957b${_scopeId}>${highlightMatch(
                  `${item.type === "project" ? "📁" : "📰"} ${unref(t)(item.title)}`
                ) ?? ""}</div>`);
              } else {
                return [
                  createVNode("img", {
                    src: item.type === "project" ? item.preview : item.previewImg,
                    alt: "",
                    class: "result-img"
                  }, null, 8, ["src"]),
                  createVNode("div", {
                    class: "result-text",
                    innerHTML: highlightMatch(
                      `${item.type === "project" ? "📁" : "📰"} ${unref(t)(item.title)}`
                    )
                  }, null, 8, ["innerHTML"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tools/SearchComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SearchComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a2a957b"]]);
export {
  SearchComponent as S,
  articles as a,
  projects as p
};
//# sourceMappingURL=SearchComponent-Bv1Uerwr.js.map
