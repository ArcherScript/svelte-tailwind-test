/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,js,ts,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
