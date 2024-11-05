"use client";

import { ThemeContext } from "@/app/contexts/theme/ThemeContext";
import type { Theme } from "@/types/theme/themeTypes";
import { useState, useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>("light");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme") as Theme;
		if (storedTheme) {
			setTheme(storedTheme);
		}
		setMounted(true);
	}, []);

	useEffect(() => {
		if (mounted) {
			localStorage.setItem("theme", theme);
			document.documentElement.classList.remove("light", "dark");
			document.documentElement.classList.add(theme);
		}
	}, [theme, mounted]);

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
