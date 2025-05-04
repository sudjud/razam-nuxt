<template>
  <div class="shield">
    <div class="text">
      <NuxtLink :to="localePath('/contact')">
        <h2>
          <span class="no-wrap">{{ $t("services.contactShield1.h1") }}</span>
          <div class="spaced">
            <span>{{ $t("services.contactShield1.h2") }}</span
            ><br />
            <span
              >{{ $t("services.contactShield1.h3")
              }}<img data-not-lazy class="arrow" src="/images/home/offer-arrow.svg" alt=""
            /></span>
          </div></h2
      ></NuxtLink>
      <div class="text__small">
        <p>{{ $t("services.contactShield1.p") }}</p>
      </div>
    </div>
    <div class="image">
      <img src="/images/services/shield.webp" alt="" />
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
  display: grid
  align-items: center
  grid-template-columns: 1fr auto
  margin-top: 15rem
  line-height: 0
  background-color: $bgc-second
  @media (max-width: 694px)
    padding: 20px 0
  .text
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    gap: 10rem
    padding: 0 2rem
    @media (max-width: 1350px)
      gap: 5rem
    &__small
      display: flex
      justify-content: end
    h2
      .spaced
        padding-left: clamp(1rem, 15vw, 415px)
        .arrow
          height: 0.6em
          margin-left: 0.4em
        @media (max-width: 1500px)
          padding-left: clamp(1rem, 10vw, 415px)
      @media (max-width: 1680px)
        font-size: 5rem
      @media (max-width: 992px)
        font-size: 4rem
      @media (max-width: 838px)
        font-size: 4rem
      @media (max-width: 480px)
        font-size: 3rem
    p
      color: $font-grey
      font-size: 1.25rem
      max-width: 227px
      @media (max-width: 1150px)
        font-size: 1rem
      @media (max-width: 768px)
        font-size: 0.7rem
  .image
    margin-left: auto
    @media (max-width: 694px)
      display: none
    img
      max-height: 33vw
</style>
