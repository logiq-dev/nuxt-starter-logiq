import {
  SITE_DEFAULT_OG_ALT,
  SITE_DEFAULT_OG_IMAGE_PATH,
} from "~~/seo.config";

type DefaultOgImageOptions = {
  title?: string;
  description?: string;
  path?: string;
  alt?: string;
  eyebrow?: string;
};

export const useDefaultOgImage = (options: DefaultOgImageOptions = {}) => {
  const site = useSiteConfig();
  const imageUrl = computed(() => {
    const baseUrl = (site.url || "http://localhost:3000").replace(/\/$/, "");
    return new URL(SITE_DEFAULT_OG_IMAGE_PATH, `${baseUrl}/`).toString();
  });

  if (import.meta.server) {
    useSeoMeta({
      ogImage: imageUrl,
      ogImageSecureUrl: imageUrl,
      ogImageType: "image/jpeg",
      ogImageWidth: 1200,
      ogImageHeight: 630,
      ogImageAlt: options.alt || SITE_DEFAULT_OG_ALT,
      twitterImage: imageUrl,
      twitterImageAlt: options.alt || SITE_DEFAULT_OG_ALT,
    });
  }
};
