<template>
  <main v-if="!loading && article" class="article">
    <div class="left">
      <Breadcrumbs :reservedLastCrumb="$t(article.name)" />
      <h4>{{ $t(article?.category || "blog.articles.unknownCategory") }}</h4>
      <div class="search">
        <input type="text" class="search" placeholder="Поиск" />
        <div class="loupe">
          <img src="/images/blog/loupe.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="right">
      <h1>
        <span v-reveal class="reveal-bb reveal-visible">{{ $t(article?.name || "blog.articles.unknown") }}</span>
        <div class="divider"></div>
        <div class="details">
          <p v-if="article?.by">By {{ article.by }}</p>
          <p v-if="article?.date">{{ article.date }}</p>
        </div>
      </h1>
    </div>
  
    <aside>
      <div class="categories">
        <h4>Категории</h4>
        <ul>
          <li>{{ $t("blog.articles.categories.architecture") }}</li>
          <li>{{ $t("blog.articles.categories.interiorDesign") }}</li>
          <li>{{ $t("blog.articles.categories.construction") }}</li>
          <li>{{ $t("blog.articles.categories.renovation") }}</li>
          <li>{{ $t("blog.articles.categories.landscapeDesign") }}</li>
        </ul>
      </div>
    </aside>

    <section class="content">
      <component :is="currentArticleComponent" />
    </section>
  </main>

  <div v-if="loading" class="loading">
    <p>Загрузка...</p>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import LightsArticleComponent from "../components/Blog/LightsArticleComponent.vue";
import Breadcrumbs from "../../components/Tools/Breadcrumbs.vue";

const route = useRoute();
const article = ref(null);
const loading = ref(true); // Добавляем индикатор загрузки

watchEffect(async () => {
  loading.value = true;
  const { data: articleData } = await useAsyncData(`article-${route.params.slug}`, () =>
    $fetch(`/api/blog?slug=${route.params.slug}`)
  );
  article.value = articleData.value || null;
  loading.value = false;
});

const articleComponents = {
  lights: LightsArticleComponent,
};

const currentArticleComponent = computed(() => {
  return article.value?.slug ? articleComponents[article.value.slug] || null : null;
});
</script>


<style lang="sass" scoped>
main.article
  +regpad
  padding-top: 10rem
  display: grid
  grid-template-columns: 4fr 8fr
  @media (max-width: 1050px)
    grid-template-columns: 4.5fr 7.5fr
  @media (max-width: 768px)
    grid-template-columns: 1fr
  .left
    display: flex
    flex-direction: column
    @media (max-width: 768px)
      display: grid
      grid-template-columns: 1fr 1fr
      grid-template-rows: auto auto
      gap: 10px
    .breadcrumbs
      @media (max-width: 768px)
        grid-column: span 2
    p
      font-size: 1rem
    h4
      color: $font-black
      @media (max-width: 768px)
        justify-self: start
    div.search
      display: flex
      margin-top: auto
      @media (max-width: 768px)
        justify-self: end
      input.search
        background-color: transparent
        border: 1px solid $font-grey
        border-right: none
        color: $font-grey
        font-size: 1rem
        padding: 10px 25px
        border-radius: 50px 0 0 50px
        &:focus
          outline: none
      div.loupe
        display: flex
        align-items: center
        justify-content: center
        background-color: transparent
        border: 1px solid $font-grey
        border-left: none
        padding-right: 25px
        border-radius: 0 50px 50px 0
  .right
    @media (max-width: 768px)
      margin-top: 40px
    h1
      color: $font-black
      @media (max-width: 1800px)
        font-size: 6rem
      @media (max-width: 1050px)
        font-size: 5rem
    .divider
      width: 100%
      height: 1px
      background-color: $font-grey
      margin-top: 4rem
      margin-bottom: 1rem
    .details
      display: flex
      max-width: 300px
      justify-content: space-between
      p
        margin: 0

// article
//   +regpad
//   display: grid
//   grid-template-columns: 4fr 8fr
//   margin-top: 70px
.content
  margin-top: 70px
  min-width: 0
  max-width: 100%
aside
  margin-top: 70px
  display: flex
  flex-direction: column
  padding-right: 7.5rem
  @media (max-width: 768px)
    grid-row: 4
    margin-top: 0
    padding-right: 0
  h4
    color: $font-black
    margin-bottom: 2.5rem
    margin-top: 4rem
  .categories
    ul
      list-style: none
      padding-left: 0
      li
        font-size: 1.25rem
        color: $font-grey
        padding: 1rem 0
        border-top: 1px solid $font-grey
  .last-articles
    ul
      list-style: none
      padding-left: 0
      li
        padding: 1rem 0
        border-bottom: 1px solid $font-grey
        p
          font-size: 1rem
          margin: 0
          color: $font-grey
        h5
          color: $font-black
          font-size: 1.5rem
        .details
          display: flex
          justify-content: space-between
          p
            font-size: 0.8rem
            color: $font-grey
  .popular-tags
    ul
      display: flex
      flex-direction: row
      list-style: none
      padding-left: 0
      li
        color: $font-grey
        font-size: 1rem
        padding: 5px 15px
        border: 1px solid $font-grey
        border-radius: 5px
</style>
