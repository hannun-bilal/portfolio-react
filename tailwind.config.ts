import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        foreground: '#FFFFFF',
        primary: 'rgb(94, 234, 212)',
        secondary: 'rgb(139, 92, 246)',
        muted: '#888888',
        border: 'rgba(255, 255, 255, 0.1)',
        card: 'rgba(255, 255, 255, 0.05)',
      },
      borderColor: {
        DEFAULT: 'rgba(255, 255, 255, 0.1)', // Dies definiert die border-border Klasse
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
