<script setup>
import Moon from "lucide-vue-next/dist/esm/icons/moon.js";
import Sun from "lucide-vue-next/dist/esm/icons/sun.js";

const colorMode = useColorMode();

const toggleColorMode = () => {
  const nextMode = colorMode.value === "dark" ? "light" : "dark";
  colorMode.preference = nextMode;
};
</script>

<template>
  <button
    type="button"
    class="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-black/3 text-foreground shadow-sm backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-black/3 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 cursor-pointer"
    aria-label="Basculer le theme"
    title="Basculer le theme"
    @click="toggleColorMode"
  >
    <span class="sr-only">Basculer le theme</span>
    <Sun
      class="h-4.5 w-4.5 text-amber-500 dark:hidden"
      aria-hidden="true"
    />
    <Moon
      class="hidden h-4.5 w-4.5 text-sky-300 dark:block"
      aria-hidden="true"
    />
  </button>
</template>
