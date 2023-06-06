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
    domains: ['https://images.unsplash.com', 'https://source.unsplash.com'],
    provider: 'ipx',
    inject: true
  },
  ui: {
    icons: ['simple-icons', 'bx', 'heroicons', 'uil']
  }
})
