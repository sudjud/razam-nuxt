import Vue3TouchEvents from "vue3-touch-events"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3TouchEvents, {
    // опционально: настрой чувствительность или другие параметры
    disableClick: false,
    tapTolerance: 10,
    swipeTolerance: 30,
    longTapTimeInterval: 400
  })
});