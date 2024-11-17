import type { Metadata } from "next";
import "@scss/main.scss";
import Header from "@/app/components/header/Header";
import MainContent from "@/app/components/layout/MainContent";
import { ThemeProvider } from "@/app/contexts/theme/ThemeProvider";
import Footer from "@/app/components/Footer";
import { FaqProvider } from "@/app/contexts/faqAccordion/FaqProvider";
import { TestimonialsProvider } from "@/app/contexts/testimonials/TestimonialsProvider";

/**
 * Metadata configuration for the application
 * @type {Metadata}
 * @property {string} title - The title of the application shown in browser tabs and search results
 * @property {string} description - A brief description of the application for SEO purposes
 */
export const metadata: Metadata = {
	title: "Silicon AB 2.0.0",
	description: "Manage All Your Money in One App",
};

/** Inspired and redid the core of how we load in pages and also our
 * Providers, took quite some learning from the video below
 * https://www.youtube.com/watch?v=Zq5fmkH0T78
 * Revalidation time in seconds for static page regeneration
 * @constant {number}
 */
export const revalidate = 3600;

/**
 * Root layout component that wraps the entire application
 * This component provides the base structure and context providers for all pages
 *
 * @component
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to be rendered within the layout
 * @returns {JSX.Element} The root layout structure with all necessary providers and components
 *
 * @remarks
 * The layout includes:
 * - Theme management through ThemeProvider
 * - FAQ data management through FaqProvider
 * - Testimonials data management through TestimonialsProvider
 * - Basic page structure with header, main content, and footer
 *
 * @example
 * ```tsx
 * <RootLayout>
 *   <HomePage />
 * </RootLayout>
 * ```
 */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="skeleton-wrapper">
			<ThemeProvider>
				<FaqProvider>
					<TestimonialsProvider>
						<Header />
						<MainContent>{children}</MainContent>
						<Footer />
					</TestimonialsProvider>
				</FaqProvider>
			</ThemeProvider>
		</div>
	);
}
