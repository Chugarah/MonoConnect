import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
function MobileMenu() {
	return (
		<>
			<Link href="/" className="mobile-menu" title="Menu Link">
				<FontAwesomeIcon icon={faBars} title="Menu Icon" />
			</Link>
		</>
	);
}

export default MobileMenu;
