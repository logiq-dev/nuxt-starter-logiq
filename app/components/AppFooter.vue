<script setup>
import { Facebook, Github, Instagram, Twitter } from "lucide-vue-next";

const year = new Date().getFullYear();

const footerGroups = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil", to: "/" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Ressources",
    links: [
      {
        label: "GitHub",
        to: "https://github.com/logiq-dev/nuxt-starter-logiq",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      { label: "Mentions légales", to: "/legal/mentions-legales" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", to: "#", icon: Instagram },
  { label: "Twitter", to: "#", icon: Twitter },
  { label: "Facebook", to: "#", icon: Facebook },
  {
    label: "GitHub",
    to: "https://github.com/logiq-dev/nuxt-starter-logiq",
    icon: Github,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
</script>

<template>
  <footer
    class="relative overflow-hidden border-t border-white/10 bg-primary-bg py-16 text-white/90"
  >
    <div class="mx-auto max-w-360 px-6">
      <div class="grid gap-12 text-center lg:grid-cols-12 lg:gap-8 lg:text-left">
        <div class="flex flex-col items-center lg:col-span-5 lg:items-start">
          <div class="flex items-center gap-3">
            <div
              class="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-blue-400 shadow-[0_0_20px_rgba(0,220,130,0.25)]"
            />
            <span class="text-xl font-bold tracking-tight text-white">
              LOGIQ<span class="text-primary">.</span>
            </span>
          </div>

          <p class="mt-6 max-w-md text-balance text-sm leading-relaxed text-white/50">
            Propulsez vos projets avec une architecture Nuxt 4 ultra-rapide.
            Pensé pour la performance, conçu pour l'élégance.
          </p>

          <div class="mt-8 w-full max-w-md">
            <div
              class="group relative flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 transition focus-within:border-primary/50"
            >
              <input
                type="email"
                placeholder="Votre email"
                class="w-full bg-transparent px-4 text-sm outline-none placeholder:text-white/30"
              >
              <button
                class="cursor-pointer rounded-full bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-primary hover:text-white"
              >
                Rejoindre
              </button>
            </div>
          </div>
        </div>

        <div class="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:pl-12">
          <div
            v-for="group in footerGroups"
            :key="group.title"
            class="text-center lg:text-left"
          >
            <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
              {{ group.title }}
            </h3>

            <ul class="mt-6 space-y-4">
              <li v-for="link in group.links" :key="link.label">
                <NuxtLink
                  :to="link.to"
                  :target="link.target"
                  :rel="link.rel"
                  class="group inline-flex items-center justify-center text-[15px] text-white/60 transition-colors hover:text-primary lg:justify-start"
                >
                  {{ link.label }}
                  <span
                    class="ml-2 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <svg
                      class="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-14 border-t border-white/10 pt-8">
        <div
          class="flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left"
        >
          <p class="text-xs text-white/40">
            © {{ year }} Logiq Starter. Tous droits réservés.
          </p>

          <div
            class="flex flex-col items-center gap-5 md:flex-row md:items-center md:gap-6"
          >
            <NuxtLink
              to="https://logiq.be"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
            >
              <span>Conçu par</span>
              <span
                class="font-semibold uppercase tracking-[0.08em] text-white/72 transition-colors group-hover:text-primary"
              >
                LOGIQ
              </span>
            </NuxtLink>

            <div
              class="flex flex-wrap items-center justify-center gap-3 md:border-l md:border-white/10 md:pl-6"
            >
              <NuxtLink
                v-for="social in socialLinks"
                :key="social.label"
                :to="social.to"
                :target="social.target"
                :rel="social.rel"
                :aria-label="social.label"
                class="inline-flex h-10 w-10 items-center justify-center rounded border border-white/10 text-white/55 transition hover:border-white/20 hover:text-primary"
              >
                <component :is="social.icon" class="h-4 w-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
