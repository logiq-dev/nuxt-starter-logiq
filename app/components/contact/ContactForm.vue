<script setup lang="ts">
import {
  ArrowRight,
  CheckCircle2,
  Github,
  Instagram,
  Linkedin,
  LocateFixed,
  Mail,
  Send,
  ShieldCheck,
} from "lucide-vue-next";

import type { ContactFieldErrors, ContactSubmissionData } from "~~/shared/schemas/contact";
import { contactSubmissionSchema } from "~~/shared/schemas/contact";

type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  turnstileToken: string;
};

const form = reactive<ContactPayload>({
  fullName: "",
  email: "",
  phone: "",
  message: "",
  turnstileToken: "",
});

const fieldErrors = ref<ContactFieldErrors>({});
const isSubmitting = ref(false);
const serverMessage = ref("");
const submitState = ref<"idle" | "success" | "error">("idle");
const { push: pushToast } = useToast();

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/logiq-dev/nuxt-starter-logiq", icon: Github },
  { label: "Instagram", href: "#", icon: Instagram },
];

const runtimeConfig = useRuntimeConfig();
const turnstileSiteKey = runtimeConfig.public.turnstileSiteKey;
const turnstileRef = ref<InstanceType<typeof TurnstileWidget> | null>(null);

const messageLength = computed(() => form.message.trim().length);

const hasError = (field: keyof ContactSubmissionData) => Boolean(fieldErrors.value[field]);

const describedBy = (field: keyof ContactSubmissionData) => {
  const ids = [];

  if (hasError(field)) {
    ids.push(`${field}-error`);
  }

  return ids.join(" ") || undefined;
};

const resetFeedback = () => {
  submitState.value = "idle";
  serverMessage.value = "";
};

const setFieldErrors = (errors: ContactFieldErrors) => {
  fieldErrors.value = errors;
};

const mapClientErrors = (payload: ContactPayload) => {
  const parsed = contactSubmissionSchema.safeParse(payload);

  if (parsed.success) {
    setFieldErrors({});
    return true;
  }

  const flattened = parsed.error.flatten().fieldErrors;

  setFieldErrors(
    Object.fromEntries(
      Object.entries(flattened)
        .filter(([, messages]) => messages?.[0])
        .map(([field, messages]) => [field, messages?.[0] as string]),
    ) as ContactFieldErrors,
  );

  return false;
};

const resetForm = () => {
  form.fullName = "";
  form.email = "";
  form.phone = "";
  form.message = "";
  form.turnstileToken = "";
};

const handleSubmit = async () => {
  resetFeedback();

  const payload: ContactPayload = {
    fullName: form.fullName,
    email: form.email,
    phone: form.phone,
    message: form.message,
    turnstileToken: form.turnstileToken,
  };

  if (!mapClientErrors(payload)) {
    submitState.value = "error";
    serverMessage.value = "Merci de vérifier les champs du formulaire.";
    return;
  }

  isSubmitting.value = true;

  try {
    const response = await $fetch<{ message: string }>("/api/contact", {
      method: "POST",
      body: payload,
    });

    submitState.value = "success";
    serverMessage.value = "";
    pushToast({
      title: "Votre message a été envoyé avec succès.",
      message: response.message,
      variant: "success",
    });
    setFieldErrors({});
    resetForm();
    turnstileRef.value?.reset();
  }
  catch (error: unknown) {
    const data = (error as { data?: { fieldErrors?: ContactFieldErrors; message?: string } })?.data;

    setFieldErrors(data?.fieldErrors || {});

    if (data?.fieldErrors?.turnstileToken) {
      turnstileRef.value?.reset();
    }

    submitState.value = "error";
    serverMessage.value =
      data?.message || "Une erreur est survenue. Merci de réessayer dans un instant.";
  }
  finally {
    isSubmitting.value = false;
  }
};

