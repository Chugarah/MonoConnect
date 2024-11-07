/**
 * Object containing theme-specific image paths for various UI elements
 * @constant
 * @type {Object}
 * @property {Object} logo - Logo image paths
 * @property {string} logo.light - Path to light theme logo
 * @property {string} logo.dark - Path to dark theme logo
 * @property {Object} appStore - Apple App Store button image paths
 * @property {string} appStore.light - Path to light theme App Store button
 * @property {string} appStore.dark - Path to dark theme App Store button
 * @property {Object} androidStore - Google Play Store button image paths
 * @property {string} androidStore.light - Path to light theme Play Store button
 * @property {string} androidStore.dark - Path to dark theme Play Store button
 */
const ThemeImagesFiles = {
	logo: {
		light: "/svg/logo.svg",
		dark: "/svg/logo-dark.svg",
	},
	appStore: {
		light: "/images/store-buttons/app-store-btn-group.svg",
		dark: "/images/store-buttons/app-apple-store-btn-group-dark.svg",
	},
	androidStore: {
		light: "/images/store-buttons/app-android-store-btn-group.svg",
		dark: "/images/store-buttons/app-android-store-btn-group-dark.svg",
	},
	heroPhone1: {
		light: "/images/mobile-phones/iphone-1.svg",
		dark: "/images/mobile-phones/iphone-1.svg",
	},
	heroPhone2: {
		light: "/images/mobile-phones/iphone-2.svg",
		dark: "/images/mobile-phones/iphone-2.svg",
	},
} as const;

export default ThemeImagesFiles;
