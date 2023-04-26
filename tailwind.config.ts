import type { Config } from 'tailwindcss'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

export default <Partial<Config>> {
  theme: {
    container: {
      padding: '4px',
      screens: {
        'xl': '1280px'
      },
      center: true,
      backgroundColor: 'green-600',
    },
  },
  darkMode: 'class',
  plugins: [
    // https://github.com/egoist/tailwindcss-icons
    iconsPlugin({
      // Icons collection to use, see https://icones.js.org
      collections: getIconCollections([
        // 'heroicons',
        // 'ph'
      ]),
    })
  ]
}
