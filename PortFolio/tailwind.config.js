import scrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#88C6FF",
        "yellow": "#FFCE21",
        "gray": "#BDBDBD",
        "point-gray": "#5C5C5C",
        "white": "#FFFFFF",
        "red": "#E71C1C",
        "black": "#171717",
        "light-black": "#191919",
        "green": "#52DD22",
      },
      fontFamily: {
        'frs-th': ['frs-th'],
        'frs-el': ['frs-el'],
        'frs-l': ['frs-l'],
        'frs-r': ['frs-r'],
        'frs-m': ['frs-m'],
        'frs-sb': ['frs-sb'],
        'frs-b': ['frs-b'],
        'frs-eb': ['frs-eb'],
        'frs-bl': ['frs-bl'],
      },
      keyframes: {
        'custom-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'custom-bounce': 'custom-bounce 1.5s infinite',
      },
    },
  },
  plugins: [
    scrollbarHide
  ],
  corePlugins: {
    preflight: true,
  },
};
