/**
 * Got a lot of help to build this using AI Phind from the base examples in Chad CN UI Button to this component
 * @fileoverview ButtonForm component that combines text with Font Awesome icons in a customizable button.
 * Built on top of ChadCN UI Button component with Font Awesome icon integration.
 *
 * @module ButtonForm
 * @requires React
 * @requires @/components/ui/button
 * @requires @/app/components/common/IconFA
 * @requires @/lib/utils
 * @requires @fortawesome/free-regular-svg-icons
 * @requires @/types/theme/themeTypes
 */

"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { IconFA } from "@/app/components/common/IconFA";
import { cn } from "@/lib/utils";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import type { FormButtonIconProps } from "@/types/theme/themeTypes";

/**
 * A reusable button component that combines text with a Font Awesome icon.
 *
 * @component ButtonForm
 * @extends {React.ForwardRefExoticComponent<FormButtonIconProps>}
 *
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS classes to apply to the button
 * @param {string} [props.title="Sign in / up"] - The title/tooltip text for the button
 * @param {React.ReactNode} [props.children="Sign in / up"] - The text content of the button
 * @param {import('@fortawesome/fontawesome-svg-core').IconDefinition} [props.icon=faUser] - The Font Awesome icon to display
 * @param {'left' | 'right' | 'hidden' | 'icon-only'} [props.iconPosition="left"] - The position of the icon relative to the text
 * @param {string} [props.iconClassName] - Additional CSS classes to apply to the icon
 * @param {string} [props.variant] - The visual style variant of the button (e.g., "default", "destructive", "outline")
 * @param {string} [props.size="button-primary"] - The size variant of the button
 * @param {React.Ref<HTMLButtonElement>} ref - Forward ref for the button element
 *
 * @returns {JSX.Element} A styled button component with optional icon
 *
 * @example
 * // Basic usage with default icon
 * <ButtonForm>Sign in</ButtonForm>
 *
 * @example
 * // Custom icon positioned on the right
 * <ButtonForm
 *   icon={faLock}
 *   iconPosition="right"
 *   title="Secure Login"
 * >
 *   Login Securely
 * </ButtonForm>
 *
 * @example
 * // Icon-only button
 * <ButtonForm
 *   icon={faUser}
 *   iconPosition="icon-only"
 *   title="User Profile"
 * />
 *
 * @example
 * // Button with custom styling and variant
 * <ButtonForm
 *   className="my-custom-class"
 *   iconClassName="icon-custom-class"
 *   icon={faUser}
 *   variant="button-primary"
 * >
 *   User Profile
 * </ButtonForm>
 *
 * @see {@link FormButtonIconProps} For complete type definitions
 * @see {@link Button} For underlying button component
 * @see {@link IconFA} For icon component implementation
 */
const ButtonForm = React.forwardRef<HTMLButtonElement, FormButtonIconProps>(
	(
		{
			className,
			title = "Sign in / up",
			children = "Sign in / up",
			icon = faUser,
			iconPosition = "left",
			iconClassName,
			variant,
			size = "button-primary",
			...props
		},
		ref,
	) => (
		<Button
			type="button"
			variant={variant}
			size={iconPosition === "icon-only" ? "icon-primary" : size}
			className={cn(
				"button-primary",
				iconPosition === "right" ? "flex-row-reverse" : "flex-row",
				iconPosition === "icon-only" && "p-0",
				className,
			)}
			aria-label={title}
			title={title}
			{...props}
			ref={ref}
		>
			{iconPosition !== "hidden" && (
				<IconFA
					icon={icon}
					classNames={cn(
						"button-primary__icon",
						iconPosition === "icon-only" && "m-0",
						iconClassName,
					)}
					title={title}
				/>
			)}
			{iconPosition !== "icon-only" && <span>{children}</span>}
		</Button>
	),
);

ButtonForm.displayName = "FormButton";

export default ButtonForm;
