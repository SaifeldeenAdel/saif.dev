/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: {
					1: "#1a1d1f",
					2: "#101213",
				},
				primary: "#f3f1ec",
				secondary: "#FFC085",
			},
			fontFamily: {
				sans: ["Josefin Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
