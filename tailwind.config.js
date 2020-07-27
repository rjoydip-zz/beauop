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
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './pages/**/*.{ts,tsx,css}',
      './components/**/*.{ts,tsx,css}',
      'tailwind.css',
    ],
  },
}
