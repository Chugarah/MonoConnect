// Global type augmentations
declare global {
	interface Window {
		// Add custom window properties
	}
}

// Module declarations
declare module "*.scss" {
	const styles: { [className: string]: string };
	export default styles;
}

declare module "*.sass" {
	const styles: { [className: string]: string };
	export default styles;
}

declare module "*.css" {
	const styles: { [className: string]: string };
	export default styles;
}

declare module "*.woff2" {
	const content: string;
	export default content;
}

declare module "*.ttf" {
	const content: string;
	export default content;
}

export {};
