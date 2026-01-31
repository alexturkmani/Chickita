/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Chickita brand colors - exact match to original website
        primary: {
          50: '#fef5f3',
          100: '#fee9e5',
          200: '#fdd7d0',
          300: '#fbb9ac',
          400: '#f78f7c',
          500: '#EF5B34', // Chickita orange-red (exact from website)
          600: '#db3f1a',
          700: '#b83214',
          800: '#982d15',
          900: '#7e2b18',
        },
        dark: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1a1a1a',
        },
      },
      fontFamily: {
        // Chickita handwritten script font for headings
        display: ['Satisfy', 'cursive'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'flame-gradient': 'linear-gradient(135deg, #EF5B34 0%, #f97316 100%)',
      },
    },
  },
  plugins: [],
}
