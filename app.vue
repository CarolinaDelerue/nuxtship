<script setup lang="ts">
const { page } = useContent()

const description = computed(() => page.value?.head?.description || page.value?.description || 'Page not found')

useHead({
  titleTemplate: chunk => chunk ? `${chunk} - NuxtShip` : 'NuxtShip template',
  link: [
    { rel: 'icon', href: '/icon.png' }
  ],
  meta: [
    { property: 'og:site_name', content: 'NuxtShip' },
    { property: 'og:type', content: 'website' },
        // TODO: UPDATE
    { property: 'og:image', content: 'https://nuxtlabs.com/social.png' },
    { property: 'og:image:alt', content: 'NuxtShip' },
    { property: 'description', content: 'description' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:site', content: '@NuxtShip' },
  ],
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'bg-white dark:bg-gray-950'
  }
})

useSeoMeta({
  title: () => page.title,
  description,
})

</script>

<template>
  <div class="flex flex-col px-4 mx-auto">
    <AppHeader />
    <div>
      <NuxtPage />
    </div>
    <AppFooter />
  </div>
</template>
