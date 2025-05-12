import en from "../public/locales/en.json.mjs";
import fr from "../public/locales/fr.json.mjs";
import ru from "../public/locales/ru.json.mjs";
const i18n_config = {
  legacy: false,
  // используем Composition API
  locale: "fr",
  // язык по умолчанию
  fallbackLocale: "fr",
  // язык по умолчанию при отсутствии перевода
  messages: {
    en,
    fr,
    ru
  }
  // оставляем пустым, т.к. используем langDir с внешними JSON-файлами
};
export {
  i18n_config as default
};
//# sourceMappingURL=i18n.config.mjs.map
