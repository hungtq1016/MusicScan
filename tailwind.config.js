/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"]  ,
  theme: {
    extend: {
      colors: {
        'dark-slate-800': '#1a2038',
        'dark-slate-900': '#111427',
      },
    },
  },
  plugins: [],
}

