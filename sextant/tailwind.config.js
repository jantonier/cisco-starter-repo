/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'arima': ['"Arima"', 'cursive'],
        'edu': ['"Edu VIC WA NT Beginner"', 'cursive'],
      }
    },
  },
  plugins: [],
}
