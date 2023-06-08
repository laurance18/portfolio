/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'in-progress': "url('./assets/in_progress.jpg')",
      },
      colors: {
        'primary': '#1A1A2E',
        'secondary': '#2E2E42',
      },
    },
  },
  plugins: [],
}

