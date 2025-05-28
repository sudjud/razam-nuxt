<template>
  <div :class="contactPage ? 'contact-phone' : 'phone-input'">
    <div class="phone-input__select" @click="toggleDropdown">
      <div class="phone-input__selected">
        <img :src="countries[selectedCountry].flag" alt="" /><img data-not-lazy class="arrow" src="/public/images/flags/arrow.png" alt="" />
      </div>

      <div v-show="dropdownOpen" class="phone-input__dropdown">
        <div
          v-for="(country, code) in countries"
          :key="code"
          class="phone-input__option"
          @click.stop="selectCountry(code)"
        >
          <img :src="country.flag" alt="" />
        </div>
      </div>
    </div>

    <div class="phone-input__field">
      <input
        type="tel"
        :value="formattedPhone"
        @input="onInput"
        :maxlength="countries[selectedCountry].phoneLength + 5"
        :placeholder="countries[selectedCountry].placeholder"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Импорты картинок
import frImg from '/images/flags/France.png'
import deImg from '/images/flags/Germany.png'
import esImg from '/images/flags/Spain.png'
import itImg from '/images/flags/Italy.png'
import gbImg from '/images/flags/United-Kingdom.png'
import ruImg from '/images/flags/Russia.png'
import uaImg from '/images/flags/Ukraine.png'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  contactPage: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue']);

useHead({
  link: [
    { rel: 'preload', href: '/images/flags/France.png', as: 'image' },
    { rel: 'preload', href: '/images/flags/Germany.png', as: 'image' },
    { rel: 'preload', href: '/images/flags/Spain.png', as: 'image' },
    { rel: 'preload', href: '/images/flags/Italy.png', as: 'image' },
    { rel: 'preload', href: '/images/flags/UnitedKingdom.png', as: 'image' },
    { rel: 'preload', href: '/images/flags/Russia.png', as: 'image' },
    { rel: 'preload', href: '/images/flags/Ukraine.png', as: 'image' },
  ]
})

const countries = {
  fr: { name: 'France', prefix: '+33', phoneLength: 12, format: [1, 2, 2, 2, 2], placeholder: '6 12 34 56 78', flag: frImg },
  de: { name: 'Germany', prefix: '+49', phoneLength: 11, format: [3, 3, 4], placeholder: '151 123 4567', flag: deImg },
  es: { name: 'Spain', prefix: '+34', phoneLength: 10, format: [3, 3, 3], placeholder: '612 345 678', flag: esImg },
  it: { name: 'Italy', prefix: '+39', phoneLength: 11, format: [3, 3, 4], placeholder: '312 345 6789', flag: itImg },
  gb: { name: 'United Kingdom', prefix: '+44', phoneLength: 12, format: [4, 6], placeholder: '7123 456789', flag: gbImg },
  ru: { name: 'Russia', prefix: '+7', phoneLength: 10, format: [3, 3, 4], placeholder: '912 345 6789', flag: ruImg },
  ua: { name: 'Ukraine', prefix: '+380', phoneLength: 11, format: [2, 3, 4], placeholder: '67 123 4567', flag: uaImg },
}

const selectedCountry = ref('fr')
const rawPhone = ref('')
const dropdownOpen = ref(false)

const formattedPhone = computed(() => {
  const { prefix, format } = countries[selectedCountry.value]
  let numbers = rawPhone.value
  let formatted = ''
  let index = 0

  for (const groupLength of format) {
    if (numbers.length > index) {
      formatted += numbers.substr(index, groupLength) + ' '
      index += groupLength
    }
  }
  formatted = formatted.trim()
  return prefix + ' ' + formatted
})

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function selectCountry(code) {
  dropdownOpen.value = false;
  selectedCountry.value = code
  rawPhone.value = ''
}

function onInput(event) {
  let input = event.target.value
  input = input.replace(/\D/g, '')

  const prefix = countries[selectedCountry.value].prefix.replace('+', '')
  if (input.startsWith(prefix)) {
    input = input.slice(prefix.length)
  }

  const maxLength = countries[selectedCountry.value].phoneLength
  if (input.length > maxLength) {
    input = input.slice(0, maxLength)
  }

  rawPhone.value = input;
  emit('update:modelValue', formattedPhone.value);
}

watch(() => props.modelValue, (newVal) => {
  if (newVal !== formattedPhone.value) {

  }
})

watch(() => props.modelValue, (newVal) => {
  const prefix = countries[selectedCountry.value].prefix
  if (newVal === '' || newVal === prefix || newVal === prefix + ' ') {
    rawPhone.value = ''
  }
})
</script>

<style lang="sass" scoped>
.contact-phone
  display: grid
  grid-template-columns: 0.1fr 0.9fr
  position: relative
  .phone-input__selected
    border: none
    border-bottom: 1px solid $font-grey
    border-radius: 0
  .phone-input__field input
    border: none
    border-bottom: 1px solid $font-grey
    border-radius: 0
    background-color: transparent

.phone-input
  display: grid
  grid-template-columns: 0.15fr 0.85fr
  position: relative

  &__select
    cursor: pointer
    position: relative

  &__selected
    display: flex
    align-items: center
    justify-content: center
    border: 1px solid #ccc
    border-radius: 6px 0 0 6px
    border-right: 0
    height: 100%
    img
      @media (max-width: 768px)
        width: 14px
        height: 14px
    .arrow
      margin-left: 7px
      width: 10px
      height: 10px
      @media (max-width: 768px)
        width: 6px
        height: 6px

  &__dropdown
    position: absolute
    top: 110%
    left: 0
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    padding: 5px 0
    background-color: #fff
    border: 1px solid #ccc
    border-radius: 6px
    box-shadow: 0 4px 10px rgba(0,0,0,0.1)
    z-index: 10
    img
      @media (max-width: 768px)
        width: 14px
        height: 14px

  &__option
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    padding: 5px 0
    border-top: 0.5px dashed black
    &:first-child
      border-top: none
    &:last-child
      border-bottom: none
    &:hover
      background: $bgc-second

  &__field input
    flex-grow: 1
    padding: 1rem 0
    font-size: 1.25rem
    font-family: Geometria, sans-serif
    border: 1px solid #ccc
    border-radius: 0 6px 6px 0
    border-left: 0
    width: 100%
    &:focus
      outline: none
</style>
