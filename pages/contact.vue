<template>
  <main>
    <p>{{ $t("menu.home") }} / {{ $t("menu.contact") }}</p>
    <h1>
      <span v-reveal class="wow reveal-bb reveal-visible">{{
        $t("contact.contactUs")
      }}</span
      ><span><img src="/images/contact-us/arrow.svg" alt="" /></span>
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
      <input type="tel" v-model="form.phone" required />

      <label>
        {{ $t("contact.form.messageLabel")
        }}<span>{{ $t("contact.form.required") }}</span>
      </label>
      <input v-model="form.message" required />

      <button type="submit">
        {{ $t("contact.form.submitButton")
        }}<span><img src="/images/contact-us/submit-arrow.svg" alt="" /></span>
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
        <span><img src="/images/contact-us/arrow.svg" alt="" /></span><br />
        <span v-reveal class="wow reveal-bb">{{
          $t("contact.info.titleSecond")
        }}</span>
      </h2>
      <div class="info-wrapper">
        <div class="field">
          <p>Email</p>
          <h4>contact@razam.fr</h4>
        </div>
        <div class="field">
          <p>{{ $t("footer.tel") }}</p>
          <h4>+33 7 88 77 88 66</h4>
        </div>
        <div class="field">
          <p>{{ $t("contact.info.locationLabel") }}</p>
          <h4 v-html="$t('contact.info.location')"></h4>
        </div>
        <div class="social-links">
          <a
            href="#"
            aria-label="Facebook"
            target="_blank"
            class="wow animate__animated animate__backInDown"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
              />
            </svg>
          </a>
          <a
            href="#"
            aria-label="YouTube"
            target="_blank"
            class="wow animate__animated animate__backInDown"
            data-wow-delay="0.1s"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
              />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            target="_blank"
            class="wow animate__animated animate__backInDown"
            data-wow-delay="0.2s"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
              />
            </svg>
          </a>
          <a
            href="#"
            aria-label="X"
            target="_blank"
            class="wow animate__animated animate__backInDown"
            data-wow-delay="0.3s"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              />
            </svg>
          </a>
          <a
            href="#"
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import SocialMedias from "../components/Tools/SocialMedias.vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const submitForm = () => {
  console.log("Форма отправлена", form.value);
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
        margin-left: 2rem
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
    button img
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
        width: 0.6em
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
    font-family: 'Inter', sans-serif
    @media (max-width: 1200px)
      margin-top: 2rem
    span
      color: red
  input, textarea
    padding: 10px
    border: none
    border-bottom: 1px solid $font-grey
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
    &:hover
      background: $bgc-second
    img
      width: 1em
</style>
