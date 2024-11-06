import React from "react";
import Menu from "@/app/components/header/Menu";
import NavGroup from "@/app/components/forms/NavGroup";
import MobileMenu from "@/app/components/MobileMenu";
import ThemeImages from "@/app/components/common/ThemeImages";
import LogoImages from "@/app/components/header/LogoImages";
import Hero from "@/app/components/hero/Hero";

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
 * @component
 * @see {@link LogoImages} For the theme-aware logo component
 * @see {@link Menu} For the main navigation menu component
 * @see {@link NavGroup} For user controls like signup and theme switching
 * @see {@link MobileMenu} For the responsive mobile menu component
 * @see {@link Hero} For the hero section component
 *
 * @returns {React.ReactElement} The header component with navigation and branding
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Header />
 *
 * // Within a layout
 * <div className="app-layout">
 *   <Header />
 *   <main>{children}</main>
 *   <Footer />
 * </div>
 * ```
 *
 * @accessibility
 * - Uses semantic HTML5 <header> and <nav> elements
 * - Includes ARIA labels for navigation regions
 * - Supports keyboard navigation
 * - Implements proper heading hierarchy
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
			<Hero />
		</header>
	);
}

export default Header;
