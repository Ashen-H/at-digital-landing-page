/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4c40f7',      // Bluish Purple
        'secondary': '#fb8f2d',    // Yuzu Jam
        'analogous1': '#6b4ef9',   // Ice Ice Baby
        'analogous2': '#42d7e4',   // Rich Blue
        'triadic': '#4936b1',      // Electric Indigo
        'dark': '#151515',         // Interstellar Blue
        'text': '#292f2f',         // Tricorn Black
        'text-light': '#9c9991',   // Acier Light
        'text-subtle': '#9c9881',  // Acier Subtle
        'accent-white': '#f2f2fe',  // Wizard White
        'accent-yarn': '#fff8e0',   // Cuddly Yarn
        'error': '#ff0000',        // Hornet Sting
        'success': '#00ff00',      // Frog
      }
    },
  },
  plugins: [],
}