import {
  SITE_DEFAULT_OG_DESCRIPTION,
  SITE_DEFAULT_OG_TITLE,
  SITE_OG_LOCALE,
} from "~~/seo.config";

type PageSeoOptions = {
  title?: string;
  description?: string;
  socialDescription?: string;
  path?: string;
  keywords?: string[];
  imageAlt?: string;
  noindex?: boolean;
  type?: "website" | "article";
  disableOgImage?: boolean;
};

export const usePageSeo = (options: PageSeoOptions = {}) => {
  const site = useSiteConfig();
  const canonicalUrl = useCanonicalUrl(options.path);

  const resolvedTitle = options.title || site.name || SITE_DEFAULT_OG_TITLE;
  const resolvedDescription =
    options.description || site.description || SITE_DEFAULT_OG_DESCRIPTION;
  const resolvedSocialDescription = options.socialDescription || resolvedDescription;

  useSeoMeta({
    title: options.title,
    description: resolvedDescription,
    keywords: options.keywords?.join(", "),
    ogTitle: resolvedTitle,
    ogDescription: resolvedSocialDescription,
    ogType: options.type || "website",
    ogLocale: SITE_OG_LOCALE,
    ogSiteName: site.name,
    ogUrl: canonicalUrl,
    twitterCard: "summary_large_image",
    twitterTitle: resolvedTitle,
    twitterDescription: resolvedSocialDescription,
  });

  useHead({
    link: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
    ],
  });

  if (options.noindex) {
    useRobotsRule({ noindex: true, nofollow: true });
  }

  if (!options.disableOgImage) {
    useDefaultOgImage({
      title: resolvedTitle,
      description: resolvedSocialDescription,
      path: options.path,
      alt: options.imageAlt,
    });
  }
};
