import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Wsparcie dla dark mode
  theme: {
    extend: {
      colors: {
        // NAVY - Kolor podstawowy
        brand: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          100: '#f1f5f9',
        },
        // GOLD - Akcenty luksusowe
        gold: {
          700: '#996515',
          600: '#B8860B',
          500: '#D4AF37', // Klasyczny złoty
          400: '#FFD700',
          300: '#F0E68C',
        },
        // RED - CTA i alerty
        accent: {
          700: '#b91c1c',
          600: '#dc2626',
          500: '#ef4444',
          400: '#f87171',
          50: '#fef2f2',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(to right, #B8860B, #D4AF37, #B8860B)',
      }
    },
  },
  plugins: [],
};
export default config;