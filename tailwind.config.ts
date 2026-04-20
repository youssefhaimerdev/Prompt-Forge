import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0C0D0F',
        void: '#080909',
        surface: '#13151A',
        'surface-2': '#1C1F27',
        'surface-3': '#252932',
        border: '#2A2D38',
        'border-bright': '#3D4150',
        amber: '#D4902A',
        'amber-light': '#F0B84A',
        'amber-dim': '#9A6A1A',
        'amber-glow': '#D4902A33',
        zinc: '#8B8FA8',
        'zinc-light': '#B4B8CC',
        'zinc-dim': '#5A5D70',
        cream: '#F2EDE4',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'pulse-amber': 'pulseAmber 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.3s ease forwards',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseAmber: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'amber-gradient': 'linear-gradient(135deg, #D4902A 0%, #F0B84A 50%, #D4902A 100%)',
        'grid-pattern': `linear-gradient(rgba(42,45,56,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(42,45,56,0.4) 1px, transparent 1px)`,
      },
    },
  },
  plugins: [],
}

export default config
