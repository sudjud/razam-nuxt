<template>
  <transition name="fade">
    <div v-if="!loaded" class="loader">
      <div class="logo">
        <img data-not-lazy class="logo-img" src="/images/loader/logo-white.webp" alt="Logo">
        <img
          ref="stick"
          data-not-lazy
          src="/images/loader/devider.webp"
          alt="Loading Stick"
          class="stick"
          :style="{ transform: `scaleY(${scale})` }"
        />
      </div>
      <div class="percentage">{{ percentage }}%</div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loaded = ref(false)
const percentage = ref(0)
const scale = ref(1)

const animateLoader = () => {
  const duration = 2000
  const startTime = performance.now()

  const animate = (time) => {
    const elapsed = time - startTime
    const progress = Math.min(elapsed / duration, 1)

    percentage.value = Math.floor(progress * 100)
    scale.value = 1 + progress * ((260 / 70) - 1) // от 1 до 3

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      setTimeout(() => {
        loaded.value = true
      }, 300)
    }
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  animateLoader()
})
</script>

<style lang="sass" scoped>
.loader
  position: fixed
  inset: 0
  background: black
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  z-index: 9999
  transition: opacity 0.6s ease
  pointer-events: none

.logo
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  display: flex
  flex-direction: column
  align-items: center
  &-img
    width: 350px

.stick
  height: 70px
  position: absolute
  top: 33%
  left: 37%
  transition: transform 0.3s ease
  transform-origin: center center
  object-fit: contain

.percentage
  position: absolute
  top: 65%
  left: 50%
  transform: translate(-50%, -50%)
  font-size: 1.5rem
  color: white
  font-family: monospace

.fade-enter-active, .fade-leave-active
  transition: opacity 0.6s ease
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
  opacity: 0
</style>


