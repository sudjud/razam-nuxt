<template>
  <div v-if="reviews">
    <h2>Отзывы о {{ placeName }} (★ {{ rating }} / 5)</h2>
    <p>{{ total }} отзывов</p>

    <ul>
      <li v-for="review in reviews.slice(0, 3)" :key="review.time" class="review">
        <p><strong>{{ review.author_name }}</strong> (★ {{ review.rating }})</p>
        <p>{{ review.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/googleReviews')
const reviews = data.value?.reviews
const rating = data.value?.rating
const total = data.value?.total
const placeName = data.value?.name
</script>

<style scoped>
.review {
  margin-bottom: 1.5em;
  padding-bottom: 1em;
  border-bottom: 1px solid #ccc;
}
</style>
