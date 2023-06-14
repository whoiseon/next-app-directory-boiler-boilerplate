/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#090909',
        element1: '#191919',
        element2: '#252525',
        element3: '#2F2F2F',
        element4: '#C2C2C2',
        text1: '#ECECEC',
        text2: '#D9D9D9',
        text3: '#ACACAC',
        text4: '#666666',
        border1: '#E0E0E0',
        border2: '#A0A0A0',
        border3: '#4D4D4D',
        border4: '#2E2E2E',
        primary1: '#0CA581',
        primary2: '#0A8467',
        destructive1: '#ED6D5F',
        destructive2: '#BE574C',
        button_text: '#090909',
        placeholder: '#666666',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'ui-sans-serif', 'sans-serif']
      }
    },
  },
  plugins: [],
}

