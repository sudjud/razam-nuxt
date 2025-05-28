<template>
  <div class="search-page">
    <Breadcrumbs />

    <div>
      <h3 v-if="categoryName">{{ $t("search.category") }}: {{ categoryName }}</h3>
      <h3 v-else>{{ $t('menu.search') }}: '{{ searchQuery }}'</h3>
      <SearchComponent />
    </div>

    <h4>{{ $t("search.projects") }}</h4>
    <p class="nothing" v-if="(!filteredProjects.length && !findedProjects.length)">
      {{ $t("search.nothing") }}
    </p>
    <div class="projects" v-if="filteredProjects.length || findedProjects.length">
      <ProjectCardComponent
        v-for="project in searchQuery ? findedProjects : filteredProjects"
        :key="project.slug"
        v-bind="project"
      />
    </div>

    <div class="devider"></div>

    <h4>{{ $t("search.articles") }}</h4>
    <p class="nothing" v-if="(!filteredArticles.length && !findedArticles.length)">
      {{ $t("search.nothing") }}
    </p>
    <div class="articles" v-if="filteredArticles.length || findedArticles.length">
      <BlogCardComponent
        v-for="article in searchQuery ? findedArticles : filteredArticles"
        :key="article.slug"
        v-bind="article"
      />
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { ref, watch, computed } from "vue";
import projects from "~/server/data/projects";
import articles from "~/server/data/blog";
import ProjectCardComponent from "../components/Projects/ProjectCardComponent.vue";
import Breadcrumbs from "/components/Tools/Breadcrumbs.vue";
import SearchComponent from "/components/Tools/SearchComponent.vue";
import { searchContent } from "~/utils/search";
import { useSeo } from "../composables/useSeo";

const route = useRoute();
const router = useRouter();
const { locale, t } = useI18n();

useSeo('search');

const categoryName = computed(() => route.query.cat?.toLowerCase() ?? "");
const searchQuery = computed(() => route.query.q?.toLowerCase() ?? "");
const catsOpened = ref(false);

const searchResults = computed(() => {
  if (searchQuery.value) {
    return searchContent(searchQuery.value, locale.value, t);
  }
  return [];
});

const findedProjects = computed(() => {
  return searchResults.value.filter((i) => i.type === 'project');
});

const findedArticles = computed(() => {
  return searchResults.value.filter((i) => i.type === 'article');
});

const filteredProjects = computed(() => {
  return projects.filter(
    (p) => t(p.category).toLowerCase() === categoryName.value
  );
});

const filteredArticles = computed(() => {
  return articles.filter(
    (a) => t(a.category).toLowerCase() === categoryName.value
  );
});

watch(() => route.query.q, () => {
}, { immediate: true });

watch(() => route.query.cat, () => {
}, { immediate: true });

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
