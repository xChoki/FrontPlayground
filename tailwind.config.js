/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'maincolor': {
          100: '#1c1a30',
          200: '#2a2649',
          300: '#40396f',
        },
      },
    },
  },
  plugins: [],
}
