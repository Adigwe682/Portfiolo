/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily:{
        sans: ['Josefin sans', 'sans-serif'],
        alata: ['Alata'],
        rubik: ['Rubik Puddles', 'cursive']
      },
      LetterSpacing:{
        widest:'.3rem',
      },
      animation:{
        wiggle:'wiggle 4s linear'
      },
      keyframes:{
        wiggle:{
          '0%':{left: '-200px'},
          '100%':{left: '0px'},

        }
      }
    },
  },
  plugins: [],
}
