<template>
  <section class="offer">
    <NuxtLink :to="localePath('/contact')">
      <h2>
        {{ $t("home.offer.h2P1")
        }}<span class="arrow"
          ><img data-not-lazy src="/images/home/offer-arrow.svg" alt="" /></span
        ><br />
        <div class="decor">
          {{ $t("home.offer.h2P2") }}<br />
          {{ $t("home.offer.h2P3") }} ?
        </div>
      </h2>
    </NuxtLink>
    <p>
      {{ $t("home.offer.p") }}
    </p>
  </section>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style lang="sass" scoped>
.offer
  position: relative
  max-width: calc(100% - 200px)
  margin: 0 auto
  background-color: $font-black
  padding: 6.75rem 14.9rem 5.1rem 14.9rem
  @media (max-width: 992px)
    max-width: calc(100% - 100px)
    padding: 6.75rem 5rem 5.1rem 5rem
  @media (max-width: 768px)
    max-width: calc(100% - 100px)
  @media (max-width: 576px)
    max-width: calc(100% - 40px)
  a
    text-decoration: none
    &:hover
      text-decoration: underline $font-grey
  h2
    color: $font-white
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
    color: $font-white
    max-width: 17.25rem
    @media (max-width: 1500px)
      left: 50rem
    @media (max-width: 992px)
      display: none
</style>
