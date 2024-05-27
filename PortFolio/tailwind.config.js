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
        'gtr-B' : ['gtr-B'],
        'gtr-R' : ['gtr-R'],
        'gtr-T' : ['gtr-T'],
        'pre-Black' : ['pre-Black'],
        'pre-B' : ['pre-B'],
        'pre-EB' : ['pre-EB'],
        'pre-EL' : ['pre-EL'],
        'pre-L' : ['pre-L'],
        'pre-M' : ['pre-M'],
        'pre-R' : ['pre-R'],
        'pre-SB' : ['pre-SB'],
        'pre-T' : ['pre-T'],
      }
    },
  },
  plugins: [],
}

