<template>
  <div class="question-block">
    <div
      class="question-item"
      v-for="(item, index) in questions"
      :key="index"
      @click="toggleAnswer(index)"
      :class="{ open: item.open }"
    >
      <div class="question-number-wrapper">
        <div>0{{ index }}</div>
        <div class="question">
          <h4>{{ item.question }}</h4>
        </div>
        <div class="arrow-circle" :class="{ open: item.open }">
          <svg
            data-name="1-Arrow Up"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="30"
            height="30"
          >
            <path
              d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"
            />
          </svg>
        </div>
      </div>
      <transition
        name="expand"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div class="answer-wrapper" v-show="item.open" ref="answer">
          <p class="answer">
            {{ item.answer }}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { reactive, nextTick } from "vue";

const questions = reactive([
  {
    question: "Что такое Vue.js?",
    answer:
      "Vue.js — это прогрессивный фреймворк для создания пользовательских интерфейсов.",
    open: false,
  },
  {
    question: "Как работает двухсторонняя привязка?",
    answer:
      "Она позволяет автоматически синхронизировать данные между моделью и представлением.",
    open: false,
  },
  {
    question: "Что такое компоненты?",
    answer: "Компоненты — это переиспользуемые части интерфейса.",
    open: false,
  },
]);

const toggleAnswer = async (index) => {
  questions[index].open = !questions[index].open;
  await nextTick();
};

const beforeEnter = (el) => {
  el.style.height = "0";
  el.style.opacity = "0";
};

const enter = (el) => {
  const height = el.scrollHeight;
  el.style.transition = "height 0.3s ease, opacity 0.3s ease";
  el.style.height = `${height}px`;
  el.style.opacity = "1";
  el.addEventListener(
    "transitionend",
    () => {
      el.style.height = "auto";
    },
    { once: true }
  );
};

const leave = (el) => {
  el.style.height = `${el.scrollHeight}px`;
  el.style.opacity = "1";
  void el.offsetHeight; // Trigger reflow
  el.style.transition = "height 0.3s ease, opacity 0.3s ease";
  el.style.height = "0";
  el.style.opacity = "0";
};
</script>

<style lang="sass" scoped>
.question-block
  cursor: pointer
  .question-item
    border-top: 1px solid $font-grey
    padding: 10px 0
    &.open
      border-top: 2px solid $font-black
    .question-number-wrapper

    .question
      h4
        color: $font-black
      &:hover
        color: #007bff

    .arrow-circle
      display: flex
      justify-content: center
      align-items: center
      margin-left: 0 auto
      width: 3.75rem
      height: 3.75rem
      border: 1px solid $font-grey
      border-radius: 50%
      transition: transform 0.3s ease
      transform: rotate(45deg)

      &.open
        transform: rotate(-135deg)

    .answer-wrapper
      overflow: hidden
      height: auto
      opacity: 1

    .answer
      margin-top: 5px
      color: #555
</style>
