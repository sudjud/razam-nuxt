import ru from "../../locales/ru";
import en from "../../locales/en";
import fr from "../../locales/fr";
import projects from "~/server/data/projects";
import blog from "~/server/data/blog";

const translations = { ru, en, fr };

// Функция получения перевода
const getTranslation = (key, lang) => {
  return key.split('.').reduce((obj, part) => obj?.[part], translations[lang]) || key;
};

// Функция поиска по статьям и проектам
export default defineEventHandler((event) => {
  const query = getQuery(event);
  const lang = query.lang || "ru"; // Язык запроса (по умолчанию "ru")
  const keyword = query.q?.toLowerCase().trim(); // Поисковый запрос

  if (!keyword) {
    return { error: "No search query provided" };
  }

  // 🔍 Поиск в blog
  const matchedArticles = blog.filter(article => {
    const translatedName = getTranslation(article.name, lang).toLowerCase();
    const translatedCategory = getTranslation(article.category, lang).toLowerCase();
    
    return translatedName.includes(keyword) || translatedCategory.includes(keyword);
  }).map(article => ({
    ...article,
    name: getTranslation(article.name, lang), // Переведенное название
    category: getTranslation(article.category, lang) // Переведенная категория
  }));

  // 🔍 Поиск в projects
  const matchedProjects = projects.filter(project => {
    const translatedCategory = getTranslation(project.category, lang).toLowerCase();
    const translatedType = getTranslation(project.type, lang).toLowerCase();
    
    return (
      project.name.toLowerCase().includes(keyword) || // Оригинальное название
      translatedCategory.includes(keyword) || // Переведенная категория
      translatedType.includes(keyword) // Переведенный тип
    );
  }).map(project => ({
    ...project,
    category: getTranslation(project.category, lang), // Переведенная категория
    type: getTranslation(project.type, lang) // Переведенный тип
  }));

  return {
    articles: matchedArticles,
    projects: matchedProjects,
  };
});
