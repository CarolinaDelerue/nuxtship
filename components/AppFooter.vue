<script setup>
const appConfig = useAppConfig()
</script>

<template>
  <footer class="my-20 w-full flex flex-col gap-3 justify-center">
    <div class="flex flex-col justify-center">
      <p class="text-center text-sm text-slate-500 dark:text-gray-300">
        Copyright ©  {{ new Date().getFullYear() }} {{ appConfig.nuxtShip?.copyright || 'Missing nuxtShip.copyright' }}. All rights reserved.
      </p>
      <p class="text-center text-xs text-slate-500 dark:text-gray-300 mt-1">
        Inspired by the awesome <a
          href="https://astroship.web3templates.com"
          target="_blank"
          rel="noopener"
          class="hover:underline"
        >
          NuxtShip template
        </a>
      </p>
    </div>
    <div class=" flex flex-col items-center gap-3">
      <ThemeSelect
        class="z-10 order-1 sm:order-none"
        size="sm"
      />
    </div>
  </footer>
</template>
