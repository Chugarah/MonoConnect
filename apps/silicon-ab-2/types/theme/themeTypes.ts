import type { Button } from "@/components/ui/button";
import type { IconDefinition } from "@fortawesome/free-regular-svg-icons";

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
export interface ThemeImagesFiles {
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
	fill?: boolean;
}

export interface IconFAProps {
	icon: IconDefinition;
	classNames: string;
	title?: string;
}

/// Used AI Phind with this one 100%
export interface FormButtonIconProps
	extends React.ComponentPropsWithoutRef<typeof Button> {
	icon?: IconDefinition;
	iconPosition?: "left" | "right" | "hidden" | "icon-only";
	iconClassName?: string;
}

// Got inspired by AI, to create an BaseImage interface that
// I can use it other type declarations
export interface BaseImage {
	id?: string;
	name: string;
	src: string;
	width?: number;
	height?: number;
	alt: string;
	fill?: boolean;
}

export interface CompanyLogo extends BaseImage {
	/// Optional if we need to change image in dark mode theme
	darkSrc?: string;
}

export type CompanyLogos = {
	Logos: CompanyLogo[];
};

/// AI Generated from Phind
export interface UseRepeatedIconsProps extends Omit<IconFAProps, "title"> {
	count: number;
	titlePrefix?: string;
}
