import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Wsparcie dla dark mode
  theme: {
    extend: {
      colors: {
        // NAVY – Kolor podstawowy
        brand: {
          950: '#020617',
          900: '#0f1729',
          800: '#1e293b',
          700: '#334155',
          100: '#f1f5f9',
        },
        // GOLD – Akcenty luksusowe
        gold: {
          700: '#996515',
          600: '#B88608',
          500: '#d4af37',
          400: '#E8C547',
          300: '#ffd700',
        },
        // ACCENT - Różowy / Fuksja
        accent: {
          500: '#ec4899',
          600: '#db2777',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
                    'animation-delay-2000': 'animation-delay: 2s',
                    'animation-delay-4000': 'animation-delay: 4s',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
