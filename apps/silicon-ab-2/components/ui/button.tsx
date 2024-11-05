/**
 * Button Component and Utilities
 *
 * @description A flexible button component built with Radix UI Slot and class-variance-authority.
 * Provides multiple variants and sizes with consistent styling and accessibility features.
 *
 * Features:
 * - Multiple style variants (default, destructive, outline, etc.)
 * - Configurable sizes
 * - Support for asChild pattern using Radix UI Slot
 * - Built-in accessibility features
 * - Responsive hover and focus states
 * - Support for icons and text content
 *
 * @example
 * ```tsx
 * // Default button
 * <Button>Click me</Button>
 *
 * // Destructive variant with large size
 * <Button variant="destructive" size="lg">Delete</Button>
 *
 * // As child pattern
 * <Button asChild>
 *   <Link href="/somewhere">Navigate</Link>
 * </Button>
 * ```
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Button variant styles defined using class-variance-authority
 *
 * @description Defines the visual styles and variants available for the Button component.
 * Uses Tailwind CSS classes for styling with support for different variants and sizes.
 */
const buttonVariants = cva(
	"inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				"button-primary": `
					transition-all duration-500 ease-out
					ml-[1.875em]
					bg-theme-light-primary
					text-theme-light-primary-foreground
					rounded-lg
					will-change-[color,background-color]
					hover:bg-theme-light-primary/90

				`,
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
				"button-primary": "px-[1.125rem] py-[0.5625rem]",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

/**
 * Button component props interface
 *
 * @interface ButtonProps
 * @extends {React.ButtonHTMLAttributes<HTMLButtonElement>}
 * @extends {VariantProps<typeof buttonVariants>}
 *
 * @property {boolean} [asChild] - When true, renders children through Radix UI Slot
 */
export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

/**
 * Button component
 *
 * @description A polymorphic button component that can be rendered as a button or any other element
 * through the asChild prop. Supports various style variants and sizes.
 *
 * @param {ButtonProps} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.variant] - Style variant
 * @param {string} [props.size] - Size variant
 * @param {boolean} [props.asChild=false] - Whether to render as a Slot
 * @param {React.Ref<HTMLButtonElement>} ref - Forwarded ref
 *
 * @returns {React.ReactElement} The rendered button component
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
