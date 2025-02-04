/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme('font-serif'),
            '*': {
              margin: 0,
            },
          },
        },
      }),
    },
  },
};
