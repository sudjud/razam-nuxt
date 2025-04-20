// server/api/google-reviews.js
export default defineEventHandler(async (event) => {
  try {
    const placeId = 'ChIJRQdDb0wrzBIRKb7ZLnza12w';
    const apiKey = 'AIzaSyA2Dllqs5WsVvkd50dQ6BxXaHEPHU13N10';

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total,name&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Google API error:', data);
      throw createError({ statusCode: 500, statusMessage: 'Ошибка при получении отзывов' });
    }

    return {
      name: data.result.name,
      rating: data.result.rating,
      total: data.result.user_ratings_total,
      reviews: data.result.reviews,
    };
  } catch (e) {
    console.error('API ошибка:', e);
    throw createError({ statusCode: 500, statusMessage: 'Внутренняя ошибка сервера' });
  }
});
