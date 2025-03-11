import { ref, onMounted } from "vue";

export function useCountAnimation(targetValue, duration = 2000) {
  const count = ref(0);
  let observer = null;

  const startCounting = () => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      let progress = Math.min((timestamp - startTime) / duration, 1);
      count.value = Math.floor(progress * targetValue);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        count.value = targetValue; // Убеждаемся, что в конце число корректное
      }
    };
    requestAnimationFrame(step);
  };

  onMounted(() => {
    const element = document.querySelector(".statistics");
    if (!element) return;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect(); // Останавливаем наблюдение после активации
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
  });

  return { count };
}
