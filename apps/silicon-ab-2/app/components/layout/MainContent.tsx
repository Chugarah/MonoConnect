"use client";

import { memo } from "react";

/**
 * MainContent component that wraps the main content area of the application
 * This component is memoized to prevent unnecessary re-renders
 *
 * @component
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to be rendered within the main content area
 * @returns {JSX.Element} The main content wrapper with children
 *
 * @example
 * ```tsx
 * <MainContent>
 *   <HomePage />
 * </MainContent>
 * ```
 */
const MainContent = memo(function MainContent({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="main-wrapper" aria-label="Main Section of the page">
			{children}
		</main>
	);
});

MainContent.displayName = "MainContent";

export default MainContent;
