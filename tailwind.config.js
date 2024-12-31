/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'slow': 'cubic-bezier(0.16, 1.07, 1, 1)',
      },
      spacing: {
        'trim-tight': '-0.1em',
        'trim-loose': '-0.2em',
      },
      fontFamily: {
        'evafiya': ['Evafiya'],
        'geist': ['Geist'],
      }
    }
  },
  plugins: [],
};
