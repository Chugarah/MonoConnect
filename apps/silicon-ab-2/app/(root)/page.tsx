import AppDescription from "@/app/components/main/AppDescription";
import AppFeatures from "@/app/components/main/AppFeatures";
import ClientsAreLovingOurApp from "@/app/components/main/ClientsAreLovingOurApp";
import CompanyLogos from "@/app/components/main/CompanyLogos";
import Faq from "@/app/components/main/FAQ/Faq";
import HowDoesItWorks from "@/app/components/main/HowDoesItWorks";
import Subscribe from "@/app/components/main/Subscribe";

/**
 * HomePage component that serves as the main landing page of the application.
 * This component assembles and renders all the major sections of the homepage in a specific order.
 *
 * @component
 * @returns {JSX.Element} The complete homepage layout with all sections
 *
 * @remarks
 * The component renders the following sections in order:
 * - CompanyLogos: Displays partner/client company logos
 * - AppFeatures: Showcases main features of the application
 * - HowDoesItWorks: Explains the application's workflow
 * - AppDescription: Provides detailed description of the app
 * - ClientsAreLovingOurApp: Shows testimonials section
 * - FAQ: Frequently asked questions section
 * - Subscribe: Newsletter subscription section
 *
 * Each section is implemented as a separate component for better maintainability
 * and code organization. The sections are wrapped in a React Fragment to avoid
 * unnecessary DOM nodes.
 *
 * @example
 * ```tsx
 * // In _app.tsx or similar
 * <RootLayout>
 *   <HomePage />
 * </RootLayout>
 * ```
 */
export default function HomePage() {
	return (
		<>
			<CompanyLogos />
			<AppFeatures />
			<HowDoesItWorks />
			<AppDescription />
			<ClientsAreLovingOurApp />
			<Faq />
			<Subscribe />
		</>
	);
}
