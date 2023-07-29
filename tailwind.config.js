/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				violet: '#5964E0',
				lightViolet: '#939BF4',
				veryDarkBlue: '#19202D',
				midnight: '#121721',
				lightGrey: '#F4F6F8',
				gray: '#9DAEC2',
				darkGrey: '#6E8098',
			},
			backgroundImage: {
				'header-pattern': 'url("/assets/desktop/bg-pattern-header.svg")',
				'footer-pattern': 'url("/assets/desktop/bg-pattern-detail-footer.svg")',
			},
		},
	},
	plugins: [],
}
