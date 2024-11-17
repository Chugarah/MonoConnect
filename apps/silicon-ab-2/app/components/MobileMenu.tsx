import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
	Drawer,
	DrawerTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerClose,
	DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Menu from "@/app/components/header/Menu";
import ThemeImagesFiles from "@/app/components/common/ThemeImagesFiles";
import ThemeImages from "@/app/components/header/ThemeImages";

/**
 * Got inspired and solve by learning and following this video https://www.youtube.com/watch?v=9d_3IMl3jvQ&t=42s
 * MobileMenu component that provides a responsive drawer-based navigation menu for mobile devices.
 *
 * This component renders a hamburger menu icon that, when clicked, opens a drawer containing
 * the site logo, main navigation menu, and a close button. The drawer slides in from the right side.
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage in header
 * <Header>
 *   <MobileMenu />
 * </Header>
 * ```
 *
 * @remarks
 * - Uses the Vaul drawer component for the sliding panel
 * - Implements responsive design with custom styling
 * - Includes theme-aware logo and navigation
 * - Handles its own open/close state
 *
 * @see {@link Menu} For the main navigation menu component used inside the drawer
 * @see {@link ThemeImages} For the theme-aware logo component
 *
 * @returns {JSX.Element} A mobile menu component with drawer functionality
 */
function MobileMenu() {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="mobile-container">
			<Drawer open={open} onOpenChange={setOpen} direction="right">
				<DrawerTrigger asChild>
					<div className="mobile-menu" title="Menu Link">
						<FontAwesomeIcon icon={faBars} title="Menu Icon" />
					</div>
				</DrawerTrigger>
				<DrawerContent className="mobile-drawer">
					<DrawerHeader className="mobile-container__header">
						<DrawerTitle className="mobile-container__title text-center">
							<ThemeImages
								lightSrc={ThemeImagesFiles.logo.light}
								darkSrc={ThemeImagesFiles.logo.dark}
								alt="Logo"
								width={140}
								height={52}
								className="header__logo"
							/>
						</DrawerTitle>
						<Menu onNavigate={() => setOpen(false)} />
					</DrawerHeader>
					<DrawerFooter className="mobile-container__footer">
						<DrawerClose asChild className="w-full">
							<Button
								variant="button-primary"
								className="mobile-container__close-button"
							>
								Close Menu
							</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
}

export default MobileMenu;
