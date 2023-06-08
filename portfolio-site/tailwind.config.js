/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'in-progress': "url('./assets/in_progress.jpg')",
      }
    },
  },
  plugins: [],
}

