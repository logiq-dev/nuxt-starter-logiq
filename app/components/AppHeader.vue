<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import ColorModeToggle from "./ColorModeToggle.vue";

const navigationLinks = [
  { label: "Accueil", to: "/" },
  { label: "Contact", to: "/contact" },
];

const colorMode = useColorMode();
const isMenuOpen = ref(false);
const isDark = computed(() => colorMode.value === "dark");

const logoSrc = computed(() =>
  isDark.value ? "/images/logo/logo-dark-nuxt.svg" : "/images/logo/logo-light-nuxt.svg",
);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleKeydown = (event) => {
  if (event.key === "Escape" && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-border-soft bg-primary-bg text-foreground transition-colors"
  >
    <nav
      class="mx-auto flex h-16 max-w-360 items-center justify-between px-4 sm:px-6 lg:px-8"
      aria-label="Navigation principale"
    >
      <NuxtLink
        to="/"
        class="flex items-center gap-2"
        aria-label="Retour a l'accueil"
        @click="closeMenu"
      >
        <NuxtImg
          :src="logoSrc"
          alt="Logo Nom du site"
          class="h-7 w-auto"
          loading="eager"
          decoding="async"
        />
      </NuxtLink>

      <ul class="hidden items-center gap-8 font-semibold md:flex">
        <li v-for="link in navigationLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-foreground/72 transition-colors hover:text-foreground dark:text-foreground/80 dark:hover:text-foreground"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <ColorModeToggle />

        <NuxtLink
          to="/contact"
          class="hidden items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-hover sm:inline-flex"
        >
          Contact
        </NuxtLink>

        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-foreground transition-colors hover:bg-black/[0.06] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 md:hidden"
          :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          @click="toggleMenu"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="absolute left-0 right-0 top-16 border-t border-border-soft bg-primary-bg shadow-lg md:hidden"
        role="region"
        aria-label="Menu de navigation mobile"
      >
        <ul class="flex flex-col gap-2 px-4 py-4 text-sm font-medium">
          <li v-for="link in navigationLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="block py-2 text-foreground/72 transition-colors hover:text-foreground dark:text-foreground/80 dark:hover:text-foreground"
              @click="closeMenu"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
          <li class="pt-2">
            <NuxtLink
              to="/contact"
              class="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-hover"
              @click="closeMenu"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
