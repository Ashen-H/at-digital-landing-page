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
      },
      fontSize: {
        title: ["24px", { lineHeight: "32px" }],
        heading: ["58px", { lineHeight: "73px" }],
        paragraph: ["22px", { lineHeight: "32px" }],
        subtitle: ["36px", { lineHeight: "46px" }],
        para: ["16px", { lineHeight: "19.36px" }],
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
