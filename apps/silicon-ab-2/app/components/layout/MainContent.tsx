import AppFeatures from "@/app/components/main/AppFeatures";
import CompanyLogos from "@/app/components/main/CompanyLogos";
import HowDoesItWorks from "@/app/components/main/HowDoesItWorks";
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
				<AppFeatures />
				<HowDoesItWorks />
			</main>
			{children}
		</>
	);
}

export default MainContent;
