import { d as defineEventHandler, g as getQuery } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const blog$1 = [
  {
    previewImg: "/images/blog/previews/lights.webp",
    category: "blog.articles.categories.architecture",
    name: "blog.articles.lights.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "lights",
    tags: [
      "blog.articles.tags.interiorLights",
      "blog.articles.tags.lightDesign",
      "blog.articles.tags.homeAtmosphere",
      "blog.articles.tags.lightZonation",
      "blog.articles.tags.lightStyles",
      "blog.articles.tags.lightIdeas",
      "blog.articles.tags.lightTrands"
    ]
  },
  {
    previewImg: "/images/blog/previews/ideas.webp",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.ideas.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "ideas"
  },
  {
    previewImg: "/images/blog/previews/trends.webp",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.trends.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "trends"
  },
  {
    previewImg: "/images/blog/previews/materials.webp",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.materials.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "materials"
  },
  {
    previewImg: "/images/blog/previews/bedroom.webp",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.bedroom.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "bedroom"
  },
  {
    previewImg: "/images/blog/previews/minimalism.webp",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.minimalism.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "minimalism"
  },
  {
    previewImg: "/images/blog/previews/minimalism.webp",
    category: "blog.articles.categories.interiorDesign",
    name: "blog.articles.minimalism.name",
    by: "Razam",
    date: "01.05.2023",
    slug: "minimalism"
  }
];

const blog = defineEventHandler((event) => {
  const query = getQuery(event);
  if (query.slug) {
    const article = blog$1.find((article2) => article2.slug === query.slug);
    return article || { error: "Article not found" };
  }
  return blog$1;
});

export { blog as default };
//# sourceMappingURL=blog.mjs.map