const fieldClass = (field: keyof ContactSubmissionData) =>
  [
    "w-full rounded-2xl border px-5 py-4 text-base text-white outline-none transition placeholder:text-slate-400",
    "bg-[#16213a]",
    fieldErrors.value[field]
      ? "border-red-400 ring-4 ring-red-500/15"
      : "border-white/8 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/12 focus-visible:border-emerald-400 focus-visible:ring-4 focus-visible:ring-emerald-500/12",
  ].join(" ");
</script>

<template>
  <section class="relative overflow-hidden border-t border-white/8 bg-[#0f172d] py-14 text-white sm:py-20 lg:py-24">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.07),_transparent_24%)]" />

    <div class="relative mx-auto grid max-w-360 gap-8 px-4 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10 lg:px-8">
      <div class="lg:pr-8">
        <div class="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/10 sm:px-5 sm:text-sm">
          <Mail class="h-4 w-4" />
          Contact
        </div>

        <h1 class="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-balance sm:mt-8 sm:text-5xl lg:text-6xl">
          Discutons de votre projet
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
          Envie de collaborer ? N'hésitez pas à me contacter pour échanger sur vos besoins.
        </p>

        <div class="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          <div class="group rounded-[22px] border border-white/10 bg-white/6 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-white/8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:rounded-[26px] sm:p-5">
            <div class="flex items-center gap-4 sm:gap-5">
              <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300 transition duration-300 group-hover:bg-emerald-400/16 group-hover:text-emerald-200 sm:h-12 sm:w-12">
                <Mail class="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              <div class="min-w-0">
                <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-sm">
                  Email
                </p>
                <p class="mt-1.5 break-words text-lg font-semibold text-white transition duration-300 group-hover:text-emerald-100 sm:text-[1.75rem]">
                  contact@monsite.com
                </p>
              </div>
            </div>
          </div>

          <div class="group rounded-[22px] border border-white/10 bg-white/6 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-white/8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:rounded-[26px] sm:p-5">
            <div class="flex items-center gap-4 sm:gap-5">
              <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300 transition duration-300 group-hover:bg-emerald-400/16 group-hover:text-emerald-200 sm:h-12 sm:w-12">
                <LocateFixed class="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-sm">
                  Localisation
                </p>
                <p class="mt-1.5 text-lg font-semibold text-white transition duration-300 group-hover:text-emerald-100 sm:text-[1.75rem]">
                  Belgique
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 sm:mt-10">
          <p class="text-lg font-semibold text-slate-300 sm:text-xl">
            Retrouvez-moi sur
          </p>

          <div class="mt-4 flex flex-wrap items-center gap-3 sm:mt-5">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              :target="social.href.startsWith('http') ? '_blank' : undefined"
              :rel="social.href.startsWith('http') ? 'noopener noreferrer' : undefined"
              class="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/8 bg-white/6 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-emerald-400/30 hover:text-emerald-300 sm:gap-3 sm:px-5 sm:py-3.5 sm:text-base"
              :aria-label="social.label"
            >
              <component :is="social.icon" class="h-4.5 w-4.5" />
              <span>{{ social.label }}</span>
            </a>
          </div>
        </div>
      </div>

      <div class="rounded-[28px] border border-white/10 bg-[#111a32] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] sm:rounded-[32px] sm:p-7 lg:p-8">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300 sm:text-sm">
              Formulaire
            </p>
            <h2 class="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Envoyez votre message
            </h2>
          </div>

          <div class="hidden rounded-2xl bg-emerald-500/10 p-3 text-emerald-300 sm:block">
            <ArrowRight class="h-5 w-5" />
          </div>
        </div>

        <form class="mt-6 space-y-4 sm:mt-8 sm:space-y-5" novalidate @submit.prevent="handleSubmit">
          <div>
            <label for="fullName" class="mb-2 block text-sm font-semibold text-white">
              Nom complet <span class="text-emerald-300" aria-hidden="true">*</span>
              <span class="sr-only">Champ obligatoire</span>
            </label>
            <input
              id="fullName"
              v-model="form.fullName"
              type="text"
              name="fullName"
              autocomplete="name"
              placeholder="John Doe"
              :class="fieldClass('fullName')"
              required
              aria-required="true"
              :aria-invalid="hasError('fullName')"
              :aria-describedby="describedBy('fullName')"
            >
            <p
              v-if="fieldErrors.fullName"
              id="fullName-error"
              class="mt-2 text-sm text-red-300"
              role="alert"
            >
              {{ fieldErrors.fullName }}
            </p>
          </div>

          <div>
            <label for="email" class="mb-2 block text-sm font-semibold text-white">
              Email <span class="text-emerald-300" aria-hidden="true">*</span>
              <span class="sr-only">Champ obligatoire</span>
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              name="email"
              autocomplete="email"
              placeholder="john@example.com"
              :class="fieldClass('email')"
              required
              aria-required="true"
              :aria-invalid="hasError('email')"
              :aria-describedby="describedBy('email')"
            >
            <p
              v-if="fieldErrors.email"
              id="email-error"
              class="mt-2 text-sm text-red-300"
              role="alert"
            >
              {{ fieldErrors.email }}
            </p>
          </div>

          <div>
            <label for="phone" class="mb-2 block text-sm font-semibold text-white">
              Téléphone
            </label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              name="phone"
              autocomplete="tel"
              placeholder="+32 470 00 00 00"
              :class="fieldClass('phone')"
              :aria-invalid="hasError('phone')"
              :aria-describedby="describedBy('phone')"
            >
            <p
              v-if="fieldErrors.phone"
              id="phone-error"
              class="mt-2 text-sm text-red-300"
              role="alert"
            >
              {{ fieldErrors.phone }}
            </p>
          </div>

          <div>
            <div class="mb-2 flex items-center justify-between gap-4">
              <label for="message" class="block text-sm font-semibold text-white">
                Message <span class="text-emerald-300" aria-hidden="true">*</span>
                <span class="sr-only">Champ obligatoire</span>
              </label>
              <span class="text-xs font-medium text-slate-500">
                {{ messageLength }}/2000
              </span>
            </div>
            <textarea
              id="message"
              v-model="form.message"
              name="message"
              rows="5"
              placeholder="Décrivez votre projet..."
              :class="fieldClass('message')"
              required
              aria-required="true"
              :aria-invalid="hasError('message')"
              :aria-describedby="describedBy('message')"
            />
            <p
              v-if="fieldErrors.message"
              id="message-error"
              class="mt-2 text-sm text-red-300"
              role="alert"
            >
              {{ fieldErrors.message }}
            </p>
          </div>

          <div class="space-y-3">
            <TurnstileWidget
              v-if="turnstileSiteKey"
              ref="turnstileRef"
              v-model="form.turnstileToken"
              :site-key="turnstileSiteKey"
              theme="dark"
              size="flexible"
              appearance="always"
              @error="message => (serverMessage = message)"
            />

            <p class="flex items-center justify-center gap-2 text-center text-sm text-slate-400">
              <ShieldCheck class="h-4 w-4 text-emerald-300" />
              Formulaire protégé contre le spam
            </p>

            <p
              v-if="fieldErrors.turnstileToken"
              id="turnstileToken-error"
              class="text-sm text-red-300"
              role="alert"
            >
              {{ fieldErrors.turnstileToken }}
            </p>
          </div>

          <div
            v-if="serverMessage"
            class="rounded-2xl border px-4 py-3 text-sm"
            :role="submitState === 'success' ? 'status' : 'alert'"
            :aria-live="submitState === 'success' ? 'polite' : 'assertive'"
            :class="
              submitState === 'success'
                ? 'border-emerald-500/25 bg-emerald-500/10 text-emerald-200'
                : 'border-red-500/25 bg-red-500/10 text-red-200'
            "
          >
            <div class="flex items-center gap-2">
              <CheckCircle2 v-if="submitState === 'success'" class="h-4 w-4" />
              <span>{{ serverMessage }}</span>
            </div>
          </div>

          <button
            type="submit"
            class="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-base font-semibold text-white transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="isSubmitting"
          >
            <span>{{ isSubmitting ? "Envoi en cours..." : "Envoyer le message" }}</span>
            <Send class="h-4 w-4 text-white" />
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
