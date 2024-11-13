import type { Metadata } from "next";
import "@scss/main.scss";
import { ThemeProvider } from "@/app/contexts/theme/ThemeProvider";

export const metadata: Metadata = {
	title: "Silicon AB 2.0.0",
	description: "Manage All Your Money in One App",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<div className="skeleton-wrapper">
					<ThemeProvider>{children}</ThemeProvider>
				</div>
			</body>
		</html>
	);
}
