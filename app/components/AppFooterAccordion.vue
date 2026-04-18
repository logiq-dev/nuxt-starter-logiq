<script setup>
import Facebook from "lucide-vue-next/dist/esm/icons/facebook.js";
import Github from "lucide-vue-next/dist/esm/icons/github.js";
import Instagram from "lucide-vue-next/dist/esm/icons/instagram.js";
import Twitter from "lucide-vue-next/dist/esm/icons/twitter.js";

const year = new Date().getFullYear();
const route = useRoute();

const openSections = ref({
  navigation: false,
  ressources: false,
});

const footerGroups = [
  {
    key: "navigation",
    title: "Navigation",
    links: [
      { label: "Accueil", to: "/" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    key: "ressources",
    title: "Ressources",
    links: [
      {
        label: "GitHub",
        to: "https://github.com/logiq-dev/nuxt-starter-logiq",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      { label: "Mentions l\u00E9gales", to: "/legal/mentions-legales" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram",
    to: "https://github.com/logiq-dev/nuxt-starter-logiq",
    icon: Instagram,
    target: "_blank",
    rel: "noopener noreferrer" 
  },
    
  { 
   label: "Twitter",
   to: "https://github.com/logiq-dev/nuxt-starter-logiq", 
   icon: Twitter,
   target: "_blank", 
   rel: "noopener noreferrer" 
  },

  { label: "Facebook", 
    to: "https://github.com/logiq-dev/nuxt-starter-logiq", 
    icon: Facebook,
    target: "_blank",
    rel: "noopener noreferrer" 
  },
  
  {
    label: "GitHub",
    to: "https://github.com/logiq-dev/nuxt-starter-logiq",
    icon: Github,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const isCurrentPage = (path) => path.startsWith("/") && route.path === path;
const isActiveLink = (path) => path && path !== "#";

const toggleSection = (section) => {
  openSections.value[section] = !openSections.value[section];
};
</script>

<template>
  <footer
    class="relative overflow-hidden border-t border-border-soft bg-primary-bg py-16 text-foreground"
  >
    <div class="absolute inset-x-0 top-0 h-px bg-border-soft" />

    <div class="mx-auto max-w-360 px-6">
      <div class="grid gap-12 text-center lg:grid-cols-12 lg:gap-8 lg:text-left">
        <div class="flex flex-col items-center lg:col-span-5 lg:items-start">
          <div class="flex items-center gap-3">
            <div
              class="h-8 w-8 rounded-lg bg-linear-to-br from-primary to-cyan-400 shadow-[0_0_20px_rgba(0,220,130,0.18)]"
            />
            <span class="text-xl font-bold tracking-tight text-foreground">
              LOGIQ<span class="text-primary">.</span>
            </span>
          </div>

          <p class="mt-6 max-w-md text-balance text-sm leading-relaxed text-foreground/62">
            Propulsez vos projets avec une architecture Nuxt 4 ultra-rapide.
            Pens&eacute; pour la performance, con&ccedil;u pour l&rsquo;&eacute;l&eacute;gance.
          </p>

          <div class="mt-8 w-full max-w-md">
            <div
              class="group relative flex items-center rounded-full border border-border-soft bg-surface p-1 shadow-sm transition focus-within:border-primary/50 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-foreground"
            >
              <label for="footer-accordion-newsletter-email" class="sr-only">
                Votre email
              </label>
              <input
                id="footer-accordion-newsletter-email"
                name="newsletterEmail"
                type="email"
                autocomplete="email"
                placeholder="Votre email"
                class="w-full bg-transparent px-4 text-sm text-foreground outline-none placeholder:text-foreground/35"
              >
              <button
                type="button"
                class="focus-ring cursor-pointer rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition hover:bg-primary-hover"
              >
                Rejoindre
              </button>
            </div>
          </div>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:pl-12">
          <div
            v-for="group in footerGroups"
            :key="group.title"
            class="text-center lg:text-left"
          >
            <div class="md:hidden">
              <h3>
                <button
                  type="button"
                  class="focus-ring flex w-full items-center justify-center gap-4 rounded-md text-center text-xs font-bold uppercase tracking-[0.2em] text-foreground/68 lg:justify-start"
                  :aria-expanded="openSections[group.key]"
                  :aria-controls="`${group.key}-links-mobile`"
                  @click="toggleSection(group.key)"
                >
                  <span>{{ group.title }}</span>
                  <span
                    class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border-soft bg-surface"
                  >
                    <svg
                      class="h-4 w-4 transition-transform duration-200"
                      :class="openSections[group.key] ? 'rotate-45' : 'rotate-0'"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 5v14M5 12h14"
                      />
                    </svg>
                  </span>
                </button>
              </h3>

              <div
                :id="`${group.key}-links-mobile`"
                class="grid overflow-hidden transition-all duration-300 ease-in-out"
                :class="openSections[group.key] ? 'mt-6 grid-rows-[1fr]' : 'grid-rows-[0fr]'"
              >
                <ul class="min-h-0 space-y-4">
                  <li v-for="link in group.links" :key="link.label">
                    <NuxtLink
                      :to="link.to"
                      :target="link.target"
                      :rel="link.rel"
                      :aria-current="isCurrentPage(link.to) ? 'page' : undefined"
                      class="focus-ring group inline-flex items-center justify-center rounded-md text-[15px] text-foreground/68 transition-colors hover:text-foreground"
                    >
                      {{ link.label }}
                      <span
                        class="ml-2 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden="true"
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

            <div class="hidden md:block">
              <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-foreground/68">
                {{ group.title }}
              </h3>

              <ul class="mt-6 space-y-4">
                <li v-for="link in group.links" :key="link.label">
                  <NuxtLink
                    :to="link.to"
                    :target="link.target"
                    :rel="link.rel"
                    :aria-current="isCurrentPage(link.to) ? 'page' : undefined"
                    class="focus-ring group inline-flex items-center justify-center rounded-md text-[15px] text-foreground/68 transition-colors hover:text-foreground lg:justify-start"
                  >
                    {{ link.label }}
                    <span
                      class="ml-2 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden="true"
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
      </div>

      <div class="mt-14 border-t border-border-soft pt-8">
        <div
          class="flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left"
        >
          <p class="text-xs text-foreground/62">
            &copy; {{ year }} Logiq Starter. Tous droits r&eacute;serv&eacute;s.
          </p>

          <div
            class="flex flex-col items-center gap-5 md:flex-row md:items-center md:gap-6"
          >
            <NuxtLink
              to="https://logiq.be"
              target="_blank"
              rel="noopener noreferrer"
              class="focus-ring group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-foreground/62 transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground"
            >
              <span>Con&ccedil;u par</span>
              <span
                class="font-semibold uppercase tracking-[0.08em] text-foreground underline decoration-primary/0 underline-offset-4 transition-[text-decoration-color] duration-200 group-hover:decoration-primary"
              >
                LOGIQ
              </span>
            </NuxtLink>

            <div
              class="flex flex-wrap items-center justify-center gap-3 md:border-l md:border-border-soft md:pl-6"
            >
              <template v-for="social in socialLinks" :key="social.label">
                <NuxtLink
                  v-if="isActiveLink(social.to)"
                  :to="social.to"
                  :target="social.target"
                  :rel="social.rel"
                  :aria-label="social.label"
                  class="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-border-soft bg-surface text-foreground/68 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary "
                >
                  <component :is="social.icon" class="h-4 w-4" aria-hidden="true" />
                </NuxtLink>
                <span
                  v-else
                  aria-hidden="true"
                  class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border-soft bg-surface text-foreground/35 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/70 hover:text-primary"
                >
                  <component :is="social.icon" class="h-4 w-4" aria-hidden="true" />
                </span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
