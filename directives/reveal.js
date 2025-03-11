import { useIntersectionObserver } from "@vueuse/core";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("reveal", {
    mounted(el) {
      const { stop } = useIntersectionObserver(el, ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          stop();
        }
      }, { threshold: 0.1 });
    }
  });
});