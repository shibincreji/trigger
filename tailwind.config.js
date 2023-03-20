const materialColor = require("./src/utils/material.colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: materialColor.COLORS,
			fontFamily: {
				primary: ["Google Sans", "sans-serif", "Roboto"],
				display: ["Google Sans Display", "sans-serif", "Roboto"],
			},
			container: {
				center: true,
				padding: "2rem",
			},
		},
	},
	variants: {
		extend: {
			space: ["hover", "focus"],
			padding: ["hover, group-hover"],
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
