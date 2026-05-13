/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF3333',      // Vibrant Red
        dark: '#0F0F0F',         // Deep Black
        accent: '#FF0000',       // Bright Red
        darkRed: '#CC0000',      // Dark Red
      },
      backgroundImage: {
        'gym-hero': "linear-gradient(135deg, #0F0F0F 0%, #FF3333 100%)",
        'red-gradient': "linear-gradient(90deg, #FF3333 0%, #FF0000 100%)",
        'vibrant': "linear-gradient(135deg, #0F0F0F 0%, #FF3333 50%, #FF0000 100%)",
      }
    },
  },
  plugins: [],
}
