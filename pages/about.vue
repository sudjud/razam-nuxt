<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="main">
    <h1>
      <Breadcrumbs class="mb-15" />
      <span v-reveal class="wow reveal-bb reveal-visible"
        >{{ $t("about.h1P1") }}
      </span>
      <div class="devider">/</div>
      <div v-reveal class="space wow reveal-sw reveal-visible">
        {{ $t("about.h1P2") }}
      </div>
    </h1>
    <h4>{{ $t("about.h4") }}</h4>
    <div class="main-image">
      <img src="/images/about/1.webp" alt="" />
    </div>
  </main>
  <section class="design">
    <h2>
      <span v-reveal class="wow reveal-bb">{{ $t("about.design.h2") }}</span>
    </h2>
    <div class="content">
      <p>
        {{ $t("about.design.p") }}
      </p>
      <div class="filler"></div>
      <div class="image1">
        <img src="/images/about/2.webp" alt="" />
      </div>
      <div class="image2">
        <img src="/images/about/3.webp" alt="" />
      </div>
    </div>
  </section>
  <section class="why">
    <h2>
      <span v-reveal class="wow reveal-bb">{{ $t("about.why.h2") }}</span>
    </h2>
    <WhyWeComponent />
  </section>
  <section class="rates">
    <div class="rates-first">
      <div class="rates-top">
        <div class="rates-item">
          <h2>{{ $t("about.rates.stat1_value") }}</h2>
          <div class="separator"></div>
          <p>{{ $t("about.rates.stat1_text") }}</p>
        </div>
        <div class="rates-item">
          <h2>{{ $t("about.rates.stat2_value") }}</h2>
          <div class="separator"></div>
          <p>{{ $t("about.rates.stat2_text") }}</p>
        </div>
        <div class="rates-item">
          <h2>{{ $t("about.rates.stat3_value") }}</h2>
          <div class="separator"></div>
          <p>{{ $t("about.rates.stat3_text") }}</p>
        </div>
      </div>
      <div class="rates-img">
        <img src="/images/about/5.webp" alt="" />
      </div>
    </div>
    <div class="rates-second">
      <div class="filler"></div>
      <div class="rates-bottom">
        <div class="rates-item">
          <h2>{{ $t("about.rates.stat4_value") }}</h2>
          <div class="separator"></div>
          <p>{{ $t("about.rates.stat4_text") }}</p>
        </div>
        <div class="rates-item">
          <h2>{{ $t("about.rates.stat5_value") }}</h2>
          <div class="separator"></div>
          <p>{{ $t("about.rates.stat5_text") }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="way">
    <h2>
      <span v-reveal class="wow reveal-bb">{{ $t("about.way.title") }}</span>
    </h2>
    <div class="way-grid">
      <div class="way-item">
        <div class="number">
          01 <span><img data-not-lazy src="/images/about/arrow.svg" alt="" /></span>
        </div>
        <div class="title">{{ $t("about.way.step1_title") }}</div>
        <p>{{ $t("about.way.step1_text") }}</p>
      </div>
      <div class="way-item">
        <div class="number">
          02 <span><img data-not-lazy src="/images/about/arrow.svg" alt="" /></span>
        </div>
        <div class="title">{{ $t("about.way.step2_title") }}</div>
        <p>{{ $t("about.way.step2_text") }}</p>
      </div>
      <div class="way-item">
        <div class="number">
          03 <span><img data-not-lazy src="/images/about/arrow.svg" alt="" /></span>
        </div>
        <div class="title">{{ $t("about.way.step3_title") }}</div>
        <p>{{ $t("about.way.step3_text") }}</p>
      </div>
      <div class="way-item">
        <div class="number">
          04 <span><img data-not-lazy src="/images/about/arrow.svg" alt="" /></span>
        </div>
        <div class="title">{{ $t("about.way.step4_title") }}</div>
        <p>{{ $t("about.way.step4_text") }}</p>
      </div>
      <div class="way-item">
        <div class="number">
          05 <span><img data-not-lazy src="/images/about/arrow.svg" alt="" /></span>
        </div>
        <div class="title">{{ $t("about.way.step5_title") }}</div>
        <p>{{ $t("about.way.step5_text") }}</p>
      </div>
    </div>
  </section>
  <section v-if="false" class="team">
    <div class="team-top">
      <div class="team-item">
        <div class="item-img">
          <img src="/images/about/julien.webp" alt="" />
        </div>
        <h4>{{ $t("about.team.member1_name") }}</h4>
        <div class="separator"></div>
        <p>{{ $t("about.team.member1_role") }}</p>
      </div>
      <div class="team-item">
        <div class="item-img">
          <img src="/images/about/camile.webp" alt="" />
        </div>
        <h4>{{ $t("about.team.member2_name") }}</h4>
        <div class="separator"></div>
        <p>{{ $t("about.team.member2_role") }}</p>
      </div>
      <div class="filler"></div>
      <h2>
        <span v-reveal class="wow reveal-bb">{{ $t("about.team.title") }}</span>
        <img src="/images/about/arrow-down.svg" alt="" />
      </h2>
    </div>
    <div class="team-bottom">
      <div class="team-item wow animate__animated animate__fadeIn">
        <div class="item-img">
          <img src="/images/about/emil.webp" alt="" />
        </div>
        <h4>{{ $t("about.team.member3_name") }}</h4>
        <div class="separator"></div>
        <p>{{ $t("about.team.member3_role") }}</p>
      </div>
      <div class="team-item wow animate__animated animate__fadeIn">
        <div class="item-img">
          <img src="/images/about/sophie.webp" alt="" />
        </div>
        <h4>{{ $t("about.team.member4_name") }}</h4>
        <div class="separator"></div>
        <p>{{ $t("about.team.member4_role") }}</p>
      </div>
      <div class="team-item wow animate__animated animate__fadeIn">
        <div class="item-img">
          <img src="/images/about/tomas.webp" alt="" />
        </div>
        <h4>{{ $t("about.team.member5_name") }}</h4>
        <div class="separator"></div>
        <p>{{ $t("about.team.member5_role") }}</p>
      </div>
      <div class="team-item wow animate__animated animate__fadeIn">
        <div class="item-img">
          <img src="/images/about/clara.webp" alt="" />
        </div>
        <h4>{{ $t("about.team.member6_name") }}</h4>
        <div class="separator"></div>
        <p>{{ $t("about.team.member6_role") }}</p>
      </div>
    </div>
  </section>
  <div class="contact">
    <div class="text">
      <NuxtLink :to="localePath('/contact')">
        <h2>
          <span v-html="$t('contactPlate.h1')"></span>
          <span class="indent">{{ $t("contactPlate.span1") }}</span
          ><br />
          <span class="indent">{{ $t("contactPlate.span2") }}</span>
          <span><img data-not-lazy src="/images/about/contact-arrow.svg" alt="" /></span>
        </h2>
      </NuxtLink>
      <p>
        {{ $t("contactPlate.p") }}
      </p>
    </div>
    <div class="contact__image">
      <img src="/images/about/6.webp" alt="" />
    </div>
  </div>
</template>

<script setup>
import Breadcrumbs from "../components/Tools/Breadcrumbs.vue";
import WhyWeComponent from "../components/Tools/WhyWeComponent.vue";
const localePath = useLocalePath();
import { useSeo } from "../composables/useSeo";

useSeo("about");
</script>

<style lang="sass" scoped>
img
  width: 100%
// ------------------ main -------------------
main
  +regpad
  display: grid
  grid-template-columns: 11fr 1fr
  grid-template-rows: 1fr auto
  grid-template-areas: ". .""main-image main-image"
  padding-top: 2rem
  @media (max-width: 992px)
    padding-top: 6rem
    grid-template-columns: 10fr 2fr
  @media (max-width: 992px)
    padding-right: 0
    padding-left: 0
  @media (max-width: 576px)
    padding-top: 6rem
  h1
    color: $font-black
    transform: translateY(8rem)
    font-size: 6rem
    @media (max-width: 1400px)
      font-size: 5.5rem
      transform: translateY(7.5rem)
    @media (max-width: 992px)
      padding-left: 20px
      font-size: 4.4rem
      transform: translateY(6rem)
    @media (max-width: 768px)
      font-size: 3.7rem
      transform: translateY(5rem)
    @media (max-width: 576px)
      font-size: 3.25rem
      transform: translateY(3.7rem)
    @media (max-width: 450px)
      font-size: 2.7rem
      transform: translateY(3rem)
    div.devider
      color: $bgc-second
      display: inline
      margin: 0
    div.space
      text-align: center
      padding-left: 5%
    .mb-15
      margin-bottom: 10px
  h4
    color: $font-black
    transform: translateY(9.8rem)
    @media (max-width: 768px)
    transform: translateY(7rem)
    @media (max-width: 576px)
      display: none
  .main-image
    grid-area: main-image
    @media (max-width: 576px)
      min-height: 70vh
    img
      height: 100%
      object-fit: cover
      border-radius: 10px

// ------------------ desing -------------------

.design
  +regpad
  margin-top: 13rem
  @media (max-width: 576px)
    margin-top: $mob-col-gap
  h2
    color: $font-black
    text-align: left
    @media (max-width: 768px)
      font-size: 5rem
    @media (max-width: 576px)
      font-size: 4rem
  .content
    padding-top: 6.25rem
    display: grid
    grid-template-columns: 2fr 1fr 3fr 6fr
    gap: 20px
    align-items: flex-end
    @media (max-width: 1750px)
      grid-template-columns: 2.7fr 0.3fr 3fr 6fr
    @media (max-width: 1400px)
      grid-template-columns: 2.7fr 0.3fr 3fr 6fr
    @media (max-width: 1200px)
      grid-template-columns: 2.9fr 0.1fr 3fr 6fr
    @media (max-width: 768px)
      grid-template-columns: 1fr
    @media (max-width: 768px)
      padding-top: 20px
    p
      color: $font-grey
    .image2
      padding-bottom: 73px

// ------------------- why --------------------

section.why
  +regpad
  margin-top: 20rem
  display: grid
  grid-template-columns: 4fr 8fr
  gap: 40px
  @media (max-width: 576px)
    grid-template-columns: 1fr
    margin-top: $mob-col-gap
  h2
    color: $font-black
    @media (max-width: 992px)
      font-size: 4.8rem

// ---------------------- rates ---------------------

section.rates
  display: flex
  flex-direction: column
  margin-top: 20rem
  @media (max-width: 576px)
    margin-top: $mob-col-gap
  .rates-item
    +regpad
    width: 100%
    h2
      color: $font-black
    p
      color: $font-grey
    .separator
      height: 1px
      width: 100%
      background-color: $font-black
  .rates-first
    display: grid
    grid-template-columns: 5fr 7fr
    @media (max-width: 768px)
      grid-template-columns: 1fr
      padding-bottom: 2rem
    .rates-img
      border-radius: 12px
      img
        height: 100%
        border-radius: 12px
        object-fit: cover
  .rates-second
    display: grid
    grid-template-columns: 7fr 5fr
    margin-top: 3rem
    @media (max-width: 768px)
      grid-template-columns: 1fr
      margin-top: 2rem

// ---------------------- way ----------------------

.way
  +regpad
  margin-top: 20rem
  @media (max-width: 576px)
    margin-top: $mob-col-gap
  h2
    color: $font-black
  .way-grid
    display: grid
    grid-template-columns: 3fr 3fr 3fr
    grid-template-rows: 1fr 1fr
    margin-top: 5rem
    gap: 7.5rem 10rem
    @media (max-width: 1400px)
      gap: 3.5rem 4rem
    @media (max-width: 768px)
      grid-template-columns: 3fr 3fr
    @media (max-width: 576px)
      grid-template-columns: 3fr
  .way-item
    .number
      font-size: 4rem
      font-weight: 500
      color: $bgc-second
      display: flex
      align-items: center
      span
        margin-left: 30px
      img
        height: 3rem
    .title
      font-size: 2rem
      font-weight: 600
      color: $font-black
    p
      color: $font-grey

// ---------------------- team -----------------------

.team
  +regpad
  display: flex
  flex-direction: column
  margin-top: 20rem
  @media (max-width: 576px)
    margin-top: $mob-col-gap
  .team-top
    display: grid
    grid-template-columns: 1fr 1fr 0.5fr 1.5fr
    gap: 7rem 20px
    @media (max-width: 768px)
      grid-template-columns: 1fr 1fr
      grid-template-rows: auto 1fr
      gap: 3rem 20px
    .filler
      @media (max-width: 768px)
        display: none
    h2
      @media (max-width: 768px)
        grid-row-start: 1
        grid-column: 1/3
  .team-bottom
    display: grid
    grid-template-columns: 1fr 1fr 1fr 1fr
    gap: 7rem 20px
    margin-top: 3rem
    @media (max-width: 768px)
      grid-template-columns: 1fr 1fr
      gap: 3rem 20px
  h2
    color: $font-black
    img
      display: block
      width: 5rem
      margin-top: 1rem
      margin-left: auto
  .team-item
    h4
      color: $font-black
      margin-top: 20px
      font-weight: 500
    p
      color: $font-grey
    .separator
      height: 1px
      width: 100%
      background-color: $font-grey
      margin-top: 9px

// ---------------------- contact -----------------------

.contact
  margin-top: 20rem
  display: grid
  grid-template-columns: 1fr auto
  gap: 20px
  background-color: $bgc-second
  align-items: center
  padding-left: 100px
  @media (max-width: 768px)
    padding-left: 30px
  .text
    display: flex
    flex-direction: row
    align-items: center
    gap: 8rem
    @media (max-width: 1000px)
      gap: 4rem
    @media (max-width: 576px)
      justify-content: center
  @media (max-width: 576px)
    margin-top: $mob-col-gap
  p
    @media (max-width: 992px)
      font-size: 1rem
    @media (max-width: 576px)
      display: none
  a
    text-decoration: none
  h2
    color: $font-black
    @media (max-width: 1732px)
      font-size: 6rem
    @media (max-width: 1664px)
      font-size: 5.5rem
    @media (max-width: 1582px)
      font-size: 5rem
    @media (max-width: 1250px)
      font-size: 4rem
    @media (max-width: 656px)
      font-size: 3rem
    span.indent
      margin-left: 1em
    &:hover
      text-decoration: underline
    img
      width: 0.7em
      margin-left: 0.5em
      @media (max-width: 992px)
        width: 0.7em
  &__image
    height: 35vw
    img
      max-height: 35vw
      object-fit: cover
</style>
