"use client";
import { useTheme } from "@/app/contexts/theme/hooks/useTheme";

/**
 * Service for handling theme toggling functionality
 *
 * @description This service provides methods and state for managing theme switching
 * between light and dark modes. It uses the useTheme hook to access the current theme
 * state and toggle functionality.
 *
 * Features:
 * - Manages theme switching between light and dark modes
 * - Updates DOM classes to reflect current theme
 * - Provides current theme state and helper methods
 *
 * @example
 * ```tsx
 * const ThemeToggle = () => {
 *   const { theme, themeChange, isDark } = themeToggleService();
 *
 *   return (
 *     <button onClick={themeChange}>
 *       Current theme: {theme}
 *     </button>
 *   );
 * }
 * ```
 *
 * @returns {Object} An object containing theme utilities
 * @property {string} theme - Current theme value ('light' or 'dark')
 * @property {Function} themeChange - Function to toggle between themes
 * @property {boolean} isDark - Boolean indicating if current theme is dark
 */
function themeToggleService() {
	const { theme, toggleTheme } = useTheme();

	/**
	 * Handles the theme change operation
	 *
	 * @description Removes existing theme classes, determines the new theme,
	 * adds the appropriate class to the document root, and triggers the theme toggle
	 */
	const themeChange = () => {
		document.documentElement.classList.remove("light", "dark");
		const newTheme = theme === "light" ? "dark" : "light";
		document.documentElement.classList.add(newTheme);
		toggleTheme();
	};

	return {
		theme,
		themeChange,
		isDark: theme === "dark",
	};
}

export default themeToggleService;
