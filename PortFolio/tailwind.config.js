/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-blue"      : "#88C6FF",
        "yellow"        : "#FFCE21",
        "gray"          : "#BDBDBD",
        "point-gray"    : "#5C5C5C",
        "white"         : "#FFFFFF",
        "red"           : "#E71C1C",
        "black"         : "#373737",
        "green"         : "#52DD22",
      },
      fontFamily:{
        'frs-th' : ['frs-th'],
        'frs-el' : ['frs-el'],
        'frs-l' : ['frs-l'],
        'frs-r' : ['frs-r'],
        'frs-m' : ['frs-m'],
        'frs-sb' : ['frs-sb'],
        'frs-b' : ['frs-b'],
        'frs-eb' : ['frs-eb'],
        'frs-bl' : ['frs-bl'],
      },
      keyframes: {
        slideDiagonalLeft: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '100%': { transform: 'translateX(-100%) translateY(-100%)' },
        },
        slideDiagonalRight: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '100%': { transform: 'translateX(100%) translateY(100%)' },
        },
      },
      animation: {
        slideDiagonalLeft: 'slideDiagonalLeft 7s ease forwards',
        slideDiagonalRight: 'slideDiagonalRight 7s ease forwards',
      },
    },
  },
  plugins: [],
}

