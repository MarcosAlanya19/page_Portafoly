/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./img/wave.svg')",
        'proyect-img': "url('./img/AppComida.jpg')"
      },
      colors: {
        'primario': '#e8505b',
        'secundario': '#455a64',
      }
    },
  },
  plugins: [],
}
