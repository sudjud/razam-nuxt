<template>
  <div class="values-list">
    <div class="values-list-top">
      <div class="value-item wow animate__animated animate__fadeInBottomLeft">
        <span class="circle"
          ><img src="/images/home/diag-arrow.png" alt="arrow"
        /></span>
        <p v-html="$t('home.valuesP1')"></p>
      </div>
      <div
        class="value-item wow animate__animated animate__fadeInBottomLeft"
        data-wow-delay="0.1s"
      >
        <span class="circle"
          ><img src="/images/home/diag-arrow.png" alt="arrow"
        /></span>
        <p v-html="$t('home.valuesP2')"></p>
      </div>
      <div
        class="value-item wow animate__animated animate__fadeInBottomLeft"
        data-wow-delay="0.2s"
      >
        <span class="circle"
          ><img src="/images/home/diag-arrow.png" alt="arrow"
        /></span>
        <p v-html="$t('home.valuesP3')"></p>
      </div>
    </div>
    <div class="values-list-bottom">
      <div
        class="value-item wow animate__animated animate__fadeInBottomLeft"
        data-wow-delay="0.3s"
      >
        <span class="circle"
          ><img src="/images/home/diag-arrow.png" alt="arrow"
        /></span>
        <p v-html="$t('home.valuesP4')"></p>
      </div>
      <div
        class="value-item wow animate__animated animate__fadeInBottomLeft"
        data-wow-delay="0.4s"
      >
        <span class="circle"
          ><img src="/images/home/diag-arrow.png" alt="arrow"
        /></span>
        <p v-html="$t('home.valuesP5')"></p>
      </div>

      <div
        class="value-item wow animate__animated animate__fadeInBottomLeft"
        data-wow-delay="0.5s"
      >
        <span class="circle"
          ><img src="/images/home/diag-arrow.png" alt="arrow"
        /></span>
        <p v-html="$t('home.valuesP6')"></p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.values-list
  display: flex
  flex-direction: column
  padding-right: 100px
  margin-top: 181px
  &-top
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-right: 18%
  &-bottom
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-left: 18%
  .value-item
    min-width: 162px
    .circle
      display: flex
      justify-content: center
      align-items: center
      width: 3.75rem
      height: 3.75rem
      border: 1px solid $font-grey
      border-radius: 50%
      font-size: 38px
      font-weight: 100
      color: $font-grey
      @media (max-width: 768px)
        width: 3.75rem
        height: 3.75rem
      img
        width: 1.2rem
      p
        font-size: 32px
        font-weight: 400
        color: $font-black

@media (max-width: 1400px)
  .values-list
    margin-top: 90px

@media (max-width: 1200px)
  .values-list
    margin-top: 50px

@media (max-width: 768px)
  .values-list
    padding-right: 20px
    .value-item
      min-width: 113px
    &-top
      margin-right: 10%
    &-bottom
      margin-left: 10%

@media (max-width: 576px)
  .values-list
    &-top
      margin-right: 5%
    &-bottom
      margin-left: 5%
      margin-top: 10px
    .value-item
      min-width: 97px
</style>
