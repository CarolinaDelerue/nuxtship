// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    //https://content.nuxtjs.org/
    '@nuxt/content',
   //https://image.nuxtjs.org/
    '@nuxt/image-edge',
    //https://vueuse.org/nuxt/README.html
    '@vueuse/nuxt',
    //https://nuxt.studio/
    '@nuxthq/studio',
    //https://ui.nuxtlabs.com/getting-started
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
  },

  plugins: []
})
