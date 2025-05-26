// module.exports = {
//   content: [
//     './src/**/*.{js,ts,jsx,tsx}',
//     './public/index.html',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         mint: '#A8FFF0', // Mint from branding
//         purple: '#8B4DFF', // Purple from branding
//         gray: '#BDBDBD', // Gray from branding
//         pink: '#F7C6FF', // Pink from branding
//         // Add more as needed
//       },
//     },
//   },
//   plugins: [],
// }; 

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        mint: '#00FF00',   // bright green for testing
        purple: '#800080', // strong purple
        gray: '#808080',   // strong gray
        pink: '#FF69B4',   // hot pink
      },
    },
  },
  plugins: [],
};