<script setup lang="ts">
// const colorMode = useColorMode()

// useHead({
//   meta: [
//     {
//       name: 'theme-color',
//       content: computed(() =>
//         colorMode.value === 'dark' ? '#0F172B' : '#FFFFFF'
//       ),
//     },
//   ],
// })
</script>

<template>
 
    <NuxtLoadingIndicator
    color="#00DC82"
    :height="3"
    :duration="2500"
    :throttle="0"
  />
    <NuxtRouteAnnouncer />
   <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

</template>
