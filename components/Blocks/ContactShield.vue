<template>
  <div class="shield">
    <div class="text">
      <NuxtLink :to="localePath('/contact')">
        <h1>
          <span class="no-wrap">{{ $t("services.contactShield1.h1") }}</span>
          <div class="spaced">
            <span>{{ $t("services.contactShield1.h2") }}</span
            ><br />
            <span
              >{{ $t("services.contactShield1.h3")
              }}<img class="arrow" src="/images/home/offer-arrow.svg" alt=""
            /></span>
          </div></h1
      ></NuxtLink>
      <p>{{ $t("services.contactShield1.p") }}</p>
    </div>
    <div class="image">
      <img src="/images/services/shield.webp" alt="" />
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style lang="sass">
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
    gap: 2rem
    padding-left: clamp(1rem, 3.65vw, 70px)
    padding-right: clamp(1rem, 5vw, 160px)
    h1
      .spaced
        padding-left: clamp(1rem, 15vw, 415px)
        .arrow
          height: 0.6em
          margin-left: 0.4em
        @media (max-width: 1500px)
          padding-left: clamp(1rem, 10vw, 415px)
      @media (max-width: 1732px)
        font-size: 7rem
      @media (max-width: 1664px)
        font-size: 6.5rem
      @media (max-width: 1582px)
        font-size: 6rem
      @media (max-width: 1500px)
        font-size: 7rem
      @media (max-width: 1110px)
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
