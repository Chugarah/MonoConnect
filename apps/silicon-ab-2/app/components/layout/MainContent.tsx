"use client";

import { memo } from "react";

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
