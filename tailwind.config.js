/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Para el cuerpo del texto
        heading: ['Montserrat', 'sans-serif'], // Para los títulos
      },
      colors: {
        'principal': '#080A49',
        'secundario': '#DD492D',
      },
    },
  },
  plugins: [],
}
