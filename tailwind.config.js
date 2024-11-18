/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
      },
      height: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
        'screen-4/5': '80vh',
        'dynamic': 'calc(100vh - 4rem)',
      },
      minHeight: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
        'screen-4/5': '80vh',
        'dynamic': 'calc(100vh - 4rem)',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideIn: {
          from: { transform: "translateY(-10px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        scaleUp: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out",
        slideIn: "slideIn 0.3s ease-out",
        scaleUp: "scaleUp 0.3s ease-out",
      },
    },
  },
  plugins: [],
}
