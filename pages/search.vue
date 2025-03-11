<template>
  <main>
    <p>{{ $t("menu.home") }} / {{ $t("menu.searchResults") }}</p>
    <h1>
      <span v-reveal class="wow reveal-bb reveal-visible" ref="resultsSection">
        {{ $t("menu.searchResults") }}
      </span>
    </h1>
  </main>

  <section v-if="searchResults.length > 0">
    <h2 v-if="blogResults.length > 0">{{ $t("search.blogResults") }}</h2>
    <div class="articles" v-if="blogResults.length > 0">
      <BlogCardComponent
        v-for="(article, idx) in paginatedBlogResults"
        :key="`blog-${idx}`"
        v-bind="article"
      />
    </div>

    <h2 v-if="projectResults.length > 0">{{ $t("search.projectResults") }}</h2>
    <!-- <div class="projects" v-if="projectResults.length > 0">
      <ProjectCardComponent
        v-for="(project, idx) in paginatedProjectResults"
        :key="`project-${idx}`"
        v-bind="project"
      />
    </div> -->
  </section>

  <div v-else class="no-results">
    <p>{{ $t("search.noResults") }}</p>
  </div>

  <div v-if="totalPages > 1" class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">
      <img src="/images/blog/left-arrow.svg" alt="" />
    </button>
    <div
      v-for="page in totalPages"
      :key="page"
      :class="['page-number', { current: page === currentPage }]"
      @click="moveToPage(page)"
    >
      {{ page }}
    </div>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      <img src="/images/blog/right-arrow.svg" alt="" />
    </button>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, watchEffect } from "vue";
import { useRoute } from "vue-router";
import BlogCardComponent from "../components/Blog/BlogCardComponent.vue";
import { useI18n } from "vue-i18n";
// import ProjectCardComponent from "../components/Portfolio/ProjectCardComponent.vue";

const route = useRoute();
const searchResults = ref([]);
const itemsPerPage = 6;
const currentPage = ref(1);
const resultsSection = ref(null);

const { locale } = useI18n();

watchEffect(async () => {
  const query = route.query.q || "";
  if (!query) {
    searchResults.value = [];
    return;
  }

  const { data } = await useAsyncData(`search-${query}`, () => {
    $fetch(`/api/search?q=${query}&lang=${locale.value}`)
  }
  );

  console.log("Raw data from API:", data.value); // Проверяем, что пришло

  searchResults.value = Array.isArray(data.value) ? data.value : [];

  console.log("Search results after processing:", searchResults.value);
});

const blogResults = computed(() => searchResults.value.filter((item) => item.type === "blog"));
const projectResults = computed(() => searchResults.value.filter((item) => item.type === "project"));

const totalPages = computed(() => {
  const totalResults = blogResults.value.length + projectResults.value.length;
  return totalResults > 0 ? Math.ceil(totalResults / itemsPerPage) : 1;
});

const paginatedBlogResults = computed(() => {
  if (!Array.isArray(blogResults.value)) return [];
  const start = (currentPage.value - 1) * itemsPerPage;
  return blogResults.value.slice(start, start + itemsPerPage);
});

const paginatedProjectResults = computed(() => {
  if (!Array.isArray(projectResults.value)) return [];
  const start = (currentPage.value - 1) * itemsPerPage;
  return projectResults.value.slice(start, start + itemsPerPage);
});

const scrollToTop = () => {
  nextTick(() => {
    if (resultsSection.value) {
      resultsSection.value.scrollIntoView({ behavior: "smooth" });
    }
  });
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    scrollToTop();
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    scrollToTop();
  }
};

const moveToPage = (page) => {
  currentPage.value = page;
  scrollToTop();
};
</script>

<style lang="sass" scoped>
main
  +regpad
  padding-top: 10rem
  p
    margin-bottom: 1rem
  h1
    margin-bottom: 4rem
    @media (max-width: 992px)
      font-size: 6rem
    @media (max-width: 576px)
      font-size: 4rem

h2
  margin-top: 3rem
  font-size: 2rem
  color: $font-black

.articles, .projects
  +regpad
  display: grid
  grid-template-columns: 4fr 4fr 4fr
  gap: 1.25rem
  @media (max-width: 768px)
    grid-template-columns: 1fr 1fr
  @media (max-width: 576px)
    grid-template-columns: 1fr

.no-results
  text-align: center
  font-size: 1.5rem
  color: $font-grey
  margin-top: 5rem

.pagination
  display: flex
  justify-content: center
  align-items: center
  gap: 1rem
  margin-top: 10rem
  margin-bottom: 20rem
  .page-number
    font-size: 1rem
    color: $font-grey
    cursor: pointer
    margin: 0 1.5rem
    padding: 1rem
    &.current
      color: $font-black
      font-weight: 600
      border-bottom: 1px solid $font-black

  button
    display: flex
    align-items: center
    justify-content: center
    border: none
    cursor: pointer
    border-radius: 50%
    width: 3.75rem
    height: 3.75rem
    background-color: $bgc-main
    border: 1px solid $font-black
    margin: 0 2rem
    &:disabled
      background: #ccc
      cursor: not-allowed
    img
      width: 50%
</style>
