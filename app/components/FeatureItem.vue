<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: [Object, Function], required: true },
})
</script>

<template>
  <div
    class="group flex gap-4 rounded-lg bg-gray-50 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-white/5 dark:hover:bg-white/10 cursor-pointer"
  >
    <!-- Icône -->
    <div
      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20 dark:bg-primary/20 dark:group-hover:bg-primary/30"
    >
      <component :is="icon" class="h-6 w-6" />
    </div>

    <!-- Texte -->
    <div>
      <h3 class="font-semibold text-foreground">
        {{ title }}
      </h3>
      <p class="mt-1 text-sm text-muted-foreground dark:text-gray-300">
        {{ description }}
      </p>
    </div>
  </div>
</template>
