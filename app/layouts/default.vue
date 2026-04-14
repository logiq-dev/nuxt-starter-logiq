<script setup>

</script>

<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-primary-bg text-foreground transition-colors">
    <AppHeader />
    <!-- Main content -->
    <main class="flex-1 w-full">
      <slot />
    </main>
    <CtaSection />
    <AppFooterAccordion />
  </div>
</template>
