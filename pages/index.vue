<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="home">
    <div class="container">
      <div class="social-links">
        <SocialMedias />
      </div>
      <div class="content">
        <h1>
          <span v-reveal class="wow reveal-sw reveal-visible">{{
            $t("home.headline")
          }}</span>
        </h1>
      </div>
    </div>
  </section>
  <section class="expert-design">
    <div class="container">
      <div class="image-wrapper">
        <img src="/images/home/2.webp" alt="Interior" />
      </div>
      <div class="filler"></div>
      <div class="text-content">
        <h3 v-reveal class="wow reveal-sb">
          {{ $t("home.desc") }}
        </h3>
        <p>
          {{ $t("home.fullDesc1") }}
        </p>
        <p>
          {{ $t("home.fullDesc2") }}
        </p>
        <p class="read-more-text" :class="{ open: isOpen }">
          {{ $t("home.readMore") }}<br /><br />
          {{ $t("home.readMore2") }}<br /><br />
          {{ $t("home.readMore3") }}
        </p>
        <span @click="toggleIsOpen" class="read-more">{{
          isOpen ? $t("common.hide") : $t("common.readMore")
        }}</span>
      </div>
    </div>
  </section>
  <section class="values">
    <div class="container">
      <div class="main">
        <div class="title-block">
          <h2>
            <span
              v-reveal
              class="wow reveal-bb"
              v-html="$t('home.valuesH2')"
            ></span>
          </h2>
          <div class="arrow-down">
            <span>↓</span>
          </div>
        </div>
        <div class="image-wrapper">
          <img src="/images/home/3.webp" alt="Интерьер" />
        </div>
      </div>
      <ValuesArrowsComponent />
    </div>
  </section>
  <HomeStatsComponent />
  <section class="services">
    <HomeGallery />
  </section>
  <section class="projects">
    <div class="projects-container">
      <h3>
        <span v-reveal class="wow reveal-bb">{{ $t("home.projectsH2") }}</span>
      </h3>
      <ProjectsSwiperComponent />
    </div>
  </section>
  <section class="reviews">
    <h2>
      <span v-reveal class="wow reveal-bb"
        >{{ $t("home.reviewsH2P1") }}<br />
        {{ $t("home.reviewsH2P2") }}</span
      >
    </h2>
    <div class="divider"></div>
    <ReviewsSliderComponent />
  </section>
  <OfferComponent />
  <section class="process">
    <div class="container">
      <h2>
        <span v-reveal class="wow reveal-bb">{{ $t("home.process.h2") }}</span>
      </h2>
      <div class="process-grid">
        <div class="process-item">
          <div class="process-item-count">01</div>
          <div class="process-item-title">{{ $t("home.process.title1") }}</div>
          <p>
            {{ $t("home.process.text1") }}
          </p>
        </div>
        <div class="process-item">
          <div class="process-item-count">02</div>
          <div class="process-item-title">{{ $t("home.process.title2") }}</div>
          <p>
            {{ $t("home.process.text2") }}
          </p>
        </div>
        <div class="process-item">
          <div class="process-item-count">03</div>
          <div class="process-item-title">{{ $t("home.process.title3") }}</div>
          <p>
            {{ $t("home.process.text3") }}
          </p>
        </div>
        <div class="process-item process-item-moved">
          <div class="process-item-count">04</div>
          <div class="process-item-title">{{ $t("home.process.title4") }}</div>
          <p>
            {{ $t("home.process.text4") }}
          </p>
        </div>
        <div class="process-item process-item-moved-mob">
          <div class="process-item-count">05</div>
          <div class="process-item-title">{{ $t("home.process.title5") }}</div>
          <p>
            {{ $t("home.process.text5") }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="faq">
    <h2><span v-reveal class="wow reveal-bb">FAQ</span></h2>
    <FaqComponent />
  </section>
  <section class="news">
    <h2>
      <span v-reveal class="wow reveal-bb">{{ $t("home.news.H2") }}</span>
    </h2>
    <NewsSwiperComponent />
  </section>
</template>

<script setup defer>
import HomeGallery from "../components/Swipers/HomeGallery.vue";
import SocialMedias from "../components/Tools/SocialMedias.vue";
import ProjectsSwiperComponent from "../components/Swipers/ProjectsSwiperComponent.vue";
import ValuesArrowsComponent from "../components/Tools/ValuesArrowsComponent.vue";
import ReviewsSliderComponent from "../components/Swipers/ReviewsSliderComponent.vue";
import FaqComponent from "../components/Tools/FaqComponent.vue";
import NewsSwiperComponent from "../components/Swipers/NewsSwiperComponent.vue";
import { ref } from "vue";
import HomeStatsComponent from "../components/Blocks/HomeStatsComponent.vue";
import OfferComponent from "../components/Blocks/OfferComponent.vue";
import { useSeo } from "../composables/useSeo";

const isOpen = ref(false);
const { t, locale } = useI18n();

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value;
};

