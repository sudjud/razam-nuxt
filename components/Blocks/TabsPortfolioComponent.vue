<template>
  <div class="tabs-container">
    <div class="tabs">
      <div
        :class="['tab', { active: activeTab === -1 }]"
        @click="changeTab(-1)"
      >
        {{ $t("portfolio.tabs.categories.all") }}
      </div>
      <div
        v-for="(category, index) in categories"
        :key="index"
        :class="['tab', { active: activeTab === index }]"
        @click="changeTab(index)"
      >
        {{ $t(category) }}
      </div>
    </div>
    <div class="tabs-content">
      <Transition :name="transitionDirection" mode="out-in">
        <ul :key="activeTab">
          <li
            v-for="(item, index) in filteredProjects"
            :key="index"
            @click="toggleExpand(index)"
            :class="{ expanded: expandedItem === index }"
          >
            <div class="index">0{{ index + 1 }}</div>
            <div class="img" :class="{ open: expandedItem === index }">
              <img :src="item.preview" alt="" />
            </div>
            <p class="name">
              <NuxtLink :to="localePath(`/portfolio/${item.slug}`)">{{
                item.name
              }}</NuxtLink>
            </p>
            <p class="year">{{ item.year }}</p>
            <p class="type">{{ $t(item.type) }}</p>
            <div :class="{ open: expandedItem === index }" class="arrow">
              <img data-not-lazy src="/images/about/diag-arrow.svg" alt="" />
            </div>
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<script setup defer>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useLocalePath } from "#imports";

const router = useRouter();
const localePath = useLocalePath();

const { data: projects } = await useAsyncData("projects", () =>
  $fetch("/api/projects")
);

const categories = computed(() => {
  return [...new Set(projects.value?.map((project) => project.category) || [])];
});

const activeTab = ref(-1);
const prevTab = ref(0);
const expandedItem = ref(null);

const toggleExpand = (index) => {
  expandedItem.value = expandedItem.value === index ? null : index;
};

const filteredProjects = computed(() => {
  if (activeTab.value === -1) {
    return projects.value || [];
  }
  return projects.value?.filter(
    (project) => project.category === categories.value[activeTab.value]
  ) || [];
});

const transitionDirection = computed(() =>
  activeTab.value > prevTab.value ? "slide-right" : "slide-left"
);

const changeTab = (index) => {
  prevTab.value = activeTab.value;
  activeTab.value = index;
};
</script>


<style lang="sass" scoped>
$transition-speed: 0.3s

.tabs-container
  width: 100%
  margin: auto
  position: relative
  .tabs
    display: flex
    overflow-x: auto
    white-space: nowrap
    -webkit-overflow-scrolling: touch
    scrollbar-width: none
    gap: 2.5rem
    position: relative
    border-bottom: 1px solid $font-grey
    padding-bottom: 2rem
    &::-webkit-scrollbar
      display: none
    .tab
      cursor: pointer
      transition: color $transition-speed ease-in-out
      color: $font-grey
      font-size: 1.25rem
      &.active
        color: $font-black
  .tabs-content
    overflow: hidden
    min-height: 80px
    ul
      padding: 0
      margin: 0
      li
        list-style: none
        display: grid
        grid-template-columns: 1fr 3.5fr 2.5fr 2fr 3fr 1fr
        justify-content: start
        border-bottom: 1px solid $font-grey
        padding: 2rem 0
        @media (max-width: 430px)
          grid-template-columns: 1fr 3fr 2fr 2fr 4fr 1fr
        &:hover
          .arrow
            transform: rotate(45deg)
        p
          text-align: center
        .img
          height: 0
          overflow: hidden
          transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out
          opacity: 0
          img
            width: 90%
          &.open
            height: 100%
            opacity: 1
        .name
          a
            text-decoration: none
            color: black
            &:hover
              text-decoration: underline
          span
            cursor: pointer
            &:hover
              text-decoration: underline
        .year
          justify-self: center
        .arrow
          width: 3.5rem
          height: 3.5rem
          border: 1px solid $font-grey
          display: flex
          justify-content: center
          align-items: center
          border-radius: 50%
          justify-self: end
          transform: rotate(0deg)
          transition: 0.3s
          margin-top: 5px
          @media (max-width: 430px)
            width: 3rem
            height: 3rem
            margin-top: 10px
          img
            @media (max-width: 768px)
              transform: scale(0.8)
            @media (max-width: 576px)
              transform: scale(0.6)
          &.open
            transform: rotate(-180deg)

// Анимация вправо
.slide-right-enter-active,
.slide-right-leave-active
  transition: transform $transition-speed ease, opacity $transition-speed ease

.slide-right-enter-from
  transform: translateX(100%)
  opacity: 0

.slide-right-leave-to
  transform: translateX(-100%)
  opacity: 0

// Анимация влево
.slide-left-enter-active,
.slide-left-leave-active
  transition: transform $transition-speed ease, opacity $transition-speed ease

.slide-left-enter-from
  transform: translateX(-100%)
  opacity: 0

.slide-left-leave-to
  transform: translateX(100%)
  opacity: 0
</style>
