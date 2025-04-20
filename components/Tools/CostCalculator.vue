<template>
  <div class="calculator-wrapper">
    <form class="calculator" @submit.prevent="submitForm">
      <!-- Шаг 1: Выбор направления -->
      <h3>{{ $t('calculator.h') }}</h3>
      <section class="design-or-repair">
        <label>
          <input type="checkbox" v-model="form.design" />
          {{ $t("calculator.directions.design") }}
        </label>
        <label>
          <input type="checkbox" v-model="form.renovation" />
          {{ $t("calculator.directions.renovation") }}
        </label>
      </section>

      <!-- Шаг 2: Тип объекта и параметры -->
      <section v-if="form.design || form.renovation">
        <div class="object-type">
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
            {{ $t("calculator.params.area") }} (м²)
            <input type="number" v-model.number="form.area" min="0" />
          </label>

          <label>
            {{ $t("calculator.params.bathrooms") }}
            <input type="number" v-model.number="form.bathrooms" min="0" />
          </label>

          <label>
            {{ $t("calculator.params.rooms") }}
            <input type="number" v-model.number="form.rooms" min="0" />
          </label>

          <label class="kitchen">
            <input type="checkbox" v-model="form.hasKitchen" />
            {{ $t("calculator.params.kitchen") }}
          </label>
        </div>
      </section>

      <!-- Шаг 4: Контактная информация -->
      <section class="contact-info">
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
      <section class="confirmation">
        <label>
          <input type="checkbox" v-model="form.accepted" required />
          {{ $t("calculator.confirmation") }}
        </label>

        <button type="submit">
          {{ $t("calculator.button") }}
        </button>
      </section>

      <!-- Шаг 6: Сообщение об успехе -->
      <p v-if="submitted" class="success-message">
        {{ $t("calculator.success") }}
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import PhoneInputComponent from "./PhoneInputComponent.vue";

const phoneInput = ref(null);

const form = ref({
  design: false,
  renovation: false,
  objectType: "",
  area: null,
  bathrooms: null,
  hasKitchen: false,
  rooms: null,
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

const submitForm = () => {
  // Здесь будет логика отправки формы
  const isValidPhone = phoneInput.value?.isValid;
  if (!isValidPhone) {
    // Программа покажет сообщение через PhoneInput (hasBeenBlurred = true)
    phoneInput.value?.triggerValidation?.();
    return;
  }
  submitted.value = true;
  console.log(form.value);

  // Сброс формы при необходимости
  // Object.assign(form.value, { ...defaultValues })
};
</script>

<style lang="sass" scoped>
*
  font-family: Mont, sans-serif
  font-size: 1rem
  user-select: none

.calculator-wrapper
  padding: 4rem
.calculator
  display: flex
  flex-direction: column
  gap: 2rem
  max-width: 600px
  padding: 2rem
  min-height: 51.5rem
  background-color: #fff
  border-radius: 12px
  h3
    font-size: 2rem
    font-family: Geometria, sans-serif
  .design-or-repair
    display: flex
    flex-direction: row
    justify-content: start
    gap: 40px
    input
      margin: 0
  .object-type
    display: flex
    flex-direction: column
  .object-details
    display: flex
    flex-direction: column
    label
      display: flex
      justify-content: space-between
      &.kitchen
        justify-content: start
        flex-direction: row-reverse

section
  display: flex
  flex-direction: column
  gap: 1rem

input[type="text"],
input[type="tel"],
input[type="email"],
input[type="number"],
textarea
  padding: 0.5rem
  border-radius: 6px
  border: 1px solid #ccc

button
  padding: 0.8rem 1.5rem
  border: none
  background: black
  color: white
  font-weight: bold
  border-radius: 8px
  cursor: pointer

.success-message
  color: green
  text-align: center

input[type="checkbox"],
input[type="radio"]
  appearance: none
  -webkit-appearance: none
  background-color: #fff
  border: 2px solid $font-grey
  width: 18px
  height: 18px
  border-radius: 4px
  position: relative
  cursor: pointer
  margin-right: 10px
  display: inline-block
  vertical-align: middle
  @media (max-width: 1250px)
    width: 13px
    height: 13px

input[type="radio"]
  border-radius: 50%

input[type="checkbox"]:checked::after,
input[type="radio"]:checked::after
  content: ""
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  width: 10px
  height: 10px
  background-color: $font-grey
  border-radius: inherit
  @media (max-width: 1250px)
    width: 6px
    height: 6px

label
  display: flex
  align-items: center
  font-size: 1rem
  gap: 0.5rem
</style>
