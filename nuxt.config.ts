// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://content.nuxtjs.org
    '@nuxt/content',
    // https://v1.image.nuxtjs.org
    '@nuxt/image-edge',
    // https://tailwindcss.nuxtjs.org
    '@vueuse/nuxt',
    // https://nuxt.studio
    '@nuxthq/studio',
    '@nuxthq/ui'
  ],
  devtools: {
    enabled: true
  },
  content: {
    documentDriven: {
      surround: false
    }
  },
  colorMode: {
    classSuffix: ''
  },
  image: {
    domains: ['images.unsplash.com']
  },
  ui: {
    icons: ['simple-icons']
  }
})
