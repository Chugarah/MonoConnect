import type React from "react";

function MainContent({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="main-wrapper" aria-label="Main Section of the page">
			Main :)
			{children}
		</main>
	);
}

export default MainContent;
