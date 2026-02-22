/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'akira-red': '#E3242B',
        'capsule-blue': '#00D4FF',
        'neo-dark': '#0D0E15',
        'neo-light': '#F8F9FA',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}