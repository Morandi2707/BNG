/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#042c70',
          dark: '#031d4a',
          light: '#0a3d96',
        },
        secondary: {
          DEFAULT: '#f5cb0d',
          dark: '#d9b60b',
          light: '#f7d53f',
        },
        white: {
          DEFAULT: '#ffffff',
          dark: '#f8f8f8',
          light: '#ffffff',
        },
        accent: {
          DEFAULT: '#E94A36',
          dark: '#C83A28',
          light: '#F27B6C',
        },
        success: {
          DEFAULT: '#16A34A',
          dark: '#15803D',
          light: '#22C55E',
        },
        warning: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FBBF24',
        },
        error: {
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
          light: '#EF4444',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};