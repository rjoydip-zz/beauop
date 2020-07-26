const colors = require('./utils/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
  plugins: [
    function ({ addBase, config }) {
      addBase({
        body: {
          color: config('theme.colors.black'),
          backgroundColor: config('theme.colors.white'),
        },
        '@screen dark': {
          body: {
            color: config('theme.colors.white'),
            backgroundColor: config('theme.colors.black'),
          },
        },
      })
    },
  ],
}
