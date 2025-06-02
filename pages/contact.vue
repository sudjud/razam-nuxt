<template>
  <main>
    <p>{{ $t("menu.home") }} / {{ $t("menu.contact") }}</p>
    <h1>
      <span v-reveal class="wow reveal-bb reveal-visible">{{
        $t("contact.contactUs")
      }}</span
      ><span
        ><img data-not-lazy src="/images/contact-us/devider 2.png" alt=""
      /></span>
    </h1>
    <div class="image-wrapper">
      <img src="/images/contact-us/main.webp" alt="" />
    </div>
  </main>
  <section class="form">
    <p>{{ $t("contact.form.description") }}</p>
    <form @submit.prevent="submitForm">
      <h2 id="formContactLink">
        <span v-reveal class="wow reveal-bb">{{
          $t("contact.form.title")
        }}</span>
      </h2>

      <label>
        {{ $t("contact.form.nameLabel")
        }}<span>{{ $t("contact.form.required") }}</span>
      </label>
      <input type="text" v-model="form.name" required />

      <label>
        {{ $t("contact.form.emailLabel")
        }}<span>{{ $t("contact.form.required") }}</span>
      </label>
      <input type="email" v-model="form.email" required />

      <label>
        {{ $t("contact.form.phoneLabel")
        }}<span>{{ $t("contact.form.required") }}</span>
      </label>
      <!-- <input type="tel" v-model="form.phone" required /> -->
      <PhoneInputComponent :contactPage="true" v-model="form.phone" ref="phoneInput"/>

      <label>
        {{ $t("contact.form.messageLabel")
        }}<span>{{ $t("contact.form.required") }}</span>
      </label>
      <input v-model="form.message" required />

      <button type="submit">
        {{loading ? $t("search.loading") : $t("contact.form.submitButton")
        }}<span v-if="!loading"
          > <img data-not-lazy src="/images/contact-us/submit-arrow.svg" alt=""
        /></span>
      </button>
    </form>
  </section>
  <section class="info">
    <div class="image-wrapper">
      <img src="/images/contact-us/2.webp" alt="" />
    </div>
    <div class="content">
      <h2>
        <span v-reveal class="wow reveal-bb">{{
          $t("contact.info.titleFirst")
        }}</span>
        <span
          ><img data-not-lazy src="/images/contact-us/devider 2.png" alt="" /></span
        ><br />
        <span v-reveal class="wow reveal-bb">{{
          $t("contact.info.titleSecond")
        }}</span>
      </h2>
      <div class="info-wrapper">
        <div class="field">
          <p>Email</p>
          <h4>info@razam.fr</h4>
        </div>
        <div class="field">
          <p>{{ $t("footer.tel") }}</p>
          <h4>+33 6 64 36 12 20</h4>
        </div>
        <div class="field">
          <p>{{ $t("contact.info.locationLabel") }}</p>
          <h4 v-html="$t('contact.info.location')"></h4>
        </div>
        <div class="social-links">
          <a
            href="https://www.instagram.com/razam.design/profilecard/?igsh=MWx5ZTd0amUwZnMxbA=="
            aria-label="Instagram"
            target="_blank"
            class="wow animate__animated animate__backInDown"
            data-wow-delay="0.4s"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
          <a
            href="https://www.threads.net/@razam.design?igshid=NTc4MTIwNjQ2YQ=="
            aria-label="Threads"
            target="_blank"
            class="wow animate__animated animate__backInDown"
            data-wow-delay="0.4s"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"
              />
            </svg>
          </a>
          <a
            href="https://www.houzz.ru/pro/webuser-913531865"
            aria-label="Houzz"
            target="_blank"
            class="wow animate__animated animate__backInDown"
            data-wow-delay="0.4s"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  <p :class="{ submit: submitted }" class="success-message">
    {{ $t("calculator.success") }}
  </p>
</template>

<script setup>
import { ref } from "vue";
import { useSeo } from "../composables/useSeo";
import PhoneInputComponent from "../components/Tools/PhoneInputComponent.vue";

useSeo("contact");

