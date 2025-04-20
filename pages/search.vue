<template>
  <div class="search-page">
    <Breadcrumbs />

    <div>
      <h3>{{ $t("search.category") }}: {{ categoryName }}</h3>
      <SearchComponent />
    </div>

    <h4>{{ $t("search.projects") }}</h4>
    <p class="nothing" v-if="!filteredProjects.length">{{ $t("search.nothing") }}</p>
    <div class="projects" v-if="filteredProjects.length">
      <ProjectCardComponent
        v-for="project in filteredProjects"
        :key="project.slug"
        v-bind="project"
      />
    </div>

    <div class="devider"></div>

    <h4>{{ $t("search.articles") }}</h4>
    <p class="nothing" v-if="!filteredArticles.length">{{ $t("search.nothing") }}</p>
    <div class="articles" v-if="filteredArticles.length">
      <BlogCardComponent
        v-for="article in filteredArticles"
        :key="article.slug"
        v-bind="article"
      />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import projects from "~/server/data/projects";
import articles from "~/server/data/blog";
import ProjectCardComponent from "../components/Projects/ProjectCardComponent.vue";
import Breadcrumbs from "/components/Tools/Breadcrumbs.vue";
import SearchComponent from "/components/Tools/SearchComponent.vue"

const route = useRoute();
const { t } = useI18n();

const categoryName = route.query.cat?.toLowerCase() ?? "";
const catsOpened = ref(false);

const filteredProjects = projects.filter(
  (p) => t(p.category).toLowerCase() === categoryName
);

const filteredArticles = articles.filter(
  (a) => t(a.category).toLowerCase() === categoryName
);

console.log(filteredArticles);
</script>

<style lang="sass" scoped>
.search-page
  +regpad
  padding-top: 10rem
  margin-bottom: 5rem
  .cats
    display: flex
    flex-direction: column
    height: 0
    overflow: hidden
    transition: 0.2s
    &.open
      transition: 0.2s
      max-height: 500px
  h3
    margin-bottom: 2rem
  h4
    margin-top: 2rem
  p.nothing
    margin-bottom: 3rem
  .devider
    width: 100%
    height: 2px
    background-color: $font-grey
  .articles, .projects
    margin-top: 2rem
    margin-bottom: 3rem
    display: grid
    grid-template-columns: 4fr 4fr 4fr
    gap: 1.25rem
    min-width: 300px
    @media (max-width: 768px)
      grid-template-columns: 1fr 1fr
    @media (max-width: 576px)
      grid-template-columns: 1fr
    img
      max-width: 100%
</style>
