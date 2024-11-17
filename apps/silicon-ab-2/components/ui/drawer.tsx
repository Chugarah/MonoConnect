"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";
import { createContext, useContext } from "react";

const DrawerContext = createContext<{
	direction?: "top" | "bottom" | "left" | "right";
}>({});

/**
 * Root Drawer component that provides the main drawer functionality
 *
 * @param {boolean} shouldScaleBackground - Whether the background should scale when drawer opens
 * @param {React.ComponentProps<typeof DrawerPrimitive.Root>} props - Additional props passed to the root drawer
 * @returns {JSX.Element} Root drawer component
 */
const Drawer = ({
	shouldScaleBackground = true,
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
	<DrawerContext.Provider value={{ direction: props.direction }}>
		<DrawerPrimitive.Root
			shouldScaleBackground={shouldScaleBackground}
			{...props}
		/>
	</DrawerContext.Provider>
);
Drawer.displayName = "Drawer";

/** Trigger component that controls opening/closing the drawer */
const DrawerTrigger = DrawerPrimitive.Trigger;

/** Portal component that renders drawer content outside the DOM hierarchy */
const DrawerPortal = DrawerPrimitive.Portal;

/** Close component that provides a way to close the drawer */
const DrawerClose = DrawerPrimitive.Close;

/**
 * Overlay component that dims the background when drawer is open
 *
 * @param {string} className - Additional CSS classes
 * @param {React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>} props - Props for overlay
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} Drawer overlay component
 */
const DrawerOverlay = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Overlay
		ref={ref}
		className={cn("fixed inset-0 z-50 bg-black/80", className)}
		{...props}
	/>
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

/**
 * Content component that contains the main drawer content
 *
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Child elements to render inside drawer
 * @param {React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>} props - Additional props
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} Drawer content component
 */
const DrawerContent = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => {
	const { direction } = useContext(DrawerContext);

	return (
		<DrawerPortal>
			<DrawerOverlay className="drawer-overlay" />
			<DrawerPrimitive.Content
				ref={ref}
				className={cn(
					"fixed z-50 flex h-auto flex-col rounded-t-[10px] border bg-background drawer-content",
					(!direction || direction === "bottom") && "inset-x-0 bottom-0 mt-24",
					direction === "right" && "top-0 right-0",

					className,
				)}
				{...props}
			>
				{(!direction || direction === "bottom") && (
					<div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
				)}
				{children}
			</DrawerPrimitive.Content>
		</DrawerPortal>
	);
});
DrawerContent.displayName = "DrawerContent";

/**
 * Header component for the drawer
 *
 * @param {string} className - Additional CSS classes
 * @param {React.HTMLAttributes<HTMLDivElement>} props - HTML div element props
 * @returns {JSX.Element} Drawer header component
 */
const DrawerHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
		{...props}
	/>
);
DrawerHeader.displayName = "DrawerHeader";

/**
 * Footer component for the drawer
 *
 * @param {string} className - Additional CSS classes
 * @param {React.HTMLAttributes<HTMLDivElement>} props - HTML div element props
 * @returns {JSX.Element} Drawer footer component
 */
const DrawerFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn("mt-auto flex flex-col gap-2 p-4", className)}
		{...props}
	/>
);
DrawerFooter.displayName = "DrawerFooter";

/**
 * Title component for the drawer
 *
 * @param {string} className - Additional CSS classes
 * @param {React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>} props - Title props
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} Drawer title component
 */
const DrawerTitle = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Title
		ref={ref}
		className={cn(
			"text-lg font-semibold leading-none tracking-tight",
			className,
		)}
		{...props}
	/>
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

/**
 * Description component for the drawer
 *
 * @param {string} className - Additional CSS classes
 * @param {React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>} props - Description props
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} Drawer description component
 */
const DrawerDescription = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Description
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
	Drawer,
	DrawerPortal,
	DrawerOverlay,
	DrawerTrigger,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerTitle,
	DrawerDescription,
};
