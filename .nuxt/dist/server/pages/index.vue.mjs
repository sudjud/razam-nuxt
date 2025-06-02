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
import { useI18n } from "../node_modules/vue-i18n/dist/vue-i18n.mjs";
import { useHead } from "../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
/* empty css            */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    const { t, locale } = useI18n();
    const testimonials = [
      {
        photo: void 0,
        title: "",
        text: "home.reviews.1.text",
        name: "home.reviews.1.name",
        stars: 5,
        datePublishied: "2022-05-04"
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.2.text",
        name: "home.reviews.2.name",
        stars: 5,
        datePublishied: "2024-11-01"
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.3.text",
        name: "home.reviews.3.name",
        stars: 4,
        datePublishied: "2023-07-07"
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.4.text",
        name: "home.reviews.4.name",
        stars: 5,
        datePublishied: "2024-01-05"
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.5.text",
        name: "home.reviews.5.name",
        stars: 5,
        datePublishied: "2023-03-12"
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.6.text",
        name: "home.reviews.6.name",
        stars: 5,
        datePublishied: "2023-12-03"
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.7.text",
        name: "home.reviews.7.name",
        stars: 5,
        datePublishied: "2024-12-11"
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.8.text",
        name: "home.reviews.8.name",
        stars: 5,
        datePublishied: "2022-02-03"
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.9.text",
        name: "home.reviews.9.name",
        stars: 5,
        datePublishied: "2023-09-10"
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.10.text",
        name: "home.reviews.10.name",
        stars: 5,
        datePublishied: "2024-11-11"
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.11.text",
        name: "home.reviews.11.name",
        stars: 5,
        datePublishied: "2024-05-04"
      },
      {
        photo: void 0,
        title: "",
        text: "home.reviews.12.text",
        name: "home.reviews.12.name",
        stars: 5,
        datePublishied: "2024-02-08"
      }
    ];
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Razam",
      url: `https://razam.fr/${locale.value}/`,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: testimonials.length
      },
      review: testimonials.map((review) => ({
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.stars,
          bestRating: 5
        },
        author: {
          "@type": "Person",
          name: t(review.name)
        },
        reviewBody: t(review.text),
        datePublishied: review.datePublishied
      }))
    };
    const faqData = Array.from({ length: 6 }, (_, i) => {
      const index2 = i + 1;
      return {
        "@type": "Question",
        name: t(`home.FAQ.q${index2}`),
        acceptedAnswer: {
          "@type": "Answer",
          text: t(`home.FAQ.a${index2}`)
        }
      };
    });
    const projectsSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CreativeWork",
          name: "Chambre d'enfant",
          description: t("portfolio.projects.chambreEnfant.desc"),
          image: "https://razam.fr/images/projects/previews/chambre-enfant.webp",
          url: `https://razam.fr/${locale.value}/portfolio/chambre-enfant`,
          creator: {
            "@type": "Organization",
            name: "Razam"
          }
        },
        {
          "@type": "CreativeWork",
          name: "Elemental harmony",
          description: t("portfolio.projects.elementalHarmony.desc"),
          image: "https://razam.fr/images/projects/previews/elemental-harmony.webp",
          url: `https://razam.fr/${locale.value}/portfolio/elemental-harmony`,
          creator: {
            "@type": "Organization",
            name: "Razam"
          }
        },
        {
          "@type": "CreativeWork",
          name: "Modern vista",
          description: t("portfolio.projects.modernVista.desc"),
          image: "https://razam.fr/images/projects/previews/modern-vista.webp",
          url: `https://razam.fr/${locale.value}/portfolio/modern-vista`,
          creator: {
            "@type": "Organization",
            name: "Razam"
          }
        },
        {
          "@type": "CreativeWork",
          name: "Natural essence",
          description: t("portfolio.projects.naturalEssence.desc"),
          image: "https://razam.fr/images/projects/previews/natural-essence.webp",
          url: `https://razam.fr/${locale.value}/portfolio/natural-essence`,
          creator: {
            "@type": "Organization",
            name: "Razam"
          }
        },
        {
          "@type": "CreativeWork",
          name: "Serene lines",
          description: t("portfolio.projects.sereneLines.desc"),
          image: "https://razam.fr/images/projects/previews/serene-lines.webp",
          url: `https://razam.fr/${locale.value}/portfolio/serene-lines`,
          creator: {
            "@type": "Organization",
            name: "Razam"
          }
        },
        {
          "@type": "CreativeWork",
          name: "Urban grace",
          description: t("portfolio.projects.urbanGrace.desc"),
          image: "https://razam.fr/images/projects/previews/urban-grace.webp",
          url: `https://razam.fr/${locale.value}/portfolio/urban-grace`,
          creator: {
            "@type": "Organization",
            name: "Razam"
          }
        }
      ]
    };
    const newsSchema = [
      {
        category: "home.news.category1",
        title: "blog.articles.lights.name",
        by: "home.news.by1",
        date: "home.news.date1",
        slug: "lights"
      },
      {
        category: "home.news.category2",
        title: "blog.articles.ideas.name",
        by: "home.news.by2",
        date: "home.news.date2",
        slug: "ideas"
      },
      {
        category: "home.news.category3",
        title: "blog.articles.trends.name",
        by: "home.news.by3",
        date: "home.news.date3",
        slug: "trends"
      },
      {
        category: "home.news.category4",
        title: "blog.articles.materials.name",
        by: "home.news.by4",
        date: "home.news.date4",
        slug: "materials"
      },
      {
        category: "home.news.category4",
        title: "blog.articles.bedroom.name",
        by: "home.news.by4",
        date: "home.news.date4",
        slug: "bedroom"
      },
      {
        category: "home.news.category4",
        title: "blog.articles.minimalism.name",
        by: "home.news.by4",
        date: "home.news.date4",
        slug: "minimalism"
      }
    ];
    const blogSchema = newsSchema.map((post) => ({
      "@type": "BlogPosting",
      "headline": t(post.title),
      "author": {
        "@type": "Person",
        "name": t(post.by)
      },
      "datePublished": "2024-11-02",
      "articleSection": t(post.category),
      "url": `https://razam.fr/${locale.value}/news/${post.slug}`
    }));
    useSeo("home");
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: t("meta.common.title"),
            url: `https://razam.fr/${locale.value}/`,
            description: t("meta.common.description"),
            inLanguage: locale.value,
            "mainEntity": [
              {
                "@type": "QuantitativeValue",
                "name": t("home.stats1"),
                "value": 83,
                "unitText": "project"
              },
              {
                "@type": "QuantitativeValue",
                "name": t("home.stats2"),
                "value": 95,
                "unitText": "percent"
              },
              {
                "@type": "QuantitativeValue",
                "name": t("home.stats3"),
                "value": 12500,
                "unitText": "squareMeter"
              },
              {
                "@type": "QuantitativeValue",
                "name": t("home.statsGoal"),
                "value": 1,
                "unitText": "goal"
              },
              {
                "@type": "QuantitativeValue",
                "name": t("home.stats5"),
                "value": 100,
                "unitText": "percent"
              }
            ],
            publisher: {
              "@type": "Organization",
              name: "Razam",
              url: `https://razam.fr/${locale.value}/`,
              logo: {
                "@type": "ImageObject",
                url: "https://razam.fr/images/logo.webp"
              }
            }
          })
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Razam",
            url: `https://razam.fr/${locale.value}/`,
            logo: {
              "@type": "ImageObject",
              url: "https://razam.fr/images/logo.webp"
            },
            sameAs: [
              "https://www.instagram.com/razam.design/",
              "https://www.threads.com/@razam.design?igshid=NTc4MTIwNjQ2YQ%3D%3D",
              "https://www.houzz.ru/pro/webuser-913531865"
            ]
          })
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData
          })
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(reviewSchema)
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: t("home.service1"),
                serviceType: "Interior and commercial space design",
                provider: {
                  "@type": "Organization",
                  name: "Razam"
                },
                areaServed: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "FR",
                    addressRegion: "Côte d'Azur"
                  }
                },
                url: `https://razam.fr/${locale.value}/interiordesign`
              },
              {
                "@type": "Service",
                name: t("home.service4"),
                serviceType: "House and apartment renovation",
                provider: {
                  "@type": "Organization",
                  name: "Razam"
                },
                areaServed: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "FR",
                    addressRegion: "Côte d'Azur"
                  }
                },
                url: `https://razam.fr/${locale.value}/houserenovation`
              },
              {
                "@type": "Service",
                name: t("home.service5"),
                serviceType: "Commercial space renovation",
                provider: {
                  "@type": "Organization",
                  name: "Razam"
                },
                areaServed: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "FR",
                    addressRegion: "Côte d'Azur"
                  }
                },
                url: `https://razam.fr/${locale.value}/commercerenovation`
              }
            ]
          })
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(projectsSchema)
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "mainEntity": blogSchema
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      const _directive_lazy_load = resolveDirective("lazy-load");
      let _temp0, _temp2;
      _push(`<!--[--><section class="home" data-v-64a5467f><div class="container" data-v-64a5467f><div class="social-links" data-v-64a5467f>`);
      _push(ssrRenderComponent(SocialMedias, null, null, _parent));
      _push(`</div><div class="content" data-v-64a5467f><h1 data-v-64a5467f><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-sw reveal-visible" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.headline"))}</span></h1></div></div></section><section class="expert-design" data-v-64a5467f><div class="container" data-v-64a5467f><div class="image-wrapper" data-v-64a5467f><img${ssrRenderAttrs(_temp0 = mergeProps({
        "data-src": _imports_0,
        alt: "Interior"
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-64a5467f>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div><div class="filler" data-v-64a5467f></div><div class="text-content" data-v-64a5467f><h3${ssrRenderAttrs(mergeProps({ class: "wow reveal-sb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.desc"))}</h3><p data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.fullDesc1"))}</p><p data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.fullDesc2"))}</p><p class="${ssrRenderClass([{ open: isOpen.value }, "read-more-text"])}" data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.readMore"))}<br data-v-64a5467f><br data-v-64a5467f> ${ssrInterpolate(_ctx.$t("home.readMore2"))}<br data-v-64a5467f><br data-v-64a5467f> ${ssrInterpolate(_ctx.$t("home.readMore3"))}</p><span class="read-more" data-v-64a5467f>${ssrInterpolate(isOpen.value ? _ctx.$t("common.hide") : _ctx.$t("common.readMore"))}</span></div></div></section><section class="values" data-v-64a5467f><div class="container" data-v-64a5467f><div class="main" data-v-64a5467f><div class="title-block" data-v-64a5467f><h2 data-v-64a5467f><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-64a5467f>${_ctx.$t("home.valuesH2") ?? ""}</span></h2><div class="arrow-down" data-v-64a5467f><span data-v-64a5467f>↓</span></div></div><div class="image-wrapper" data-v-64a5467f><img${ssrRenderAttrs(_temp2 = mergeProps({
        "data-src": _imports_1,
        alt: "Интерьер"
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-64a5467f>${"textContent" in _temp2 ? ssrInterpolate(_temp2.textContent) : _temp2.innerHTML ?? ""}</div></div>`);
      _push(ssrRenderComponent(ValuesArrowsComponent, null, null, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(HomeStatsComponent, null, null, _parent));
      _push(`<section class="services" data-v-64a5467f>`);
      _push(ssrRenderComponent(HomeGallery, null, null, _parent));
      _push(`</section><section class="projects" data-v-64a5467f><div class="projects-container" data-v-64a5467f><h3 data-v-64a5467f><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.projectsH2"))}</span></h3>`);
      _push(ssrRenderComponent(ProjectsSwiperComponent, null, null, _parent));
      _push(`</div></section><section class="reviews" data-v-64a5467f><h2 data-v-64a5467f><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.reviewsH2P1"))}<br data-v-64a5467f> ${ssrInterpolate(_ctx.$t("home.reviewsH2P2"))}</span></h2><div class="divider" data-v-64a5467f></div>`);
      _push(ssrRenderComponent(ReviewsSliderComponent, null, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(OfferComponent, null, null, _parent));
      _push(`<section class="process" data-v-64a5467f><div class="container" data-v-64a5467f><h2 data-v-64a5467f><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.process.h2"))}</span></h2><div class="process-grid" data-v-64a5467f><div class="process-item" data-v-64a5467f><div class="process-item-count" data-v-64a5467f>01</div><div class="process-item-title" data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.process.title1"))}</div><p data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.process.text1"))}</p></div><div class="process-item" data-v-64a5467f><div class="process-item-count" data-v-64a5467f>02</div><div class="process-item-title" data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.process.title2"))}</div><p data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.process.text2"))}</p></div><div class="process-item" data-v-64a5467f><div class="process-item-count" data-v-64a5467f>03</div><div class="process-item-title" data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.process.title3"))}</div><p data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.process.text3"))}</p></div><div class="process-item process-item-moved" data-v-64a5467f><div class="process-item-count" data-v-64a5467f>04</div><div class="process-item-title" data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.process.title4"))}</div><p data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.process.text4"))}</p></div><div class="process-item process-item-moved-mob" data-v-64a5467f><div class="process-item-count" data-v-64a5467f>05</div><div class="process-item-title" data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.process.title5"))}</div><p data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.process.text5"))}</p></div></div></div></section><section class="faq" data-v-64a5467f><h2 data-v-64a5467f><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-64a5467f>FAQ</span></h2>`);
      _push(ssrRenderComponent(FaqComponent, null, null, _parent));
      _push(`</section><section class="news" data-v-64a5467f><h2 data-v-64a5467f><span${ssrRenderAttrs(mergeProps({ class: "wow reveal-bb" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-64a5467f>${ssrInterpolate(_ctx.$t("home.news.H2"))}</span></h2>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-64a5467f"]]);
export {
  index as default
};
//# sourceMappingURL=index.vue.mjs.map
