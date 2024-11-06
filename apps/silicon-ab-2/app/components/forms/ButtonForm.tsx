/// Used ChadCN UI Documentation and used 100& AI Phind helping me integrating FA-icon
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { IconFA } from "@/app/components/common/IconFA";
import { cn } from "@/lib/utils";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import type { FormButtonIconProps } from "@/types/theme/themeTypes";

/**
 * FormButtonIcon Component
 *
 * A reusable button component that combines text with an icon from Font Awesome.
 * The icon can be positioned either to the left or right of the text, or hidden completely.
 *
 * @component
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
 * ```jsx
 * <ButtonForm
 *   title="Login"
 *   icon={faUser}
 *   iconPosition="right"
 *   className="custom-class"
 * >
 *   Login
 * </ButtonForm>
 * ```
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
				"inline-flex items-center",
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
