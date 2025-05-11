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
        <div class="number">0{{ index }}</div>
        <div class="question">
          <h4>{{ $t(item.question) }}</h4>
        </div>
        <div class="filler"></div>
        <div class="arrow-circle" :class="{ open: item.open }">
          <svg
            data-name="1-Arrow Up"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="25"
            height="25"
            data-not-lazy
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
            {{ $t(item.answer) }}
          </p>
          <button @click="toggleModal" class="go-to-calc_btn" v-if="index === 5">
            {{ $t("calculator.modalButton") }}
          </button>
        </div>
      </transition>
    </div>
    <CostCalcModal @close-modal="toggleModal" @submit-form="submitModal" v-if="modalOpened" />
  </div>
</template>

<script setup>
import CostCalcModal from "/components/Tools/CostCalcModal";
import { reactive, nextTick } from "vue";

const questions = reactive([
  {
    question: "home.FAQ.q3",
    answer: "home.FAQ.a3",
    open: false,
  },
  {
    question: "home.FAQ.q1",
    answer: "home.FAQ.a1",
    open: false,
  },
  {
    question: "home.FAQ.q6",
    answer: "home.FAQ.a6",
    open: false,
  },
  {
    question: "home.FAQ.q2",
    answer: "home.FAQ.a2",
    open: false,
  },
  {
    question: "home.FAQ.q5",
    answer: "home.FAQ.a5",
    open: false,
  },
  {
    question: "home.FAQ.q4",
    answer: "home.FAQ.a4",
    open: false,
  },
]);

const modalOpened = ref(false);
const modalSubmitted = ref(false);

const submitModal = () => {
  modalSubmitted.value = true;
  setTimeout(() => {
    modalSubmitted.value = false;
  }, 3000)
  modalOpened.value = false;
}

const toggleModal = () => {
  modalOpened.value = !modalOpened.value;
};

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
.go-to-calc_btn
  font-family: Geometria, sans-serif
  padding: 1rem 3rem
  font-size: 1.25rem
  border-radius: 12px
  background-color: transparent
  border: 1.5px solid black
  color: black
  margin-left: 2px
  font-weight: 500
  &:hover
    transform: scale(1.02)

.question-block
  cursor: pointer
  .question-item
    border-top: 1px solid $font-grey
    padding: 2rem 0 2rem 0
    &:hover
      .arrow-circle
        transform: rotate(-90deg)
    &.open
      border-top: 3px solid $font-black
    .question-number-wrapper
      display: flex
      flex-direction: row
      align-items: flex-start
      .number
        font-size: 1rem
        color: $font-grey
        margin-right: 3.3rem
        @media (max-width: 576px)
          margin-right: 1.3rem
      .filler
        flex-grow: 1
      h4
        color: $font-black
        font-size: 2rem
        @media (max-width: 1200px)
          font-size: 1.7rem
        @media (max-width: 768px)
          font-size: 1.6rem
        @media (max-width: 576px)
          font-size: 1.5rem
      &:hover
        color: $font-black

    .arrow-circle
      display: flex
      justify-content: center
      align-items: center
      align-self: start
      margin-left: 0 auto
      width: 3.75rem
      height: 3.75rem
      border: 1px solid $font-grey
      border-radius: 50%
      transition: transform 0.3s ease
      transform: rotate(45deg)
      @media (max-width: 768px)
        width: 3rem
        height: 3rem
      &.open
        transform: rotate(-135deg)
      svg
        @media (max-width: 768px)
          width: 15px
          height: 15px

    .answer-wrapper
      overflow: hidden
      height: auto
      opacity: 1

    p
      color: $font-grey
</style>
