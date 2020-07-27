module.exports = {
  theme: {
    extend: {
      colors: {
        ...require('./utils/colors'),
      },
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ["./components/**/*.tsx", "./pages/**/*.tsx", "./styles/**/*.ts"],
  },
}
