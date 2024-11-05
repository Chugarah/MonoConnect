"use client";
import { useThemeImages } from "@/app/contexts/theme/hooks/useThemeImage";
import type { ThemeImageProps } from "@/types/theme/themeTypes";
import Image from "next/image";

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
			<Image src={imageSrc} alt={alt} width={width} height={height} />
		</div>
	);
}

export default LogoImages;