const testimonials = [
  {
    photo: undefined,
    title: "",
    text: "home.reviews.1.text",
    name: "home.reviews.1.name",
    stars: 5,
    datePublishied: "2022-05-04"
  },
  {
    photo: undefined,
    title: "",
    text: "home.reviews.2.text",
    name: "home.reviews.2.name",
    stars: 5,
    datePublishied: "2024-11-01"
  },
  {
    photo: undefined,
    title: "",
    text: "home.reviews.3.text",
    name: "home.reviews.3.name",
    stars: 4,
    datePublishied: "2023-07-07"
  },
  {
    photo: undefined,
    title: "",
    text: "home.reviews.4.text",
    name: "home.reviews.4.name",
    stars: 5,
    datePublishied: "2024-01-05"
  },
  {
    photo: undefined,
    title: "",
    text: "home.reviews.5.text",
    name: "home.reviews.5.name",
    stars: 5,
    datePublishied: "2023-03-12"
  },
  {
    photo: undefined,
    title: "",
    text: "home.reviews.6.text",
    name: "home.reviews.6.name",
    stars: 5,
    datePublishied: "2023-12-03"
  },
  {
    photo: undefined,
    title: "",
    text: "home.reviews.7.text",
    name: "home.reviews.7.name",
    stars: 5,
    datePublishied: "2024-12-11"
  },
  {
    photo: undefined,
    title: "",
    text: "home.reviews.8.text",
    name: "home.reviews.8.name",
    stars: 5,
    datePublishied: "2022-02-03"
  },
  {
    photo: undefined,
    title: "",
    text: "home.reviews.9.text",
    name: "home.reviews.9.name",
    stars: 5,
    datePublishied: "2023-09-10"
  },
  {
    photo: undefined,
    title: "",
    text: "home.reviews.10.text",
    name: "home.reviews.10.name",
    stars: 5,
    datePublishied: "2024-11-11"
  },
  {
    photo: undefined,
    title: "",
    text: "home.reviews.11.text",
    name: "home.reviews.11.name",
    stars: 5,
    datePublishied: "2024-05-04"
  },
  {
    photo: undefined,
    title: "",
    text: "home.reviews.12.text",
    name: "home.reviews.12.name",
    stars: 5,
    datePublishied: "2024-02-08"
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Razam",
  url: `https://razam.fr/${locale.value}/`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: testimonials.length,
  },
  review: testimonials.map((review) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.stars,
      bestRating: 5,
    },
    author: {
      "@type": "Person",
      name: t(review.name),
    },
    reviewBody: t(review.text),
    datePublishied: review.datePublishied
  })),
};

