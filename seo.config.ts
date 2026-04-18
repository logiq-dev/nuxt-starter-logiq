export const SITE_NAME = "LOGIQ Starter";
export const SITE_AUTHOR = "LOGIQ";
export const SITE_DEFAULT_LOCALE = "fr";
export const SITE_OG_LOCALE = "fr_BE";
export const SITE_DESCRIPTION =
  "Starter Nuxt moderne pour creer des sites vitrines performants, accessibles et prets pour la production.";
export const SITE_DEFAULT_OG_TITLE = "Starter Nuxt moderne et pret a lancer";
export const SITE_DEFAULT_OG_DESCRIPTION =
  "Base Nuxt moderne avec Tailwind CSS, dark mode, formulaire de contact et fondamentaux SEO deja en place.";
export const SITE_DEFAULT_OG_ALT = `${SITE_NAME} - apercu du site`;
export const SITE_URL =
  process.env.NUXT_SITE_URL ||
  (process.env.NODE_ENV === "production" ? "https://example.com" : "http://localhost:3000");
export const SITE_SOCIAL_LINKS = [
  "https://logiq.be",
  "https://github.com/logiq-dev/nuxt-starter-logiq",
];
