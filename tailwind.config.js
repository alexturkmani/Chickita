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
          50: '#fdf8f0',
          100: '#f9ecd5',
          200: '#f2d9aa',
          300: '#e8c17a',
          400: '#daa94e',
          500: '#C8A962', // Main gold/amber accent color (Chickita brand)
          600: '#b8923d',
          700: '#997633',
          800: '#7d5f2d',
          900: '#674d28',
        },
        secondary: {
          50: '#fef6ee',
          100: '#fcebd7',
          200: '#f8d3ae',
          300: '#f3b57a',
          400: '#ed9044',
          500: '#e8751f', // Orange/flame accent
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
          900: '#000000', // Pure black background (Chickita brand)
        },
        gold: {
          50: '#fdfbf5',
          100: '#f9f3e3',
          200: '#f2e4c3',
          300: '#e8d09a',
          400: '#dbb86d',
          500: '#C8A962', // Chickita gold
          600: '#b39347',
          700: '#95763a',
          800: '#795f34',
          900: '#644e2e',
        },
      },
      fontFamily: {
        // Chickita uses Clarkson/Proxima Nova style fonts
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #C8A962 0%, #dbb86d 100%)',
        'flame-gradient': 'linear-gradient(135deg, #C8A962 0%, #e8751f 100%)',
      },
    },
  },
  plugins: [],
}