const faqData = Array.from({ length: 6 }, (_, i) => {
  const index = i + 1;
  return {
    "@type": "Question",
    name: t(`home.FAQ.q${index}`),
    acceptedAnswer: {
      "@type": "Answer",
      text: t(`home.FAQ.a${index}`),
    },
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
        name: "Razam",
      },
    },
    {
      "@type": "CreativeWork",
      name: "Elemental harmony",
      description: t("portfolio.projects.elementalHarmony.desc"),
      image: "https://razam.fr/images/projects/previews/elemental-harmony.webp",
      url: `https://razam.fr/${locale.value}/portfolio/elemental-harmony`,
      creator: {
        "@type": "Organization",
        name: "Razam",
      },
    },
    {
      "@type": "CreativeWork",
      name: "Modern vista",
      description: t("portfolio.projects.modernVista.desc"),
      image: "https://razam.fr/images/projects/previews/modern-vista.webp",
      url: `https://razam.fr/${locale.value}/portfolio/modern-vista`,
      creator: {
        "@type": "Organization",
        name: "Razam",
      },
    },
    {
      "@type": "CreativeWork",
      name: "Natural essence",
      description: t("portfolio.projects.naturalEssence.desc"),
      image: "https://razam.fr/images/projects/previews/natural-essence.webp",
      url: `https://razam.fr/${locale.value}/portfolio/natural-essence`,
      creator: {
        "@type": "Organization",
        name: "Razam",
      },
    },
    {
      "@type": "CreativeWork",
      name: "Serene lines",
      description: t("portfolio.projects.sereneLines.desc"),
      image: "https://razam.fr/images/projects/previews/serene-lines.webp",
      url: `https://razam.fr/${locale.value}/portfolio/serene-lines`,
      creator: {
        "@type": "Organization",
        name: "Razam",
      },
    },
    {
      "@type": "CreativeWork",
      name: "Urban grace",
      description: t("portfolio.projects.urbanGrace.desc"),
      image: "https://razam.fr/images/projects/previews/urban-grace.webp",
      url: `https://razam.fr/${locale.value}/portfolio/urban-grace`,
      creator: {
        "@type": "Organization",
        name: "Razam",
      },
    },
  ],
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
  },
];

const blogSchema = newsSchema.map(post => ({
  "@type": "BlogPosting",
  "headline": t(post.title),
  "author": {
    "@type": "Person",
    "name": t(post.by)
  },
  "datePublished": '2024-11-02',
  "articleSection": t(post.category),
  "url": `https://razam.fr/${locale.value}/news/${post.slug}`
}))

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
            url: "https://razam.fr/images/logo.webp",
          },
        },
      }),
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
          url: "https://razam.fr/images/logo.webp",
        },
        sameAs: [
          "https://www.instagram.com/razam.design/",
          "https://www.threads.com/@razam.design?igshid=NTc4MTIwNjQ2YQ%3D%3D",
          "https://www.houzz.ru/pro/webuser-913531865",
        ],
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData,
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(reviewSchema),
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
              name: "Razam",
            },
            areaServed: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressCountry: "FR",
                addressRegion: "Côte d'Azur",
              },
            },
            url: `https://razam.fr/${locale.value}/interiordesign`,
          },
          {
            "@type": "Service",
            name: t("home.service4"),
            serviceType: "House and apartment renovation",
            provider: {
              "@type": "Organization",
              name: "Razam",
            },
            areaServed: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressCountry: "FR",
                addressRegion: "Côte d'Azur",
              },
            },
            url: `https://razam.fr/${locale.value}/houserenovation`,
          },
          {
            "@type": "Service",
            name: t("home.service5"),
            serviceType: "Commercial space renovation",
            provider: {
              "@type": "Organization",
              name: "Razam",
            },
            areaServed: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressCountry: "FR",
                addressRegion: "Côte d'Azur",
              },
            },
            url: `https://razam.fr/${locale.value}/commercerenovation`,
          },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify(projectsSchema)
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "mainEntity": blogSchema
      })
    }
  ],
});
</script>

