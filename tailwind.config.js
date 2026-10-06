/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#1e7b48',   // Vibrant balanced Islamic emerald
          600: '#166534',   // Deep rich Islamic forest green
          700: '#14532d',   // Classic dignified emerald
          800: '#0f3f22',   // Premium forest shade
          900: '#0b291a',   // Master dark spruce / pine
          950: '#06170e',   // Deepest velvet forest
        },
        accent: {
          gold: '#cba135',
          'gold-light': '#dfbc5c',
          'gold-dark': '#a67c1e',
        },
        secondary: {
          blue: '#1E5A7D',
          teal: '#1f6f63',
        },
      },
      fontFamily: {
        arabic: ['Amiri', 'Traditional Arabic', 'serif'],
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'islamic-pattern': "url('/patterns/islamic-geometric.svg')",
      },
    },
  },
  plugins: [],
}