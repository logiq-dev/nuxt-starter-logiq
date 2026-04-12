<script setup>
import {
  ShieldCheck,
  SunMoon,
  Image,
  LayoutGrid,
  Code,
  TrendingUp,
} from "lucide-vue-next";

const features = [
  {
    title: "Qualité de code intégrée (EsLint)",
    description:
      "ESLint est intégré comme module Nuxt afin de garantir des bonnes pratiques strictes et un code fiable dès le départ.",
    icon: ShieldCheck,
  },
  {
    title: "Mode sombre intégré",
    description:
      "Gestion native du mode clair et sombre grâce à Nuxt Color Mode et des variables CSS, pour une expérience facilement personnalisable.",
    icon: SunMoon,
  },
  {
    title: "Images optimisées Nuxt Image",
    description:
      "Nuxt Image est préconfiguré pour fournir des images responsives, performantes et optimisées pour le référencement.",
    icon: Image,
  },
  {
    title: "Tailwind CSS prêt à l’emploi",
    description:
      "Tailwind CSS est configuré avec une base propre et évolutive pour créer rapidement des interfaces modernes et cohérentes.",
    icon: LayoutGrid,
  },
  {
    title: "Expérience développeur",
    description:
      "Imports automatiques, rechargement à chaud et une excellente expérience de développement dès la première configuration.",
    icon: Code,
  },
  {
    title: "Conçu pour évoluer",
    description:
      "Une architecture pensée pour évoluer avec votre projet, intégrant le SEO, la gestion des erreurs et les bonnes pratiques de sécurité.",
    icon: TrendingUp,
  },
];
</script>

<template>
  <section class="w-full bg-primary-bg py-24" aria-label="Fonctionnalités">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Titre -->
      <header class="mx-auto max-w-3xl text-center">
        <h2
          class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Tout ce dont vous avez besoin pour créer des applications Nuxt
          modernes
        </h2>

        <p class="mt-4 text-foreground/70 font-medium">
          Commencez par des bases solides. Ce modèle inclut tous les éléments
          essentiels pour créer des applications prêtes pour la production.
        </p>
      </header>

      <!-- Grille -->
      <div class="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureItem
          v-for="feature in features"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        />
      </div>
    </div>
  </section>
</template>
