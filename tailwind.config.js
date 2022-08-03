module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)'},
          '100%': { transform: 'rotate(180deg)'},
        },
        slide: {
          '0%': { transform: 'translateX(50rem)'},
          '100%': { transform: 'translateX(0px)'},
        },
      },
       animation: {
        rotate: 'rotate 0.5s ease-in-out',
        slide: 'slide 0.1s ease-in-out',

      },
    },
    
    screens: {
      'md': '768px',
      'lg': '1025px',
    },
  },
  plugins: [],
}

