export default defineAppConfig({
  nuxtShip: {
    copyright: 'NuxtShip'
  },
  header: {
    logoDark: '/assets/nuxt-light.svg',
    logoLight: '/assets/nuxt-dark.svg'
  },
  ui: {
    primary: 'gray',

    slideover: {
      background: '',
      base: 'flex-1 flex flex-col w-full focus:outline-none bg-white dark:bg-gray-900 z-50',
      overlay: {
        background: 'bg-gray-200/75 dark:bg-gray-800/50 backdrop-blur-md',
      }
    },
  }
})
