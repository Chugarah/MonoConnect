"use client";

import { ThemeContext } from "@/app/contexts/theme/ThemeContext";
import type { Theme } from "@/types/theme/themeTypes";
import { useState, useEffect } from "react";

/**
 * Theme Provider component that manages theme state and persistence
 *
 * @description This component provides theme context to the application, handling theme switching
 * between light and dark modes. It persists the theme choice in localStorage and applies
 * the appropriate classes to the document root element. The component also handles
 * hydration by ensuring the theme is only applied after mounting.
 *
 * @example
 * ```tsx
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <MyComponent />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped by the provider
 *
 * @returns {React.ReactElement | null} Returns the provider wrapping children, or null if not mounted
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>("light");
	const [mounted, setMounted] = useState(false);

	/**
	 * Effect to initialize theme from localStorage on mount
	 * Runs once when component mounts to restore saved theme preference
	 */
	useEffect(() => {
		const storedTheme = localStorage.getItem("theme") as Theme;
		if (storedTheme) {
			setTheme(storedTheme);
		}
		setMounted(true);
	}, []);

	/**
	 * Effect to persist theme changes and update DOM
	 * Runs whenever theme changes, but only after initial mount
	 */
	useEffect(() => {
		if (mounted) {
			localStorage.setItem("theme", theme);
			document.documentElement.classList.remove("light", "dark");
			document.documentElement.classList.add(theme);
		}
	}, [theme, mounted]);

	/**
	 * Toggles between light and dark themes
	 * @function
	 */
	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	if (!mounted) {
		return null;
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
