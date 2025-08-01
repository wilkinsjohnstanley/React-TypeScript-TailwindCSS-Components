// tailwind.config.js

import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair: ['Playfair Display', 'serif']
      },

      
      keyframes:{
        marquee: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-50%) '},
        },
      },
      animation: {
        marquee:'marquee 40s linear infinite'
      }




    },
  },
         plugins: [require('tailwindcss-motion')], 
}
