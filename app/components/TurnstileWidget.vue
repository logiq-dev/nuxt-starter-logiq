<script setup lang="ts">
type TurnstileRenderOptions = {
  sitekey: string;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "flexible" | "compact";
  appearance?: "always" | "interaction-only" | "execute";
  callback?: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
  "timeout-callback"?: () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const props = withDefaults(defineProps<{
  modelValue: string;
  siteKey: string;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "flexible" | "compact";
  appearance?: "always" | "interaction-only" | "execute";
}>(), {
  theme: "dark",
  size: "flexible",
  appearance: "always",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
  success: [token: string];
  error: [message: string];
  expired: [];
}>();

let turnstileLoader: Promise<TurnstileApi> | null = null;

const loadTurnstile = () => {
  if (import.meta.server) {
    return Promise.reject(new Error("Turnstile can only load in the browser."));
  }

  if (window.turnstile) {
    return Promise.resolve(window.turnstile);
  }

  if (turnstileLoader) {
    return turnstileLoader;
  }

  turnstileLoader = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[data-turnstile-script="true"]');

    const handleReady = () => {
      if (window.turnstile) {
        resolve(window.turnstile);
      }
      else {
        reject(new Error("Turnstile script loaded but API is unavailable."));
      }
    };

    if (existingScript) {
      existingScript.addEventListener("load", handleReady, { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Impossible de charger Turnstile.")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.dataset.turnstileScript = "true";
    script.addEventListener("load", handleReady, { once: true });
    script.addEventListener("error", () => reject(new Error("Impossible de charger Turnstile.")), { once: true });
    document.head.appendChild(script);
  });

  return turnstileLoader;
};

const containerRef = ref<HTMLElement | null>(null);
const widgetId = ref<string>();
const loadError = ref("");

const renderWidget = async () => {
  if (!props.siteKey || !containerRef.value || widgetId.value) {
    return;
  }

  try {
    const turnstile = await loadTurnstile();

    widgetId.value = turnstile.render(containerRef.value, {
      sitekey: props.siteKey,
      theme: props.theme,
      size: props.size,
      appearance: props.appearance,
      callback: (token) => {
        loadError.value = "";
        emit("update:modelValue", token);
        emit("success", token);
      },
      "error-callback": () => {
        emit("update:modelValue", "");
        loadError.value = "La vérification anti-spam a rencontré une erreur. Merci de réessayer.";
        emit("error", loadError.value);
      },
      "expired-callback": () => {
        emit("update:modelValue", "");
        loadError.value = "La vérification anti-spam a expiré. Merci de la relancer.";
        emit("expired");
      },
      "timeout-callback": () => {
        emit("update:modelValue", "");
        loadError.value = "La vérification anti-spam a expiré. Merci de la relancer.";
        emit("expired");
      },
    });
  }
  catch (error) {
    loadError.value = error instanceof Error
      ? error.message
      : "Impossible de charger la vérification anti-spam.";
    emit("error", loadError.value);
  }
};

const reset = () => {
  if (window.turnstile && widgetId.value) {
    window.turnstile.reset(widgetId.value);
  }

  emit("update:modelValue", "");
};

defineExpose({
  reset,
});

onMounted(() => {
  void renderWidget();
});

onBeforeUnmount(() => {
  if (window.turnstile && widgetId.value) {
    window.turnstile.remove(widgetId.value);
  }
});
</script>

<template>
  <div class="space-y-3">
    <div ref="containerRef" class="min-h-[74px]" />

    <p v-if="loadError" class="text-sm text-red-300" role="alert">
      {{ loadError }}
    </p>
  </div>
</template>
