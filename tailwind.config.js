module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			borderWidth: {
				1: '1px',
			},
			fontFamily: {
				logo: ['Roboto Slab', 'serif'],
				body: ['Inter', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
