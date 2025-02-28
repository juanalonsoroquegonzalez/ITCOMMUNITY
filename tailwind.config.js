/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],  // Fuente predeterminada para 'font-sans'
        nunito: ['Nunito', 'sans-serif'],  // Añadido para usar 'Nunito'
      },
      colors: {
        'principal': '#080A49',
        'secundario': '#DD492D',
      },
    },
  },
  plugins: [],
}
