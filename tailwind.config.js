/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
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
				"fade-in": "fadeIn 0.5s ease-in forwards",
				"fade-out": "fadeOut 0.5s ease-out forwards",
				scaleUp: "scaleUp 0.3s ease-in-out",
			},
		},
	},
	plugins: [],
};