<style lang="sass" scoped>
.home
  position: relative
  height: 100vh
  background-image: url('/images/home/placeholder2.webp')
  background-repeat: no-repeat
  background-position-x: 0%
  background-position-y: 0%
  background-size: cover
  display: flex
  align-items: center
  justify-content: center
  @media (max-width: 1500px)
    background-position-x: center
  @media (max-width: 560px)
    background-position-x: 38%
  .container
    position: relative
    flex-direction: column
    text-align: center
    padding-bottom: 100px
    @media (max-width: 1200px)
      padding: 0 70px
    @media (max-width: 992px)
      padding: 0 30px
    @media (max-width: 768px)
      padding: 0 20px
    .content
      display: flex
      justify-content: center
      h1
        display: inline
        padding: 0 5%
        @media (max-width: 1000px)
          font-size: 5.7rem
        @media (max-width: 490px)
          font-size: 4rem
          padding: 0 3%

  .social-links
    position: absolute
    right: 5%
    bottom: 55%

//--------------------------------
.expert-design
  margin-top: 15rem
  display: flex
  justify-content: center
  align-items: center
  margin-bottom: 15rem
  @media (max-width: 576px)
    margin-top: $mob-col-gap
    margin-bottom: $mob-col-gap
  .image-wrapper-mob
    display: none
  .container
    display: grid
    grid-template-columns: 6fr 1fr 5fr
    @media (max-width: 1200px)
      padding: 0 70px
      grid-template-columns: 5.5fr 0.5fr 6fr
    @media (max-width: 992px)
      padding: 0 30px
    @media (max-width: 768px)
      grid-template-columns: 1fr
      padding: 0 20px
    .image-wrapper
      border-radius: 10px
      img
        max-width: 100%
        height: auto
        border-radius: 12px

    .text-content
      align-self: flex-end
      padding-bottom: 1rem
      padding-top: 2rem
      @media (max-width: 768px)
        order: -1
      .read-more-text
        max-height: 0
        overflow: hidden
        transition-duration: 0.3s
        &.open
          transition-duration: 0.3s
          max-height: 500px
      h3
        margin-bottom: 5vw
        @media (max-width: 1650px)
          font-size: 3.5rem
        @media (max-width: 1110px)
          font-size: 3rem
          margin-bottom: 2rem
        @media (max-width: 900px)
          font-size: 2.5rem
      p
        color: $font-grey
      .read-more
        position: relative
        color: $font-black
        font-weight: 400
        transition: color 0.3s ease
        margin-top: auto
        cursor: pointer
        &:hover
          color: #0056b3
          cursor: pointer

// -------------------------------------

.values
  background-color: $bgc-second
  padding-bottom: 10rem
  .container
    flex-direction: column
    padding-right: 0
    .main
      display: flex
      .image-wrapper
        margin-left: auto
      .title-block
        padding-top: 9%
        transform: translateX(40px)
      img
        max-width: 100%
        border-radius: 0 0 0 12px
        @media (max-width: 576px)
          display: none
  .arrow-down span
      font-size: 5rem
      color: $font-white
      padding-left: 16px

//---------------------------------------------------

.statistics
  +center-x-y
  flex-direction: column
  text-align: center
  position: relative
  padding: 22rem 0
  @media (max-width: 576px)
    padding: $mob-col-gap 0
  .container
    flex-direction: column
    justify-content: center
    padding-left: 0
  .statistics-row
    display: flex
    justify-content: space-between
    align-items: flex-start
    margin-bottom: 2rem
    padding-left: 100px
    @media (max-width: 992px)
      flex-direction: column
      align-items: center
      gap: 1rem
      margin-bottom: 0
    .hidden
      visibility: hidden
  .stat-item
    display: flex
    flex-direction: column
    align-items: left
    flex: 1
    padding-right: 10px
    @media (max-width: 992px)
      align-items: center
    p
      margin-top: 0.5rem
      margin-bottom: 0
  .divider
    width: 99vw
    height: 1px
    background-color: #e0e0e0
    margin: 2rem 0

