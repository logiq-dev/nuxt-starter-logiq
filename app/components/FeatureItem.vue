<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: [Object, Function], required: true },
});
</script>

<template>
  <li
    class="group flex h-full gap-4 rounded-lg border border-border-soft bg-surface-strong p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-surface-strong hover:shadow-[0_12px_28px_rgba(15,23,43,0.06)]"
  >
    <div
      class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary/18"
    >
      <component :is="icon" class="h-5 w-5" />
    </div>

    <div class="min-w-0 flex-1 pt-1">
      <h3 class="text-xl font-semibold tracking-tight text-foreground">
        {{ title }}
      </h3>
      <p class="mt-3 text-sm leading-7 text-foreground/72">
        {{ description }}
      </p>
    </div>
  </li>
</template>
