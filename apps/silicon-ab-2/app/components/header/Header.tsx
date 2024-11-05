import React from "react";
import Menu from "@/app/components/header/Menu";
import NavGroup from "@/app/components/forms/NavGroup";
import MobileMenu from "@/app/components/MobileMenu";
import ThemeImages from "@/app/components/common/ThemeImages";
import LogoImages from "@/app/components/header/LogoImages";

/**
 * Header component that contains the main navigation and branding elements
 *
 * @description This component renders the main header of the application, including:
 * - The company logo (theme-aware)
 * - Main navigation menu
 * - User controls (sign up, theme switcher)
 * - Mobile-responsive menu
 *
 * The header uses semantic HTML elements and includes proper ARIA labels
 * for accessibility. It also implements theme-aware logo switching through
 * the LogoImages component.
 *
 * @example
 * ```tsx
 * function App() {
 *   return (
 *     <div>
 *       <Header />
 *       <main>Content</main>
 *     </div>
 *   );
 * }
 * ```
 *
 * @returns {React.ReactElement} The header component with navigation and branding
 */
function Header() {
	return (
		<header aria-label="Navigation & Logo" className="header-wrapper">
			<nav className="header" aria-label="Menu Navigation">
				<LogoImages
					lightSrc={ThemeImages.logo.light}
					darkSrc={ThemeImages.logo.dark}
					alt="Logo"
					width={140}
					height={52}
					className="header__logo"
				/>

				<Menu />
				<NavGroup />
				<MobileMenu />
			</nav>
		</header>
	);
}

export default Header;
