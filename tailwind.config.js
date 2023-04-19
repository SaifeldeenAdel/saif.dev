/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: {
					1: "#1f2425",
					2: "#3F4E4F",
				},
				primary: "#f3f1ec",
				secondary: "#ffbf8b",
			},
			fontFamily: {
				sans: ["Josefin Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
