import CompanyLogos from "@/app/components/main/CompanyLogos";
import type React from "react";

function MainContent({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<main className="main-wrapper" aria-label="Main Section of the page">
				<CompanyLogos />
			</main>
			{children}
		</>
	);
}

export default MainContent;
