<template>
  <div 
    class="switcher"
    @mouseover="isOpen = true" 
    @mouseout="isOpen = false" 
    @click="isOpen = !isOpen"
  >
    <div class="current">
      {{ currentLocal.toUpperCase() }}
    </div>
    <div class="dropdown" :class="{open: isOpen}">
      <NuxtLink
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        {{ locale.name.toUpperCase() }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const currentLocal = computed(() => {
  return locales.value.find((i) => i.code === locale.value).name;
});

const isOpen = ref(false);
</script>

<style></style>

<style lang="sass" scoped>
.switcher
  position: relative
  width: min-content
  margin: 0 auto
  left: 40px
  @media (max-width: 992px)
    left: 5px
  @media (max-width: 768px)
    left: 0
    top: 0
  *
    user-select: none
  .current
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    font-size: 1.3rem
    font-weight: 400
    @media (max-width: 768px)
      font-size: 2.3rem
      color: white
    .arrow
      align-self: flex-end
      cursor: pointer
  .dropdown
    font-size: 1.3rem
    font-weight: 400
    position: absolute
    overflow: hidden
    display: flex
    max-height: 0
    padding: 0
    border-radius: 12px
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 10px
    left: -10px
    background-color: rgba($font-white, 0.7)
    transition-duration: 0.2s
    a
      color: $font-grey
    @media (max-width: 768px)
      font-size: 2.3rem
      width: 45px
      left: -7px
      gap: 0
    @media (max-width: 576px)
      left: -9px
    .image-wrapper
      display: flex
      align-items: center
      border-radius: 5px
    &.open
      max-height: 100px
      padding: 10px
      transition-duration: 0.2s
</style>
