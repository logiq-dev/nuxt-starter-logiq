<script setup>
const previewItems = [
  "Header mobile et desktop déjà en place",
  "Base de tokens light/dark prête à étendre",
  "SEO, image, lint et composants réutilisables",
];
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-primary-bg text-foreground"
    aria-label="Section d'accueil"
  >
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute left-1/2 top-[-8rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-primary/18 blur-3xl"
      />
      <div
        class="absolute right-[-6rem] top-40 h-72 w-72 rounded-full bg-white/6 blur-3xl dark:bg-white/8"
      />
      <div
        class="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(15,23,43,0.04))] dark:bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02))]"
      />
    </div>

    <div
      class="mx-auto grid min-h-[calc(100svh-4rem)] max-w-360 items-center gap-14 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] "
    >
      <div class="max-w-4xl">

        <h1
          class="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
        >
          Une base Nuxt, rapide et vraiment prête pour lancer un site
          agence.
        </h1>

        <p
          class="mt-6 max-w-2xl text-base leading-8 text-black/72 sm:text-lg dark:text-white/72"
        >
          Conçois plus vite avec une structure propre, un thème light/dark,
          une stack moderne et une interface assez solide pour devenir ton vrai
          starter vitrine.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/logiq-dev/nuxt-starter-logiq"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            Commencer
          </a>

          <a
            href="https://github.com/logiq-dev/nuxt-starter-logiq"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/65 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white dark:border-white/12 dark:bg-white/6 dark:hover:bg-white/10"
            aria-label="Utiliser ce template (ouvre dans un nouvel onglet)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0 1 12 5.8c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0Z"
              />
            </svg>
            Utiliser ce template
          </a>
        </div>

      </div>

      <div class="relative lg:pl-6">
        <div
          class="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 p-5 shadow-[0_20px_80px_rgba(15,23,43,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span class="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span class="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <span
              class="rounded-full border border-black/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-black/55 dark:border-white/10 dark:text-white/55"
            >
              LOGIQ system
            </span>
          </div>

          <div class="mt-8 space-y-4">
            <div
              class="rounded-2xl border border-black/8 bg-primary px-5 py-5 text-white dark:border-white/10"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                Agency-ready
              </p>
              <p class="mt-3 text-2xl font-semibold tracking-tight">
                Un starter clair, élégant et assez souple pour tes prochains
                projets.
              </p>
            </div>

            <div
              class="grid gap-3 rounded-2xl border border-black/8 bg-black/[0.03] p-4 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div
                v-for="item in previewItems"
                :key="item"
                class="flex items-start gap-3 rounded-2xl border border-black/8 bg-white/75 px-4 py-3 dark:border-white/8 dark:bg-white/5"
              >
                <span
                  class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white"
                >
                  +
                </span>
                <p class="text-sm leading-6 text-black/70 dark:text-white/72">
                  {{ item }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="absolute -bottom-5 -left-3 rounded-2xl border border-black/10 bg-white/85 px-4 py-3 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-white/8"
        >
          <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/50 dark:text-white/50">
            Build faster
          </p>
          <p class="mt-1 text-sm font-medium text-foreground">
            Design, structure, contenu, puis itération.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
app/pages/index.vue
me
