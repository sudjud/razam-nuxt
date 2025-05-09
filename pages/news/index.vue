<template>
  <main>
    <p>{{ $t("menu.home") }} / {{ $t("menu.blog") }}</p>
    <h1>
      <span v-reveal class="wow reveal-bb reveal-visible" ref="articlesSection">{{
        $t("menu.blog")
      }}</span>
    </h1>
  </main>
  <section class="articles">
    <BlogCardComponent
      v-for="(article, idx) in paginatedBlog"
      :key="idx"
      v-bind="article"
    />
  </section>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">
      <img data-not-lazy src="/images/blog/left-arrow.svg" alt="" />
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
      <img data-not-lazy src="/images/blog/right-arrow.svg" alt="" />
    </button>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from "vue";
import BlogCardComponent from "../components/Blog/BlogCardComponent.vue";
import { useSeo } from "../../composables/useSeo";

useSeo('news');

const { data: blog } = await useAsyncData("blog", async () => {
  const response = await $fetch("/api/blog");
  return Array.isArray(response) ? response : [];
});

const itemsPerPage = 6;
const currentPage = ref(1);
const articlesSection = ref(null);

const totalPages = computed(() => {
  return blog.value.length > 0 ? Math.ceil(blog.value.length / itemsPerPage) : 1;
});

const paginatedBlog = computed(() => {
  if (!Array.isArray(blog.value)) return [];
  const start = (currentPage.value - 1) * itemsPerPage;
  return blog.value.slice(start, start + itemsPerPage);
});

const scrollToTop = () => {
  nextTick(() => {
    if (articlesSection.value) {
      articlesSection.value.scrollIntoView({ behavior: "smooth" });
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

section.articles
  +regpad
  display: grid
  grid-template-columns: 4fr 4fr 4fr
  gap: 1.25rem
  @media (max-width: 768px)
    grid-template-columns: 1fr 1fr
  @media (max-width: 576px)
    grid-template-columns: 1fr

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
