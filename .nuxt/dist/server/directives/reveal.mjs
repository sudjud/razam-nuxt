import { useIntersectionObserver } from "@vueuse/core";
import { defineNuxtPlugin } from "../node_modules/nuxt/dist/app/nuxt.mjs";
const reveal_2W0DU7K6hPNm6nNUmZ_FGMD2jdXBTITvuoGpq4eyUBw = defineNuxtPlugin((nuxtApp) => {
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
export {
  reveal_2W0DU7K6hPNm6nNUmZ_FGMD2jdXBTITvuoGpq4eyUBw as default
};
//# sourceMappingURL=reveal.mjs.map
