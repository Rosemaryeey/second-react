/** @type {import('tailwindcss').Config} */

// const plugin = ("tailwindcss/plugin")
// const Myclass = plugin(function ({addutilities}) {addutilities ({
//   ".rotation-y-180":{
//     transform:"rotateY(180deg)"
//   }
// })})
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
