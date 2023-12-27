/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				obscure: '#121212',
				canvas: '#fdfdfb',
				ash: '#4A4C52',
			},
			fontFamily: {
				'sans': ['"Inter Tight"', ...defaultTheme.fontFamily.sans],
			  },
		},
	},
	plugins: [],
	darkMode : 'class'
}
