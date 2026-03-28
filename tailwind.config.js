/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#13c5dd',
          light: '#c5f0fb',
          dark: '#0fa3bd'
        }
      },
      boxShadow: {
        glow: '0 8px 30px rgba(19, 197, 221, 0.25)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
