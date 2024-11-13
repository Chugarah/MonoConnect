"use client";
import { useTheme } from "@/app/contexts/theme/hooks/useTheme";

/**
 * Custom hook for handling theme toggling functionality
 *
 * @description This hook provides methods and state for managing theme switching
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
 *   const { theme, themeChange, isDark } = useThemeToggle();
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
function useThemeToggle() {
	/**
	 * Destructure theme state and toggle function from useTheme hook
	 * @type {{theme: string, toggleTheme: Function}}
	 */
	const { theme, toggleTheme } = useTheme();

	/**
	 * Handles the theme change operation
	 *
	 * @description This function:
	 * 1. Removes both 'light' and 'dark' classes from document root
	 * 2. Determines the new theme based on current theme
	 * 3. Adds the new theme class to document root
	 * 4. Calls toggleTheme to update theme context
	 *
	 * @function
	 * @returns {void}
	 */
	const themeChange = () => {
		document.documentElement.classList.remove("light", "dark");
		const newTheme = theme === "light" ? "dark" : "light";
		document.documentElement.classList.add(newTheme);
		toggleTheme();
	};

	/**
	 * Return theme utilities object
	 * @type {{theme: string, themeChange: Function, isDark: boolean}}
	 */
	return {
		theme,
		themeChange,
		isDark: theme === "dark",
	};
}

export default useThemeToggle;
