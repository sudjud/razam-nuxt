import projects from "../server/data/projects.mjs";
import articles from "../server/data/blog.mjs";
function isI18nKey(value) {
  return typeof value === "string" && value.includes(".");
}
function localize(value, t, locale) {
  if (isI18nKey(value)) {
    return t(value, locale);
  }
  return value;
}
function searchContent(query, locale, t) {
  if (!query.trim()) return [];
  const q = query.trim().toLowerCase();
  const results = [];
  for (const project of projects) {
    const keysToCheck = [
      project.name,
      project.category,
      project.type,
      project.workingTime,
      project.client,
      project.dislocation,
      project.desc,
      ...(project.images || []).map((img) => img.name)
    ];
    const projectMatches = keysToCheck.some((key) => {
      const translated = localize(key, t, locale).toLowerCase();
      return translated.includes(q);
    });
    if (projectMatches) {
      results.push({
        type: "project",
        slug: project.slug,
        title: project.name,
        preview: project.preview
      });
    }
  }
  for (const article of articles) {
    const tagKeys = Array.isArray(article.tags) ? article.tags : [];
    const keysToCheck = [article.name, article.category, ...tagKeys];
    const articleMatches = keysToCheck.some((key) => {
      const translated = localize(key, t, locale).toLowerCase();
      return translated.includes(q);
    });
    if (articleMatches) {
      results.push({
        type: "article",
        slug: article.slug,
        title: article.name,
        previewImg: article.previewImg
      });
    }
  }
  return results;
}
export {
  searchContent
};
//# sourceMappingURL=search.mjs.map
