/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        blue: {
          defaulf: '#4EA8DE',
          dark: '#1E6F9F',
        },
        purple: {
          defaulf: '#8284FA',
          dark: '#5E60CE',
        },
        danger: '#E25858',
      },
    },
  },
  plugins: [],
}
