/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      textUnderlineOffset: {
        10: '15px', // Add a custom value for more space
      },
      fontFamily: {
        customFont: ['"mid"', 'sans-serif'],
       comforter: ['Comforter Brush', 'cursive'],
      unlock: ['Unlock', 'cursive'],
      inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        
        'medium': '500',  // Adds the medium font weight
      },
      colors: { // Use "colors" instead of "color"
        bray:'#263238',// Your custom color
        cyan:'#88B9E1',
        ble:'#6497B1',
        whte:'#000000',
        blk:'#00000000',
        drk:'#191A19',
       
        lgt:'#00000000',
        silver:'#F5F7FA',
        parrot:'#4CAF4F',
      },
    
    },
  },
};
