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
          <div class="filler"></div>
          <div class="answer-image">
            <img :src="item.image" alt="" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { reactive, nextTick } from "vue";
import image1 from "/images/about/4.jpg";
import image2 from "/images/about/4.jpg";
import image3 from "/images/about/4.jpg";
import image4 from "/images/about/4.jpg";

const questions = reactive([
  {
    question: "about.why.values.question1",
    answer: "about.why.values.answer1",
    image: image1,
    open: false,
  },
  {
    question: "about.why.values.question2",
    answer: "about.why.values.answer2",
    image: image2,
    open: false,
  },
  {
    question: "about.why.values.question3",
    answer: "about.why.values.answer3",
    image: image3,
    open: false,
  },
  {
    question: "about.why.values.question4",
    answer: "about.why.values.answer4",
    image: image4,
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
    border-bottom: 1px solid $font-grey
    padding: 2rem 0 2rem 0
    &.open
      border-bottom: 3px solid $font-black
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
        font-size: 4rem
        @media (max-width: 1200px)
          font-size: 3rem
        @media (max-width: 992px)
          font-size: 2.5rem
        @media (max-width: 768px)
          font-size: 2rem
        @media (max-width: 576px)
          font-size: 1.7rem
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
        transform: rotate(-90deg)
      svg
        @media (max-width: 768px)
          width: 15px
          height: 15px

    .answer-wrapper
      overflow: hidden
      height: auto
      opacity: 1
      display: grid
      grid-template-columns: 7fr 1fr 4fr
      padding-top: 3rem
      @media (max-width: 992px)
      p
        color: $font-grey
        margin: 0
      .answer-image
        img
          width: 100%
</style>
