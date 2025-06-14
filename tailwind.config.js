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
        sage: {
          50: '#f0f2ee',
          100: '#e1e5dc',
          200: '#c3cbb9',
          300: '#a5b196',
          400: '#8b9a7a',
          500: '#6d7a5a',
          600: '#5a6548',
          700: '#474f36',
          800: '#343a24',
          900: '#212512',
        },
        cream: {
          50: '#fefcfa',
          100: '#f5f3f0',
          200: '#ebe7e1',
          300: '#e1dbd2',
          400: '#d7cfc3',
          500: '#cdc3b4',
          600: '#a49c90',
          700: '#7b756c',
          800: '#524e48',
          900: '#292724',
        },
        gold: {
          50: '#fefbf3',
          100: '#fdf7e7',
          200: '#fbefcf',
          300: '#f9e7b7',
          400: '#f7df9f',
          500: '#d4af37',
          600: '#b8860b',
          700: '#9c6f09',
          800: '#805807',
          900: '#644105',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} 