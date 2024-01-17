/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': { 'max': '760px' },
      'md': { 'max': '1270px' }
    }
  },
  plugins: [],
}

