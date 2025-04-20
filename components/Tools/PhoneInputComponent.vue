<script setup>
import { ref, computed, watch } from 'vue'
import {
  parsePhoneNumberFromString,
  AsYouType
} from 'libphonenumber-js'

const phone = ref('+33 ')
const emit = defineEmits(['update:modelValue'])

const hasBeenBlurred = ref(false);

const formatPhone = (input) => {
  const formatter = new AsYouType('FR')
  formatter.input(input)
  return formatter.formattedOutput
}

const isValid = computed(() => {
  const parsed = parsePhoneNumberFromString(phone.value, 'FR')
  return parsed?.isValid() || false
})

const showError = computed(() => {
  return hasBeenBlurred.value && !isValid.value && phone.value.length > 4
})

const onInput = (e) => {
  const raw = e.target.value.replace(/[^\d+]/g, '')
  if (!raw.startsWith('+33')) {
    phone.value = '+33 '
  } else {
    phone.value = formatPhone(raw)
  }
}

const onBlur = () => {
  hasBeenBlurred.value = true
}

watch(phone, () => {
  emit('update:modelValue', phone.value)
})

defineExpose({
  isValid,
  triggerValidation: () => {
    hasBeenBlurred.value = true
  }
})
</script>

<template>
  <div class="phone-wrapper">
    <input
      v-model="phone"
      type="tel"
      @input="onInput"
      @blur="onBlur"
      placeholder="+33 6 12 34 56 78"
      maxlength="17"
      class="phone-input"
      :class="{ 'invalid': showError }"
    />
    <span v-if="showError" class="error">Неверный номер телефона</span>
  </div>
</template>

<style scoped lang="sass">
.phone-wrapper
  display: flex
  flex-direction: column
  gap: 0.3rem

.phone-input
  width: 100%
  padding: 0.5rem 1rem
  border: 1px solid #ccc
  border-radius: 8px
  font-size: 1rem
  outline: none
  transition: 0.2s ease
  &.invalid
    border-color: red

.error
  color: red
  font-size: 0.9rem
  margin-left: 4px
</style>
