"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

/**
 * A customized button component for forms with user icon, built on top of ChadCN UI Button
 *
 * @component
 * @template {HTMLButtonElement} T - The HTML button element type
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes to apply to the button
 * @param {string} [props.title="Sign in / up"] - Title/tooltip text for the button
 * @param {React.ReactNode} [props.children="Sign in / up"] - Content to display inside the button
 * @param {React.Ref<HTMLButtonElement>} ref - Forwarded ref for the button element
 *
 * @extends {React.ComponentPropsWithoutRef<typeof Button>}
 *
 * @example
 * // Basic usage
 * <FormButton />
 *
 * @example
 * // Custom title and content
 * <FormButton title="Login" className="custom-class">
 *   Login to Account
 * </FormButton>
 *
 * @returns {JSX.Element} A styled button component with user icon
 */
const FormButton = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof Button>
>(
	(
		{ className, title = "Sign in / up", children = "Sign in / up", ...props },
		ref,
	) => (
		<Button
			type="button"
			variant="button-primary"
			size="button-primary"
			className={cn("button-primary", className)}
			aria-label={title}
			title={title}
			{...props}
			ref={ref}
		>
			<FontAwesomeIcon icon={faUser} className="button-primary__user-icon" />

			{children}
		</Button>
	),
);

/**
 * Display name for the FormButton component
 * @constant {string}
 */
FormButton.displayName = "FormButton";

export default FormButton;
