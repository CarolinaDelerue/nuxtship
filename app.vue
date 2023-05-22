<script setup lang="ts">
const { page } = useContent()

const description = computed(() => page.value?.head?.description || page.value?.description || 'Page not found')

useHead({
  titleTemplate: chunk => chunk ? `${chunk} - NuxtShip` : 'NuxtShip template',
  link: [
    { rel: 'icon', href: '/icon.png' }
  ],
  meta: [
    { property: 'og:site_name', content: 'NuxtLabs' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://nuxtlabs.com/social.png' },
    { property: 'og:image:alt', content: 'NuxtLabs' },
    { property: 'description', content: 'description' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:site', content: '@nuxtlabs' },
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title: () => page.title,
  description,
})
</script>

<template>
  <div class="flex flex-col px-4">
    <AppHeader />
    <div>
      <NuxtPage />
    </div>
    <AppFooter />
  </div>
</template>
