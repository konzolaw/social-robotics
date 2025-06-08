
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        martel: ['Martel Sans', 'sans-serif'],
      },
      colors: {
        customCyanBlue: '#7ccbf2',
        customLintingGreenDark: '#94c83d',
        'custom-lintingGreenDark': '#94C83D',
        'custom-cyanBlue': '#7CCBF2',
        'custom-red': '#FF0000',
        'custom-lightGray': '#ECEDF2',
        'custom-gray': '#D9D9D9',
        'custom-darkGray': '#676767',
        'customCyanBlue': '#7ccbf2',
        'customLintingGreenDark': '#94c83d',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-in-delay': 'fadeIn 1s ease-in-out 0.5s forwards',
        fadeInLeft: 'fadeInLeft 1.5s ease-out forwards',
        fadeInRight: 'fadeInRight 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
