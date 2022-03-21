module.exports = {
  content: ['./docs/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['neue-haas-grotesk-text', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
