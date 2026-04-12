<script setup>
const year = new Date().getFullYear();

const openSections = ref({
  produit: false,
  ressources: false,
});

const footerGroups = [
  {
    key: "produit",
    title: "Produit",
    links: [
      { label: "Fonctionnalités", to: "#" },
      { label: "Solutions", to: "#" },
      { label: "Tarifs", to: "#" },
    ],
  },
  {
    key: "ressources",
    title: "Ressources",
    links: [
      { label: "Documentation", to: "#" },
      { label: "GitHub", to: "https://github.com/", target: "_blank" },
      { label: "Mentions légales", to: "/legal" },
    ],
  },
];

const toggleSection = (section) => {
  openSections.value[section] = !openSections.value[section];
};
</script>

<template>
  <footer class="relative overflow-hidden border-t border-white/10 bg-primary-bg py-16 text-white/90">
    <div class="relative mx-auto max-w-7xl px-6">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
        
        <div class="flex flex-col lg:col-span-5">
          <div class="flex items-center gap-3">
            <div class="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-blue-400 shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]" />
            <span class="text-xl font-bold tracking-tight text-white">LOGIQ<span class="text-primary">.</span></span>
          </div>
          
          <p class="mt-6 max-w-sm text-balance text-sm leading-relaxed text-white/50">
            Propulsez vos projets avec une architecture Nuxt 4 ultra-rapide. 
            Pensé pour la performance, conçu pour l'élégance.
          </p>

          <div class="mt-8 max-w-sm">
            <div class="group relative flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 transition-focus-within:border-primary/50">
              <input 
                type="email" 
                placeholder="Votre email" 
                class="w-full bg-transparent px-4 text-sm outline-none placeholder:text-white/30"
              >
              <button class="rounded-full bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-primary hover:text-white cursor-pointer">
                Rejoindre
              </button>
            </div>
          </div>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:pl-12">
          <div v-for="group in footerGroups" :key="group.title">
            <button
              type="button"
              class="flex w-full items-center justify-between text-left text-xs font-bold uppercase tracking-[0.2em] text-white/30 md:pointer-events-none md:cursor-default"
              :aria-expanded="openSections[group.key]"
              :aria-controls="`${group.key}-links`"
              @click="toggleSection(group.key)"
            >
              <span>{{ group.title }}</span>
              <span
                class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
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

            <div
              :id="`${group.key}-links`"
              class="grid overflow-hidden transition-all duration-300 ease-in-out md:mt-6 md:block"
              :class="
                openSections[group.key]
                  ? 'mt-6 grid-rows-[1fr]'
                  : 'grid-rows-[0fr] md:grid-rows-[1fr]'
              "
            >
              <ul class="min-h-0 space-y-4">
                <li v-for="link in group.links" :key="link.label">
                  <NuxtLink
                    :to="link.to"
                    :target="link.target"
                    class="group flex items-center text-[15px] text-white/60 transition-colors hover:text-primary"
                  >
                    {{ link.label }}
                    <span class="ml-2 opacity-0 transition-all -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100">
                      <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
        <p>© {{ year }} Logiq Starter. Tous droits réservés.</p>
        
        <div class="mt-4 flex items-center gap-6 md:mt-0">
          <NuxtLink
            to="https://logiq.be"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 text-white/55 transition-colors hover:text-white"
           >
  <span>Conçu par</span>
  <span
    class="font-semibold uppercase tracking-[0.08em] text-white/72 transition-colors group-hover:text-primary"
  >
    LOGIQ
  </span>
</NuxtLink>
          <div class="flex gap-4 border-l border-white/10 pl-6">
            <a href="#" class="hover:text-primary transition-colors">Twitter</a>
            <a href="#" class="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
