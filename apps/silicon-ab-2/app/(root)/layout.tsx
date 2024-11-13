import type { Metadata } from "next";
import "@scss/main.scss";
import Header from "@/app/components/header/Header";
import MainContent from "@/app/components/layout/MainContent";
import { ThemeProvider } from "@/app/contexts/theme/ThemeProvider";

export const metadata: Metadata = {
	title: "Silicon AB 2.0.0",
	description: "Manage All Your Money in One App",
};

export const revalidate = 3600;
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="skeleton-wrapper">
			<ThemeProvider>
				{/*  Header & Navigation Inspired by Hans */}
				<Header />
				{/* Main Content */}
				<MainContent>{children}</MainContent>
				{/* Footer Content */}
				{/* <Footer /> */}
			</ThemeProvider>
		</div>
	);
}
