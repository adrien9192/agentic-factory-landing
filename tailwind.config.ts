import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        factory: {
          dark: '#1C1C1E',
          stone: '#E8E4DF',
          orange: '#FF6B35',
          green: '#2D936C',
          surface: '#F7F5F2',
          'surface-dark': '#2A2A2C',
          'text-primary': '#1C1C1E',
          'text-secondary': '#5C5C5E',
          'text-muted': '#8E8E93',
          border: '#D1CCC5',
        },
      },
      fontFamily: {
        sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
