module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			body: ["poppins"],
		},
		colors: {
			background: {
				light: "#f6f5f1",
				medium: "#f0ede6",
				dark: "#ddd7c6",
			},
			accent: {
				yellow: "#fdc20b",
				green: "#02a77f",
				purple: "#b65099",
			},
			text: {
				white: "#ffffff",
				dark: "#2d242a",
				red: '#fa1c1c'
			},
			tag: {
				neutral: "#e0dfdf",
				selected: "#2d242a",
			},
		},
		boxShadow: {
			inner: 'inset 0 3px 4px 0 rgba(0, 0, 0, 0.4)'
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
