import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#8B1A1A',
        gold: '#C9A84C',
        'gold-subtle': '#C9A84C33',
        'off-white': '#E8E6E1',
        'soft-gray': '#A8A5A0',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
