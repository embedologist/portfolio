import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#0B132B',
          900: '#070B19',
          950: '#03050D',
        },
        cyan: {
          400: '#38BDF8',
          500: '#0EA5E9',
        },
        emerald: {
          400: '#34D399',
          500: '#10B981',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;