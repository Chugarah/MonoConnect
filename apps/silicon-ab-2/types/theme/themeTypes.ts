/**
 * @typedef {"light" | "dark"} Theme
 * Represents the theme type which can either be "light" or "dark".
 */
export type Theme = "light" | "dark";

/**
 * @interface ThemeContextType
 * @property {Theme} theme - The current theme, either "light" or "dark".
 * @property {() => void} toggleTheme - Function to toggle between light and dark themes.
 * Represents the context type for the theme, including the current theme and a function to toggle the theme.
 */
export interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

export interface ThemeImages {
	light: string;
	dark: string;
}

export interface ThemeImageProps {
	lightSrc: string;
	darkSrc: string;
	alt: string;
	width?: number;
	height?: number;
	className?: string;
}
