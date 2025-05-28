<template>
  <NuxtLink :to="localePath(`/portfolio/${slug}`)">
    <section class="card">
      <div class="wrapper-image">
        <img :src="preview" alt="" />
      </div>
      <p class="category">{{ $t(category) }}</p>
      <h4 class="name">{{ $t(name) }}</h4>
      <div class="details">
        <p class="by">{{ $t(dislocation) }}</p>
        <p class="date">{{ year }}</p>
      </div>
    </section>
  </NuxtLink>
</template>

<script setup>
import { defineProps } from "vue";
import { useLocalePath } from "#imports";

const localePath = useLocalePath();

defineProps({
  preview: String,
  category: String,
  name: String,
  dislocation: String,
  year: Number,
  slug: String,
});
</script>

<style lang="sass" scoped>
a
  text-decoration: none
.card
  display: flex
  flex-direction: column
  border-top: 1px solid $font-grey
  padding-top: 2rem
  transition: 0.1s
  &:hover
    transition: 0.1s
    transform: scale(1.01)
    h4
      text-decoration: underline
  & > *
    padding: 0 1rem
  .wrapper-image
    padding: 0
    img
      width: 100%
  .category
    font-size: 1rem
    color: $font-grey
    border-bottom: 1px solid $bgc-second
  .name
    font-size: 2rem
    color: $font-black
    cursor: pointer
    font-weight: 600
    &:hover
      text-decoration: underline
  .details
    display: flex
    flex-direction: row
    justify-content: space-between
    p
      font-size: 1.25rem
      color: $font-grey
</style>
