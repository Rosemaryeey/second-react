/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js", // Add this line for Preline
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ("preline/plugin"), // Add this line to include Preline's plugin
  ],
};

// const plugin = ("tailwindcss/plugin")
// const Myclass = plugin(function ({addutilities}) {addutilities ({
//   ".rotation-y-180":{
//     transform:"rotateY(180deg)"
//   }
// })})
