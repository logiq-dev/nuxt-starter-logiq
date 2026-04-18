import {
  SITE_DEFAULT_OG_ALT,
  SITE_DEFAULT_OG_DESCRIPTION,
  SITE_DEFAULT_OG_TITLE,
  SITE_NAME,
} from "~~/seo.config";

type DefaultOgImageOptions = {
  title?: string;
  description?: string;
  path?: string;
  alt?: string;
  eyebrow?: string;
};

const formatPathLabel = (path: string) => {
  if (!path || path === "/") {
    return "Accueil";
  }

  return path.replace(/^\//, "").split("/").join(" / ");
};

export const useDefaultOgImage = (options: DefaultOgImageOptions = {}) => {
  const route = useRoute();
  const site = useSiteConfig();

  const resolvedTitle = options.title || SITE_DEFAULT_OG_TITLE;
  const resolvedDescription =
    options.description || site.description || SITE_DEFAULT_OG_DESCRIPTION;
  const resolvedPath = options.path || route.path || "/";
  const resolvedSiteName = site.name || SITE_NAME;

  if (import.meta.server) {
    defineOgImage(
      "Default.satori",
      {
        eyebrow: options.eyebrow || "Nuxt SEO Ready",
        siteName: resolvedSiteName,
        title: resolvedTitle,
        description: resolvedDescription,
        pathLabel: formatPathLabel(resolvedPath),
      },
      {
        alt: options.alt || SITE_DEFAULT_OG_ALT,
      },
    );
  }
};
