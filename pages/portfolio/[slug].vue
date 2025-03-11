<template>
  <main class="project">
    <div class="route">
      <Breadcrumbs :reservedLastCrumb="project.name"/>
    </div>
    <section class="cover">
      <div class="numbers" :style="`--bg-url: url(${project.preview})`">
        <div class="label">
          <div>
            <p>{{ $t("portfolio.projects.common.square") }}</p>
            <p>{{ project.totalArea }} m³</p>
          </div>
          <div>
            <p>{{ $t("portfolio.projects.common.livingArea") }}</p>
            <p>{{ project.livingArea }} m²</p>
          </div>
          <div>
            <p>{{ $t("portfolio.projects.common.workingTime") }}</p>
            <p>{{ $t(project.workingTime) }}</p>
          </div>
          <div>
            <p class="cost">{{ $t("portfolio.projects.common.cost") }}</p>
            <h4>€{{ project.cost }}</h4>
          </div>
        </div>
      </div>
      <div class="info">
        <!-- <div class="info-left"> -->
        <h1 class="name">
          <span v-reveal class="wow reveal-bb reveal-visible">{{ project.name }}</span>
        </h1>
        <p class="type">{{ $t(project.type) }}</p>
        <div class="customer">
          <p>{{ $t("portfolio.projects.common.client") }}</p>
          <h4>{{ $t(project.client) }}</h4>
          <p>{{ $t("portfolio.projects.common.location") }}</p>
          <h4>{{ $t(project.dislocation) }}</h4>
          <p>{{ $t("portfolio.projects.common.year") }}</p>
          <h4>{{ project.year }}</h4>
        </div>
        <!-- </div> -->
        <!-- <div class="info-right"> -->
        <p class="desc">{{ $t(project.desc) }}</p>
        <!-- </div> -->
      </div>
    </section>
  </main>
  <section class="photos">
    <div v-for="(item, index) in smallImages" :key="index" class="photo">
      <img :src="item.photo" alt="" />
      <p>{{ $t(item.name) }}</p>
    </div>
    <div class="photo-main">
      <img :src="mainImage.photo" alt="" />
      <p>{{ $t(mainImage.name) }}</p>
    </div>
  </section>
  <section class="single">
    <component :is="currentProjectComponent" />
  </section>
  <section class="offer">
    <h2>
      {{ $t("home.offer.h2P1")
      }}<span class="arrow"
        ><img src="/images/home/offer-arrow.svg" alt="" /></span
      ><br />
      <div class="decor">
        {{ $t("home.offer.h2P2") }}<br />
        {{ $t("home.offer.h2P3") }} ?
      </div>
    </h2>
    <p>
      {{ $t("home.offer.p") }}
    </p>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import UrbanGraceComponent from "../components/Projects/UrbanGraceComponent.vue";
import Breadcrumbs from "../../components/Tools/Breadcrumbs.vue";

const route = useRoute();

const { data: projectData } = await useAsyncData("project", () =>
  $fetch(`/api/projects?slug=${route.params.slug}`)
);

const project = ref(projectData.value || null);

const smallImages = computed(() => {
  return project.value?.images?.slice(0, -1) || [];
});

const mainImage = computed(() => {
  return project.value?.images?.[project.value.images.length - 1] || {};
});

const projectComponents = {
  "urban-grace": UrbanGraceComponent,
};

const currentProjectComponent = computed(
  () => projectComponents[project.value?.slug] || null
);
</script>

<style lang="sass" scoped>
.project
  +regpad
  padding-top: 10rem
  .route
    color: $font-grey
    span
      color: $font-black
  .cover
    margin-top: 2rem
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 4rem
    @media (max-width: 1200px)
      grid-template-columns: 1.5fr 1fr
      gap: 2rem
    .numbers
      background: var(--bg-url) no-repeat center center / cover
      background-size: cover
      border-radius: 12px
      display: flex
      .label
        background-color: rgba($bgc-main, 0.7)
        width: 21rem
        padding: 1rem
        align-self: flex-end
        border-radius: 0 12px 12px 0
        margin-bottom: 60px
        @media (max-width: 576px)
          width: 18rem
        p
          margin: 0
          margin-top: 12px
        div
          display: flex
          flex-direction: row
          justify-content: space-between
          &:last-child
            margin-top: 3rem
            h4
              color: $font-black
              padding-top: 10px
  .info
    // display: grid
    // grid-template-columns: 3fr 3fr
    display: flex
    flex-direction: column
    h1
      color: $font-black
      width: 50%
    .type
      text-align: right
      align-self: flex-end
    .customer
      margin-top: 10rem
      // float: left
      p
        font-size: 1.25rem
        color: $font-grey
        margin: 0
        margin-top: 2rem
      h4
        color: $font-black
    .desc
      text-align: right
      align-self: flex-end
      width: 70%
      @media (max-width: 1200px)
        width: 100%
    // .info-right
    //   .type
    //       text-align: right
    //       margin-top: 15rem
    //   .desc
    //       text-align: right
    //       margin-top: 30rem

// ----------------------- photos ---------------------

.photos
  +regpad
  margin-top: 15rem
  display: grid
  grid:". . main main" 1fr ". . main main" 1fr / 1fr 1fr 1fr 1fr
  gap: 3.5rem 1.5rem
  @media (max-width: 768px)
    grid-template-areas:". ."". .""main main""main main"
    grid-template-columns: 1fr 1fr
    grid-template-rows: 1fr 1fr 1fr 1fr
  @media (max-width: 576px)
    margin-top: $mob-col-gap
  p
    margin: 0
    color: $font-grey
  .photo-main
    grid-area: main
    border-bottom: 1px solid $font-grey
    img
      max-width: 100%
  .photo
    border-bottom: 1px solid $font-grey
    img
      max-width: 100%

// ---------------------- single ----------------------

.single
  +regpad
  margin-top: 15rem
  @media (max-width: 576px)
    margin-top: $mob-col-gap

// ----------------------- offer ----------------------

.offer
  position: relative
  max-width: calc(100% - 200px)
  margin: 0 auto
  background-color: $bgc-second
  padding: 6.75rem 14.9rem 5.1rem 14.9rem
  margin-top: 15rem
  margin-bottom: -10rem
  @media (max-width: 992px)
    max-width: calc(100% - 100px)
    padding: 6.75rem 5rem 5.1rem 5rem
  @media (max-width: 768px)
    max-width: calc(100% - 100px)
  @media (max-width: 576px)
    max-width: calc(100% - 40px)
    margin-top: $mob-col-gap
  h2
    color: $font-black
    line-height: 7.5rem
    @media (max-width: 1500px)
      font-size: 5rem
      line-height: 6rem
    .decor
      margin-left: 12rem
      @media (max-width: 992px)
        margin-left: 0
    .arrow
      margin-left: 40px
      margin-top: 20px
      @media (max-width: 992px)
        display: none
  p
    position: absolute
    bottom: 1rem
    left: 60rem
    text-align: right
    font-size: 1.25rem
    color: $font-grey
    max-width: 17.25rem
    @media (max-width: 1500px)
      left: 50rem
    @media (max-width: 992px)
      display: none
</style>
