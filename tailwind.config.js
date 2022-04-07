module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'accent': "rgb(89, 110, 235)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}