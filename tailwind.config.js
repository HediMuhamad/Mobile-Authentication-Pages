module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'background-pattern': "url('../public/assets/pattern.png')"
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
