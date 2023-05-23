// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    '@nuxthq/studio',
    '@nuxthq/ui',
  ],
  devtools: {
    enabled: true
  },
  content: {
    documentDriven: {
      surround: false
    }
  },
  image: {
    domains: ['images.unsplash.com'],
    provider: 'ipx'
  },
  ui: {
    icons: ['simple-icons', 'bx', 'heroicons', 'uil']
  }
})
