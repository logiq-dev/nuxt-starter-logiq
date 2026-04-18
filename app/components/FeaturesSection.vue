<script setup>
import Code from "lucide-vue-next/dist/esm/icons/code.js";
import Image from "lucide-vue-next/dist/esm/icons/image.js";
import LayoutGrid from "lucide-vue-next/dist/esm/icons/layout-grid.js";
import ShieldCheck from "lucide-vue-next/dist/esm/icons/shield-check.js";
import SunMoon from "lucide-vue-next/dist/esm/icons/sun-moon.js";
import TrendingUp from "lucide-vue-next/dist/esm/icons/trending-up.js";

const features = [
  {
    title: "Qualit\u00E9 de code int\u00E9gr\u00E9e",
    description:
      "ESLint est int\u00E9gr\u00E9 comme module Nuxt pour garder une base fiable et des bonnes pratiques d\u00E8s le d\u00E9part.",
    icon: ShieldCheck,
  },
  {
    title: "Mode clair et sombre int\u00E9gr\u00E9",
    description:
      "Nuxt Color Mode et les variables CSS sont d\u00E9j\u00E0 en place pour faire \u00E9voluer le th\u00E8me sans repartir de z\u00E9ro.",
    icon: SunMoon,
  },
  {
    title: "Images optimis\u00E9es avec Nuxt Image",
    description:
      "Le starter est pr\u00EAt pour servir des images responsives et propres, avec une base solide pour la performance.",
    icon: Image,
  },
  {
    title: "Tailwind CSS pr\u00EAt \u00E0 \u00E9tendre",
    description:
      "La structure visuelle est d\u00E9j\u00E0 organis\u00E9e pour construire vite une interface coh\u00E9rente et facile \u00E0 maintenir.",
    icon: LayoutGrid,
  },
  {
    title: "Exp\u00E9rience d\u00E9veloppeur fluide",
    description:
      "Imports automatiques, hot reload et composants r\u00E9utilisables acc\u00E9l\u00E8rent vraiment la mise en place du projet.",
    icon: Code,
  },
  {
    title: "Con\u00E7u pour \u00E9voluer",
    description:
      "La base est pens\u00E9e pour accueillir le SEO, les sections marketing et les futures pages sans tout refaire.",
    icon: TrendingUp,
  },
];

</script>

<template>
  <section
    class="relative isolate w-full overflow-hidden bg-primary-bg py-24 text-foreground"
    aria-label="Fonctionnalit&eacute;s"
  >
   

    <div class="mx-auto max-w-360 px-6">
      <header class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Tout ce qu'il faut pour lancer une base Nuxt moderne
        </h2>

        <p class="mt-4 font-medium text-foreground/70">
          Des fondations propres, un th&egrave;me coh&eacute;rent et des briques d&eacute;j&agrave; utiles
          pour construire plus vite sans sacrifier la lisibilit&eacute;.
        </p>
      </header>

      <ul class="mt-16 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureItem
          v-for="feature in features"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        />
      </ul>
    </div>
  </section>
</template>
