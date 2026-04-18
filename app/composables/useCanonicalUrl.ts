const ABSOLUTE_URL_PATTERN = /^https?:\/\//i;

const normalizeCanonicalPath = (path: string) => {
  const withoutHash = path.split("#", 1)[0] ?? "";
  const withoutQuery = withoutHash.split("?", 1)[0] ?? "";

  if (!withoutQuery) {
    return "/";
  }

  return withoutQuery.startsWith("/") ? withoutQuery : `/${withoutQuery}`;
};

export const useCanonicalUrl = (path?: string) => {
  const route = useRoute();
  const site = useSiteConfig();

  return computed(() => {
    const targetPath = path || route.path || "/";

    if (ABSOLUTE_URL_PATTERN.test(targetPath)) {
      return targetPath;
    }

    const baseUrl = site.url || "http://localhost:3000";

    return new URL(normalizeCanonicalPath(targetPath), `${baseUrl.replace(/\/$/, "")}/`).toString();
  });
};
