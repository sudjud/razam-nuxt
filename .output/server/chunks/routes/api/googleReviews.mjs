import { d as defineEventHandler, c as createError } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const googleReviews = defineEventHandler(async (event) => {
  try {
    const placeId = "ChIJRQdDb0wrzBIRKb7ZLnza12w";
    const apiKey = "AIzaSyA2Dllqs5WsVvkd50dQ6BxXaHEPHU13N10";
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total,name&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.status !== "OK") {
      console.error("Google API error:", data);
      throw createError({ statusCode: 500, statusMessage: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043E\u0442\u0437\u044B\u0432\u043E\u0432" });
    }
    return {
      name: data.result.name,
      rating: data.result.rating,
      total: data.result.user_ratings_total,
      reviews: data.result.reviews
    };
  } catch (e) {
    console.error("API \u043E\u0448\u0438\u0431\u043A\u0430:", e);
    throw createError({ statusCode: 500, statusMessage: "\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430" });
  }
});

export { googleReviews as default };
//# sourceMappingURL=googleReviews.mjs.map
