<template>
  <div class="shield">
    <div class="text">
      <NuxtLink :to="localePath('/contact')">
        <h2>
          <span class="no-wrap">{{ $t("services.contactShield3.h1") }}</span>
          <div class="spaced">
            <span>{{ $t("services.contactShield3.h2") }}</span><br />
            <span>{{ $t("services.contactShield3.h3") }}<img data-not-lazy class="arrow" src="/images/home/offer-arrow.svg" alt="" /></span>
          </div>
        </h2>
      </NuxtLink>
      <p>{{ $t("services.contactShield3.p") }}</p>
    </div>
    <div class="image">
      <img src="/images/services/commerce-renovation/shield.webp" alt="" />
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style lang="sass" scoped>
.no-wrap
  white-space: nowrap
.shield
  a
    color: $font-black
    text-decoration: none
    &:hover
      text-decoration: underline
  max-height: 33vw
  display: flex
  align-items: center
  margin-top: 15rem
  line-height: 0
  background-color: $bgc-second
  @media (max-width: 694px)
    padding: 50px 0
  .text
    display: flex
    align-items: center
    flex: 1
    flex-direction: row
    gap: 4rem
    padding-left: clamp(1rem, 9.65vw, 200px)
    padding-right: clamp(2.5rem, 3vw, 160px)
    h2
      .spaced
        padding-left: clamp(1rem, 7vw, 415px)
        .arrow
          height: 0.6em
          margin-left: 0.4em
        @media (max-width: 1500px)
          padding-left: clamp(1rem, 7vw, 415px)
      @media (max-width: 1600px)
        font-size: 6rem
      @media (max-width: 992px)
        font-size: 5rem
      @media (max-width: 838px)
        font-size: 4.7rem
      @media (max-width: 480px)
        font-size: 3rem
    p
      color: $font-grey
      font-size: 1.25rem
      max-width: 227px
      @media (max-width: 868px)
        font-size: 1.1rem
  .image
    @media (max-width: 694px)
      display: none
    img
      max-height: 33vw
</style>