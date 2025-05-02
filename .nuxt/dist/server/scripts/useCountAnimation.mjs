import { ref } from "vue";
function useCountAnimation(targetValue, duration = 2e3) {
  const count = ref(0);
  return { count };
}
export {
  useCountAnimation
};
//# sourceMappingURL=useCountAnimation.mjs.map
