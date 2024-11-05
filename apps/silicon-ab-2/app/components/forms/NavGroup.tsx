import React from "react";
import { Switch } from "@/app/components/forms/switch";
import FormButton from "@/app/components/forms/FormButton";

function NavGroup() {
	return (
		<div className="header__nav-group">
			{/* Theme Switch */}
			<span className="header__nav-group__text-span"> Dark Mode </span>
			<Switch />
			{/* Sign in Button */}
			<FormButton className="header__nav-group__btn-sign-in" />

			<a className="header__nav-group__bars" href="/" title="Mobile Menu">
				<i className="fa-solid fa-bars header__nav-group__bars__icon" />
			</a>
		</div>
	);
}

export default NavGroup;
