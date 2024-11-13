import AppDescription from "@/app/components/main/AppDescription";
import AppFeatures from "@/app/components/main/AppFeatures";
import ClientsAreLovingOurApp from "@/app/components/main/ClientsAreLovingOurApp";
import CompanyLogos from "@/app/components/main/CompanyLogos";
import Faq from "@/app/components/main/Faq";
import HowDoesItWorks from "@/app/components/main/HowDoesItWorks";
import { TestimonialsProvider } from "@/app/contexts/testimonials/TestimonialsProvider";
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
				<AppDescription />
				{/* Testimonials Data are needed for the moment in MainContent only*/}
				<TestimonialsProvider>
					<ClientsAreLovingOurApp />
				</TestimonialsProvider>
				<Faq />
			</main>
			{children}
		</>
	);
}

export default MainContent;
