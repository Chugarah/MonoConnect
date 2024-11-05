import React from "react";
import Menu from "@/app/components/header/Menu";
import NavGroup from "@/app/components/forms/NavGroup";
import MobileMenu from "@/app/components/MobileMenu";

function Header() {
	return (
		<header aria-label="Navigation & Logo" className="header-wrapper">
			<nav className="header" aria-label="Menu Navigation">
				{/* Use FontAwesome React Component */}
				<div className="header__logo" />
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
