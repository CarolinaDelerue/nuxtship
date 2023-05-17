import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default <Partial<Config>> {
  theme: {
    container: {
      padding: '4px',
      screens: {
        xl: '1280px'
      },
      center: true,
    },
  },
  plugins: [
    typography
  ]
}
