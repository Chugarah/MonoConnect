/// Used ChadCDN/UI and AI from Phind to construct this Component
"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import themeToggleService from "@/app/hooks/useThemeToggle";

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, title = "Theme Switch", ...props }, ref) => {
	const { isDark, themeChange } = themeToggleService();

	return (
		<SwitchPrimitives.Root
			className={cn("theme-switch__root", className)}
			checked={isDark}
			onCheckedChange={themeChange}
			aria-label={title}
			title={title}
			{...props}
			ref={ref}
		>
			<SwitchPrimitives.Thumb
				className="theme-switch__thumb"
				aria-hidden="true"
			/>
		</SwitchPrimitives.Root>
	);
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
