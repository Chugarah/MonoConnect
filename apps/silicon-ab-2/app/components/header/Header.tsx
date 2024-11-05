import React from "react";
import Menu from "@/app/components/header/Menu";
import NavGroup from "@/app/components/forms/NavGroup";
import MobileMenu from "@/app/components/MobileMenu";
import ThemeImages from "@/app/components/common/ThemeImages";
import LogoImages from "@/app/components/header/LogoImages";

function Header() {
	return (
		<header aria-label="Navigation & Logo" className="header-wrapper">
			<nav className="header" aria-label="Menu Navigation">
				{/* Use FontAwesome React Component */}
				<LogoImages
					lightSrc={ThemeImages.logo.light}
					darkSrc={ThemeImages.logo.dark}
					alt="Logo"
					width={140}
					height={52}
					className="header__logo"
				/>

				<Menu />
				{/* Sign Up and Theme Switcher */}
				<NavGroup />
				{/* Mobile Menu */}
				<MobileMenu />
			</nav>
		</header>
	);
}

export default Header;
