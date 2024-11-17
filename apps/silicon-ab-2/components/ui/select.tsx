"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/utils";
import { IconFA } from "@/app/components/common/IconFA";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
		error?: boolean;
	}
>(({ className, children, error, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={cn(
			`
      flex h-10 w-full items-center justify-between
      rounded-md border border-input bg-background px-3 py-2
      text-base ring-offset-background placeholder:text-muted-foreground
      focus:outline-none focus:ring-2 focus:ring-ring
      focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50

      /* Custom styles to match your form inputs */
      flex-grow border-grey-300 dark:border-theme-dark-cards-border
      rounded-l-lg rounded-r-none text-grey-500
      bg-theme-light-form-input-color dark:bg-theme-dark-form-input-color
      pl-[15%] font-Regular

      /* Focus states */
      focus:border-theme-light-primary dark:focus:border-theme-dark-primary
      focus:border-2 focus-visible:ring-0 focus:outline-none focus-visible:ring-offset-0

      /* Error state */
      ${
				error
					? `
          border-system-error
          dark:border-system-error
          focus:border-system-error
          dark:focus:border-system-error
          ring-system-error
          dark:ring-system-error
          focus-visible:ring-system-error
          dark:focus-visible:ring-system-error
          focus-visible:border-system-error
          dark:focus-visible:border-system-error
          focus:ring-system-error
          dark:focus:ring-system-error
          focus:ring-2
      `
					: ""
			}
      `,
			className,
		)}
		{...props}
	>
		{children}
		<IconFA icon={faChevronDown} classNames="h-4 w-4 opacity-50" />
	</SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			className={cn(
				`
        relative z-50 min-w-[8rem] overflow-hidden rounded-md
        border bg-popover text-popover-foreground shadow-md
        data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
        data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
        data-[side=bottom]:slide-in-from-top-2
        data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2

        /* Custom styles */
        bg-theme-light-cards dark:bg-theme-dark-cards
        border-grey-300 dark:border-theme-dark-cards-border
        `,
				position === "popper" &&
					"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
				className,
			)}
			position={position}
			{...props}
		>
			<SelectPrimitive.Viewport
				className={cn(
					"p-1",
					position === "popper" &&
						"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
				)}
			>
				{children}
			</SelectPrimitive.Viewport>
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={cn(
			`
      relative flex w-full cursor-default select-none items-center
      py-1.5 pl-8 pr-2 text-sm outline-none
      focus:bg-accent focus:text-accent-foreground
      data-[disabled]:pointer-events-none data-[disabled]:opacity-50

      /* Custom hover/focus states */
      text-grey-500
      bg-white dark:bg-grey-900
      border-grey-300 dark:border-theme-dark-cards-border
      hover:bg-theme-light-primary/10 dark:hover:bg-theme-dark-primary/10
      focus:bg-theme-light-primary/10 dark:focus:bg-theme-dark-primary/10

      /* Rounded corners for first and last items */
      data-[radix-select-item]:first:rounded-t-md
      data-[radix-select-item]:last:rounded-b-md



      `,
			className,
		)}
		{...props}
	>
		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectItem,
};
