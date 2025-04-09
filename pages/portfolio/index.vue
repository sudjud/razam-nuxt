<template>
  <main class="main">
    <h1>
      <div class="first">
        <Breadcrumbs />
        <span
          v-reveal
          class="wow reveal-bb reveal-visible"
          v-html="$t('portfolio.main.titleFirst')"
        ></span>
        <span class="slash">/</span>
      </div>
      <div class="second">
        <br />
        <span
          v-reveal
          class="wow reveal-bb reveal-visible"
          v-html="$t('portfolio.main.titleSecond')"
        ></span>
      </div>
    </h1>
    <div class="desc">
      <p>{{ $t("portfolio.main.desc") }}</p>
      <h4>{{ $t("portfolio.main.category1") }}</h4>
      <h4>{{ $t("portfolio.main.category2") }}</h4>
      <h4>{{ $t("portfolio.main.category3") }}</h4>
    </div>
  </main>

  <section class="image">
    <img src="/images/portfolio/1.jpg" alt="" />
  </section>
  <section class="portfolio">
    <h2><span v-reveal class="wow reveal-bb">Портфолио</span></h2>
    <TabsPortfolioComponent />
  </section>
  <section class="process">
    <h2>
      <span v-reveal class="wow reveal-bb">{{ $t("home.process.h2") }}</span>
    </h2>
    <div class="process-columns">
      <div class="process-column">
        <div class="numbers-item wow animate__animated animate__fadeInLeft">
          <div class="number">
            01
            <span class="number-arrow"
              ><img src="/images/portfolio/process-arrow.svg" alt=""
            /></span>
          </div>
          <h4>{{ $t("home.process.title1") }}</h4>
          <p>
            {{ $t("home.process.text1") }}
          </p>
        </div>
      </div>
      <div class="process-column">
        <div
          class="numbers-item wow animate__animated animate__fadeInLeft"
          data-wow-delay="0.2s"
        >
          <div class="number">
            02
            <span class="number-arrow"
              ><img src="/images/portfolio/process-arrow.svg" alt=""
            /></span>
          </div>
          <h4>{{ $t("home.process.title2") }}</h4>
          <p>
            {{ $t("home.process.text2") }}
          </p>
        </div>
        <div
          class="numbers-item wow animate__animated animate__fadeInLeft"
          data-wow-delay="0.4s"
        >
          <div class="number">
            04
            <span class="number-arrow"
              ><img src="/images/portfolio/process-arrow.svg" alt=""
            /></span>
          </div>
          <h4>{{ $t("home.process.title4") }}</h4>
          <p>
            {{ $t("home.process.text4") }}
          </p>
        </div>
      </div>
      <div class="process-column">
        <div
          class="numbers-item wow animate__animated animate__fadeInLeft"
          data-wow-delay="0.3s"
        >
          <div class="number">
            03
            <span class="number-arrow"
              ><img src="/images/portfolio/process-arrow.svg" alt=""
            /></span>
          </div>
          <h4>{{ $t("home.process.title3") }}</h4>
          <p>
            {{ $t("home.process.text3") }}
          </p>
        </div>
        <div
          class="numbers-item wow animate__animated animate__fadeInLeft"
          data-wow-delay="0.5s"
        >
          <div class="number">
            05
            <span class="number-arrow"
              ><img src="/images/portfolio/process-arrow.svg" alt=""
            /></span>
          </div>
          <h4>{{ $t("home.process.title5") }}</h4>
          <p>
            {{ $t("home.process.text5") }}
          </p>
        </div>
      </div>
    </div>
    <div class="process-columns-mobile">
      <div class="numbers-item wow animate__animated animate__fadeInLeft">
        <div class="number">
          01
          <span class="number-arrow"
            ><img src="/images/portfolio/process-arrow.svg" alt=""
          /></span>
        </div>
        <h4>{{ $t("home.process.title1") }}</h4>
        <p>
          {{ $t("home.process.text1") }}
        </p>
      </div>
      <div
        class="numbers-item wow animate__animated animate__fadeInLeft"
        data-wow-delay="0.2s"
      >
        <div class="number">
          02
          <span class="number-arrow"
            ><img src="/images/portfolio/process-arrow.svg" alt=""
          /></span>
        </div>
        <h4>{{ $t("home.process.title2") }}</h4>
        <p>
          {{ $t("home.process.text2") }}
        </p>
      </div>
      <div class="numbers-item wow animate__animated animate__fadeInLeft">
        <div class="number">
          03
          <span class="number-arrow"
            ><img src="/images/portfolio/process-arrow.svg" alt=""
          /></span>
        </div>
        <h4>{{ $t("home.process.title3") }}</h4>
        <p>
          {{ $t("home.process.text3") }}
        </p>
      </div>
      <div
        class="numbers-item wow animate__animated animate__fadeInLeft"
        data-wow-delay="0.2s"
      >
        <div class="number">
          04
          <span class="number-arrow"
            ><img src="/images/portfolio/process-arrow.svg" alt=""
          /></span>
        </div>
        <h4>{{ $t("home.process.title4") }}</h4>
        <p>
          {{ $t("home.process.text4") }}
        </p>
      </div>
      <div class="numbers-item wow animate__animated animate__fadeInLeft">
        <div class="number">
          05
          <span class="number-arrow"
            ><img src="/images/portfolio/process-arrow.svg" alt=""
          /></span>
        </div>
        <h4>{{ $t("home.process.title5") }}</h4>
        <p>
          {{ $t("home.process.text5") }}
        </p>
      </div>
    </div>
  </section>
  <section class="offer">
    <h2>
      {{ $t("home.offer.h2P1")
      }}<span class="arrow"
        ><img src="/images/home/offer-arrow.svg" alt="" /></span
      ><br />
      <div class="decor">
        {{ $t("home.offer.h2P2") }}<br />
        {{ $t("home.offer.h2P3") }} ?
      </div>
    </h2>
    <p>
      {{ $t("home.offer.p") }}
    </p>
  </section>
