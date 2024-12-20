import React from "react";
import { Switch } from "@/app/components/forms/switch";
import ButtonForm from "@/app/components/forms/ButtonForm";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function NavGroup() {
	return (
		<div className="header__nav-group">
			{/* Theme Switch */}
			<span className="header__nav-group__text-span"> Dark Mode </span>
			<Switch />
			{/* Sign in Button */}
			<ButtonForm
				title="Sign up / Sign in"
				className="button-primary"
				iconPosition="left"
				icon={faUser}
				size="button-primary"
				variant="button-primary"
			/>
		</div>
	);
}

export default NavGroup;
