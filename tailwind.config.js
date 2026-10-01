/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffbebe',
          100: '#fef3c7',
          500: '#f59e0b', // Accent Primary Gold/Amber
          600: '#d97706',
        },
        dark: {
          bg: '#0b0f19',
          card: '#111827',
          border: '#1f2937'
        }
      }
    },
  },
  plugins: [],
}