// Using ChadCN UI and 100% AI Generated from Phind
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

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
FormButton.displayName = "FormButton";

export default FormButton;
