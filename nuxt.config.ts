/// <reference types="node" />

import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxtjs/color-mode"],

  vite: {
    plugins: [tailwindcss()],
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
