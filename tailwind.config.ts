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
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    // https://github.com/egoist/tailwindcss-icons
    iconsPlugin({
      // Icons collection to use, see https://icones.js.org
      collections: getIconCollections([
        'bx',
        'simple-icons',
        'uil',
        // 'heroicons',
        // 'ph'
      ]),
    })
  ]
}
