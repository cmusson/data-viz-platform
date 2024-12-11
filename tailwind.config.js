/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0E0D0D',
        white: '#FFFFFF',
        text: { gray: '#BBBBBB' },
        bg: {
          primary: '#2C2E334D',
          secondary: '#222324',
        },
        border: {
          primary: '',
          secondary: '#525252',
        },
        lumi: '#C9FF3B',
      },
    },
  },
  plugins: [],
};
