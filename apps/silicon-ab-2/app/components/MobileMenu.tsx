import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function MobileMenu() {
	return (
		<>
			<a href="/" className="mobile-menu" title="Menu Link">
				<FontAwesomeIcon icon={faBars} title="Menu Icon" />
			</a>
		</>
	);
}

export default MobileMenu;
