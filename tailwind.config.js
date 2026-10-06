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
        // Clean authentic gold sampled from user (#BC9646)
        gold: {
          50: '#FAF8F3',
          100: '#F4EEDF',
          200: '#E8DCBE',
          300: '#DAC89C',
          400: '#CCB273',
          500: '#BC9646',   // User's exact sampled clean gold
          600: '#A58136',   // Rich dark gold for text and hover
          700: '#886827',   // Deep gold for high-contrast reading
          800: '#684E1A',
          900: '#4A360E',
          950: '#2A1E05',
        },
        // Map amber directly to this clean gold palette so all existing amber-* classes instantly render this clean gold
        amber: {
          50: '#FAF8F3',
          100: '#F4EEDF',
          200: '#E8DCBE',
          300: '#DAC89C',
          400: '#CCB273',
          500: '#BC9646',   // Exact sampled clean gold (#BC9646)
          600: '#A58136',
          700: '#886827',
          800: '#684E1A',
          900: '#4A360E',
          950: '#2A1E05',
        },
        primary: {
          50: '#FAF8F3',
          100: '#F4EEDF',
          200: '#E8DCBE',
          300: '#DAC89C',
          400: '#CCB273',
          500: '#BC9646',
          600: '#A58136',
          700: '#886827',
          800: '#684E1A',
          900: '#4A360E',
          950: '#2A1E05',
        },
        accent: {
          gold: '#BC9646',
          'gold-light': '#DAC89C',
          'gold-dark': '#A58136',
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