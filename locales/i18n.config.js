import en from "/public/locales/en.json";
import fr from "/public/locales/fr.json";
import ru from "/public/locales/ru.json";

export default {
  legacy: false, // используем Composition API
  locale: 'fr', // язык по умолчанию
  fallbackLocale: 'fr', // язык по умолчанию при отсутствии перевода
  messages: {
    en, fr, ru
  }, // оставляем пустым, т.к. используем langDir с внешними JSON-файлами
}