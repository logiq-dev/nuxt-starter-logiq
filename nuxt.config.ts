/// <reference types="node" />

import { defineOrganization } from "nuxt-schema-org/schema";
import tailwindcss from "@tailwindcss/vite";
import {
  SITE_AUTHOR,
  SITE_DEFAULT_LOCALE,
  SITE_DEFAULT_OG_ALT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SOCIAL_LINKS,
  SITE_URL,
} from "./seo.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  site: {
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    defaultLocale: SITE_DEFAULT_LOCALE,
  },

  app: {
    head: {
      titleTemplate: "%s %separator %siteName",
    },
  },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxtjs/color-mode", "@nuxtjs/seo"],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "lucide-vue-next/dist/esm/icons/arrow-right.js",
        "lucide-vue-next/dist/esm/icons/circle-check.js",
        "lucide-vue-next/dist/esm/icons/circle-x.js",
        "lucide-vue-next/dist/esm/icons/code.js",
        "lucide-vue-next/dist/esm/icons/facebook.js",
        "lucide-vue-next/dist/esm/icons/github.js",
        "lucide-vue-next/dist/esm/icons/image.js",
        "lucide-vue-next/dist/esm/icons/instagram.js",
        "lucide-vue-next/dist/esm/icons/layout-grid.js",
        "lucide-vue-next/dist/esm/icons/linkedin.js",
        "lucide-vue-next/dist/esm/icons/locate-fixed.js",
        "lucide-vue-next/dist/esm/icons/mail.js",
        "lucide-vue-next/dist/esm/icons/moon.js",
        "lucide-vue-next/dist/esm/icons/send.js",
        "lucide-vue-next/dist/esm/icons/shield-check.js",
        "lucide-vue-next/dist/esm/icons/sun.js",
        "lucide-vue-next/dist/esm/icons/sun-moon.js",
        "lucide-vue-next/dist/esm/icons/trending-up.js",
        "lucide-vue-next/dist/esm/icons/twitter.js",
        "lucide-vue-next/dist/esm/icons/x.js",
      ],
    },
  },

  seo: {
    meta: {
      applicationName: SITE_NAME,
      author: SITE_AUTHOR,
      twitterCard: "summary_large_image",
    },
  },

  ogImage: {
    defaults: {
      width: 1200,
      height: 630,
      alt: SITE_DEFAULT_OG_ALT,
    },
    cacheMaxAgeSeconds: 60 * 60 * 24 * 7,
  },

  schemaOrg: {
    identity: defineOrganization({
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      logo: "/images/logo/logo-light-nuxt.svg",
      sameAs: SITE_SOCIAL_LINKS,
    }),
  },

  linkChecker: {
    failOnError: false,
    excludeLinks: [/^#.*$/, /^mailto:/, /^tel:/],
  },

  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
    storageKey: "color-mode",
  },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    contactFromEmail: process.env.CONTACT_FROM_EMAIL,
    contactToEmail: process.env.CONTACT_TO_EMAIL,
    turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY,
    public: {
      turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
    },
  },
});
