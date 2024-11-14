export default {
	plugins: {
		"postcss-import": {
			sourceMap: true,
			path: ["./app/scss"],
		},
		"postcss-nesting": {
			sourceMap: true,
		},
		"tailwindcss/nesting": false,
		tailwindcss: {
			sourceMap: true,
			config: "./tailwind.config.ts",
		},
		autoprefixer: {
			sourceMap: true,
		},
	},
};
