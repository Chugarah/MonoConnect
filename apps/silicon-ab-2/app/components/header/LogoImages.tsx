"use client";
import { useThemeImages } from "@/app/contexts/theme/hooks/useThemeImage";
import type { ThemeImageProps } from "@/types/theme/themeTypes";
import Image from "next/image";

/**
 * Component for rendering theme-aware logo images
 *
 * @description This component renders a logo image that automatically switches between
 * light and dark variants based on the current theme. It uses the useThemeImages hook
 * to determine which image variant to display and wraps Next.js Image component for
 * optimal image loading.
 *
 * @example
 * ```tsx
 * <LogoImages
 *   lightSrc="/images/logo-light.svg"
 *   darkSrc="/images/logo-dark.svg"
 *   alt="Company Logo"
 *   width={140}
 *   height={52}
 *   className="header-logo"
 * />
 * ```
 *
 * @param {Object} props - Component props
 * @param {string} props.lightSrc - Source URL for the light theme variant of the logo
 * @param {string} props.darkSrc - Source URL for the dark theme variant of the logo
 * @param {string} props.alt - Alt text for the image for accessibility
 * @param {number} props.width - Width of the image in pixels
 * @param {number} props.height - Height of the image in pixels
 * @param {string} [props.className] - Optional CSS class name for styling
 *
 * @returns {React.ReactElement} A div containing the theme-aware logo image
 *
 * @see {@link useThemeImages} For the hook handling theme-based image switching
 * @see {@link ThemeImageProps} For the type definition of the props
 */
function LogoImages({
	lightSrc,
	darkSrc,
	alt,
	width,
	height,
	className,
}: ThemeImageProps) {
	const imageSrc = useThemeImages({ light: lightSrc, dark: darkSrc });

	return (
		<div className={className}>
			<Image src={imageSrc} alt={alt} width={width} height={height} priority />
		</div>
	);
}

export default LogoImages;
