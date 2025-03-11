import blog from "../data/blog";

export default defineEventHandler((event) => {
  const query = getQuery(event);

  if (query.slug) {
    const article = blog.find((article) => article.slug === query.slug);
    return article || { error: "Article not found" };
  }

  return blog;
});
