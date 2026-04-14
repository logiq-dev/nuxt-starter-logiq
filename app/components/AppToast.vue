<script setup lang="ts">
import { CheckCircle2, X, XCircle } from "lucide-vue-next";

const { toasts, remove } = useToast();

const toastStyles: Record<"success" | "error", string> = {
  success: "border-emerald-400/20 bg-[#10253a]/95 text-white",
  error: "border-red-400/20 bg-[#2a1723]/95 text-white",
};

const iconStyles: Record<"success" | "error", string> = {
  success: "bg-emerald-400/12 text-emerald-300",
  error: "bg-red-400/12 text-red-300",
};
</script>

<template>
  <Teleport to="body">
    <div
      class="pointer-events-none fixed inset-x-0 top-4 z-[100] flex justify-center px-4 sm:top-6 sm:justify-end sm:px-6"
      aria-live="polite"
      aria-atomic="true"
    >
      <TransitionGroup
        tag="div"
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="translate-y-3 opacity-0 sm:translate-x-4 sm:translate-y-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-2 opacity-0 sm:translate-x-4 sm:translate-y-0"
        class="flex w-full max-w-sm flex-col gap-3"
      >
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="pointer-events-auto overflow-hidden rounded-2xl border shadow-[0_22px_60px_rgba(0,0,0,0.28)] backdrop-blur"
          :class="toastStyles[toast.variant]"
          role="status"
        >
          <div class="flex items-start gap-3 p-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
              :class="iconStyles[toast.variant]"
            >
              <CheckCircle2 v-if="toast.variant === 'success'" class="h-5 w-5" />
              <XCircle v-else class="h-5 w-5" />
            </div>

            <div class="min-w-0 flex-1">
              <p class="text-sm font-semibold">
                {{ toast.title }}
              </p>
              <p v-if="toast.message" class="mt-1 text-sm leading-6 text-white/70">
                {{ toast.message }}
              </p>
            </div>

            <button
              type="button"
              class="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white/55 transition hover:bg-white/6 hover:text-white"
              aria-label="Fermer la notification"
              @click="remove(toast.id)"
            >
              <X class="h-4 w-4" />
            </button>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>
