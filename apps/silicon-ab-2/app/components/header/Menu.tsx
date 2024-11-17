"use client";

import React from "react";
import "../../scss/components/Header/index.scss";
import { motion as m } from "framer-motion";
import Link from "next/link";

/**
 * Menu component for the header navigation
 *
 * @component
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
 * @remarks
 * The menu items use Framer Motion's animation capabilities:
 * - Initial scale is set to 1
 * - Hover animations use easeInOut transition
 * - Tap animations scale down to 0.95
 *
 * The component follows BEM naming conventions for CSS classes:
 * - header-menu: Block
 * - header-menu__navigation: Element
 * - header-menu__navigation__li-items: Nested element
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
 * @see {@link https://www.framer.com/motion/} Framer Motion documentation
 * @see {@link http://getbem.com/} BEM methodology
 *
 * @returns {React.ReactElement} A navigation menu with animated list items containing Features and Contact links
 */
function Menu() {
	return (
		<div className="header-menu">
			<ul className="header-menu__navigation">
				<Link href="/">
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
				</Link>
				<Link href="/contact">
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
						Contact
					</m.li>
				</Link>
			</ul>
		</div>
	);
}

export default Menu;
