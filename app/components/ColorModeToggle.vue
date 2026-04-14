<script setup>
import { computed, onMounted, watch } from "vue";
import { Moon, Sun } from "lucide-vue-next";

const colorMode = useColorMode();

const isDark = computed(() => colorMode.value === "dark");

const buttonLabel = computed(() =>
  isDark.value ? "Activer le mode clair" : "Activer le mode sombre",
);

const syncDocumentTheme = (mode) => {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;

  root.classList.toggle("dark", mode === "dark");
  root.classList.toggle("light", mode === "light");
};

const toggleColorMode = () => {
  const nextMode = isDark.value ? "light" : "dark";

  colorMode.preference = nextMode;
  syncDocumentTheme(nextMode);
};

onMounted(() => {
  syncDocumentTheme(colorMode.value);
});

watch(
  () => colorMode.value,
  (mode) => {
    syncDocumentTheme(mode);
  },
);
</script>

<template>
  <ClientOnly>
    <button
      type="button"
      class="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-black/3 text-foreground shadow-sm backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-black/3 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 cursor-pointer"
      :aria-label="buttonLabel"
      :title="buttonLabel"
      @click="toggleColorMode"
    >
      <span class="sr-only">{{ buttonLabel }}</span>
      <Sun
        v-if="!isDark"
        class="h-4.5 w-4.5 text-amber-500"
        aria-hidden="true"
      />
      <Moon
        v-else
        class="h-4.5 w-4.5 text-sky-300"
        aria-hidden="true"
      />
    </button>
  </ClientOnly>
</template>
