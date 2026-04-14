<script setup>

</script>

<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-primary-bg text-foreground transition-colors">
    <AppHeader />
    <!-- Main content -->
    <main id="main-content" tabindex="-1" class="flex-1 w-full focus:outline-none">
      <slot />
    </main>
    <CtaSection />
    <AppFooterAccordion />
  </div>
</template>
