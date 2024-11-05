/**
 * Theme type representing the available theme options
 *
 * @typedef {"light" | "dark"} Theme
 * @description Represents the theme type which can either be "light" or "dark".
 * Used throughout the application to maintain consistent theming.
 *
 * @example
 * ```ts
 * const currentTheme: Theme = "light";
 * ```
 */
export type Theme = "light" | "dark";

/**
 * Context type for theme management
 *
 * @interface ThemeContextType
 * @description Represents the context type for theme management, providing the current theme state
 * and methods to modify it.
 *
 * @property {Theme} theme - The current active theme ("light" or "dark")
 * @property {() => void} toggleTheme - Function to toggle between light and dark themes
 *
 * @example
 * ```tsx
 * const themeContext: ThemeContextType = {
 *   theme: "light",
 *   toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
 * };
 * ```
 */
export interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

/**
 * Interface for theme-specific image sources
 *
 * @interface ThemeImages
 * @description Defines the structure for theme-dependent image sources, allowing different
 * images to be displayed based on the current theme.
 *
 * @property {string} light - Image source URL for light theme
 * @property {string} dark - Image source URL for dark theme
 *
 * @example
 * ```ts
 * const logoImages: ThemeImages = {
 *   light: "/images/logo-light.png",
 *   dark: "/images/logo-dark.png"
 * };
 * ```
 */
export interface ThemeImages {
	light: string;
	dark: string;
}

/**
 * Props interface for theme-aware image components
 *
 * @interface ThemeImageProps
 * @description Defines the properties required for components that render different images
 * based on the current theme.
 *
 * @property {string} lightSrc - Source URL for the image in light theme
 * @property {string} darkSrc - Source URL for the image in dark theme
 * @property {string} alt - Alternative text for accessibility
 * @property {number} [width] - Optional width of the image in pixels
 * @property {number} [height] - Optional height of the image in pixels
 * @property {string} [className] - Optional CSS class name for styling
 *
 * @example
 * ```tsx
 * const imageProps: ThemeImageProps = {
 *   lightSrc: "/images/icon-light.png",
 *   darkSrc: "/images/icon-dark.png",
 *   alt: "Theme-aware icon",
 *   width: 100,
 *   height: 100
 * };
 * ```
 */
export interface ThemeImageProps {
	lightSrc: string;
	darkSrc: string;
	alt: string;
	width?: number;
	height?: number;
	className?: string;
}
