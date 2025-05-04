<template>
  <NuxtLayout>
    <div class="error-page">
      <div class="text">
        <h1>{{ error.statusCode }}</h1>
        <p>{{ error.message }}</p>
      </div>
      <NuxtLink :to="localePath('/')">← {{ $t('menu.home') }}</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script setup>
const localePath = useLocalePath()
defineProps({
  error: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="sass" scoped>
.error-page
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  .text
    display: flex
    align-items: flex-end
</style>
