<template>
  <section
    class="bg-primary-bg px-6 py-20 text-foreground transition-colors"
    aria-label="Appel &agrave; l'action"
  >
    <div class="mx-auto max-w-6xl">
      <div
        class="rounded-[2rem] border border-border-soft bg-surface-strong px-8 py-14 text-center shadow-[0_18px_56px_rgba(15,23,42,0.08)] transition-colors dark:shadow-[0_18px_56px_rgba(0,0,0,0.18)] sm:px-12"
      >
        <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Pr&ecirc;t &agrave; d&eacute;marrer votre prochain projet Nuxt ?
        </h2>

        <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-foreground/72">
          Une base Nuxt moderne, performante et pr&ecirc;te pour la production.
          Gagnez du temps et concentrez-vous sur l&rsquo;essentiel.
        </p>

        <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-hover"
          >
            Contactez-nous
          </NuxtLink>

          <a
            href="https://github.com/logiq-dev/nuxt-starter-logiq"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-md border border-border-soft bg-surface-muted px-6 py-3 font-medium text-foreground shadow-sm transition hover:bg-surface hover:shadow-md"
            aria-label="Voir sur GitHub (ouvre dans un nouvel onglet)"
          >
            Voir sur GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
