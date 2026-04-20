module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme:{
    extend:{
         fontFamily: {
            'cormorant': ['Cormorant Garamond', 'serif'],
        }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated'),
  ],
}