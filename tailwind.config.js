module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate(50rem)' },
          '100%': { transform: 'translate(0rem)' },
        }
      },
       animation: {
        wiggle: 'wiggle 0.1s ease-in-out',
      },
    },
    
    screens: {
      'md': '768px',
      'lg': '1025px',
    },
  },
  plugins: [],
}