const submitted = ref(false);
const loading = ref(false);
const phoneInput = ref(null);

const handleSubmit = () => {
  submitted.value = true;
  form.value = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  setTimeout(() => {
    submitted.value = false;
  }, 3000);
};

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const submitForm = async () => {
  const endpoint = "https://formspree.io/f/mrbkgpla";

  const payload = {
    name: form.value.name,
    phone: form.value.phone,
    email: form.value.email,
    message: form.value.message,
  };
  loading.value = true;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok) {
      handleSubmit();
      loading.value = false;
    } else {
      console.error("Ошибка при отправке формы: ", result);
      loading.value = false;
    }
  } catch (error) {
    console.error("Ошибка запроса: ", error);
    loading.value = false;
  }
};
</script>

<style lang="sass" scoped>
main
  +regpad
  padding-top: 10rem
  p
    margin-bottom: 1rem
  h1
    margin-bottom: 4rem
    @media (max-width: 992px)
      font-size: 6rem
    @media (max-width: 576px)
      font-size: 4rem
    span
      img
        width: 0.5em
        position: absolute
  div img
    max-width: 100%

section.form
  +regpad
  display: grid
  grid-template-columns: 4.5fr 1.5fr 6fr
  margin-top: 4rem
  form
    grid-column: 3
    h2
      @media (max-width: 1800px)
        font-size: 5rem
      @media (max-width: 992px)
        font-size: 4rem
      @media (max-width: 650px)
        font-size: 3.5rem
      @media (max-width: 500px)
        font-size: 2.5rem
      img
        margin-left: 5px

section.info
  +regpad
  margin-top: 20rem
  margin-bottom: 20rem
  display: grid
  grid-template-columns: 6fr 1fr 5fr
  @media (max-width: 768px)
    grid-template-columns: 5fr 0.5fr 6.5fr
  @media (max-width: 576px)
    margin-top: $mob-col-gap
    margin-bottom: $mob-col-gap
    grid-template-columns: 0 0 1fr
  .image-wrapper
    @media (max-width: 576px)
      display: none
    img
      max-width: 100%

  .content
    display: flex
    flex-direction: column
    justify-content: space-between
    grid-column: 3
    h2
      font-size: 6rem
      @media (max-width: 1600px)
        font-size: 5rem
      @media (max-width: 992px)
        font-size: 4rem
      img
        margin-left: 0.2em
        width: 0.5em
        position: absolute
    .info-wrapper
      .field
        border-bottom: 1px solid $font-grey
        padding-bottom: 19px
        margin-top: 10px

.fa-youtube
  margin-top: 0.8px

.social-links
  display: flex
  flex-direction: row
  gap: 25px
  margin-top: 35px

  a
    display: flex
    justify-content: center
    align-items: center
    width: 2rem
    height: 2rem
    background-color: $font-white
    border: 2px solid $font-white
    border-radius: 50%
    color: transparent
    text-decoration: none
    font-size: 18px
    transition: all 0.3s ease
    svg
      height: 70%
      fill: #93867D
      transition: color 0.3s ease
    &:hover
      background-color: transparent
      border-color: $font-grey
      svg
        fill: $font-grey


form
  display: flex
  flex-direction: column
  max-width: 850px
  label
    display: flex
    font-size: 1rem
    margin-top: 3rem
    font-family: Geometria, sans-serif
    @media (max-width: 1200px)
      margin-top: 2rem
    span
      color: red
  input, textarea
    padding: 10px
    border: none
    border-bottom: 1px solid $font-grey
    font-family: Geometria, sans-serif
    background-color: $bgc-main
    font-size: 1.5rem
    @media (max-width: 1200px)
      padding: 5px
    &:focus
      outline: none
  button
    margin-top: 3rem
    font-size: 1rem
    color: $font-black
    font-weight: 500
    max-width: 13rem
    padding: 1rem 0
    border-radius: 30px
    border: 1px solid $font-grey
    background-color: $bgc-main
    &:hover
      background-color: $bgc-second
      transform: scale(1.04)
    img
      width: 1em

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
</style>
