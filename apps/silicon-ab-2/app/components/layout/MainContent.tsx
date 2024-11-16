import AppDescription from "@/app/components/main/AppDescription";
import AppFeatures from "@/app/components/main/AppFeatures";
import ClientsAreLovingOurApp from "@/app/components/main/ClientsAreLovingOurApp";
import CompanyLogos from "@/app/components/main/CompanyLogos";
import Faq from "@/app/components/main/FAQ/Faq";
import HowDoesItWorks from "@/app/components/main/HowDoesItWorks";
import Subscribe from "@/app/components/main/Subscribe";
import { FaqProvider } from "@/app/contexts/faqAccordion/FaqProvider";
import { TestimonialsProvider } from "@/app/contexts/testimonials/TestimonialsProvider";
import type React from "react";

/**
 * MainContent Component
 *
 * @component
 * @description The main content section of the application that orchestrates the layout
 * of various major components. It includes company logos, app features, how-it-works section,
 * app description, testimonials (wrapped in TestimonialsProvider), and FAQ section.
 *
 * The component uses semantic HTML with proper ARIA labels for accessibility and follows
 * a logical content hierarchy. The testimonials section is specifically wrapped in a
 * TestimonialsProvider to manage testimonial-related state and data fetching.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to be rendered after the main content
 *
 * @example
 * ```jsx
 * <MainContent>
 *   <AdditionalContent />
 * </MainContent>
 * ```
 *
 * @returns {JSX.Element} A main section containing various app components and child elements
 */
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
				<TestimonialsProvider>
					<ClientsAreLovingOurApp />
				</TestimonialsProvider>
				<FaqProvider>
					<Faq />
				</FaqProvider>
				<Subscribe />
			</main>
			{children}
		</>
	);
}

export default MainContent;
