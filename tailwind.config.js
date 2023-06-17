/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
      primaryColor: '#5D387F',
      grayishWhite: '#F5F5F5',
      grayWhite: '#F5F5F5',
      lightWhite: '#D6D6D6',
      purplePink: '#c77dff',
      reddishPink: '#9d4edd',
      primalColor: '#E8DDF2',
      textShade: '#5A5A5A',
      shadedBlack: 'rgb(148 163 184)',
      footerColor: '#2F1C40',
      },
      height: {
        '675': '42.18rem',
      },
    },
  },
  plugins: [],
}

