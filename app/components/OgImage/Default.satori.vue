<script setup lang="ts">
defineProps<{
  eyebrow: string;
  siteName: string;
  title: string;
  description: string;
  pathLabel: string;
}>();
</script>

<template>
  <div class="relative flex h-full w-full overflow-hidden bg-[#0f1729] text-white">
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,220,130,0.24),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.20),_transparent_30%)]"
    />

    <div
      class="absolute inset-y-8 right-10 w-[31%] rounded-[34px] border border-white/10 bg-white/6 shadow-[0_30px_90px_rgba(0,0,0,0.3)]"
    >
      <div class="flex items-center justify-between border-b border-white/10 px-7 py-5">
        <div class="flex items-center gap-3">
          <span class="h-3 w-3 rounded-full bg-rose-400" />
          <span class="h-3 w-3 rounded-full bg-amber-400" />
          <span class="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <span class="text-lg font-medium text-white/50">preview</span>
      </div>

      <div class="flex h-[calc(100%-76px)] flex-col justify-between px-8 py-8">
        <div class="space-y-5">
          <div class="rounded-[28px] border border-white/10 bg-[#122338] p-7">
            <p class="text-lg font-semibold uppercase tracking-[0.22em] text-emerald-300/80">
              SEO starter
            </p>
            <p class="mt-5 text-[2.1rem] font-semibold leading-tight tracking-[-0.04em]">
              Social card prete a partager
            </p>
          </div>

          <div class="space-y-4 rounded-[28px] border border-white/10 bg-white/5 p-6">
            <div class="flex items-start gap-4 rounded-2xl bg-white/5 px-4 py-4">
              <span
                class="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/20 text-sm font-bold text-emerald-200"
              >
                1
              </span>
              <div>
                <p class="text-xl font-semibold text-white">Meta propres</p>
                <p class="mt-1 text-lg leading-relaxed text-white/65">
                  Title, description, canonicals
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 rounded-2xl bg-white/5 px-4 py-4">
              <span
                class="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-400/20 text-sm font-bold text-sky-200"
              >
                2
              </span>
              <div>
                <p class="text-xl font-semibold text-white">OG image globale</p>
                <p class="mt-1 text-lg leading-relaxed text-white/65">
                  Un visuel reutilisable pour toutes les pages
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-full border border-white/10 px-5 py-3 text-lg text-white/55">
          {{ pathLabel }}
        </div>
      </div>
    </div>

    <div class="relative flex w-full flex-col justify-between px-14 py-12">
      <div class="space-y-10">
        <div class="inline-flex items-center gap-5 rounded-full border border-white/10 bg-white/6 px-6 py-4">
          <img
            src="/images/logo/logo-dark-nuxt.svg"
            alt=""
            class="h-9 w-auto"
          >
          <span class="text-xl font-semibold uppercase tracking-[0.24em] text-emerald-300">
            {{ eyebrow }}
          </span>
        </div>

        <div class="space-y-6">
          <p class="text-2xl font-medium text-white/62">
            {{ siteName }}
          </p>
          <h1 class="max-w-4xl text-[4.2rem] font-semibold leading-[1.02] tracking-[-0.06em]">
            {{ title }}
          </h1>
          <p class="max-w-3xl text-[1.75rem] leading-[1.34] text-white/70">
            {{ description }}
          </p>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4 text-xl text-white/58">
          <span class="h-3.5 w-3.5 rounded-full bg-emerald-400" />
          <span>Nuxt SEO, OG image, robots, sitemap, schema</span>
        </div>

        <div
          class="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-xl font-medium text-emerald-200"
        >
          social preview
        </div>
      </div>
    </div>
  </div>
</template>
