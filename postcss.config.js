module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: { preset: 'default' },
    ...(process.env.NODE_ENV === "production") ? {'@fullhuman/postcss-purgecss': {
      content: [
        './pages/**/*.{ts,tsx,css}',
        './components/**/*.{ts,tsx,css}',
        'tailwind.css',
      ],
    }}: {},
  },
}
