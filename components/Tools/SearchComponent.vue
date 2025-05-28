<template>
  <div class="search">
    <input
      v-model="searchQuery"
      type="text"
      class="search"
      :placeholder="$t('menu.search')"
      @focus="inputFocused = true"
      @blur="inputFocused = false"
    />
    <div class="loupe">
      <div class="loupe__button">
        <img @click="goToSearch" @keyup.enter="goToSearch" src="/public/images/blog/loupe.svg" alt="" />
      </div>
    </div>

    <ul v-if="searchQuery.trim() && searchResults.length && inputFocused" class="results">
      <li v-for="(item, i) in searchResults" :key="i">
        <NuxtLink
          :to="
            item.type === 'project'
              ? localePath(`/portfolio/${item.slug}`)
              : localePath(`/news/${item.slug}`)
          "
          class="result-link"
        >
          <img
            :src="item.type === 'project' ? item.preview : item.previewImg"
            alt=""
            class="result-img"
          />
          <div
            class="result-text"
            v-html="
              highlightMatch(
                `${item.type === 'project' ? '📁' : '📰'} ${t(item.name)}`
              )
            "
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import debounce from "lodash/debounce";
import { searchContent } from "~/utils/search";

const { locale, t } = useI18n();
const localePath = useLocalePath();
const router = useRouter();

const searchQuery = ref("");
const searchResults = ref([]);

const inputFocused = ref(false);


const doSearch = debounce((q) => {
  searchResults.value = searchContent(q, locale.value, t);
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

const goToSearch = () => {
  if (searchQuery.value) {
    router.push(localePath(`/search?q=${searchQuery.value.trim()}`));
  }
};
</script>

<style lang="sass" scoped>
div.search
  display: flex
  margin-top: auto
  position: relative
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
    .loupe__button:hover
      transform: scale(1.2)

  .results
    position: absolute
    top: 110%
    border-radius: 15px !important
    left: 0
    background: $bgc-main
    border: 1px solid #ccc
    border-radius: 0 0 8px 8px
    z-index: 10
    padding: 0
    margin: 0
    list-style: none

    li
      padding: 8px 16px
      border-bottom: 1px solid #eee
      transition: 0.1s
      &:hover
        transition: 0.1s
        transform: scale(1.02)
        a
          text-decoration: underline

      a
        text-decoration: none
        color: black
        display: flex
        align-items: center
        gap: 20px
        img
          width: 50px
          height: 50px
          object-fit: cover
          border-radius: 6px

      strong
        background-color: yellow
        font-weight: bold
</style>