</template>

<script setup>
import Breadcrumbs from "../../components/Tools/Breadcrumbs.vue";
import TabsPortfolioComponent from "../components/Blocks/TabsPortfolioComponent.vue";
</script>

<style lang="sass" scoped>
.main
  +regpad
  display: grid
  grid-template-columns: 8fr 2fr
  padding-top: 12rem
  h1
    color: $font-black
    display: grid
    grid-template-columns: 4fr 6fr
    @media (max-width: 1400px)
      font-size: 5.7rem
    @media (max-width: 992px)
      font-size: 5rem
    @media (max-width: 768px)
      font-size: 4.5rem
    @media (max-width: 576px)
      grid-template-columns: 1fr
    .slash
      color: $bgc-second
      margin-left: 1rem
    .second
      display: inline
    br
      @media (max-width: 576px)
        display: none
  .desc
    display: flex
    flex-direction: column
    text-align: right
    padding-top: 1rem
    p
      color: $font-grey
      margin: 0
      text-align: right
      @media (max-width: 576px)
        margin-bottom: 4px
    h4
      color: $font-black
      text-align: right
      @media (max-width: 576px)
        font-size: 1.5rem

// ---------------------image-------------------

.image
  margin-top: 4rem
  img
    width: 100%

// -------------------- portfolio -------------------

.portfolio
  margin-top: 10rem
  +regpad
  @media (max-width: 576px)
    margin-top: $mob-col-gap
  h2
    color: $font-black
    text-align: right
    margin-bottom: 5rem

// --------------------- process --------------------

.process
  +regpad
  display: flex
  flex-direction: column
  margin-top: 15rem
  @media (max-width: 576px)
    margin-top: $mob-col-gap
  h2
    color: $font-black
    margin-bottom: 5rem
  .process-columns
    display: grid
    grid-template-columns: 4fr 4fr 4fr
    column-gap: 7rem
    @media (max-width: 1400px)
      column-gap: 2rem
    @media (max-width: 768px)
      display: none
    .process-column
      display: flex
      flex-direction: column
      gap: 9rem
      .numbers-item
        .number
          font-size: 4rem
          color: $bgc-second
          margin-bottom: 2rem
        h4
          color: $font-black
          font-weight: 600
        p
          color: $font-grey
          padding-right: 6.3rem
          @media (max-width: 1400px)
            padding-right: 3rem
        .number-arrow
          img
            width: 5rem
      &:nth-child(2)
        padding-top: 10rem
        @media (max-width: 1400px)
          gap: 7rem
      &:nth-child(3)
        padding-top: 20rem
        gap: 10.5rem
        @media (max-width: 1400px)
          gap: 8.5rem

.process-columns-mobile
  display: none
  grid-template-columns: 1fr 1fr 1fr
  gap: 2rem
  @media (max-width: 768px)
    display: grid
  @media (max-width: 576px)
    grid-template-columns: 1fr 1fr
  .numbers-item
    .number
      font-size: 4rem
      color: $bgc-second
      margin-bottom: 2rem
    h4
      color: $font-black
      font-weight: 600
    p
      color: $font-grey
    .number-arrow
      img
        width: 5rem

// --------------------- offer -------------------

.offer
  position: relative
  max-width: calc(100% - 200px)
  margin: 0 auto
  background-color: $bgc-second
  padding: 6.75rem 14.9rem 5.1rem 14.9rem
  margin-top: 15rem
  margin-bottom: -10rem
  @media (max-width: 992px)
    max-width: calc(100% - 100px)
    padding: 6.75rem 5rem 5.1rem 5rem
  @media (max-width: 768px)
    max-width: calc(100% - 100px)
  @media (max-width: 576px)
    max-width: calc(100% - 40px)
    margin-top: $mob-col-gap
  h2
    color: $font-black
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
    color: $font-grey
    max-width: 17.25rem
    @media (max-width: 1500px)
      left: 50rem
    @media (max-width: 992px)
      display: none
</style>
