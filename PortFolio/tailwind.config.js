/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '1svh' : "100svh",
        '2svh': '200svh',
        '3svh': '300svh',
        '4svh': '400svh',
      },
      colors: {
        "sky-blue"      : "#88C6FF",
        "yellow"        : "#FFCE21",
        "gray"          : "#BDBDBD",
        "point-gray"    : "#5C5C5C",
        "white"         : "#FFFFFF",
        "red"           : "#E71C1C",
        "black"         : "#171717",
        "light-black"   : "#191919",
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
        'custom-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)'},
      },
      animation: {
        'custom-bounce':'customBounce 1.5s infinite',
      },
    },
  },
  plugins: [],
  }
}