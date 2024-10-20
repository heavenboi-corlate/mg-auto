/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      sans: [
        "Poppins",
        "sans-serif"
      ]
    },
  },
  plugins: [],
}

