/**
 * @fileoverview ButtonForm component that combines text with Font Awesome icons in a customizable button.
 * Built on top of ChadCN UI Button component with Font Awesome icon integration.
 * @module ButtonForm
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
 * @component
 * @since 1.0.0
 *
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS classes to apply to the button
 * @param {string} [props.title="Sign in / up"] - The title/tooltip text for the button
 * @param {React.ReactNode} [props.children="Sign in / up"] - The text content of the button
 * @param {IconDefinition} [props.icon=faUser] - The Font Awesome icon to display
 * @param {"left" | "right" | "hidden"} [props.iconPosition="left"] - The position of the icon relative to the text
 * @param {string} [props.iconClassName] - Additional CSS classes to apply to the icon
 * @param {React.Ref<HTMLButtonElement>} ref - Forward ref for the button element
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
 * // Button with custom styling
 * <ButtonForm
 *   className="my-custom-class"
 *   iconClassName="icon-custom-class"
 *   icon={faUser}
 * >
 *   User Profile
 * </ButtonForm>
 *
 * @returns {JSX.Element} A styled button component with optional icon
 *
 * @see {@link https://fontawesome.com/icons Font Awesome Icons}
 * @see {@link Button} ChadCN UI Button component
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
			...props
		},
		ref,
	) => (
		<Button
			type="button"
			variant="button-primary"
			size="button-primary"
			className={cn(
				"button-primary",
				iconPosition === "right" ? "flex-row-reverse" : "flex-row",
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
					classNames={cn("button-primary__icon", iconClassName)}
					title={title}
				/>
			)}
			<span>{children}</span>
		</Button>
	),
);

ButtonForm.displayName = "FormButton";

export default ButtonForm;
