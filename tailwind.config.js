/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        poppin: ['Poppins', 'sans-serif'],
      },
      boxShadow:{
        '3xl': '7.77035px 7.77035px 11.6555px rgba(0, 0, 0, 0.15)',
        '4xl': '4px 4px 64px rgba(0, 0, 0, 0.1)',
        '5xl': '2px 2px 32px rgba(0, 0, 0, 0.1)',
        '6xl': '4.68154px 4.68154px 7.02232px rgba(0, 0, 0, 0.15)',
        '7xl': '0px 3.55556px 10.6667px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
