import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	variant?: "default" | "primary";
	error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, variant = "default", error, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					`
						/* Base input styles */
						flex h-10 w-full rounded-md border border-input bg-background
						px-3 py-2 text-base ring-offset-background file:border-0
						file:bg-transparent file:text-sm file:font-medium
						file:text-foreground placeholder:text-muted-foreground

						/* Focus states */
						focus-visible:outline-none focus-visible:ring-2
						focus-visible:ring-ring
						focus-visible:ring-offset-2

						/* Disabled states */
						disabled:cursor-not-allowed
						disabled:opacity-50 md:text-sm
					`,
					variant === "primary" &&
						`
						/* Layout and sizing */
						flex-grow border-grey-300 dark:border-theme-dark-cards-border
						rounded-l-lg rounded-r-none text-grey-500
						bg-theme-light-form-input-color dark:bg-theme-dark-form-input-color
						pl-[15%] font-Regular

						/* Setting Focus Primary */
						focus:border-theme-light-primary dark:focus:border-theme-dark-primary
						focus:border-2 focus-visible:ring-0 focus:outline-none focus-visible:ring-offset-0

						${
							error
								? `
            /* Setting Focus red color if we have an error */
            border-system-error dark:border-system-error
            focus:border-system-error
            dark:focus:border-system-error`
								: ""
						}
						`,

					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

export { Input };
