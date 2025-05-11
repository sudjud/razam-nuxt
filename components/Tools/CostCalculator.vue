<template>
  <div class="calculator-wrapper">
    <form class="calculator" @submit.prevent="submitForm">
      <!-- Шаг 1: Выбор направления -->
      <h3>
        {{ $t("calculator.h1") }}
        <br />
        {{ $t("calculator.h2") }}
      </h3>
      <section class="design-or-repair" v-if="page === 1">
        <span class="prompt">{{ $t("calculator.prompt1") }}</span>
        <div class="design-or-repair_wrapper">
          <label>
            <input type="checkbox" v-model="form.design" />
            {{ $t("calculator.directions.design") }}
          </label>
          <label>
            <input type="checkbox" v-model="form.renovation" />
            {{ $t("calculator.directions.renovation") }}
          </label>
        </div>
      </section>

      <!-- Шаг 2: Тип объекта и параметры -->
      <section v-if="page === 1">
        <div class="object-type">
          <span class="prompt">{{ $t('calculator.prompt2') }}</span>
          <label v-for="(label, value) in objectTypes" :key="value">
            <input
              type="radio"
              name="objectType"
              :value="value"
              v-model="form.objectType"
            />
            {{ $t(label) }}
          </label>
        </div>

        <div class="object-details">
          <label>
            <input
              type="number"
              v-model.number="form.area"
              min="0"
              :placeholder="$t('calculator.params.area') + ' (м²)'"
            />
          </label>

          <label>
            <input
              type="number"
              v-model.number="form.bathrooms"
              min="0"
              :placeholder="$t('calculator.params.bathrooms')"
            />
          </label>

          <label>
            <input
              type="number"
              v-model.number="form.rooms"
              min="0"
              :placeholder="$t('calculator.params.rooms')"
            />
          </label>

          <label class="kitchen">
            <input type="checkbox" v-model="form.hasKitchen" />
            {{ $t("calculator.params.kitchen") }}
          </label>
        </div>
      </section>

      <!-- Шаг 4: Контактная информация -->
      <section class="contact-info" v-if="page === 2">
        <input
          type="text"
          v-model="form.name"
          :placeholder="$t('calculator.contact.name')"
          required
        />
        <!-- <input type="tel" v-model="form.phone" :placeholder="$t('calculator.contact.phone')" required /> -->
        <PhoneInputComponent v-model="form.phone" ref="phoneInput" />
        <input
          type="email"
          v-model="form.email"
          :placeholder="$t('calculator.contact.email')"
          required
        />
        <textarea
          v-model="form.message"
          :placeholder="$t('calculator.contact.message')"
        ></textarea>
      </section>

      <!-- Шаг 5: Подтверждение и кнопка -->
      <section v-if="page === 2" class="confirmation">
        <label>
          <input type="checkbox" v-model="form.accepted" required />
          {{ $t("calculator.confirmation") }}
        </label>
      </section>
      <div class="buttons">
        <button
          v-show="page === 2"
          class="prev-button"
          @click="prevPage"
          type="button"
        >
          {{ $t("calculator.prev") }}
        </button>
        <p :class="{ submit: submitted }" class="success-message">
          {{ $t("calculator.success") }}
        </p>

        <button
          class="next-submit"
          @click="handleClick"
          :type="page === 2 ? 'submit' : 'button'"
          :disabled="
            (page === 1 &&
              (!form.objectType ||
                (!form.design && !form.renovation) ||
                !form.area ||
                !form.bathrooms ||
                !form.rooms)) ||
            (page === 2 && (!form.name || !form.email || !form.accepted))
          "
        >
          {{ page === 2 ? $t("calculator.button") : $t("calculator.next") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PhoneInputComponent from "./PhoneInputComponent.vue";

const page = ref(1);

const phoneInput = ref(null);

const form = ref({
  design: false,
  renovation: false,
  objectType: "",
  area: null,
  bathrooms: null,
  rooms: null,
  hasKitchen: false,
  name: "",
  phone: "",
  email: "",
  message: "",
  accepted: false,
});

const submitted = ref(false);

const objectTypes = {
  apartment: "calculator.objectType.apartment",
  public: "calculator.objectType.public",
  office: "calculator.objectType.office",
};

const submitForm = async () => {
  const endpoint = "https://formspree.io/f/mnndzqeq";

  const payload = {
    name: form.value.name,
    phone: form.value.phone,
    email: form.value.email,
    message: form.value.message,
    direction: `${form.value.design ? 'Design ' : ''}${form.value.renovation ? 'Renovation' : ''}`,
    objectType: form.value.objectType,
    area: form.value.area,
    bathrooms: form.value.bathrooms,
    rooms: form.value.rooms,
    hasKitchen: form.value.hasKitchen ? 'Yes' : 'No'
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (response.ok) {
      submitted.value = true;
      setTimeout(() => {
        submitted.value = false;
      }, 5000);

      // Reset form
      form.value = {
        design: false,
        renovation: false,
        objectType: "",
        area: null,
        bathrooms: null,
        rooms: null,
        hasKitchen: false,
        name: "",
        phone: "",
        email: "",
        message: "",
        accepted: false
      };
      page.value = 1;
    } else {
      console.error("Ошибка при отправке формы: ", result);
    }
  } catch (error) {
    console.error("Ошибка запроса: ", error);
  }
};

const nextPage = () => {
  if (page.value < 2) {
    page.value++;
  }
  return;
};

const prevPage = () => {
  if (page.value > 1) {
    page.value--;
  }
  return;
};

const handleClick = () => {
  if (page.value === 2) {
    submitForm();
  } else {
    nextPage();
  }
};
</script>

<style lang="sass" scoped>
*
  font-family: Geometria, sans-serif
  font-size: 1.25rem
  user-select: none

.prompt
  font-size: 0.7em

.calculator-wrapper
  padding: 4rem
.calculator
  display: flex
  flex-direction: column
  gap: 0
  height: 750px
  max-width: 34rem
  padding: 2rem
  background-color: #fff
  border-radius: 12px
  @media (max-width: 1500px)
    height: 610px
  @media (max-width: 1250px)
    height: 540px
  @media (max-width: 992px)
    height: 540px
  @media (max-width: 768px)
    height: 470px
  @media (max-width: 576px)
    height: 410px
  .buttons
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-top: auto
    .success-message
      opacity: 0
      position: fixed
      z-index: 10000000
      top: 10%
      left: 50%
      transform: translateX(-50%)
      font-size: 1.5rem
      font-weight: 600
      padding: 2rem
      background-color: $bgc-second
      border-radius: 30px
      transition-duration: 0.6s
      color: green
      text-align: center
      &.submit
        transition-duration: 0.6s
        opacity: 1
    .next-submit
      margin-left: auto
      padding: 1rem 3rem
    .prev-button
      background-color: #fff
      color: black
      border: 1px solid black
      padding: 1rem 3rem
  h3
    font-size: 2rem
    font-family: Geometria, sans-serif
  .design-or-repair
    display: flex
    flex-direction: column
    justify-content: start
    border-bottom: 1px solid rgba($font-grey, 0.3)
    margin-top: 0.5rem
    padding: 1rem 0
    input
      margin: 0
    &_wrapper
      display: flex
      flex-direction: row
      gap: 40px
      margin-top: 0.5rem
  .object-type
    display: flex
    flex-direction: column
    gap: 10px
    border-bottom: 1px solid rgba($font-grey, 0.3)
    padding: 1rem 0
    input
      margin: 0
  .object-details
    display: flex
    flex-direction: column
    margin-top: 1rem
    gap: 1rem
    label
      display: flex
      justify-content: space-between
      input[type="number"]
        width: 100%
        font-size: 1.25rem
      &.kitchen
        justify-content: start
        flex-direction: row-reverse
  .contact-info
    gap: 1rem
    margin: 2rem 0

section
  display: flex
  flex-direction: column

input[type="text"],
input[type="tel"],
input[type="email"],
input[type="number"],
textarea
  padding: 1rem
  border-radius: 6px
  border: 1px solid #ccc

button
  border: none
  background: black
  color: white
  border-radius: 8px
  cursor: pointer
  font-weight: 300
  &:disabled
    background-color: rgba(black, 0.5) !important

input[type="checkbox"],
input[type="radio"]
  appearance: none
  -webkit-appearance: none
  background-color: #fff
  border: 1px solid #ccc
  padding: 0
  width: 1.5rem
  height: 1.5rem
  border-radius: 4px
  position: relative
  cursor: pointer
  display: inline-block
  vertical-align: middle

input[type="radio"]
  border-radius: 50%

input[type="checkbox"]:checked::after,
input[type="radio"]:checked::after
  content: ""
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  width: 0.8rem
  height: 0.8rem
  background-color: $font-grey
  border-radius: inherit

label
  display: flex
  align-items: center
  font-size: 1rem
  gap: 0.5rem

input, textarea
  font-family: Geometria, sans-serif
  &:focus
    outline: none

button
  &:hover
    background-color: rgba(black, 0.8)
</style>
