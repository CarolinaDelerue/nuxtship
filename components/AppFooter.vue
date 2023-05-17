<script setup>
const appConfig = useAppConfig()
</script>

<template>
  <footer class="my-20">
    <p class="text-center text-sm text-slate-500">
      Copyright ©  {{ new Date().getFullYear() }} {{ appConfig.nuxtShip?.copyright || 'Missing nuxtShip.copyright' }}. All rights reserved.
    </p>
    <p class="text-center text-xs text-slate-500 mt-1">
      Inspired by the awesome <a
        href="https://astroship.web3templates.com"
        target="_blank"
        rel="noopener"
        class="hover:underline"
      >
        NuxtShip template
      </a>
    </p>
  </footer>
</template>
