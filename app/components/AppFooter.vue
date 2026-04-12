<script setup lang="js">
const year = new Date().getFullYear();
</script>

<template>
  <footer
    class="w-full border-t border-foreground/20 bg-primary-bg"
    aria-label="Pied de page"
  >
    <div class="mx-auto max-w-[1440px] px-6 pt-12 pb-4 md:pb-6">
      <!-- Grille -->
      <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <!-- Colonne 1 : Branding -->
        <div class="text-center md:text-left">
          <h2 class="text-xl font-semibold text-foreground">
            Nuxt Starter Vitrine
          </h2>
          <p
            class="mt-2 text-sm text-foreground/60 mx-auto md:mx-0 max-w-[220px]"
          >
            Une base moderne et performante pour créer des sites Nuxt prêts pour
            la production.
          </p>
        </div>

        <!-- Colonne 2 : Navigation -->
        <nav
          aria-label="Navigation du pied de page"
          class="text-center md:text-left"
        >
          <h2 class="text-sm font-semibold text-foreground">Navigation</h2>
          <ul class="mt-2 space-y-2 text-sm">
            <li>
              <NuxtLink
                to="/"
                class="text-foreground/60 hover:text-foreground transition"
              >
                Accueil
              </NuxtLink>
            </li>
          
         
            <li>
              <NuxtLink
                to="/contact"
                class="text-foreground/60 hover:text-foreground transition"
              >
                Contact
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Colonne 3 : Ressources -->
        <nav aria-label="Ressources" class="text-center md:text-left">
          <h2 class="text-sm font-semibold text-foreground">Ressources</h2>
          <ul class="mt-2 space-y-2 text-sm">
            <li>
              <NuxtLink
                to="https://github.com/NicolasDeza/nuxt-starter-vitrine"
                target="_blank"
                rel="noopener noreferrer"
                class="text-foreground/60 hover:text-foreground transition"
                aria-label="GitHub (ouvre dans un nouvel onglet)"
              >
                GitHub
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/legal/mentions-legales"
                class="text-foreground/60 hover:text-foreground transition"
              >
                Mentions légales
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Bas de footer -->
      <div
        class="mt-10 border-t border-foreground/20 pt-6 text-center text-sm text-foreground/50"
      >
        <p>© {{ year }} Nuxt Starter Vitrine. Tous droits réservés.</p>
        <p class="mt-2">
          Site réalisé par
          <NuxtLink
            to="https://www.nicolasdeza.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-foreground/70 hover:text-foreground transition underline"
            aria-label="Nicolas Deza (ouvre dans un nouvel onglet)"
          >
            Nicolas Deza
          </NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>
