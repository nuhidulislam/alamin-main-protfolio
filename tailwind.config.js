/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // React component ফাইলগুলোর path
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fb1359",
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#fb1359",
//       },
//     },
//   },
//   plugins: [],
// };
