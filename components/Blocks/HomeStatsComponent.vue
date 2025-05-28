<template>
  <section class="statistics">
    <div class="container">
      <div class="statistics-row">
        <div class="stat-item">
          <h2>{{ projects.count }}+</h2>
          <p>{{ $t("home.stats1") }}</p>
        </div>
        <div class="stat-item">
          <h2>{{ clients.count }}%</h2>
          <p>{{ $t("home.stats2") }}</p>
        </div>
        <div class="stat-item hidden">
          <h2></h2>
          <p></p>
        </div>
      </div>
      <div class="divider"></div>
      <div class="statistics-row">
        <div class="stat-item">
          <h2>{{ interiors.count.value.toLocaleString() }}</h2>
          <p>{{ $t("home.stats3") }}</p>
        </div>
        <div class="stat-item">
          <h2>{{ goal.count }} {{ $t("home.statsGoal") }}</h2>
          <p>{{ $t("home.stats4") }}</p>
        </div>
        <div class="stat-item">
          <h2>{{ deadlines.count }}%</h2>
          <p>{{ $t("home.stats5") }}</p>
        </div>
      </div>
    </div>
    <div class="circle-r">
      <span>R</span>
    </div>
  </section>
</template>

<script setup defer>
import { useCountAnimation } from "@/scripts/useCountAnimation.js";

const projects = useCountAnimation(83);
const clients = useCountAnimation(95);
const interiors = useCountAnimation(12500);
const goal = useCountAnimation(1);
const deadlines = useCountAnimation(100);
</script>

<style lang="sass" scoped>
.statistics
  background-color: $font-black
  +center-x-y
  flex-direction: column
  text-align: center
  position: relative
  padding: 22rem 0 15rem 0
  margin-bottom: 7rem
  .container
    flex-direction: column
    justify-content: center
    padding-left: 0
    @media (max-width: 992px)
      padding-right: 0
  .statistics-row
    display: flex
    justify-content: space-between
    align-items: flex-start
    margin-bottom: 2rem
    padding-left: 100px
    @media (max-width: 992px)
      flex-direction: column
      align-items: center
      padding-left: 0
      gap: 1rem
      margin-bottom: 0
    .hidden
      visibility: hidden
  .stat-item
    display: flex
    flex-direction: column
    align-items: left
    flex: 1
    padding-right: 10px
    @media (max-width: 992px)
      align-items: center
      padding-right: 0
    p
      margin-top: 0.5rem
      margin-bottom: 0
      color: $font-white
    h2
      color: $font-white
      @media (max-width: 460px)
        font-size: 6rem  
  .divider
    width: 99vw
    height: 1px
    background-color: #e0e0e0
    margin: 2rem 0

.circle-r
  position: absolute
  right: 0
  top: 50%
  transform: translateX(-50px) translateY(-50%)
  display: flex
  justify-content: center
  align-items: center
  width: 11.8rem
  height: 11.8rem
  background-color: $bgc-second
  border-radius: 50%
  font-size: 1.5rem
  font-weight: 500
  color: $font-black
  @media (max-width: 992px)
    transform: translateX(-30px) translateY(-90%)
  @media (max-width: 400px)
    width: 10rem
    height: 10rem
    transform: translate(-10px, -95%)
    
  span
    display: inline-block
    font-size: 4.25rem
    color: $font-black
    font-weight: 500
</style>