.circle-r
  position: absolute
  right: 0
  top: 50%
  transform: translateX(-50px) translateY(-50%)
  display: flex
  justify-content: center
  align-items: center
  width: 11.8rem
  height: 11.8rem
  background-color: $bgc-second
  border-radius: 50%
  font-size: 1.5rem
  font-weight: 500
  color: $font-black
  @media (max-width: 992px)
    transform: translateX(-30px) translateY(-90%)
  span
    display: inline-block
    font-size: 4.25rem
    color: $font-white
    font-weight: 500
//------------------------------------------------

.projects
  &-container
    flex-direction: column
  h3
    padding-left: 100px
    padding-bottom: 70px
    @media (max-width: 992px)
      padding-left: 50px
      padding-bottom: 20px
    @media (max-width: 576px)
      padding-left: 20px

// -----------------------------------------------

.reviews
  margin-bottom: 22rem
  @media (max-width: 576px)
    margin-bottom: $mob-col-gap
  h2
    padding-top: 21rem
    color: black
    text-align: right
    padding-right: 5rem
    @media (max-width: 576px)
      font-size: 5rem
      padding-right: 20px
      padding-top: $mob-col-gap
  .divider
    width: calc( 100% - 12.5rem )
    height: 1px
    background-color: $font-grey
    margin: 8.75rem 6.25rem 4.5rem 6.25rem
    @media (max-width: 576px)
      margin-top: 20px

// -------------------------------------

.process
  margin-top: 22rem
  @media (max-width: 576px)
    margin-top: $mob-col-gap
  .container
    flex-direction: column
    @media (max-width: 992px)
      padding: 0 50px
    @media (max-width: 576px)
      padding: 0 20px

  h2
    color: black
    width: 100%
    margin-bottom: 4.5rem

  .process-grid
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: repeat(2, 1fr)
    align-items: start

  .process-item
    display: flex
    flex-direction: column
    align-items: flex-start
    text-align: left
    &-moved
      grid-column: 2
    &-count
      font-size: 4rem
      color: $bgc-second
      font-weight: 500
      width: 100%
      border: 1px solid $font-grey
      border-bottom: none
      border-right: none
      padding: 1.875rem 0 1rem 3.125rem
    &-title
      font-size: 2rem
      font-weight: 600
      color: $font-black
      padding-left: 3.125rem
      padding-right: 1rem
    p
      color: $font-grey
      padding-left: 3.125rem
      padding-right: 1rem
  @media (max-width: 1500px)
    .process-item
      &-count
        padding: 1rem 0 0.2rem 1.5rem
      &-title
        padding-left: 1.5rem
        padding-right: 0.2rem
      p
        padding-left: 1.5rem
        padding-right: 0.2rem
  @media (max-width: 992px)
    .process-grid
      grid-template-columns: repeat(2, 1fr)
      grid-template-rows: repeat(3, 1fr)
    .process-item-moved-mob
      grid-column: 2
  @media (max-width: 576px)
    .process-grid
      display: flex
      flex-direction: column

// -------------------------------------------

.faq
  display: grid
  grid-template-columns: 1fr 3fr
  margin: 15rem 0
  padding: 0 4rem 0 6rem
  @media (max-width: 992px)
    grid-template-columns: 1fr
    padding: 0 50px
  @media (max-width: 576px)
    grid-template-columns: 1fr
    padding: 0 20px
    margin: $mob-col-gap 0

  h2
    color: $font-black
    font-weight: 500
    @media (max-width: 992px)
      margin-bottom: 4rem

// ---------------------------------------

.news
  margin-bottom: 12rem
  @media (max-width: 576px)
    margin-bottom: 15rem
    margin-top: 10rem
  h2
    text-align: center
    color: $font-black
    margin-bottom: 5rem

// -------- Medias ------------
@media (max-width: 768px)
  .home .container .social-links
    display: none
  .values .container
      padding: 0 0 0 20px

@media (max-width: 576px)
  .expert-design .container
      padding: 0 20px
</style>
