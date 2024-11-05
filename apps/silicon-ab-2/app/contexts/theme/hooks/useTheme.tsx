import { ThemeContext } from "@/app/contexts/theme/ThemeContext";
import { useContext } from "react";

/**
 * Custom hook to access the theme context and its functionality
 *
 * @description This hook provides access to the theme context which contains the current theme state
 * and a function to toggle between light and dark themes. It must be used within a ThemeProvider component.
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { theme, toggleTheme } = useTheme();
 *   return (
 *     <button onClick={toggleTheme}>
 *       Current theme: {theme}
 *     </button>
 *   );
 * }
 * ```
 *
 * @returns {import("@/types/theme/themeTypes").ThemeContextType} An object containing:
 *  - theme: The current theme value ("light" | "dark")
 *  - toggleTheme: Function to switch between light and dark themes
 *
 * @throws {Error} Throws an error if the hook is used outside of a ThemeProvider component
 *
 * @see {@link ThemeContext} For the context implementation
 * @see {@link ThemeContextType} For the type definition of the returned context
 */
export function useTheme() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be within ThemeProvider");
	}

	return context;
}
