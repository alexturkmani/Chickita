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
          50: '#fef4f2',
          100: '#fde7e2',
          200: '#fcd3ca',
          300: '#f9b4a5',
          400: '#f48871',
          500: '#E8461C', // Main orange-red accent (Chickita headings)
          600: '#d53a14',
          700: '#b32e10',
          800: '#942912',
          900: '#7b2815',
        },
        secondary: {
          50: '#fef6ee',
          100: '#fcebd7',
          200: '#f8d3ae',
          300: '#f3b57a',
          400: '#ed9044',
          500: '#e8751f', // Orange accent
          600: '#d95d11',
          700: '#b44610',
          800: '#903915',
          900: '#743114',
        },
        dark: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#2d2d2d',
          800: '#1a1a1a',
          900: '#0a0a0a',
        },
      },
      fontFamily: {
        // Chickita handwritten script font for headings
        display: ['Pacifico', 'cursive'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'flame-gradient': 'linear-gradient(135deg, #E8461C 0%, #e8751f 100%)',
      },
    },
  },
  plugins: [],
}
