"use client";

import React from "react";
import "../../scss/components/Header/index.scss";
import { motion as m } from "framer-motion";

/**
 * Menu component for the header navigation
 *
 * @description This component renders the main navigation menu in the header.
 * It uses Framer Motion for smooth animations and interactions on menu items.
 * The menu is styled using BEM methodology and includes hover/tap animations
 * for better user interaction feedback.
 *
 * Features:
 * - Client-side rendered component ("use client" directive)
 * - Animated menu items using Framer Motion
 * - Hover and tap animations for interactive feedback
 * - BEM-styled classes for maintainable CSS
 *
 * @example
 * ```tsx
 * function Header() {
 *   return (
 *     <header>
 *       <Menu />
 *     </header>
 *   );
 * }
 * ```
 *
 * @returns {React.ReactElement} A navigation menu with animated list items
 */
function Menu() {
	return (
		<div className="header-menu">
			<ul className="header-menu__navigation">
				<m.li
					className="header-menu__navigation__li-items"
					initial={{ scale: 1 }}
					whileHover={{
						transition: {
							duration: 0.5,
							ease: "easeInOut",
						},
					}}
					whileTap={{ scale: 0.95 }}
				>
					Features
				</m.li>
			</ul>
		</div>
	);
}

export default Menu;
