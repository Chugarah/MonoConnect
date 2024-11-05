import { useTheme } from "@/app/contexts/theme/hooks/useTheme";
import type { ThemeImages } from "@/types/theme/themeTypes";
import { useMemo } from "react";

/**
 * Custom hook to get the appropriate image based on the current theme
 *
 * @description This hook takes a ThemeImages object containing light and dark variants
 * of an image and returns the appropriate one based on the current theme.
 * It must be used within a ThemeProvider component.
 *
 * @example
 * ```tsx
 * const images = {
 *   light: "/images/logo-light.svg",
 *   dark: "/images/logo-dark.svg"
 * };
 *
 * function MyComponent() {
 *   const currentImage = useThemeImages(images);
 *   return <img src={currentImage} alt="Logo" />;
 * }
 * ```
 *
 * @param {ThemeImages} images - Object containing light and dark image variants
 * @returns {string} The image URL appropriate for the current theme
 *
 * @throws {Error} Throws an error if used outside of ThemeProvider
 *
 * @see {@link ThemeImages} For the type definition of the images parameter
 * @see {@link useTheme} For the underlying theme hook
 */
export function useThemeImages(images: ThemeImages) {
	const { theme } = useTheme();

	const currentImage = useMemo(() => {
		return theme === "light" ? images.light : images.dark;
	}, [theme, images]);

	return currentImage;
}
