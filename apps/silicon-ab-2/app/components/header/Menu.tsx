"use client";

import React from "react";
import "../../scss/components/Header/index.scss";
import { motion as m } from "framer-motion";

function Menu() {
	return (
		<div className="header-menu">
			<ul className="header-menu__navigation">
				<m.li
					className="header-menu__navigation__li-items"
					initial={{ scale: 1 }}
					whileHover={{
						transition: {
							duration: 0.2,
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
